import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { rust } from "@codemirror/lang-rust";
import { go } from "@codemirror/lang-go";
import { php } from "@codemirror/lang-php";
import { LANGUAGES } from "../constants/languages";

export default function EditorPanel({ selectedLang, code, setCode }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 850);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 850);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentLangObj = LANGUAGES.find((l) => l.id === selectedLang) || LANGUAGES[0];
  const filename = `main.${currentLangObj.ext || "js"}`;
  const lineCount = code.split("\n").length;

  const handleCopy = () => {
    navigator.clipboard.writeText(code || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCodeMirrorExtension = (lang) => {
    switch (lang) {
      case "javascript":
      case "typescript":
        return [javascript({ typescript: lang === "typescript" })];
      case "python":
        return [python()];
      case "c":
      case "cpp":
        return [cpp()];
      case "java":
        return [java()];
      case "rust":
        return [rust()];
      case "go":
        return [go()];
      case "php":
        return [php()];
      default:
        return [javascript()];
    }
  };

  return (
    <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      background: "var(--bg-dark)",
      overflow: "hidden",
      borderRight: isDesktop ? "1px solid var(--border)" : "none",
      minHeight: "300px"
    }}>
      {/* Editor Header: File Tab & Metadata */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "var(--bg-surface)",
        borderBottom: "1px solid var(--border)",
        padding: "0 16px",
        height: "44px",
        flexShrink: 0,
        overflowX: "auto"
      }}>
        {/* File Tab */}
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "0 16px",
              height: "100%",
              background: "var(--bg-dark)",
              color: "var(--text-main)",
              borderTop: "2px solid var(--bestdio-cyan)",
              fontWeight: 600,
              fontSize: "13px",
              fontFamily: "var(--font-mono)"
            }}
          >
            <span>{currentLangObj.icon}</span>
            <span>{filename}</span>
          </div>
        </div>

        {/* Editor Metadata & Copy Code Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "12px", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
          <button
            onClick={handleCopy}
            className="btn btn-secondary"
            style={{
              padding: "4px 10px",
              fontSize: "11px",
              borderRadius: "6px",
              fontWeight: 700,
              borderColor: copied ? "var(--bestdio-emerald)" : "var(--border)",
              color: copied ? "var(--bestdio-emerald)" : "var(--text-main)",
              background: copied ? "rgba(16, 185, 129, 0.15)" : "var(--bg-raised)"
            }}
            title="Copy editor code to clipboard"
          >
            {copied ? "✅ Copied!" : "📋 Copy Code"}
          </button>
          <span style={{ background: "rgba(0, 242, 254, 0.1)", color: "var(--bestdio-cyan)", padding: "2px 8px", borderRadius: "10px", fontWeight: 700, fontSize: "11px" }}>
            {isDesktop ? "💻 Monaco Editor" : "📱 CodeMirror"}
          </span>
          <span>{lineCount} lines | {code.length} chars</span>
        </div>
      </div>

      {/* Editor Body */}
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        {isDesktop ? (
          <Editor
            height="100%"
            language={currentLangObj.monacoLang || "javascript"}
            value={code}
            onChange={(val) => setCode(val || "")}
            theme="vs-dark"
            options={{
              fontSize: 14,
              fontFamily: "'JetBrains Mono', monospace",
              minimap: { enabled: false },
              automaticLayout: true,
              scrollBeyondLastLine: false,
              tabSize: 2,
              wordWrap: "on",
              smoothScrolling: true,
              cursorBlinking: "smooth",
              padding: { top: 16 }
            }}
          />
        ) : (
          <div style={{ height: "100%", overflowY: "auto" }}>
            <CodeMirror
              value={code}
              height="100%"
              theme="dark"
              extensions={getCodeMirrorExtension(selectedLang)}
              onChange={(val) => setCode(val || "")}
              style={{ fontSize: "14px", fontFamily: "var(--font-mono)" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
