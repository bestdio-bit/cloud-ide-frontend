import React from "react";

export default function IdeBottomBar({ selectedLang, running }) {
  return (
    <footer style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "var(--bg-surface)",
      borderTop: "1px solid var(--border)",
      padding: "6px 16px max(8px, env(safe-area-inset-bottom))",
      fontSize: "11px",
      fontFamily: "var(--font-mono)",
      color: "var(--text-muted)",
      flexShrink: 0,
      flexWrap: "wrap",
      gap: "8px",
      zIndex: 50
    }}>
      {/* Left Status */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff", fontWeight: 700 }}>
          <span style={{ color: "var(--bestdio-cyan)" }}>⚡</span>
          <span>PulseIDE</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ color: running ? "var(--accent-yellow)" : "var(--bestdio-emerald)" }}>●</span>
          <span>{running ? "Executing..." : "Ready"}</span>
        </div>
        <div>UTF-8</div>
        <div className="desktop-only">Ln 1, Col 1</div>
        <div className="desktop-only" style={{ textTransform: "uppercase" }}>{selectedLang}</div>
      </div>

      {/* Right Minimal Marketing & Copyright */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span>
          An app under <strong style={{ color: "#fff" }}>Bestdio Company</strong> (<a href="https://bestdio.in" target="_blank" rel="noreferrer" style={{ color: "var(--bestdio-cyan)", textDecoration: "none" }}>bestdio.in</a>)
        </span>
        <span className="desktop-only" style={{ opacity: 0.6 }}>|</span>
        <span className="desktop-only">© 2026 All rights reserved</span>
      </div>
    </footer>
  );
}
