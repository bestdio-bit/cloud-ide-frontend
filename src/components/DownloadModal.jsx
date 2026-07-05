import React, { useState } from "react";

export default function DownloadModal({ isOpen, onClose }) {
  const [platform, setPlatform] = useState("desktop"); // 'desktop' | 'mobile'

  if (!isOpen) return null;

  const handleNativeInstall = () => {
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt();
      window.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        }
        window.deferredPrompt = null;
        onClose();
      });
    } else {
      alert("Native automatic prompt is currently unavailable or already installed. Please use the manual 1-click guide below!");
    }
  };

  const handleDownloadShortcut = () => {
    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <title>Tilde ~ Workspace Launcher</title>
  <meta http-equiv="refresh" content="0;url=${window.location.origin}/?mode=ide" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="background:#030508;color:#fff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;margin:0;">
  <div style="background:linear-gradient(135deg, #38bdf8, #818cf8, #c084fc);width:76px;height:76px;border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:42px;font-weight:900;color:#000;margin-bottom:24px;box-shadow:0 0 40px rgba(56,189,248,0.5);">~</div>
  <div style="display:flex;align-items:baseline;margin-bottom:12px;">
    <h2 style="margin:0;font-size:32px;font-weight:900;letterSpacing:-1px;">Tilde</h2>
    <span style="font-size:12px;color:#38bdf8;font-weight:800;vertical-align:super;margin-left:5px;background:rgba(56,189,248,0.15);padding:3px 8px;border-radius:10px;border:1px solid rgba(56,189,248,0.3);">by bestdio</span>
  </div>
  <p style="color:#94a3b8;font-size:14px;font-family:monospace;">⚡ Initializing Zero-Latency Workspace...</p>
  <script>window.location.href = "${window.location.origin}/?mode=ide";</script>
</body>
</html>`;
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Tilde-Workspace-Launcher.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(5, 7, 11, 0.85)",
      backdropFilter: "blur(12px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      padding: "20px"
    }}>
      <div className="glass-card animate-fade-in" style={{
        maxWidth: "560px",
        width: "100%",
        padding: "36px",
        position: "relative",
        border: "1px solid rgba(56, 189, 248, 0.4)",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(56, 189, 248, 0.15)",
        background: "linear-gradient(180deg, rgba(15, 23, 42, 0.9), rgba(5, 7, 11, 0.95))"
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid var(--border)",
            color: "var(--text-muted)",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            fontSize: "16px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s"
          }}
          title="Close Modal"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
          <div style={{
            background: "linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)",
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            fontWeight: 900,
            color: "#000",
            boxShadow: "0 4px 20px rgba(56, 189, 248, 0.4)"
          }}>
            ~
          </div>
          <div>
            <h3 style={{ fontSize: "24px", fontWeight: 900, color: "#fff", margin: 0 }}>
              Install Tilde Workspace
            </h3>
            <span style={{ fontSize: "13px", color: "#38bdf8", fontWeight: 600 }}>
              Zero-latency cloud coding on any device
            </span>
          </div>
        </div>

        <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "24px" }}>
          Install Tilde as an offline-accessible standalone app on your laptop or mobile phone. 
          When launched, it bypasses marketing screens and opens <strong>directly into your live IDE workspace</strong>!
        </p>

        {/* Native PWA Prompt Banner (If Available) */}
        {window.deferredPrompt && (
          <div style={{
            padding: "16px",
            background: "linear-gradient(90deg, rgba(56, 189, 248, 0.15), rgba(129, 140, 248, 0.15))",
            border: "1px solid #38bdf8",
            borderRadius: "12px",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap"
          }}>
            <div>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: "14px" }}>⚡ Native App Available</div>
              <div style={{ color: "var(--text-muted)", fontSize: "12px" }}>1-click automatic installation for your browser.</div>
            </div>
            <button
              onClick={handleNativeInstall}
              className="btn btn-primary"
              style={{ padding: "8px 18px", fontSize: "13px", fontWeight: 800 }}
            >
              <span>Install App Now</span>
            </button>
          </div>
        )}

        {/* Platform Selector Tabs */}
        <div style={{
          display: "flex",
          background: "rgba(0, 0, 0, 0.4)",
          padding: "4px",
          borderRadius: "10px",
          marginBottom: "20px",
          border: "1px solid var(--border)"
        }}>
          <button
            onClick={() => setPlatform("desktop")}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              background: platform === "desktop" ? "rgba(56, 189, 248, 0.2)" : "transparent",
              color: platform === "desktop" ? "#38bdf8" : "var(--text-muted)",
              fontWeight: 700,
              fontSize: "13px",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            💻 Laptop / Desktop
          </button>
          <button
            onClick={() => setPlatform("mobile")}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              background: platform === "mobile" ? "rgba(167, 139, 250, 0.2)" : "transparent",
              color: platform === "mobile" ? "#a78bfa" : "var(--text-muted)",
              fontWeight: 700,
              fontSize: "13px",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            📱 iOS / Android Phone
          </button>
        </div>

        {/* Platform Guide */}
        {platform === "desktop" ? (
          <div style={{ background: "rgba(0, 0, 0, 0.3)", padding: "18px", borderRadius: "12px", border: "1px solid var(--border)", marginBottom: "24px" }}>
            <h4 style={{ color: "#fff", fontSize: "14px", fontWeight: 700, marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span>🖥️ Windows, macOS & Linux Chrome/Edge</span>
            </h4>
            <ol style={{ margin: 0, paddingLeft: "20px", color: "var(--text-muted)", fontSize: "13px", lineHeight: "1.7" }}>
              <li>Look at the top right of your browser's URL address bar.</li>
              <li>Click the install icon (<strong style={{ color: "#fff" }}>💻 Install Tilde</strong> or <strong style={{ color: "#fff" }}>➕</strong>).</li>
              <li>Confirm installation. Tilde will open in its own sleek native window!</li>
            </ol>
          </div>
        ) : (
          <div style={{ background: "rgba(0, 0, 0, 0.3)", padding: "18px", borderRadius: "12px", border: "1px solid var(--border)", marginBottom: "24px" }}>
            <h4 style={{ color: "#fff", fontSize: "14px", fontWeight: 700, marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span>📲 iPhone (Safari) & Android (Chrome)</span>
            </h4>
            <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--text-muted)", fontSize: "13px", lineHeight: "1.7" }}>
              <li><strong style={{ color: "#fff" }}>iOS Safari:</strong> Tap the <strong>Share</strong> icon (square with arrow up), scroll down, and tap <strong style={{ color: "#38bdf8" }}>"Add to Home Screen"</strong>.</li>
              <li><strong style={{ color: "#fff" }}>Android:</strong> Tap the 3-dot menu (⋮) in Chrome and select <strong style={{ color: "#a78bfa" }}>"Install app"</strong> or <strong style={{ color: "#a78bfa" }}>"Add to Home screen"</strong>.</li>
            </ul>
          </div>
        )}

        {/* Universal 1-Click Launcher Download */}
        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px"
        }}>
          <div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: "13px" }}>⚡ Universal Shortcut Launcher</div>
            <div style={{ color: "var(--text-faint)", fontSize: "11px" }}>Download an offline HTML shortcut that opens directly into the IDE.</div>
          </div>
          <button
            onClick={handleDownloadShortcut}
            className="btn btn-secondary"
            style={{ padding: "10px 18px", fontSize: "13px", fontWeight: 700 }}
          >
            <span>📥 Download Launcher (.html)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
