import React, { useState } from "react";

export default function Navbar({
  serverStatus,
  backendUrl,
  setBackendUrl,
  onCheckStatus,
  onBackToHome,
  isStandalone
}) {
  const [showConfig, setShowConfig] = useState(false);
  const [tempUrl, setTempUrl] = useState(backendUrl);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      flexDirection: "column",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      borderBottom: "1px solid var(--border)",
      background: "rgba(8, 12, 20, 0.9)",
      backdropFilter: "blur(16px)"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        minHeight: "60px",
        gap: "12px"
      }}>
        {/* Brand & Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: 0 }}>
          {/* Only show Back to Home on Desktop if NOT in standalone/downloaded app mode */}
          {!isStandalone && onBackToHome && (
            <button
              onClick={onBackToHome}
              className="btn btn-secondary desktop-only-flex"
              style={{ padding: "6px 14px", fontSize: "12px", borderRadius: "8px", fontWeight: 700, borderColor: "var(--tilde-cyan)", color: "var(--tilde-cyan)", flexShrink: 0 }}
              title="Return to Tilde Marketing Home"
            >
              ← Tilde Home
            </button>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0 }}>
            <div style={{
              background: "linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)",
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: 900,
              color: "#000",
              boxShadow: "0 0 20px rgba(56, 189, 248, 0.4)",
              flexShrink: 0
            }}>
              ~
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <h1 style={{ fontSize: "20px", fontWeight: 900, letterSpacing: "-0.5px", color: "#fff", margin: 0 }}>
                  Tilde
                </h1>
                {/* In standalone/downloaded mode, display Bestdio brand in superscript exponent place! */}
                {isStandalone && (
                  <span style={{
                    fontSize: "10px",
                    color: "var(--tilde-cyan)",
                    fontWeight: 800,
                    verticalAlign: "super",
                    marginLeft: "6px",
                    display: "inline-flex",
                    alignItems: "center",
                    background: "rgba(56, 189, 248, 0.12)",
                    padding: "2px 8px",
                    borderRadius: "10px",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    letterSpacing: "0.3px",
                    whiteSpace: "nowrap"
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ marginRight: "3px" }}>
                      <path d="M5 3V15C5 18.866 8.134 22 12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.134 8 5 11.134 5 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M8 15H16C16 13 14.21 11.5 12 11.5C9.79 11.5 8 13 8 15C8 17 9.79 18.5 12 18.5C13.5 18.5 14.8 17.7 15.5 16.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                    by bestdio
                  </span>
                )}
              </div>
              <span className="desktop-only-flex" style={{ fontSize: "11px", color: "#38bdf8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                {isStandalone ? "Standalone Cloud Workspace" : "v2.0 Interactive Workspace"}
              </span>
            </div>
          </div>
        </div>

        {/* Right Controls: Server status badge & Mobile Menu Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
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

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-only-flex"
            style={{
              display: "none",
              padding: "8px 12px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "18px",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
            title="More Options"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Bar */}
      {mobileMenuOpen && (
        <div className="animate-fade-in mobile-only-flex" style={{
          display: "none",
          flexDirection: "column",
          gap: "8px",
          background: "var(--bg-surface)",
          borderTop: "1px solid var(--border)",
          padding: "14px 20px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)"
        }}>
          {!isStandalone && onBackToHome && (
            <button
              onClick={() => {
                onBackToHome();
                setMobileMenuOpen(false);
              }}
              className="btn btn-secondary"
              style={{ width: "100%", padding: "12px", fontSize: "14px", fontWeight: 700, justifyContent: "center", borderColor: "var(--tilde-cyan)", color: "var(--tilde-cyan)" }}
            >
              ← Return to Tilde Marketing Home
            </button>
          )}

          <button
            onClick={() => {
              setTempUrl(backendUrl);
              setShowConfig(true);
              setMobileMenuOpen(false);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: badge.bg,
              color: badge.color,
              border: `1px solid ${badge.color}`,
              padding: "12px 16px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 700,
              cursor: "pointer",
              width: "100%"
            }}
          >
            <span>{badge.text}</span>
            <span>Configure Server ⚙️</span>
          </button>
        </div>
      )}

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
          zIndex: 9999,
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

      <style>{`
        .desktop-only-flex { display: flex; }
        @media (max-width: 850px) {
          .desktop-only-flex { display: none !important; }
          .mobile-only-flex { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
