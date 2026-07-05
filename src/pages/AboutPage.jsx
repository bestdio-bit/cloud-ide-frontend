import React from "react";

export default function AboutPage({ setCurrentView }) {
  return (
    <div className="animate-fade-in" style={{ padding: "60px 0 100px" }}>
      <div className="marketing-container" style={{ maxWidth: "900px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="tilde-badge" style={{ marginBottom: "16px" }}>
            <span>~ ABOUT TILDE WORKSPACE</span>
          </div>
          <h1 style={{ fontSize: "42px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>
            The Engineering of <span className="hero-gradient-text">True Cloud Interactivity</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: "1.6", maxWidth: "720px", margin: "0 auto" }}>
            A deep dive into our architectural philosophy, our pseudo-terminal streaming protocol, and why we built a zero-latency workspace for developers worldwide.
          </p>
        </div>

        {/* Section 1: The Vision */}
        <div className="glass-card" style={{ padding: "48px", marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{ fontSize: "28px" }}>🚀</span>
            <h2 style={{ fontSize: "26px", fontWeight: 800, color: "#fff", margin: 0 }}>
              Our Engineering Manifesto
            </h2>
          </div>
          <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "20px" }}>
            For decades, learning systems programming, data science, or competitive algorithms required complicated local software setups, cumbersome environment variables, and expensive computer hardware. Even when web-based code runners emerged, they suffered from a fatal flaw: <strong>static execution</strong>. They could compile a file and print output, but they froze or crashed the moment a program called <code style={{ color: "var(--tilde-cyan)" }}>input()</code> in Python, <code style={{ color: "var(--tilde-cyan)" }}>std::cin</code> in C++, or <code style={{ color: "var(--tilde-cyan)" }}>Scanner</code> in Java.
          </p>
          <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: "1.8", margin: 0 }}>
            <strong>Tilde (~ )</strong> was created to solve this fundamental engineering challenge. Taking inspiration from the iconic Linux home directory symbol, Tilde provides a true interactive terminal experience directly in your web browser. We believe high-performance programming environments should be universally accessible across laptops, tablets, and smartphones without friction or hardware limitations.
          </p>
        </div>

        {/* Section 2: Technical Architecture */}
        <div className="glass-card" style={{ padding: "48px", marginBottom: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <span style={{ fontSize: "28px" }}>⚙️</span>
            <h2 style={{ fontSize: "26px", fontWeight: 800, color: "#fff", margin: 0 }}>
              How the Tilde Engine Works
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#fff", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "var(--tilde-cyan)" }}>1.</span> Bidirectional WebSocket Multiplexing
              </h3>
              <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.7", margin: 0 }}>
                When you press Run, Tilde establishes a persistent, low-latency Socket.io connection between your frontend browser and our orchestration servers. Keystrokes typed into the terminal panel are transmitted instantly to the cloud, while stdout and stderr streams are echoed back in real-time with full ANSI escape sequence support.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#fff", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "var(--tilde-indigo)" }}>2.</span> Ephemeral Docker Sandbox Orchestration
              </h3>
              <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.7", margin: 0 }}>
                To guarantee security and isolation, every execution session dynamically spawns an ephemeral Docker container running a hardened Linux Alpine/Debian environment. Each container is strictly quarantined with dedicated memory ceilings (512 MB RAM), CPU throttling, and automated 60-second idle timeouts to prevent runaway processes or resource exhaustion.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#fff", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "var(--tilde-purple)" }}>3.</span> Dual-Engine Code Editor Architecture
              </h3>
              <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.7", margin: 0 }}>
                Tilde intelligently adapts its interface based on your hardware. On laptops and desktops, we deploy Microsoft's industry-standard <strong>Monaco Editor</strong> (the core of VS Code) for rich intellisense, multi-cursor editing, and syntax highlighting. On smartphones and touch devices, we dynamically switch to an optimized <strong>CodeMirror 6</strong> touch engine that guarantees smooth scrolling and responsive virtual keyboard interactions.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Universal Accessibility */}
        <div className="glass-card" style={{ padding: "48px", marginBottom: "50px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{ fontSize: "28px" }}>📱</span>
            <h2 style={{ fontSize: "26px", fontWeight: 800, color: "#fff", margin: 0 }}>
              Designed for Universal Deployment
            </h2>
          </div>
          <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "20px" }}>
            Whether you are debugging a Python script on your laptop during a flight or testing an algorithmic concept on your iPhone while commuting, Tilde is built to travel with you. Thanks to our Progressive Web App (PWA) architecture, you can install Tilde directly to your device home screen.
          </p>
          <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: "1.8", margin: 0 }}>
            When launched as an installed app, Tilde bypasses all marketing pages and opens directly into your live interactive coding workspace with zero latency and clean safe-area padding.
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => setCurrentView("ide")}
            className="btn btn-primary animate-glow"
            style={{ padding: "18px 48px", fontSize: "18px", fontWeight: 800 }}
          >
            <span>⚡ Launch Tilde Workspace Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
