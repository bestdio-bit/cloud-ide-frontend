import React, { useEffect, useRef, useState } from "react";
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";

export default function TerminalPanel({ socket, running, executionStatus, executionTime, onClearStatus }) {
  const terminalRef = useRef(null);
  const xtermRef = useRef(null);
  const fitAddonRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!terminalRef.current) return;

    // Initialize Xterm.js with sleek dark aesthetic and smaller mobile font size for maximum visibility
    const isMobile = window.innerWidth < 768;
    const term = new Terminal({
      theme: {
        background: "#080c14",
        foreground: "#f8fafc",
        cursor: "#38bdf8",
        cursorAccent: "#080c14",
        selectionBackground: "rgba(56, 189, 248, 0.3)",
        black: "#0f172a",
        red: "#f87171",
        green: "#34d399",
        yellow: "#fbbf24",
        blue: "#38bdf8",
        magenta: "#c084fc",
        cyan: "#22d3ee",
        white: "#f8fafc",
        brightBlack: "#334155",
        brightRed: "#ef4444",
        brightGreen: "#10b981",
        brightYellow: "#f59e0b",
        brightBlue: "#0ea5e9",
        brightMagenta: "#a855f7",
        brightCyan: "#06b6d4",
        brightWhite: "#ffffff"
      },
      cursorBlink: true,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: isMobile ? 11 : 13,
      lineHeight: isMobile ? 1.35 : 1.45,
      scrollback: 5000,
      convertEol: true
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    
    // Fit terminal to parent container immediately and after layout stabilization
    const fitTerminal = () => {
      try {
        fitAddon.fit();
        if (socket && socket.connected && term.cols && term.rows) {
          socket.emit("resize_terminal", { cols: term.cols, rows: term.rows });
        }
      } catch (e) {}
    };

    setTimeout(() => {
      fitTerminal();
      setIsReady(true);
    }, 100);

    xtermRef.current = term;
    fitAddonRef.current = fitAddon;

    // Welcome Header
    term.writeln("\x1b[1;36m=================================================================\x1b[0m");
    term.writeln("\x1b[1;32m ⚡ Tilde Interactive Cloud Sandbox (Xterm.js + node-pty TTY)\x1b[0m");
    term.writeln("\x1b[38;5;245m    Type directly below or use the quick-access helper toolbar!\x1b[0m");
    term.writeln("\x1b[1;36m=================================================================\x1b[0m\r\n");

    // Forward keystrokes from Xterm.js to Socket.io backend
    const dataListener = term.onData((data) => {
      if (socket && socket.connected) {
        socket.emit("terminal_input", data);
      }
    });

    // Handle window resizing and mobile keyboard viewport changes
    window.addEventListener("resize", fitTerminal);

    // ResizeObserver to automatically resize xterm when container height changes
    let observer;
    if (window.ResizeObserver && terminalRef.current) {
      observer = new ResizeObserver(() => fitTerminal());
      observer.observe(terminalRef.current);
    }

    return () => {
      dataListener.dispose();
      window.removeEventListener("resize", fitTerminal);
      if (observer) observer.disconnect();
      term.dispose();
    };
  }, [socket]);

  // Listen for real-time output and exit events from Backend
  useEffect(() => {
    if (!socket || !xtermRef.current) return;

    const handleOutput = (data) => {
      if (xtermRef.current) {
        xtermRef.current.write(data);
      }
    };

    const handleClear = () => {
      if (xtermRef.current) {
        xtermRef.current.clear();
      }
    };

    socket.on("terminal_output", handleOutput);
    socket.on("clear_terminal_screen", handleClear);

    return () => {
      socket.off("terminal_output", handleOutput);
      socket.off("clear_terminal_screen", handleClear);
    };
  }, [socket]);

  // Expose clear function for UI button
  const handleClearTerminal = () => {
    if (xtermRef.current) {
      xtermRef.current.clear();
      xtermRef.current.writeln("\x1b[38;5;245m--- Terminal cleared ---\x1b[0m\r\n");
      if (onClearStatus) onClearStatus();
    }
  };

  // Copy terminal output buffer to clipboard
  const handleCopyOutput = () => {
    if (!xtermRef.current) return;
    const buffer = xtermRef.current.buffer.active;
    let text = "";
    for (let i = 0; i < buffer.length; i++) {
      const line = buffer.getLine(i);
      if (line) {
        const str = line.translateToString(true);
        if (str.trim()) text += str + "\n";
      }
    }
    navigator.clipboard.writeText(text || "No output").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Send quick helper keys (for mobile keyboard accessibility)
  const sendKey = (seq) => {
    if (socket && socket.connected) {
      socket.emit("terminal_input", seq);
      if (xtermRef.current) xtermRef.current.focus();
    }
  };

  const getStatusBadge = () => {
    if (running) return { text: "⟳ Running...", color: "#000", bg: "var(--accent-cyan)" };
    switch (executionStatus) {
      case "success":
        return { text: "✓ Success", color: "#000", bg: "var(--accent-green)" };
      case "error":
        return { text: "✕ Error", color: "#000", bg: "var(--accent-red)" };
      case "timeout":
        return { text: "⏱️ Timed Out", color: "#000", bg: "var(--accent-yellow)" };
      case "killed":
        return { text: "■ Terminated", color: "#000", bg: "var(--accent-yellow)" };
      default:
        return { text: "● Ready", color: "var(--text-muted)", bg: "rgba(51, 65, 85, 0.5)" };
    }
  };

  const badge = getStatusBadge();

  // Quick helper keys for mobile terminal accessibility
  const quickKeys = [
    { label: "ESC", seq: "\x1b", title: "Escape key" },
    { label: "TAB", seq: "\t", title: "Tab completion" },
    { label: "↑", seq: "\x1b[A", title: "Previous command history" },
    { label: "↓", seq: "\x1b[B", title: "Next command history" },
    { label: "CTRL+C", seq: "\x03", title: "Send Interrupt / SIGINT", danger: true },
    { label: "~", seq: "~", title: "Tilde character" },
    { label: "/", seq: "/", title: "Slash character" },
    { label: "-", seq: "-", title: "Hyphen character" },
    { label: "ENTER", seq: "\r", title: "Return / Enter key", primary: true },
  ];

  return (
    <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      background: "var(--bg-dark)",
      overflow: "hidden",
      minHeight: 0,
      height: "100%",
      position: "relative"
    }}>
      {/* Hidden trigger buttons for mobile IDE Action Bar */}
      <button id="copy-terminal-btn-hidden" onClick={handleCopyOutput} style={{ display: "none" }} />
      <button id="clear-terminal-btn-hidden" onClick={handleClearTerminal} style={{ display: "none" }} />

      {/* Terminal Navbar / Header (Top Row: Status & Actions) */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "var(--bg-surface)",
        borderBottom: "1px solid var(--border)",
        padding: "6px 14px",
        minHeight: "38px",
        flexShrink: 0,
        gap: "8px",
        flexWrap: "nowrap",
        overflowX: "auto",
        whiteSpace: "nowrap"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0, flexShrink: 0 }}>
          <span style={{ fontSize: "14px" }}>🖥️</span>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--text-main)", fontFamily: "var(--font-mono)", whiteSpace: "nowrap" }}>
            {window.innerWidth < 768 ? "TTY Sandbox" : "Interactive Execution Terminal"}
          </span>
          <span style={{
            background: badge.bg,
            color: badge.color,
            padding: "2px 8px",
            borderRadius: "10px",
            fontSize: "10px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            whiteSpace: "nowrap"
          }}>
            {badge.text}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          {executionTime != null && (
            <span style={{ fontSize: "11px", color: "var(--tilde-cyan)", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
              ⏱️ {executionTime}s
            </span>
          )}
          {window.innerWidth >= 768 && (
            <>
              <button
                onClick={handleCopyOutput}
                style={{
                  background: copied ? "rgba(16, 185, 129, 0.2)" : "rgba(255, 255, 255, 0.05)",
                  border: copied ? "1px solid var(--accent-green)" : "1px solid var(--border)",
                  color: copied ? "var(--accent-green)" : "var(--text-main)",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  fontSize: "11px",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}
                title="Copy terminal output to clipboard"
              >
                {copied ? "✓ Copied" : "📋 Copy Log"}
              </button>
              <button
                onClick={handleClearTerminal}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text-muted)",
                  fontSize: "11px",
                  fontWeight: 600,
                  cursor: "pointer",
                  textDecoration: "underline"
                }}
                title="Clear terminal screen"
              >
                🗑️ Clear
              </button>
            </>
          )}
        </div>
      </div>

      {/* Terminal Navbar (Bottom Row: Quick-Access Mobile Helper Toolbar) */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        background: "#050810",
        borderBottom: "1px solid var(--border)",
        padding: "6px 12px",
        overflowX: "auto",
        whiteSpace: "nowrap",
        flexShrink: 0,
        WebkitOverflowScrolling: "touch"
      }}>
        <span style={{ fontSize: "10px", color: "var(--tilde-cyan)", fontWeight: 800, marginRight: "4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          ⚡ KEYS:
        </span>
        {quickKeys.map((key, idx) => (
          <button
            key={idx}
            onClick={() => sendKey(key.seq)}
            style={{
              background: key.danger ? "rgba(248, 113, 113, 0.15)" : key.primary ? "linear-gradient(135deg, rgba(56,189,248,0.25), rgba(129,140,248,0.25))" : "#0e1626",
              border: key.danger ? "1px solid rgba(248, 113, 113, 0.4)" : key.primary ? "1px solid var(--tilde-cyan)" : "1px solid rgba(255, 255, 255, 0.12)",
              color: key.danger ? "#f87171" : key.primary ? "#38bdf8" : "#f8fafc",
              padding: "4px 10px",
              borderRadius: "6px",
              fontSize: "11px",
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              cursor: "pointer",
              flexShrink: 0,
              boxShadow: key.primary ? "0 0 10px rgba(56, 189, 248, 0.2)" : "0 2px 4px rgba(0,0,0,0.3)",
              transition: "all 0.15s"
            }}
            title={key.title}
          >
            {key.label}
          </button>
        ))}
      </div>

      {/* Xterm.js Container */}
      <div
        ref={terminalRef}
        style={{
          flex: 1,
          padding: "6px 10px",
          overflow: "hidden",
          background: "#080c14",
          minHeight: 0,
          position: "relative",
          height: "100%"
        }}
      />
    </div>
  );
}
