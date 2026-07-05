import React from "react";

export default function DocsPage({ setCurrentView }) {
  return (
    <div className="animate-fade-in" style={{ padding: "60px 0 100px" }}>
      <div className="marketing-container" style={{ maxWidth: "900px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="bestdio-badge" style={{ marginBottom: "16px" }}>
            📚 DOCUMENTATION & TUTORIALS
          </div>
          <h1 style={{ fontSize: "42px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>
            Getting Started with <span className="hero-gradient-text">PulseIDE</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: "1.6" }}>
            Learn how to handle interactive standard input, customize compiler flags, and install PulseIDE on your phone or laptop.
          </p>
        </div>

        {/* Section 1: Interactive TTY */}
        <div className="glass-card" style={{ padding: "40px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
            1. Using Interactive Standard Input
          </h2>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "20px" }}>
            Because PulseIDE streams directly to a live Linux pseudo-terminal, you can use standard input functions just like you would on your local computer's terminal! When your program calls an input function, execution pauses until you type into the interactive terminal box and press <kbd style={{ background: "var(--bg-raised)", padding: "2px 6px", borderRadius: "4px", color: "#fff" }}>Enter</kbd>.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            <div style={{ background: "#05070b", padding: "16px", borderRadius: "8px", border: "1px solid var(--border)" }}>
              <div style={{ color: "var(--bestdio-cyan)", fontWeight: 700, fontSize: "13px", marginBottom: "8px" }}>🐍 Python 3</div>
              <pre style={{ margin: 0, fontSize: "12px", fontFamily: "var(--font-mono)", color: "#e2e8f0" }}>
                {`name = input("Enter your name: ")\nprint(f"Hello, {name}!")`}
              </pre>
            </div>
            <div style={{ background: "#05070b", padding: "16px", borderRadius: "8px", border: "1px solid var(--border)" }}>
              <div style={{ color: "var(--bestdio-cyan)", fontWeight: 700, fontSize: "13px", marginBottom: "8px" }}>⚡ C++17</div>
              <pre style={{ margin: 0, fontSize: "12px", fontFamily: "var(--font-mono)", color: "#e2e8f0" }}>
                {`int age;\nstd::cout << "Enter age: ";\nstd::cin >> age;`}
              </pre>
            </div>
            <div style={{ background: "#05070b", padding: "16px", borderRadius: "8px", border: "1px solid var(--border)" }}>
              <div style={{ color: "var(--bestdio-cyan)", fontWeight: 700, fontSize: "13px", marginBottom: "8px" }}>☕ Java 17</div>
              <pre style={{ margin: 0, fontSize: "12px", fontFamily: "var(--font-mono)", color: "#e2e8f0" }}>
                {`Scanner sc = new Scanner(System.in);\nString city = sc.nextLine();`}
              </pre>
            </div>
          </div>
        </div>

        {/* Section 2: Standalone PWA Installation */}
        <div className="glass-card" style={{ padding: "40px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
            2. Installing on Phone & Laptop (Direct IDE Launch)
          </h2>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "20px" }}>
            You can install PulseIDE as a standalone desktop or mobile application. When installed, clicking the app icon will bypass marketing pages and open <strong>directly into the coding workspace</strong>!
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "14px", color: "var(--text-main)" }}>
            <div style={{ padding: "16px", background: "rgba(16, 185, 129, 0.1)", borderLeft: "4px solid var(--bestdio-emerald)", borderRadius: "0 8px 8px 0" }}>
              <strong style={{ color: "#fff" }}>💻 Laptop / Desktop (Chrome, Edge, Brave):</strong> Look for the install icon (➕ or 💻) in the top right of your browser's URL address bar, or click "📥 Download App" in our navigation bar!
            </div>
            <div style={{ padding: "16px", background: "rgba(0, 242, 254, 0.1)", borderLeft: "4px solid var(--bestdio-cyan)", borderRadius: "0 8px 8px 0" }}>
              <strong style={{ color: "#fff" }}>📱 iPhone / iPad (Safari):</strong> Tap the <strong>Share</strong> button at the bottom of Safari, scroll down, and select <strong>"Add to Home Screen"</strong>.
            </div>
            <div style={{ padding: "16px", background: "rgba(167, 139, 250, 0.1)", borderLeft: "4px solid #a78bfa", borderRadius: "0 8px 8px 0" }}>
              <strong style={{ color: "#fff" }}>🤖 Android Phone / Tablet (Chrome):</strong> Tap the 3-dot menu (⋮) in Chrome and select <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.
            </div>
          </div>
        </div>

        {/* Section 3: Docker Sandbox Rules */}
        <div className="glass-card" style={{ padding: "40px", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
            3. Sandbox Security & Limits
          </h2>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "20px" }}>
            To ensure zero latency and fair usage for all developers, our Docker sandboxing system enforces the following safety quotas:
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px", color: "var(--text-main)" }}>
            <li>• <strong>RAM Allocation:</strong> 512 MB maximum memory per container.</li>
            <li>• <strong>CPU Quota:</strong> 50% single-core processing cap.</li>
            <li>• <strong>Execution Timeout:</strong> Process execution automatically terminates after 60 seconds of inactivity or infinite loop.</li>
          </ul>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => setCurrentView("ide")}
            className="btn btn-bestdio"
            style={{ padding: "16px 40px", fontSize: "18px", fontWeight: 800 }}
          >
            <span>⚡ Launch PulseIDE Workspace</span>
          </button>
        </div>
      </div>
    </div>
  );
}
