import React from "react";

export default function PricingPage({ setCurrentView }) {
  const plans = [
    {
      name: "Community Explorer",
      price: "$0",
      period: "forever",
      desc: "Perfect for students, hobbyists, and open-source contributors.",
      features: [
        "✅ 10+ Supported Languages (Python, C++, Rust, Go, Java, Node.js)",
        "✅ True Interactive TTY Terminal (node-pty)",
        "✅ Isolated Linux Docker Container per Session",
        "✅ Unlimited Code Template Launches",
        "✅ Monaco Editor & Mobile CodeMirror Support",
        "✅ Zero Credit Card or Login Required"
      ],
      cta: "⚡ Start Coding Free",
      popular: true
    },
    {
      name: "Enterprise Self-Hosted",
      price: "$0",
      period: "open source",
      desc: "Deploy on your own AWS, GCP, or Kubernetes infrastructure.",
      features: [
        "✅ 100% Open Source Codebase under Bestdio Company",
        "✅ Custom Dockerfile Language Extensions",
        "✅ Dedicated WebSocket Server Configuration",
        "✅ Full Root Access inside Containers",
        "✅ Custom Brand & Theme Configuration",
        "✅ Community GitHub Support"
      ],
      cta: "📂 View GitHub Repo",
      popular: false,
      link: "https://github.com/bestdio-bit"
    }
  ];

  const comparison = [
    { feat: "Monthly Price", bestdio: "$0.00 (Free Forever)", codespaces: "$0.18 / hour after 120h", replit: "$20.00 / month", gitpod: "$9.00 / month" },
    { feat: "Interactive TTY stdin", bestdio: "✅ Yes (Xterm.js + node-pty)", codespaces: "✅ Yes", replit: "✅ Yes", gitpod: "✅ Yes" },
    { feat: "Login / Credit Card Required", bestdio: "❌ No Login Required", codespaces: "⚠️ GitHub Account + Card", replit: "⚠️ Account Required", gitpod: "⚠️ Account Required" },
    { feat: "Supported Compilers", bestdio: "10+ Pre-installed", codespaces: "Depends on devcontainer", replit: "Various", gitpod: "Various" },
    { feat: "Self-Hosting Option", bestdio: "✅ 100% Free Docker & Node", codespaces: "❌ Proprietary", replit: "❌ Proprietary", gitpod: "⚠️ Enterprise Only" }
  ];

  return (
    <div className="animate-fade-in" style={{ padding: "60px 0 100px" }}>
      <div className="marketing-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px", maxWidth: "800px", margin: "0 auto" }}>
          <div className="bestdio-badge" style={{ marginBottom: "16px" }}>
            🟢 100% FREE FOREVER PHILOSOPHY
          </div>
          <h1 style={{ fontSize: "42px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>
            Zero Cost. <span className="hero-gradient-text">Zero Paywalls.</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: "1.6" }}>
            Bestdio Company believes basic software engineering tools should be universally accessible. 
            We leverage open-source Linux Docker containers and edge CDNs to keep CloudIDE 100% free.
          </p>
        </div>

        {/* Pricing Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "30px",
          marginBottom: "80px"
        }}>
          {plans.map((p, idx) => (
            <div key={idx} className="glass-card" style={{
              padding: "40px",
              border: p.popular ? "2px solid var(--bestdio-cyan)" : "1px solid var(--border)",
              position: "relative",
              display: "flex",
              flexDirection: "column"
            }}>
              {p.popular && (
                <div style={{
                  position: "absolute",
                  top: "-12px",
                  right: "30px",
                  background: "linear-gradient(135deg, var(--bestdio-emerald), var(--bestdio-cyan))",
                  color: "#000",
                  padding: "4px 16px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 800,
                  textTransform: "uppercase"
                }}>
                  ⭐ Most Popular
                </div>
              )}
              <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>
                {p.name}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "24px", minHeight: "40px" }}>
                {p.desc}
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "32px" }}>
                <span style={{ fontSize: "48px", fontWeight: 900, color: "var(--bestdio-cyan)", fontFamily: "var(--font-mono)" }}>
                  {p.price}
                </span>
                <span style={{ fontSize: "16px", color: "var(--text-muted)", fontWeight: 600 }}>
                  / {p.period}
                </span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px", flex: 1 }}>
                {p.features.map((f, i) => (
                  <li key={i} style={{ fontSize: "14px", color: "var(--text-main)", display: "flex", alignItems: "center", gap: "10px" }}>
                    {f}
                  </li>
                ))}
              </ul>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ width: "100%", padding: "14px", fontSize: "15px", textDecoration: "none", textAlign: "center" }}
                >
                  {p.cta}
                </a>
              ) : (
                <button
                  onClick={() => setCurrentView("ide")}
                  className="btn btn-bestdio"
                  style={{ width: "100%", padding: "14px", fontSize: "15px" }}
                >
                  {p.cta}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="glass-card" style={{ padding: "40px", overflowX: "auto" }}>
          <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#fff", marginBottom: "24px", textAlign: "center" }}>
            How Bestdio CloudIDE Compares
          </h3>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", minWidth: "700px" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid var(--border)", color: "var(--text-muted)", fontSize: "13px", textTransform: "uppercase" }}>
                <th style={{ padding: "16px" }}>Feature / Service</th>
                <th style={{ padding: "16px", color: "var(--bestdio-cyan)" }}>⚡ Bestdio CloudIDE</th>
                <th style={{ padding: "16px" }}>GitHub Codespaces</th>
                <th style={{ padding: "16px" }}>Replit</th>
                <th style={{ padding: "16px" }}>Gitpod</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)", fontSize: "14px" }}>
                  <td style={{ padding: "16px", fontWeight: 700, color: "#fff" }}>{row.feat}</td>
                  <td style={{ padding: "16px", fontWeight: 800, color: "var(--bestdio-emerald)", background: "rgba(16, 185, 129, 0.05)" }}>{row.bestdio}</td>
                  <td style={{ padding: "16px", color: "var(--text-muted)" }}>{row.codespaces}</td>
                  <td style={{ padding: "16px", color: "var(--text-muted)" }}>{row.replit}</td>
                  <td style={{ padding: "16px", color: "var(--text-muted)" }}>{row.gitpod}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
