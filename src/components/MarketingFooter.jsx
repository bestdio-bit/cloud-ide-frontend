import React from "react";

export default function MarketingFooter({ setCurrentView }) {
  return (
    <footer style={{
      background: "var(--bg-surface)",
      borderTop: "1px solid var(--border)",
      padding: "60px 0 40px",
      marginTop: "80px"
    }}>
      <div className="marketing-container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
          marginBottom: "40px"
        }}>
          {/* Brand Col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{
                background: "linear-gradient(135deg, var(--bestdio-emerald), var(--bestdio-cyan))",
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: 800,
                color: "#000"
              }}>
                ⚡
              </div>
              <span style={{ fontSize: "18px", fontWeight: 800, color: "#fff" }}>
                Bestdio <span style={{ color: "var(--bestdio-cyan)", fontWeight: 400 }}>CloudIDE</span>
              </span>
            </div>
            <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "16px" }}>
              The flagship zero-cost interactive development environment by <strong>Bestdio Company</strong>. Built for developers, students, and educators globally.
            </p>
            <div className="bestdio-badge" style={{ fontSize: "11px" }}>
              🟢 100% Free Architecture
            </div>
          </div>

          {/* Product Col */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Product
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
              <li><button onClick={() => setCurrentView("features")} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", padding: 0 }}>Core Features</button></li>
              <li><button onClick={() => setCurrentView("templates")} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", padding: "0" }}>Code Templates & Showcase</button></li>
              <li><button onClick={() => setCurrentView("pricing")} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", padding: 0 }}>Free Forever Pricing</button></li>
              <li><button onClick={() => setCurrentView("ide")} style={{ background: "none", border: "none", color: "var(--bestdio-cyan)", fontWeight: 600, cursor: "pointer", padding: 0 }}>⚡ Launch CloudIDE</button></li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Bestdio Company
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
              <li><button onClick={() => setCurrentView("about")} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", padding: 0 }}>About Bestdio</button></li>
              <li><button onClick={() => setCurrentView("about")} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", padding: 0 }}>Our Philosophy</button></li>
              <li><a href="https://github.com/bestdio-bit" target="_blank" rel="noreferrer" style={{ color: "var(--text-muted)", textDecoration: "none" }}>GitHub Organization</a></li>
              <li><button onClick={() => setCurrentView("docs")} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", padding: 0 }}>Documentation & Tutorials</button></li>
            </ul>
          </div>

          {/* Architecture Col */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Tech Stack
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", color: "var(--text-faint)" }}>
              <li>🐳 Docker Sandbox (Debian Linux)</li>
              <li>⚡ Socket.io Real-Time Stream</li>
              <li>💻 Monaco Editor & CodeMirror</li>
              <li>🚀 Vercel & Render Cloud Hosting</li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          fontSize: "12px",
          color: "var(--text-faint)"
        }}>
          <div>
            © {new Date().getFullYear()} <strong>Bestdio Company</strong>. All rights reserved. Not affiliated with or similar to Verto.
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security Sandbox Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
