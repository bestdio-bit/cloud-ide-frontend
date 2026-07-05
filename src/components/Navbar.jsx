import React, { useState } from "react";
import { LANGUAGES } from "../constants/languages";

export default function Navbar({
  selectedLang,
  setSelectedLang,
  onRun,
  onKill,
  running,
  serverStatus,
  backendUrl,
  setBackendUrl,
  onCheckStatus
}) {
  const [showConfig, setShowConfig] = useState(false);
  const [tempUrl, setTempUrl] = useState(backendUrl);

  const handleSaveConfig = (e) => {
    e.preventDefault();
    setBackendUrl(tempUrl);
    onCheckStatus(tempUrl);
    setShowConfig(false);
  };

  const getStatusBadge = () => {
    switch (serverStatus) {
      case "online":
        return { text: "● Server Online", color: "var(--accent-green)", bg: "rgba(52, 211, 153, 0.15)" };
      case "checking":
        return { text: "⟳ Checking...", color: "var(--accent-yellow)", bg: "rgba(251, 191, 36, 0.15)" };
      default:
        return { text: "▲ Server Offline", color: "var(--accent-red)", bg: "rgba(248, 113, 113, 0.15)" };
    }
  };

  const badge = getStatusBadge();

  return (
    <header className="glass-header" style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 24px",
      position: "sticky",
      top: 0,
      zIndex: 100,
      flexWrap: "wrap",
      gap: "12px"
    }}>
      {/* Brand & Title */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{
          background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))",
          width: "36px",
          height: "36px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          fontWeight: 800,
          color: "#000",
          boxShadow: "0 2px 10px rgba(56, 189, 248, 0.3)"
        }}>
          ⚡
        </div>
        <div>
          <h1 style={{ fontSize: "18px", fontWeight: 800, letterSpacing: "-0.3px", background: "linear-gradient(90deg, #fff, var(--text-muted))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            CloudIDE
          </h1>
          <span style={{ fontSize: "11px", color: "var(--accent-cyan)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
            Multi-Language Sandbox
          </span>
        </div>
      </div>

      {/* Center Controls: Language Selector & Action Buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "var(--bg-surface)", padding: "4px 12px", borderRadius: "10px", border: "1px solid var(--border)" }}>
          <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 600 }}>Language:</span>
          <select
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
            disabled={running}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-main)",
              fontWeight: 700,
              fontSize: "13px",
              padding: "6px 4px",
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

        <button
          onClick={onRun}
          disabled={running}
          className="btn btn-primary"
          style={{ padding: "8px 20px" }}
          title="Compile and run in cloud terminal"
        >
          <span className={running ? "animate-spin" : ""} style={{ fontSize: "14px" }}>
            {running ? "⟳" : "▶"}
          </span>
          {running ? "Executing..." : "Run Code"}
        </button>

        <button
          onClick={onKill}
          className="btn btn-danger"
          style={{ padding: "8px 14px" }}
          title="Terminate active terminal process"
        >
          ■ Clear / Kill
        </button>
      </div>

      {/* Right Controls: Server Status & Config Modal Trigger */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button
          onClick={() => { setTempUrl(backendUrl); setShowConfig(true); }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: badge.bg,
            color: badge.color,
            border: `1px solid ${badge.color}`,
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.2s"
          }}
          title="Click to configure Cloud Backend URL"
        >
          <span>{badge.text}</span>
          <span style={{ opacity: 0.8, fontSize: "10px" }}>⚙️</span>
        </button>
      </div>

      {/* Server Configuration Modal */}
      {showConfig && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.75)",
          backdropFilter: "blur(4px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "20px"
        }} className="animate-fade-in">
          <div style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "24px",
            width: "100%",
            maxWidth: "460px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)"
          }}>
            <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px", color: "var(--text-main)" }}>
              ⚙️ Backend Server Configuration
            </h3>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "20px", lineHeight: "1.5" }}>
              Configure the Socket.io WebSocket server URL. When hosting on Vercel/Netlify, connect to your free Render or Koyeb Docker instance.
            </p>

            <form onSubmit={handleSaveConfig} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "var(--text-muted)", marginBottom: "6px" }}>
                  Backend WebSocket URL:
                </label>
                <input
                  type="text"
                  value={tempUrl}
                  onChange={(e) => setTempUrl(e.target.value)}
                  placeholder="http://localhost:5000"
                  style={{
                    width: "100%",
                    background: "var(--bg-dark)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    color: "var(--text-main)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    outline: "none"
                  }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "8px" }}>
                <button
                  type="button"
                  onClick={() => setShowConfig(false)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Save & Connect
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
