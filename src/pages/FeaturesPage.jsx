import React from "react";

export default function FeaturesPage({ setCurrentView }) {
  const features = [
    {
      icon: "⚡",
      title: "Real-Time Bidirectional TTY",
      desc: "Unlike standard code runners that hang on user input, Tilde connects directly to a live Linux pseudo-terminal via Socket.io and node-pty.",
      tag: "CORE ENGINE"
    },
    {
      icon: "🐳",
      title: "Isolated Docker Containers",
      desc: "Every code execution session is securely sandboxed in its own ephemeral Docker container with strict CPU, RAM, and network boundaries.",
      tag: "SECURITY"
    },
    {
      icon: "🌐",
      title: "10+ Pre-Installed Compilers",
      desc: "Write and execute code instantly in Python 3, Node.js, C++17, C, Java 17, Rust, Go, Ruby, PHP, and Bash without installing anything locally.",
      tag: "MULTI-LANGUAGE"
    },
    {
      icon: "📱",
      title: "Universal PWA Launcher",
      desc: "Install Tilde as a standalone app on your laptop or phone. When clicked, it opens directly into the live coding workspace without marketing clutter.",
      tag: "ACCESSIBILITY"
    },
    {
      icon: "📋",
      title: "Instant Code Snippet Copy",
      desc: "Easily copy code from your active editor session or from our curated template library with 1-click clipboard integration.",
      tag: "PRODUCTIVITY"
    },
    {
      icon: "🛡️",
      title: "Safe-Area Screen Protection",
      desc: "Designed with protective bottom padding so your terminal and code editor never touch, clip, or merge into mobile screen edges or laptop taskbars.",
      tag: "UI / UX"
    }
  ];

  return (
    <div className="animate-fade-in" style={{ padding: "60px 0 100px" }}>
      <div className="marketing-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="tilde-badge" style={{ marginBottom: "16px" }}>
            <span>⚙️ ARCHITECTURE & CAPABILITIES</span>
          </div>
          <h1 style={{ fontSize: "42px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>
            Engineered for <span className="hero-gradient-text">True Interactivity</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
            Discover how Tilde provides instantaneous cloud terminal execution with zero setup friction.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "28px", marginBottom: "60px" }}>
          {features.map((f, i) => (
            <div key={i} className="glass-card" style={{ padding: "36px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                  <span style={{ fontSize: "36px" }}>{f.icon}</span>
                  <span style={{
                    background: "rgba(56, 189, 248, 0.15)",
                    color: "var(--tilde-cyan)",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "0.5px"
                  }}>
                    {f.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#fff", marginBottom: "14px" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.7" }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", background: "rgba(10, 15, 24, 0.6)", padding: "50px", borderRadius: "20px", border: "1px solid var(--border)" }}>
          <h3 style={{ fontSize: "28px", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
            Experience the Zero-Latency Terminal Now
          </h3>
          <p style={{ fontSize: "16px", color: "var(--text-muted)", marginBottom: "30px" }}>
            No environment variables to configure. No local compilers to install.
          </p>
          <button
            onClick={() => setCurrentView("ide")}
            className="btn btn-primary animate-glow"
            style={{ padding: "16px 40px", fontSize: "16px", fontWeight: 800 }}
          >
            <span>⚡ Open Tilde Workspace</span>
          </button>
        </div>
      </div>
    </div>
  );
}
