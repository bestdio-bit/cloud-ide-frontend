import React from "react";

export default function MarketingFooter({ setCurrentView }) {
  return (
    <footer style={{
      background: "#030508",
      borderTop: "1px solid var(--border)",
      padding: "60px 0 40px",
      color: "var(--text-muted)",
      fontSize: "14px"
    }}>
      <div className="marketing-container" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "40px",
        marginBottom: "60px"
      }}>
        {/* Brand Col */}
        <div>
          <div
            onClick={() => setCurrentView("landing")}
            style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", cursor: "pointer" }}
          >
            <div style={{
              background: "linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)",
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: 900,
              color: "#000"
            }}>
              ~
            </div>
            <span style={{ fontSize: "18px", fontWeight: 900, color: "#fff", letterSpacing: "-0.5px" }}>
              Tilde
            </span>
          </div>
          <p style={{ fontSize: "13px", lineHeight: "1.6", color: "var(--text-faint)", margin: 0 }}>
            An interactive multi-language cloud workspace and pseudo-terminal engine. Engineered for zero setup latency and high-performance execution.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h4 style={{ color: "#fff", fontSize: "14px", fontWeight: 700, marginBottom: "16px" }}>Workspace</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><button onClick={() => setCurrentView("ide")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0 }}>Launch IDE ⚡</button></li>
            <li><button onClick={() => setCurrentView("templates")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0 }}>Starter Code</button></li>
            <li><button onClick={() => setCurrentView("pricing")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0 }}>Pricing & Quotas</button></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 style={{ color: "#fff", fontSize: "14px", fontWeight: 700, marginBottom: "16px" }}>Resources</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><button onClick={() => setCurrentView("docs")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0 }}>Documentation</button></li>
            <li><button onClick={() => setCurrentView("about")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0 }}>About Tilde</button></li>
            <li><a href="https://github.com/bestdio-bit/cloud-ide-frontend" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>GitHub Repository</a></li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 style={{ color: "#fff", fontSize: "14px", fontWeight: 700, marginBottom: "16px" }}>Engine Specs</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "12px", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
            <li>• Node.js + Socket.io</li>
            <li>• node-pty Linux TTY</li>
            <li>• Ephemeral Docker Sandbox</li>
            <li>• Monaco & CodeMirror Engines</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar: ONLY Bestdio Mention */}
      <div className="marketing-container" style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        paddingTop: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px",
        fontSize: "13px"
      }}>
        <div style={{ color: "var(--text-main)" }}>
          <strong>Tilde</strong> is an application under <strong>Bestdio Company</strong> (<a href="https://bestdio.in" target="_blank" rel="noreferrer" style={{ color: "var(--tilde-cyan)", textDecoration: "none", fontWeight: 700 }}>bestdio.in</a>).
        </div>
        <div style={{ color: "var(--text-faint)" }}>
          © 2026 Bestdio Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
