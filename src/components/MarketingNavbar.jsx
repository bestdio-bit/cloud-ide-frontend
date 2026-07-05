import React from "react";

export default function MarketingNavbar({ currentView, setCurrentView, onOpenDownload }) {
  const navItems = [
    { id: "landing", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "templates", label: "Templates" },
    { id: "pricing", label: "Pricing" },
    { id: "docs", label: "Docs" },
    { id: "about", label: "About" },
  ];

  return (
    <header className="glass-header" style={{
      position: "sticky",
      top: 0,
      zIndex: 1000,
      height: "72px",
      display: "flex",
      alignItems: "center"
    }}>
      <div className="marketing-container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
      }}>
        {/* Brand Logo: Tilde (~ ) */}
        <div
          onClick={() => setCurrentView("landing")}
          style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}
        >
          <div style={{
            background: "linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)",
            width: "38px",
            height: "38px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            fontWeight: 900,
            color: "#000",
            boxShadow: "0 0 20px rgba(56, 189, 248, 0.4)"
          }}>
            ~
          </div>
          <div>
            <span style={{ fontSize: "20px", fontWeight: 900, letterSpacing: "-0.5px", color: "#fff" }}>
              Tilde
            </span>
            <span style={{
              background: "rgba(56, 189, 248, 0.15)",
              color: "#38bdf8",
              fontSize: "10px",
              fontWeight: 800,
              padding: "2px 6px",
              borderRadius: "4px",
              marginLeft: "8px",
              border: "1px solid rgba(56, 189, 248, 0.3)"
            }}>
              CLOUD TTY
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="desktop-only" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                style={{
                  background: isActive ? "rgba(56, 189, 248, 0.15)" : "transparent",
                  color: isActive ? "#38bdf8" : "var(--text-muted)",
                  border: isActive ? "1px solid rgba(56, 189, 248, 0.3)" : "1px solid transparent",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: isActive ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={onOpenDownload}
            className="btn btn-secondary"
            style={{ padding: "8px 16px", fontSize: "13px", fontWeight: 700 }}
            title="Download & Install Tilde App"
          >
            <span>📥 Install App</span>
          </button>
          <button
            onClick={() => setCurrentView("ide")}
            className="btn btn-primary"
            style={{ padding: "8px 20px", fontSize: "13px", fontWeight: 800 }}
          >
            <span>⚡ Launch IDE</span>
          </button>
        </div>
      </div>
    </header>
  );
}
