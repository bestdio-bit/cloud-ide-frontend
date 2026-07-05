import React from "react";

export default function MarketingNavbar({ currentView, setCurrentView }) {
  const navItems = [
    { id: "landing", label: "Home" },
    { id: "features", label: "Features" },
    { id: "templates", label: "Templates & Showcase" },
    { id: "pricing", label: "Pricing" },
    { id: "about", label: "About" },
    { id: "docs", label: "Documentation" }
  ];

  const handleDownloadApp = () => {
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt();
      window.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        }
        window.deferredPrompt = null;
      });
    } else {
      alert("📥 To install PulseIDE on your Phone or Laptop:\n\n• Phone (iOS/Android): Tap 'Share' or 'Menu' (⋮) -> 'Add to Home Screen'\n• Laptop (Chrome/Edge): Click the Install icon (💻/➕) in your browser's address bar!\n\nOnce installed, launching the app opens directly into the IDE workspace!");
    }
  };

  return (
    <header className="glass-header" style={{
      position: "sticky",
      top: 0,
      zIndex: 1000,
      padding: "16px 0"
    }}>
      <div className="marketing-container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px"
      }}>
        {/* Brand */}
        <div 
          onClick={() => setCurrentView("landing")}
          style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}
        >
          <div style={{
            background: "linear-gradient(135deg, var(--bestdio-emerald), var(--bestdio-cyan))",
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            fontWeight: 800,
            color: "#000",
            boxShadow: "0 4px 15px rgba(16, 185, 129, 0.4)"
          }}>
            ⚡
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "20px", fontWeight: 900, letterSpacing: "-0.5px", color: "#fff" }}>
                PulseIDE
              </span>
            </div>
            <div style={{ fontSize: "10px", color: "var(--bestdio-emerald)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>
              by Bestdio Company
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              style={{
                background: currentView === item.id ? "rgba(0, 242, 254, 0.15)" : "transparent",
                color: currentView === item.id ? "var(--bestdio-cyan)" : "var(--text-muted)",
                border: currentView === item.id ? "1px solid rgba(0, 242, 254, 0.3)" : "1px solid transparent",
                padding: "8px 14px",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: currentView === item.id ? 700 : 500,
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <button
            onClick={handleDownloadApp}
            className="btn btn-secondary"
            style={{ padding: "8px 16px", fontSize: "13px", fontWeight: 700 }}
            title="Install PulseIDE on phone or laptop"
          >
            <span>📥 Download App</span>
          </button>
          <button
            onClick={() => setCurrentView("ide")}
            className="btn btn-bestdio"
            style={{ padding: "10px 22px", fontSize: "14px" }}
          >
            <span>⚡ Launch IDE</span>
          </button>
        </div>
      </div>
    </header>
  );
}
