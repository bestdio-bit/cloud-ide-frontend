import React from "react";

export default function PricingPage({ setCurrentView }) {
  return (
    <div className="animate-fade-in" style={{ padding: "60px 0 100px" }}>
      <div className="marketing-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto" }}>
          <div className="bestdio-badge" style={{ marginBottom: "16px" }}>
            💎 ZERO COST PHILOSOPHY
          </div>
          <h1 style={{ fontSize: "42px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>
            100% Free Forever. <br />
            <span className="hero-gradient-text">No Paywalls. No Limits.</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: "1.6" }}>
            We believe access to high-performance computing and developer tools should be universal. 
            That is why <strong>PulseIDE</strong> is completely free for all developers, students, and engineers.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "0 auto 80px"
        }}>
          {/* Free Forever Plan */}
          <div className="glass-card" style={{
            padding: "40px",
            border: "2px solid var(--bestdio-cyan)",
            position: "relative",
            background: "linear-gradient(180deg, rgba(0, 242, 254, 0.08), rgba(15, 23, 42, 0.6))"
          }}>
            <div style={{
              position: "absolute",
              top: "-14px",
              right: "30px",
              background: "linear-gradient(135deg, var(--bestdio-emerald), var(--bestdio-cyan))",
              color: "#000",
              fontWeight: 900,
              fontSize: "12px",
              padding: "4px 14px",
              borderRadius: "20px",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}>
              RECOMMENDED FOR EVERYONE
            </div>

            <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>
              PulseIDE Cloud Workspace
            </h3>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "24px" }}>
              Full access to our interactive multi-language terminal streams and Docker sandbox.
            </p>

            <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "30px" }}>
              <span style={{ fontSize: "56px", fontWeight: 900, color: "#fff" }}>$0</span>
              <span style={{ fontSize: "16px", color: "var(--text-muted)", fontWeight: 600 }}>/ forever</span>
            </div>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px", fontSize: "15px", color: "var(--text-main)" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: "var(--bestdio-emerald)", fontWeight: 900 }}>✓</span>
                <span><strong>All 10+ Programming Languages</strong> (Python, C++, Rust, Go, Java...)</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: "var(--bestdio-emerald)", fontWeight: 900 }}>✓</span>
                <span><strong>Real-Time TTY Streams</strong> (Interactive stdin/stdout/stderr)</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: "var(--bestdio-emerald)", fontWeight: 900 }}>✓</span>
                <span><strong>Docker Linux Sandboxing</strong> (Debian container isolation)</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: "var(--bestdio-emerald)", fontWeight: 900 }}>✓</span>
                <span><strong>Phone & Laptop Download</strong> (Standalone PWA Launcher)</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ color: "var(--bestdio-emerald)", fontWeight: 900 }}>✓</span>
                <span><strong>Zero Credit Card Required</strong> (No signup walls)</span>
              </li>
            </ul>

            <button
              onClick={() => setCurrentView("ide")}
              className="btn btn-bestdio"
              style={{ width: "100%", padding: "16px", fontSize: "16px", fontWeight: 800, justifyContent: "center" }}
            >
              <span>⚡ Start Coding Now — It's Free</span>
            </button>
          </div>

          {/* Comparison Card */}
          <div className="glass-card" style={{ padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
              How do we compare to paid cloud IDEs?
            </h3>
            <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "24px" }}>
              Other cloud workspaces like GitHub Codespaces, Replit, or Gitpod limit free tiers to a few hours per month or charge steep subscription fees for interactive terminals.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "13px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "12px", background: "var(--bg-surface)", borderRadius: "8px" }}>
                <span style={{ color: "var(--text-main)" }}>GitHub Codespaces</span>
                <span style={{ color: "#f87171", fontWeight: 700 }}>60 hours free / then paid</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "12px", background: "var(--bg-surface)", borderRadius: "8px" }}>
                <span style={{ color: "var(--text-main)" }}>Replit Core</span>
                <span style={{ color: "#f87171", fontWeight: 700 }}>$20 / month</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "12px", background: "rgba(0, 242, 254, 0.1)", border: "1px solid var(--bestdio-cyan)", borderRadius: "8px" }}>
                <span style={{ color: "#fff", fontWeight: 800 }}>⚡ PulseIDE</span>
                <span style={{ color: "var(--bestdio-emerald)", fontWeight: 800 }}>100% Free Forever</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
