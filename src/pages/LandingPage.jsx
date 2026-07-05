import React from "react";

export default function LandingPage({ setCurrentView, onOpenDownload }) {
  const codeSnippet = `# Welcome to Tilde ~ The Interactive Cloud Workspace
import sys, time

print("⚡ Initializing Linux Pseudo-Terminal...")
time.sleep(0.4)

name = input("➜ Enter your developer handle: ")
print(f"\\nWelcome to the cloud, {name}! 🚀")
print("All systems operational. Zero-latency TTY active.")`;

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{ padding: "80px 0 100px", textAlign: "center", position: "relative" }}>
        {/* Glow background effect */}
        <div style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, 0)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(129, 140, 248, 0.08) 50%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
          pointerEvents: "none"
        }} />

        <div className="marketing-container" style={{ position: "relative", zIndex: 1, maxWidth: "920px" }}>
          <div className="tilde-badge animate-float" style={{ marginBottom: "24px" }}>
            <span>~ TILDE CLOUD TTY</span>
            <span style={{ color: "#fff" }}>•</span>
            <span style={{ color: "var(--tilde-cyan)" }}>ZERO SETUP REQUIRED</span>
          </div>

          <h1 style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 900,
            lineHeight: "1.1",
            letterSpacing: "-1.5px",
            marginBottom: "24px",
            color: "#fff"
          }}>
            Code, Compile & Stream with <br />
            <span className="hero-gradient-text">True Terminal Interactivity</span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "var(--text-muted)",
            lineHeight: "1.6",
            maxWidth: "720px",
            margin: "0 auto 40px"
          }}>
            Experience the next evolution of cloud development. <strong>Tilde</strong> streams live Linux pseudo-terminals directly to your browser with instantaneous keystroke echoing, full ANSI support, and interactive standard input.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap", marginBottom: "60px" }}>
            <button
              onClick={() => setCurrentView("ide")}
              className="btn btn-primary animate-glow"
              style={{ padding: "16px 36px", fontSize: "16px", fontWeight: 800 }}
            >
              <span>⚡ Launch Tilde Workspace</span>
            </button>
            <button
              onClick={onOpenDownload}
              className="btn btn-secondary"
              style={{ padding: "16px 32px", fontSize: "16px", fontWeight: 700 }}
            >
              <span>📥 Install / Download App</span>
            </button>
          </div>

          {/* Hero Interactive Terminal Preview */}
          <div className="glass-card" style={{
            textAlign: "left",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 35px rgba(56, 189, 248, 0.2)",
            border: "1px solid rgba(56, 189, 248, 0.3)"
          }}>
            {/* Window Bar */}
            <div style={{
              background: "rgba(10, 15, 24, 0.9)",
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid var(--border)"
            }}>
              <div style={{ display: "flex", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }} />
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#fbbf24" }} />
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#34d399" }} />
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--text-muted)", fontWeight: 600 }}>
                ~ /workspace/main.py — Tilde TTY
              </span>
              <div style={{ fontSize: "12px", color: "#38bdf8", fontWeight: 700 }}>
                ● ONLINE
              </div>
            </div>

            {/* Editor & Terminal Mockup Split */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", background: "#05070b" }}>
              {/* Left: Code */}
              <div style={{ padding: "24px", borderRight: "1px solid var(--border)", fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "1.7" }}>
                <div style={{ color: "#475569", marginBottom: "8px", fontSize: "11px", fontWeight: 700 }}>// PYTHON 3.11 SOURCE</div>
                <pre style={{ margin: 0, color: "#e2e8f0", whiteSpace: "pre-wrap" }}>
                  {codeSnippet}
                </pre>
              </div>

              {/* Right: Live Output Mockup */}
              <div style={{ padding: "24px", fontFamily: "var(--font-mono)", fontSize: "13px", background: "rgba(10, 15, 24, 0.5)" }}>
                <div style={{ color: "#38bdf8", marginBottom: "12px", fontSize: "11px", fontWeight: 700 }}>// INTERACTIVE TERMINAL STREAM</div>
                <div style={{ color: "#34d399", marginBottom: "6px" }}>⚡ Initializing Linux Pseudo-Terminal...</div>
                <div style={{ color: "#f8fafc", marginBottom: "6px" }}>
                  ➜ Enter your developer handle: <span style={{ color: "#fbbf24", borderBottom: "2px solid #fbbf24" }}>Alex_Dev</span>
                </div>
                <div style={{ color: "#38bdf8", fontWeight: 700, marginTop: "12px" }}>
                  Welcome to the cloud, Alex_Dev! 🚀
                </div>
                <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "4px" }}>
                  All systems operational. Zero-latency TTY active.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grids */}
      <section style={{ padding: "80px 0", background: "var(--bg-surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="marketing-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#fff", marginBottom: "16px" }}>
              Why Developers Choose <span className="hero-gradient-text">Tilde</span>
            </h2>
            <p style={{ fontSize: "16px", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto" }}>
              Built from the ground up to solve the limitations of traditional web-based code evaluators.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            <div className="glass-card" style={{ padding: "32px" }}>
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>⚡</div>
              <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>
                True Interactive TTY
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6" }}>
                Unlike static code runners that fail on <code style={{ color: "#38bdf8" }}>input()</code> or <code style={{ color: "#38bdf8" }}>cin</code>, Tilde streams bidirectional WebSockets directly to a live Docker container.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "32px" }}>
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>🐳</div>
              <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>
                Isolated Docker Sandboxes
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6" }}>
                Every code execution spawns in a fresh, hardened Linux container with dedicated CPU, RAM, and network quotas for complete security and privacy.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "32px" }}>
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>📱</div>
              <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>
                Universal PWA Support
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6" }}>
                Install Tilde on your laptop, iPhone, iPad, or Android device. When launched from your home screen, it opens directly into the workspace!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Language Showcase Banner */}
      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="marketing-container" style={{ maxWidth: "800px" }}>
          <div className="tilde-badge" style={{ marginBottom: "20px" }}>
            <span>🌐 10+ INDUSTRIAL COMPILERS</span>
          </div>
          <h2 style={{ fontSize: "32px", fontWeight: 900, color: "#fff", marginBottom: "24px" }}>
            One Workspace. All Your Languages.
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-muted)", marginBottom: "36px", lineHeight: "1.6" }}>
            From competitive programming in C++17 and Rust to backend API scripts in Node.js, Go, and Python 3. Tilde comes pre-loaded with industrial-grade compilers.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            {["Python 3.11", "Node.js 20", "C++17 (GCC)", "C (GCC)", "Java 17 (OpenJDK)", "Rust 1.75", "Go 1.21", "Ruby 3.2", "PHP 8.2", "Bash 5.2"].map((lang) => (
              <span
                key={lang}
                style={{
                  background: "rgba(56, 189, 248, 0.08)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  color: "#e2e8f0",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: 600,
                  fontFamily: "var(--font-mono)"
                }}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "80px 0 100px", background: "linear-gradient(180deg, var(--bg-dark), var(--bg-surface))", textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <div className="marketing-container" style={{ maxWidth: "700px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>
            Ready to Start Coding?
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-muted)", marginBottom: "36px" }}>
            No credit card, no account required, no installation friction. Launch directly into your interactive terminal now.
          </p>
          <button
            onClick={() => setCurrentView("ide")}
            className="btn btn-primary animate-glow"
            style={{ padding: "18px 48px", fontSize: "18px", fontWeight: 800 }}
          >
            <span>⚡ Open Tilde Workspace Now</span>
          </button>
        </div>
      </section>
    </div>
  );
}
