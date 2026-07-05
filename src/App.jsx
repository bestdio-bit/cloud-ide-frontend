import React, { useState, useEffect, useRef, useCallback } from "react";
import { io } from "socket.io-client";
import Navbar from "./components/Navbar";
import EditorPanel from "./components/EditorPanel";
import TerminalPanel from "./components/TerminalPanel";
import IdeBottomBar from "./components/IdeBottomBar";
import MarketingNavbar from "./components/MarketingNavbar";
import MarketingFooter from "./components/MarketingFooter";
import DownloadModal from "./components/DownloadModal";
import LandingPage from "./pages/LandingPage";
import TemplatesPage from "./pages/TemplatesPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import DocsPage from "./pages/DocsPage";
import { LANGUAGES, STARTER_CODE } from "./constants/languages";

export default function App() {
  const [currentView, setCurrentView] = useState("landing"); // 'landing' | 'templates' | 'pricing' | 'about' | 'docs' | 'ide'
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  
  const [selectedLang, setSelectedLang] = useState("python");
  const [code, setCode] = useState(STARTER_CODE.python);
  const [running, setRunning] = useState(false);
  const [executionStatus, setExecutionStatus] = useState("ready"); // 'ready' | 'running' | 'success' | 'error' | 'timeout' | 'killed'
  const [executionTime, setExecutionTime] = useState(null);
  const [serverStatus, setServerStatus] = useState("checking"); // 'checking' | 'online' | 'offline'
  
  // Default to local backend or Vite environment variable
  const defaultBackend = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  const [backendUrl, setBackendUrl] = useState(defaultBackend);
  const [socket, setSocket] = useState(null);
  
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 850);
  const [mobileTab, setMobileTab] = useState("editor"); // 'editor' | 'terminal' for mobile screens
  const startTimeRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 850);
    window.addEventListener("resize", handleResize);
    
    // Check if launched as installed standalone PWA app or via URL parameter
    const checkStandalone = window.matchMedia("(display-mode: standalone)").matches || 
                         window.navigator.standalone || 
                         window.location.search.includes("mode=ide") ||
                         window.location.search.includes("view=ide");
    if (checkStandalone) {
      setIsStandalone(true);
      setCurrentView("ide");
      return;
    }

    // Capture PWA install prompt event for "Install App" button
    const handleInstallPrompt = (e) => {
      e.preventDefault();
      window.deferredPrompt = e;
    };
    window.addEventListener("beforeinstallprompt", handleInstallPrompt);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("beforeinstallprompt", handleInstallPrompt);
    };
  }, []);

  // When language changes, update starter code
  const handleLanguageChange = (newLang) => {
    setSelectedLang(newLang);
    setCode(STARTER_CODE[newLang] || "");
    setExecutionStatus("ready");
    setExecutionTime(null);
    setMobileTab("editor");
  };

  // Connect and manage Socket.io lifecycle
  const connectSocket = useCallback((url) => {
    setServerStatus("checking");
    if (socket) {
      socket.disconnect();
    }

    const newSocket = io(url, {
      reconnectionAttempts: 5,
      timeout: 10000,
      transports: ["websocket", "polling"]
    });

    newSocket.on("connect", () => {
      console.log("Connected to Tilde Backend:", newSocket.id);
      setServerStatus("online");
    });

    newSocket.on("connect_error", (err) => {
      console.warn("Backend connection error:", err.message);
      setServerStatus("offline");
    });

    newSocket.on("disconnect", () => {
      setServerStatus("offline");
      setRunning(false);
    });

    newSocket.on("terminal_exit", ({ exitCode, status }) => {
      setRunning(false);
      setExecutionStatus(status || (exitCode === 0 ? "success" : "error"));
      if (startTimeRef.current) {
        const elapsed = ((performance.now() - startTimeRef.current) / 1000).toFixed(2);
        setExecutionTime(elapsed);
      }
    });

    setSocket(newSocket);
  }, [socket]);

  useEffect(() => {
    connectSocket(backendUrl);
    return () => {
      if (socket) socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backendUrl]);

  // Check health manually
  const checkServerStatus = (url) => {
    connectSocket(url || backendUrl);
  };

  const handleRunCode = () => {
    if (running || !socket || !socket.connected) {
      if (!socket || !socket.connected) {
        alert("Cannot execute: Cloud Backend is currently offline or unreachable. Please check Server Configuration.");
      }
      return;
    }

    setRunning(true);
    setExecutionStatus("running");
    setExecutionTime(null);
    startTimeRef.current = performance.now();

    // Automatically switch to terminal view on mobile devices
    if (!isDesktop) {
      setMobileTab("terminal");
    }

    // Clear terminal screen and send start event
    socket.emit("clear_terminal_screen");
    socket.emit("start_terminal", {
      language: selectedLang,
      code: code,
      cols: 80,
      rows: 24
    });
  };

  const handleKillCode = () => {
    if (socket && socket.connected) {
      socket.emit("kill_terminal");
    }
    setRunning(false);
    setExecutionStatus("killed");
  };

  const handleLaunchTemplate = (lang, customCode) => {
    setSelectedLang(lang);
    setCode(customCode);
    setExecutionStatus("ready");
    setExecutionTime(null);
    setCurrentView("ide");
  };

  // Render Marketing Website if not in IDE view
  if (currentView !== "ide") {
    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "var(--bg-dark)" }}>
        <MarketingNavbar
          currentView={currentView}
          setCurrentView={setCurrentView}
          onOpenDownload={() => setIsDownloadOpen(true)}
        />
        <main style={{ flex: 1 }}>
          {(currentView === "landing" || currentView === "features") && (
            <LandingPage setCurrentView={setCurrentView} onOpenDownload={() => setIsDownloadOpen(true)} />
          )}
          {currentView === "templates" && <TemplatesPage onLaunchTemplate={handleLaunchTemplate} />}
          {currentView === "pricing" && <PricingPage setCurrentView={setCurrentView} />}
          {currentView === "about" && <AboutPage setCurrentView={setCurrentView} />}
          {currentView === "docs" && <DocsPage setCurrentView={setCurrentView} />}
        </main>
        <MarketingFooter setCurrentView={setCurrentView} />

        <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
      </div>
    );
  }

  // Render Tilde Workspace (instant open without splash animation)
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "var(--bg-dark)", overflow: "hidden", position: "relative" }}>
      {/* Top Navbar */}
      <Navbar
        serverStatus={serverStatus}
        backendUrl={backendUrl}
        setBackendUrl={setBackendUrl}
        onCheckStatus={checkServerStatus}
        onBackToHome={() => setCurrentView("landing")}
        isStandalone={isStandalone}
      />

      {/* Dedicated Verto-Inspired IDE Toolbar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 18px",
        background: "var(--bg-surface)",
        borderBottom: "1px solid var(--border)",
        flexShrink: 0,
        flexWrap: "wrap",
        gap: "10px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-muted)" }}>Language:</span>
          <select
            value={selectedLang}
            onChange={(e) => handleLanguageChange(e.target.value)}
            disabled={running}
            style={{
              background: "var(--bg-raised)",
              border: "1px solid var(--border)",
              color: "var(--text-main)",
              padding: "6px 12px",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "13px",
              cursor: running ? "not-allowed" : "pointer",
              outline: "none"
            }}
          >
            {LANGUAGES.map((l) => (
              <option key={l.id} value={l.id} style={{ background: "var(--bg-surface)", color: "var(--text-main)" }}>
                {l.icon} {l.label}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={() => {
              navigator.clipboard.writeText(code);
              alert("Code copied to clipboard!");
            }}
            className="btn btn-secondary"
            style={{ padding: "6px 12px", fontSize: "12px", fontWeight: 700 }}
            title="Copy current editor code"
          >
            📋 Copy Code
          </button>
          <button
            onClick={() => setCode("")}
            className="btn btn-secondary"
            style={{ padding: "6px 12px", fontSize: "12px", fontWeight: 700 }}
            title="Clear editor code"
          >
            🗑️ Clear
          </button>
          {running && (
            <button
              onClick={handleKillCode}
              className="btn btn-danger"
              style={{ padding: "6px 12px", fontSize: "12px", fontWeight: 700 }}
              title="Terminate active process"
            >
              ■ Kill
            </button>
          )}
          <button
            onClick={handleRunCode}
            disabled={running}
            className="btn btn-primary"
            style={{
              padding: "6px 18px",
              fontSize: "13px",
              fontWeight: 800,
              opacity: running ? 0.7 : 1,
              cursor: running ? "not-allowed" : "pointer"
            }}
            title="Compile and run in cloud terminal"
          >
            <span className={running ? "animate-spin" : ""} style={{ fontSize: "14px", marginRight: "6px" }}>
              {running ? "⟳" : "▶"}
            </span>
            {running ? "Executing..." : "Run Code"}
          </button>
        </div>
      </div>

      {/* Mobile Tab Switcher */}
      {!isDesktop && (
        <div style={{
          display: "flex",
          background: "var(--bg-surface)",
          borderBottom: "1px solid var(--border)",
          height: "44px",
          flexShrink: 0
        }}>
          <button
            onClick={() => setMobileTab("editor")}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              background: "transparent",
              border: "none",
              borderBottom: mobileTab === "editor" ? "2px solid var(--tilde-cyan)" : "2px solid transparent",
              color: mobileTab === "editor" ? "var(--text-main)" : "var(--text-muted)",
              fontWeight: 700,
              fontSize: "13px",
              cursor: "pointer",
              transition: "all 0.15s"
            }}
          >
            💻 Code Editor
          </button>
          <button
            onClick={() => setMobileTab("terminal")}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              background: "transparent",
              border: "none",
              borderBottom: mobileTab === "terminal" ? "2px solid var(--tilde-indigo)" : "2px solid transparent",
              color: mobileTab === "terminal" ? "var(--text-main)" : "var(--text-muted)",
              fontWeight: 700,
              fontSize: "13px",
              cursor: "pointer",
              transition: "all 0.15s"
            }}
          >
            🖥️ Interactive Terminal {running && <span className="animate-spin" style={{ color: "var(--tilde-cyan)" }}>⟳</span>}
          </button>
        </div>
      )}

      {/* Main Workspace (Split on Desktop, Tabs on Mobile) */}
      <main style={{ flex: 1, display: "flex", flexDirection: isDesktop ? "row" : "column", overflow: "hidden", minHeight: 0 }}>
        {(isDesktop || mobileTab === "editor") && (
          <div style={{ flex: isDesktop ? "1.3" : "1", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <EditorPanel
              selectedLang={selectedLang}
              code={code}
              setCode={setCode}
            />
          </div>
        )}

        {(isDesktop || mobileTab === "terminal") && (
          <div style={{ flex: "1", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <TerminalPanel
              socket={socket}
              running={running}
              executionStatus={executionStatus}
              executionTime={executionTime}
              onClearStatus={() => setExecutionStatus("ready")}
            />
          </div>
        )}
      </main>

      {/* Protective Bottom Status Bar (Prevents screen merging & clipping) */}
      <IdeBottomBar selectedLang={selectedLang} running={running} />

      <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
    </div>
  );
}
