import React from "react";

export default function IdeBottomBar({ selectedLang, running }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "6px 16px",
      paddingBottom: "max(8px, env(safe-area-inset-bottom))",
      background: "#030508",
      borderTop: "1px solid var(--border)",
      fontSize: "12px",
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)",
      zIndex: 500,
      flexShrink: 0
    }}>
      {/* Left Status */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{
            display: "inline-block",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: running ? "#fbbf24" : "#34d399",
            boxShadow: running ? "0 0 10px #fbbf24" : "0 0 10px #34d399"
          }} />
          <span style={{ color: running ? "#fbbf24" : "#34d399", fontWeight: 700 }}>
            {running ? "Executing Process..." : "Ready"}
          </span>
        </div>
        <span className="desktop-only" style={{ color: "var(--text-faint)" }}>|</span>
        <span className="desktop-only" style={{ color: "var(--text-main)" }}>
          Env: <strong style={{ color: "#38bdf8" }}>Linux Docker Container</strong>
        </span>
      </div>

      {/* Right Specs */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <span style={{ color: "var(--text-main)", textTransform: "uppercase" }}>
          Lang: <strong style={{ color: "#818cf8" }}>{selectedLang}</strong>
        </span>
        <span className="desktop-only" style={{ color: "var(--text-faint)" }}>|</span>
        <span className="desktop-only">UTF-8</span>
        <span className="desktop-only" style={{ color: "var(--text-faint)" }}>|</span>
        <span className="desktop-only">Ln 1, Col 1</span>
        <span style={{
          background: "rgba(56, 189, 248, 0.15)",
          color: "#38bdf8",
          padding: "2px 8px",
          borderRadius: "4px",
          fontSize: "11px",
          fontWeight: 800,
          border: "1px solid rgba(56, 189, 248, 0.3)"
        }}>
          ~ Tilde
        </span>
      </div>
    </div>
  );
}
