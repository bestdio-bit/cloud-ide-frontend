import React from "react";

export default function AboutPage({ setCurrentView }) {
  return (
    <div className="animate-fade-in" style={{ padding: "60px 0 100px" }}>
      <div className="marketing-container" style={{ maxWidth: "860px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="tilde-badge" style={{ marginBottom: "16px" }}>
            <span>~ ABOUT TILDE WORKSPACE</span>
          </div>
          <h1 style={{ fontSize: "42px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>
            Engineered for <span className="hero-gradient-text">Interactive Performance</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: "1.6" }}>
            Learn about our mission, our zero-cost cloud architecture, and our engineering commitment to developers worldwide.
          </p>
        </div>

        {/* Content Box */}
        <div className="glass-card" style={{ padding: "48px", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#fff", marginBottom: "20px" }}>
            The Tilde Philosophy
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "24px" }}>
            For decades, learning systems programming, data science, or competitive algorithms required complicated local software setups, cumbersome environment variables, and expensive laptop hardware. 
            <strong>Tilde (~ )</strong> was created to eliminate those friction points entirely, celebrating the iconic Linux home directory symbol.
          </p>
          <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "36px" }}>
            We provide instant, zero-setup access to industrial compilers (GCC, Rustc, OpenJDK, Go, Node.js, Python 3) running in secure Docker containers. 
            Most importantly, we solved the hardest problem in web-based code runners: <strong>true interactive terminal streaming</strong>. You can run interactive programs that prompt for user input in real-time.
          </p>

          <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
            Key Architectural Highlights
          </h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px", fontSize: "15px", color: "var(--text-main)" }}>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <span style={{ color: "var(--tilde-cyan)", fontWeight: 900, fontSize: "18px" }}>⚡</span>
              <span><strong>Low-Latency Pseudo-Terminals:</strong> Built with Node.js `node-pty` and Socket.io for instantaneous keystroke echoing and ANSI terminal formatting.</span>
            </li>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <span style={{ color: "var(--tilde-cyan)", fontWeight: 900, fontSize: "18px" }}>🐳</span>
              <span><strong>Containerized Security:</strong> Every execution session runs inside an ephemeral Docker sandbox with strict CPU, RAM, and network boundaries.</span>
            </li>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <span style={{ color: "var(--tilde-cyan)", fontWeight: 900, fontSize: "18px" }}>📱</span>
              <span><strong>Universal Device Compatibility:</strong> Responsive layouts supporting desktop Monaco Editor and touch-optimized mobile CodeMirror engines.</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => setCurrentView("ide")}
            className="btn btn-primary animate-glow"
            style={{ padding: "16px 40px", fontSize: "18px", fontWeight: 800 }}
          >
            <span>⚡ Launch Tilde Workspace</span>
          </button>
        </div>
      </div>
    </div>
  );
}
