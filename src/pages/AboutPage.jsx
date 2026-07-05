import React from "react";

export default function AboutPage({ setCurrentView }) {
  const values = [
    {
      icon: "🌍",
      title: "Universal Accessibility",
      desc: "We believe that every student, educator, and developer across the globe deserves access to world-class software engineering tools without hitting financial barriers or time-limited trial paywalls."
    },
    {
      icon: "🛡️",
      title: "Uncompromised Security",
      desc: "By isolating every execution session inside an ephemeral Debian Linux Docker container, we guarantee that user code runs in a pristine, tamper-proof environment that never compromises system integrity."
    },
    {
      icon: "⚡",
      title: "Zero Latency Interactivity",
      desc: "We reject the industry standard of batch-only code evaluation. Bestdio CloudIDE is engineered around node-pty and WebSocket streams to deliver real-time terminal feedback."
    },
    {
      icon: "📖",
      title: "Open Source Dedication",
      desc: "CloudIDE is built on top of incredible open-source technologies including React, Vite, Monaco Editor, CodeMirror, Xterm.js, Socket.io, and Docker. We give back by keeping our core stack transparent."
    }
  ];

  return (
    <div className="animate-fade-in" style={{ padding: "60px 0 100px" }}>
      <div className="marketing-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px", maxWidth: "800px", margin: "0 auto" }}>
          <div className="bestdio-badge" style={{ marginBottom: "16px" }}>
            🏢 ABOUT BESTDIO COMPANY
          </div>
          <h1 style={{ fontSize: "42px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>
            Democratizing <span className="hero-gradient-text">Cloud Engineering</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: "1.6" }}>
            Bestdio Company is a dedicated software engineering collective focused on building high-performance, developer-first tools. CloudIDE is our flagship interactive sandbox.
          </p>
        </div>

        {/* Brand Mission Card */}
        <div className="glass-card" style={{
          padding: "50px",
          marginBottom: "80px",
          background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(0, 242, 254, 0.1))",
          border: "1px solid rgba(0, 242, 254, 0.3)"
        }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#fff", marginBottom: "20px" }}>
            Our Engineering Philosophy
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-main)", lineHeight: "1.8", marginBottom: "20px" }}>
            When we set out to build <strong>Bestdio CloudIDE</strong>, we noticed a glaring gap in the market: most free online compilers only allowed you to paste code and hit run, freezing completely whenever an algorithm requested user input like Python's <code>input()</code> or C++'s <code>std::cin</code>. Meanwhile, true cloud environments like GitHub Codespaces or Replit required user logins, credit cards, or paid subscriptions.
          </p>
          <p style={{ fontSize: "16px", color: "var(--text-muted)", lineHeight: "1.8" }}>
            We created Bestdio CloudIDE as an independent, flagship platform under Bestdio Company—completely distinct from any legacy projects like Verto. By combining lightweight React frontend bundles hosted on global edge networks with isolated Linux Docker containers running on free cloud tiers, we achieved our dream: a 100% free, interactive terminal sandbox for 10+ languages.
          </p>
        </div>

        {/* Values Grid */}
        <div style={{ marginBottom: "80px" }}>
          <h3 style={{ fontSize: "28px", fontWeight: 800, color: "#fff", marginBottom: "40px", textAlign: "center" }}>
            What Drives Bestdio Company
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px"
          }}>
            {values.map((v, idx) => (
              <div key={idx} className="glass-card" style={{ padding: "36px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ fontSize: "36px" }}>{v.icon}</div>
                <h4 style={{ fontSize: "20px", fontWeight: 800, color: "#fff" }}>{v.title}</h4>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => setCurrentView("ide")}
            className="btn btn-bestdio"
            style={{ padding: "16px 40px", fontSize: "16px" }}
          >
            <span>⚡ Launch Bestdio CloudIDE</span>
          </button>
        </div>
      </div>
    </div>
  );
}
