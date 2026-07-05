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
import { STARTER_CODE } from "./constants/languages";

export default function App() {
  const [currentView, setCurrentView] = useState("landing"); // 'landing' | 'templates' | 'pricing' | 'about' | 'docs' | 'ide'
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  
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
      setShowSplash(true);
      const timer = setTimeout(() => setShowSplash(false), 2200);
      return () => clearTimeout(timer);
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

  // Render Tilde Workspace (with animated splash screen when launched as app/standalone)
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "var(--bg-dark)", overflow: "hidden", position: "relative" }}>
      {/* Animated Startup Splash Screen for Standalone / Downloaded App Mode */}
      {showSplash && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "#030508",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 99999,
          animation: "fadeIn 0.3s ease-in"
        }}>
          <div className="animate-float" style={{
            background: "linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)",
            width: "88px",
            height: "88px",
            borderRadius: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "52px",
            fontWeight: 900,
            color: "#000",
            marginBottom: "28px",
            boxShadow: "0 0 60px rgba(56, 189, 248, 0.6)"
          }}>
            ~
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
            <h1 style={{ fontSize: "40px", fontWeight: 900, color: "#fff", margin: 0, letterSpacing: "-1.5px" }}>
              Tilde
            </h1>
            <span style={{
              fontSize: "14px",
              color: "var(--tilde-cyan)",
              fontWeight: 800,
              verticalAlign: "super",
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(56, 189, 248, 0.15)",
              padding: "4px 10px",
              borderRadius: "14px",
              border: "1px solid rgba(56, 189, 248, 0.35)",
              letterSpacing: "0.5px"
            }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ marginRight: "4px" }}>
                <path d="M5 3V15C5 18.866 8.134 22 12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.134 8 5 11.134 5 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M8 15H16C16 13 14.21 11.5 12 11.5C9.79 11.5 8 13 8 15C8 17 9.79 18.5 12 18.5C13.5 18.5 14.8 17.7 15.5 16.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              by bestdio
            </span>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "14px", marginTop: "16px", fontFamily: "var(--font-mono)" }}>
            ⚡ Initializing Zero-Latency Cloud Workspace...
          </p>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        selectedLang={selectedLang}
        setSelectedLang={handleLanguageChange}
        onRun={handleRunCode}
        onKill={handleKillCode}
        running={running}
        serverStatus={serverStatus}
        backendUrl={backendUrl}
        setBackendUrl={setBackendUrl}
        onCheckStatus={checkServerStatus}
        onBackToHome={() => setCurrentView("landing")}
        isStandalone={isStandalone}
      />

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
