import React from "react";

export default function LandingPage({ setCurrentView }) {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{ padding: "80px 0 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="marketing-container" style={{ position: "relative", zIndex: 10 }}>
          
          <div className="bestdio-badge" style={{ marginBottom: "24px" }}>
            ⚡ THE FLAGSHIP INTERACTIVE CLOUD WORKSPACE
          </div>

          <h1 style={{
            fontSize: "clamp(36px, 6vw, 68px)",
            fontWeight: 900,
            lineHeight: "1.1",
            marginBottom: "24px",
            color: "#fff",
            letterSpacing: "-1.5px"
          }}>
            Code, Compile & Execute with <br />
            <span className="hero-gradient-text">Zero-Latency Terminal Streams.</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "var(--text-muted)",
            maxWidth: "760px",
            margin: "0 auto 40px",
            lineHeight: "1.6"
          }}>
            <strong>PulseIDE</strong> is a powerful multi-language interactive cloud development environment. 
            Experience real-time standard input (`cin`, `input()`, `Scanner`), Docker container sandboxing, and mobile-friendly coding anywhere.
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginBottom: "60px" }}>
            <button
              onClick={() => setCurrentView("ide")}
              className="btn btn-bestdio"
              style={{ padding: "16px 36px", fontSize: "18px", fontWeight: 800 }}
            >
              <span>⚡ Launch PulseIDE Now</span>
            </button>
            <button
              onClick={() => {
                if (window.deferredPrompt) {
                  window.deferredPrompt.prompt();
                } else {
                  alert("📥 To install PulseIDE on your Phone or Laptop:\n\n• Phone (iOS/Android): Tap 'Share' or 'Menu' (⋮) -> 'Add to Home Screen'\n• Laptop (Chrome/Edge): Click the Install icon (💻/➕) in your browser's address bar!\n\nOnce installed, launching the app opens directly into the IDE workspace!");
                }
              }}
              className="btn btn-secondary"
              style={{ padding: "16px 28px", fontSize: "16px", fontWeight: 700 }}
            >
              <span>📥 Download App</span>
            </button>
            <button
              onClick={() => setCurrentView("templates")}
              className="btn btn-secondary"
              style={{ padding: "16px 28px", fontSize: "16px", fontWeight: 700 }}
            >
              <span>📂 Explore Code Templates</span>
            </button>
          </div>

          {/* Feature Highlight Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
            textAlign: "left",
            marginTop: "60px"
          }}>
            <div className="glass-card" style={{ padding: "28px" }}>
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>🐚</div>
              <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "10px" }}>
                Interactive TTY Streams
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6" }}>
                Unlike standard code runners that only dump static logs, PulseIDE connects directly to a live Linux pseudo-terminal via Socket.io.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "28px" }}>
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>🐳</div>
              <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "10px" }}>
                100% Free Architecture
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6" }}>
                No paywalls, no credit cards required, and no artificial execution limits. Fully open-source and built for developers.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "28px" }}>
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>📱</div>
              <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "10px" }}>
                Phone & Laptop Ready
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6" }}>
                Download and install PulseIDE as a standalone app on iOS, Android, macOS, or Windows for instant offline-accessible launching!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Language Banner Section */}
      <section style={{ padding: "60px 0", background: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="marketing-container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "30px" }}>
            Powered by 10 Industrial-Grade Compilers & Runtimes
          </h2>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            fontSize: "18px",
            fontWeight: 800,
            color: "var(--text-main)"
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>🐍 Python 3</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>⚡ C++17</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>🦀 Rust</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>☕ Java 17</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>🐹 Go 1.21</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>🌐 Node.js 20</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>🐘 PHP 8.2</span>
          </div>
        </div>
      </section>
    </div>
  );
}
