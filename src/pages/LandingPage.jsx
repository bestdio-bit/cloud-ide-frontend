import React from "react";

export default function LandingPage({ setCurrentView }) {
  const stats = [
    { label: "Supported Languages", val: "10+", desc: "Python, C++, Rust, Go, Java, Node.js & more" },
    { label: "Interactive Terminal", val: "True TTY", desc: "Line-by-line stdin execution via Xterm.js" },
    { label: "Hosting Cost", val: "$0.00", desc: "Runs on 100% free CDNs & Docker containers" },
    { label: "Setup Time", val: "0 Sec", desc: "Instant browser cloud sandbox without install" }
  ];

  const highlights = [
    {
      icon: "🐳",
      title: "Docker Container Sandbox",
      desc: "Every execution is securely isolated inside a Debian Linux container with pre-installed GCC, OpenJDK, Python 3, Rustc, Go, and PHP compilers."
    },
    {
      icon: "⚡",
      title: "Real-Time Socket.io Stream",
      desc: "Experience zero-delay bidirectional communication. Unlike batch evaluators, our node-pty engine streams standard input and output instantaneously."
    },
    {
      icon: "📱",
      title: "Responsive Mobile CodeMirror",
      desc: "Write complex algorithms on the go. Our intelligent layout automatically switches between Monaco Editor on desktop and CodeMirror on mobile devices."
    },
    {
      icon: "🟢",
      title: "100% Free Forever Architecture",
      desc: "Built by Bestdio Company to democratize software engineering. No credit cards, no paywalls, and no time limits."
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{
        padding: "100px 0 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "350px",
          background: "radial-gradient(circle, rgba(0, 242, 254, 0.15) 0%, rgba(16, 185, 129, 0.1) 50%, transparent 70%)",
          filter: "blur(50px)",
          zIndex: 0,
          pointerEvents: "none"
        }} />

        <div className="marketing-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="bestdio-badge animate-float" style={{ marginBottom: "24px" }}>
            ⚡ FLAGSHIP DEVELOPER PRODUCT BY BESTDIO COMPANY
          </div>

          <h1 style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 900,
            lineHeight: "1.1",
            letterSpacing: "-1.5px",
            marginBottom: "24px",
            maxWidth: "900px",
            margin: "0 auto 24px"
          }}>
            The Zero-Cost <br />
            <span className="hero-gradient-text">Interactive Cloud IDE</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "var(--text-muted)",
            maxWidth: "700px",
            margin: "0 auto 40px",
            lineHeight: "1.6",
            fontWeight: 400
          }}>
            Write, compile, and debug code in 10+ programming languages directly in your browser. Experience true line-by-line terminal interactivity powered by Linux Docker containers—for <strong>$0.00 forever</strong>.
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <button
              onClick={() => setCurrentView("ide")}
              className="btn btn-bestdio animate-glow"
              style={{ padding: "16px 36px", fontSize: "16px", borderRadius: "12px" }}
            >
              <span>⚡ Launch CloudIDE Now</span>
            </button>
            <button
              onClick={() => setCurrentView("templates")}
              className="btn btn-secondary"
              style={{ padding: "16px 32px", fontSize: "16px", borderRadius: "12px" }}
            >
              <span>Explore Code Templates</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: "40px 0 80px" }}>
        <div className="marketing-container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px"
          }}>
            {stats.map((st, i) => (
              <div key={i} className="glass-card" style={{ padding: "28px 24px", textAlign: "center" }}>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "var(--bestdio-cyan)", marginBottom: "8px", fontFamily: "var(--font-mono)" }}>
                  {st.val}
                </div>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>
                  {st.label}
                </div>
                <div style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.4" }}>
                  {st.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section style={{ padding: "60px 0" }}>
        <div className="marketing-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>
              Engineered by Bestdio for Peak Interactivity
            </h2>
            <p style={{ fontSize: "16px", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto" }}>
              Unlike static online compilers that freeze during standard input, Bestdio CloudIDE connects your browser directly to a live interactive pseudo-terminal.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px"
          }}>
            {highlights.map((item, idx) => (
              <div key={idx} className="glass-card" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background: "rgba(0, 242, 254, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px"
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#fff" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: "80px 0" }}>
        <div className="marketing-container">
          <div className="glass-card" style={{
            padding: "60px 40px",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(0, 242, 254, 0.15))",
            border: "1px solid rgba(0, 242, 254, 0.4)"
          }}>
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#fff", marginBottom: "16px" }}>
              Ready to Code Without Limits?
            </h2>
            <p style={{ fontSize: "16px", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto 32px", lineHeight: "1.6" }}>
              Join thousands of developers using Bestdio CloudIDE to build, test, and deploy interactive software across 10 programming languages.
            </p>
            <button
              onClick={() => setCurrentView("ide")}
              className="btn btn-bestdio"
              style={{ padding: "16px 40px", fontSize: "16px", borderRadius: "12px" }}
            >
              <span>⚡ Start Coding Now (No Login Required)</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
