import React from "react";

export default function FeaturesPage({ setCurrentView }) {
  const features = [
    {
      title: "True Interactive Terminal (node-pty)",
      desc: "Unlike traditional online compilers that force you to provide all standard inputs in a single static text box before execution, Bestdio CloudIDE spawns a real Linux pseudo-terminal (TTY). You can interactively respond to Python input(), C++ cin, or Java Scanner line by line.",
      badge: "⚡ REAL-TIME TTY",
      code: `$ python3 main.py
Enter your name: Bestdio Developer
Hello, Bestdio Developer! Welcome to the interactive sandbox.`
    },
    {
      title: "100% Zero-Cost Cloud Architecture",
      desc: "Engineered from day one to run without expensive AWS/GCP bills. The frontend React UI is delivered via Vercel's global CDN, while the Node.js execution engine runs inside free-tier Linux Docker containers on Render and Koyeb.",
      badge: "🟢 $0.00 FOREVER",
      code: `// Frontend <-> Backend Socket.io Stream
const socket = io("https://cloud-ide-backend.onrender.com");
socket.emit("start_terminal", { language: "python", code });`
    },
    {
      title: "10+ Multi-Language Compiler Suite",
      desc: "Every sandbox comes pre-equipped with industry-standard compilers and runtimes: GCC (C/C++), OpenJDK 17 (Java), Python 3.11, Rustc, Go 1.21, Node.js 20, PHP 8.2, and Ruby. Switch languages instantly with zero setup.",
      badge: "📦 MULTI-LANGUAGE",
      code: `RUN apt-get update && apt-get install -y \\
    gcc g++ default-jdk python3 nodejs rustc golang php ruby`
    },
    {
      title: "Adaptive Responsive Code Editors",
      desc: "On desktop computers, enjoy the full power of VS Code's Monaco Editor with syntax highlighting, auto-indentation, and smooth scrolling. On mobile phones and tablets, the interface seamlessly transitions to CodeMirror 6 for touch-optimized coding.",
      badge: "📱 DESKTOP & MOBILE",
      code: `{isDesktop ? (
  <MonacoEditor language="python" theme="vs-dark" />
) : (
  <CodeMirror extensions={[python()]} theme="dark" />
)}`
    }
  ];

  return (
    <div className="animate-fade-in" style={{ padding: "60px 0 100px" }}>
      <div className="marketing-container">
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "80px", maxWidth: "800px", margin: "0 auto 80px" }}>
          <div className="bestdio-badge" style={{ marginBottom: "16px" }}>
            🛠️ TECHNICAL ARCHITECTURE
          </div>
          <h1 style={{ fontSize: "42px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>
            Engineered for <span className="hero-gradient-text">Zero Latency</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: "1.6" }}>
            Discover how Bestdio Company built a production-grade cloud development environment that supports true line-by-line TTY execution on a 100% free technology stack.
          </p>
        </div>

        {/* Feature List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {features.map((feat, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              style={{
                padding: "40px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "32px",
                alignItems: "center"
              }}
            >
              <div>
                <span style={{
                  display: "inline-block",
                  background: "rgba(0, 242, 254, 0.15)",
                  color: "var(--bestdio-cyan)",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: 800,
                  marginBottom: "16px"
                }}>
                  {feat.badge}
                </span>
                <h3 style={{ fontSize: "26px", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
                  {feat.title}
                </h3>
                <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "24px" }}>
                  {feat.desc}
                </p>
                <button
                  onClick={() => setCurrentView("ide")}
                  className="btn btn-primary"
                  style={{ padding: "10px 24px", fontSize: "14px" }}
                >
                  <span>⚡ Test Feature in CloudIDE</span>
                </button>
              </div>

              <div style={{
                background: "var(--bg-dark)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "20px",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--bestdio-cyan)",
                overflowX: "auto",
                boxShadow: "inset 0 2px 10px rgba(0, 0, 0, 0.5)"
              }}>
                <pre style={{ margin: 0, whiteSpace: "pre-wrap", lineHeight: "1.5" }}>
                  {feat.code}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
