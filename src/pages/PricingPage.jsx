import React from "react";

export default function PricingPage({ setCurrentView }) {
  return (
    <div className="animate-fade-in" style={{ padding: "60px 0 100px" }}>
      <div className="marketing-container" style={{ maxWidth: "960px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="tilde-badge" style={{ marginBottom: "16px" }}>
            <span>💎 ZERO-COST DEVELOPER ECOSYSTEM</span>
          </div>
          <h1 style={{ fontSize: "42px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>
            Transparent, <span className="hero-gradient-text">100% Free</span> Cloud TTY
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
            We believe access to high-performance programming environments should never be gated by paywalls or hardware limitations.
          </p>
        </div>

        {/* Pricing Card Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px", marginBottom: "60px" }}>
          {/* Free Forever Tier */}
          <div className="glass-card" style={{
            padding: "40px",
            border: "2px solid var(--tilde-cyan)",
            boxShadow: "0 0 40px rgba(56, 189, 248, 0.2)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div style={{
              position: "absolute",
              top: "-12px",
              right: "24px",
              background: "linear-gradient(135deg, #38bdf8, #818cf8)",
              color: "#000",
              fontWeight: 900,
              fontSize: "11px",
              padding: "4px 12px",
              borderRadius: "12px",
              letterSpacing: "0.5px"
            }}>
              COMMUNITY STANDARD
            </div>

            <div>
              <h3 style={{ fontSize: "24px", fontWeight: 900, color: "#fff", marginBottom: "8px" }}>
                Tilde Cloud Workspace
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "24px" }}>
                Full access to interactive Linux terminals, all 10+ compilers, and zero-latency WebSocket streaming.
              </p>
              <div style={{ fontSize: "48px", fontWeight: 900, color: "#fff", marginBottom: "24px", display: "flex", alignItems: "baseline", gap: "6px" }}>
                <span>$0</span>
                <span style={{ fontSize: "16px", color: "var(--text-muted)", fontWeight: 500 }}>/ forever</span>
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px", fontSize: "14px", color: "var(--text-main)" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "var(--tilde-cyan)", fontWeight: 800 }}>✓</span>
                  <span><strong>Unlimited</strong> interactive terminal sessions</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "var(--tilde-cyan)", fontWeight: 800 }}>✓</span>
                  <span><strong>10+ Compilers:</strong> Python, C++, Java, Rust, Go & more</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "var(--tilde-cyan)", fontWeight: 800 }}>✓</span>
                  <span><strong>Bidirectional TTY:</strong> Supports <code style={{ color: "#38bdf8" }}>input()</code> & <code style={{ color: "#38bdf8" }}>cin</code></span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "var(--tilde-cyan)", fontWeight: 800 }}>✓</span>
                  <span><strong>Standalone App:</strong> Install on Phone & Laptop</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "var(--tilde-cyan)", fontWeight: 800 }}>✓</span>
                  <span><strong>Zero Ads:</strong> Clean, distraction-free IDE</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setCurrentView("ide")}
              className="btn btn-primary animate-glow"
              style={{ width: "100%", padding: "16px", fontSize: "16px", fontWeight: 800 }}
            >
              <span>⚡ Open Free Workspace</span>
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
              <div style={{ display: "flex", justifyContent: "space-between", padding: "12px", background: "rgba(56, 189, 248, 0.1)", border: "1px solid var(--tilde-cyan)", borderRadius: "8px" }}>
                <span style={{ color: "#fff", fontWeight: 800 }}>~ Tilde Workspace</span>
                <span style={{ color: "#34d399", fontWeight: 800 }}>100% Free Forever</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="glass-card" style={{ padding: "48px" }}>
          <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#fff", marginBottom: "24px", textAlign: "center" }}>
            Frequently Asked Questions
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
            <div>
              <h4 style={{ color: "#fff", fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>How can Tilde remain 100% free?</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                We utilize ephemeral Docker container pooling with aggressive idle timeouts (60s) and lightweight Linux Alpine base images. This keeps cloud compute overhead minimal while guaranteeing instant startup speeds.
              </p>
            </div>
            <div>
              <h4 style={{ color: "#fff", fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>Do I need to create an account?</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                No! You can launch immediately into the IDE and execute interactive code without signing up or providing any personal information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
