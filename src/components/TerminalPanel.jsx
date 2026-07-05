import React, { useEffect, useRef, useState } from "react";
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";

export default function TerminalPanel({ socket, running, executionStatus, executionTime, onClearStatus }) {
  const terminalRef = useRef(null);
  const xtermRef = useRef(null);
  const fitAddonRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!terminalRef.current) return;

    // Initialize Xterm.js with sleek dark aesthetic and vibrant ANSI palette
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
      fontSize: 13,
      lineHeight: 1.5,
      scrollback: 5000,
      convertEol: true
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    
    // Fit terminal to parent container
    setTimeout(() => {
      try {
        fitAddon.fit();
        setIsReady(true);
      } catch (e) {}
    }, 100);

    xtermRef.current = term;
    fitAddonRef.current = fitAddon;

    // Welcome Header
    term.writeln("\x1b[1;36m=================================================================\x1b[0m");
    term.writeln("\x1b[1;32m ⚡ CloudIDE Interactive Sandbox Terminal (Xterm.js + node-pty)\x1b[0m");
    term.writeln("\x1b[38;5;245m    Line-by-line TTY execution enabled. Type directly when prompted!\x1b[0m");
    term.writeln("\x1b[1;36m=================================================================\x1b[0m\r\n");

    // Forward keystrokes from Xterm.js to Socket.io backend
    const dataListener = term.onData((data) => {
      if (socket && socket.connected) {
        socket.emit("terminal_input", data);
      }
    });

    // Handle window resizing
    const handleResize = () => {
      try {
        fitAddon.fit();
        if (socket && socket.connected && term.cols && term.rows) {
          socket.emit("resize_terminal", { cols: term.cols, rows: term.rows });
        }
      } catch (e) {}
    };

    window.addEventListener("resize", handleResize);

    return () => {
      dataListener.dispose();
      window.removeEventListener("resize", handleResize);
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

  return (
    <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      background: "var(--bg-dark)",
      overflow: "hidden",
      minHeight: "300px"
    }}>
      {/* Terminal Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "var(--bg-surface)",
        borderBottom: "1px solid var(--border)",
        padding: "0 16px",
        height: "44px",
        flexShrink: 0
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "14px" }}>🖥️</span>
          <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-main)", fontFamily: "var(--font-mono)" }}>
            Interactive Terminal (TTY)
          </span>
          <span style={{
            background: badge.bg,
            color: badge.color,
            padding: "2px 10px",
            borderRadius: "12px",
            fontSize: "11px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}>
            {badge.text}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          {executionTime != null && (
            <span style={{ fontSize: "12px", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", fontWeight: 600 }}>
              ⏱️ {executionTime}s
            </span>
          )}
          <button
            onClick={handleClearTerminal}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-muted)",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "underline"
            }}
          >
            Clear Screen
          </button>
        </div>
      </div>

      {/* Xterm.js Container */}
      <div
        ref={terminalRef}
        style={{
          flex: 1,
          padding: "12px",
          overflow: "hidden",
          background: "#080c14"
        }}
      />
    </div>
  );
}
