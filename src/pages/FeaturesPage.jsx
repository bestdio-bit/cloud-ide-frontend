import React from "react";

export default function FeaturesPage({ setCurrentView }) {
  return (
    <div className="animate-fade-in" style={{ padding: "60px 0 100px" }}>
      <div className="marketing-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto" }}>
          <div className="bestdio-badge" style={{ marginBottom: "16px" }}>
            ⚙️ ENGINE ARCHITECTURE & SPECIFICATIONS
          </div>
          <h1 style={{ fontSize: "42px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>
            Why <span className="hero-gradient-text">PulseIDE</span> Stand Out
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: "1.6" }}>
            Engineered from the ground up for zero-latency interactive terminal execution, memory-safe sandboxing, and seamless cross-platform performance.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "30px",
          marginBottom: "80px"
        }}>
          {/* Card 1 */}
          <div className="glass-card" style={{ padding: "36px" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "rgba(0, 242, 254, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              marginBottom: "24px"
            }}>
              🐚
            </div>
            <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>
              True Interactive TTY (node-pty)
            </h3>
            <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "20px" }}>
              Traditional web code editors execute scripts in batch mode—meaning you cannot provide dynamic standard input when prompted. 
              <strong>PulseIDE</strong> spawns a genuine Linux pseudo-terminal (`node-pty`) connected via bidirectional WebSocket streams.
            </p>
            <div style={{
              background: "#05070b",
              padding: "14px",
              borderRadius: "8px",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "#34d399",
              border: "1px solid var(--border)"
            }}>
              <code>$ python3 main.py<br />Enter withdrawal amount: $ 150<br />✅ Deposited $150 successfully!</code>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card" style={{ padding: "36px" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "rgba(16, 185, 129, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              marginBottom: "24px"
            }}>
              🐳
            </div>
            <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>
              Docker Linux Sandboxing
            </h3>
            <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "20px" }}>
              Every code execution session runs inside a secure, ephemeral Docker container running Debian Linux. 
              Your code is isolated with strict CPU, RAM, and network timeouts to prevent resource exhaustion or unauthorized access.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "var(--text-main)" }}>
              <li>✓ Ephemeral Container Lifecycle</li>
              <li>✓ 512MB RAM & 50% CPU Quotas</li>
              <li>✓ Automatic Cleanup on Timeout / Kill</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="glass-card" style={{ padding: "36px" }}>
            <div style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "rgba(167, 139, 250, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              marginBottom: "24px"
            }}>
              💻
            </div>
            <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>
              Dual-Engine Code Editor
            </h3>
            <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "20px" }}>
              On desktop screens, experience the full power of Microsoft's <strong>Monaco Editor</strong> (the core behind VS Code). 
              On mobile phones and tablets, PulseIDE seamlessly switches to a touch-optimized, ultra-fast <strong>CodeMirror 6</strong> engine.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <span className="bestdio-badge" style={{ background: "rgba(167, 139, 250, 0.1)", color: "#a78bfa" }}>Monaco VS Code</span>
              <span className="bestdio-badge" style={{ background: "rgba(167, 139, 250, 0.1)", color: "#a78bfa" }}>CodeMirror 6 Mobile</span>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="glass-card" style={{
          padding: "50px",
          textAlign: "center",
          background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(0, 242, 254, 0.1))",
          border: "1px solid var(--bestdio-cyan)"
        }}>
          <h2 style={{ fontSize: "32px", fontWeight: 900, color: "#fff", marginBottom: "16px" }}>
            Ready to experience zero-latency coding?
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-muted)", marginBottom: "30px", maxWidth: "600px", margin: "0 auto 30px" }}>
            Launch our interactive cloud workspace right now directly in your browser or install it on your device. Zero registration or credit cards required.
          </p>
          <button
            onClick={() => setCurrentView("ide")}
            className="btn btn-bestdio"
            style={{ padding: "16px 40px", fontSize: "18px", fontWeight: 800 }}
          >
            <span>⚡ Launch PulseIDE Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
