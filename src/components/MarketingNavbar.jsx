import React, { useState } from "react";

export default function MarketingNavbar({ currentView, setCurrentView, onOpenDownload }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "landing", label: "Overview" },
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
      minHeight: "72px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <div className="marketing-container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingTop: "12px",
        paddingBottom: "12px"
      }}>
        {/* Brand Logo: Tilde (~ ) */}
        <div
          onClick={() => {
            setCurrentView("landing");
            setMobileMenuOpen(false);
          }}
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

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
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

        {/* Desktop CTA Buttons & Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="desktop-cta" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
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
            title="Toggle Menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Bar (Verto-Inspired Look & Feel) */}
      {mobileMenuOpen && (
        <div className="animate-fade-in" style={{
          background: "rgba(5, 7, 11, 0.98)",
          borderTop: "1px solid var(--border)",
          padding: "16px 20px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}>
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id);
                  setMobileMenuOpen(false);
                }}
                style={{
                  background: isActive ? "rgba(56, 189, 248, 0.15)" : "transparent",
                  color: isActive ? "#38bdf8" : "var(--text-main)",
                  border: isActive ? "1px solid rgba(56, 189, 248, 0.3)" : "1px solid transparent",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: isActive ? 700 : 600,
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <span>{item.label}</span>
                {isActive && <span style={{ color: "#38bdf8" }}>●</span>}
              </button>
            );
          })}

          <div style={{ height: "1px", background: "var(--border)", margin: "8px 0" }} />

          <button
            onClick={() => {
              onOpenDownload();
              setMobileMenuOpen(false);
            }}
            className="btn btn-secondary"
            style={{ width: "100%", padding: "12px", fontSize: "14px", fontWeight: 700, justifyContent: "center" }}
          >
            <span>📥 Install / Download App</span>
          </button>

          <button
            onClick={() => {
              setCurrentView("ide");
              setMobileMenuOpen(false);
            }}
            className="btn btn-primary"
            style={{ width: "100%", padding: "12px", fontSize: "15px", fontWeight: 800, justifyContent: "center" }}
          >
            <span>⚡ Launch IDE Workspace</span>
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 850px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .mobile-toggle-btn { display: flex !important; alignItems: center; justify-content: center; }
        }
      `}</style>
    </header>
  );
}
