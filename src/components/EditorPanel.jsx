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
  const [activeTab, setActiveTab] = useState("code"); // 'code' | 'scratchpad' | 'notes'
  const [scratchpadCode, setScratchpadCode] = useState("// Multi-File Scratchpad\n// Use this space to test snippets or draft secondary algorithms.\n\nfunction quickMath(a, b) {\n  return a * b + 42;\n}\n");
  const [notesText, setNotesText] = useState("# Project Notes & Architecture\n\n- [x] Line-by-line interactive terminal (Xterm.js)\n- [x] Socket.io real-time bidirectional stream\n- [x] Monaco Editor on Desktop / CodeMirror on Mobile\n- [ ] Ready for deployment to Vercel & Render!\n");

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 850);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentLangObj = LANGUAGES.find((l) => l.id === selectedLang) || LANGUAGES[0];
  const filename = `main.${currentLangObj.ext || "js"}`;
  const lineCount = code.split("\n").length;

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
      {/* Editor Header: File Tabs & Metadata */}
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
        {/* File Tree / Tabs */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px", height: "100%" }}>
          <button
            onClick={() => setActiveTab("code")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "0 14px",
              height: "100%",
              background: activeTab === "code" ? "var(--bg-dark)" : "transparent",
              color: activeTab === "code" ? "var(--text-main)" : "var(--text-muted)",
              borderTop: activeTab === "code" ? "2px solid var(--accent-cyan)" : "2px solid transparent",
              borderBottom: "none",
              borderLeft: "none",
              borderRight: "none",
              fontWeight: 600,
              fontSize: "13px",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              transition: "all 0.15s"
            }}
          >
            <span>{currentLangObj.icon}</span>
            <span>{filename}</span>
          </button>

          <button
            onClick={() => setActiveTab("scratchpad")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "0 14px",
              height: "100%",
              background: activeTab === "scratchpad" ? "var(--bg-dark)" : "transparent",
              color: activeTab === "scratchpad" ? "var(--text-main)" : "var(--text-muted)",
              borderTop: activeTab === "scratchpad" ? "2px solid var(--accent-purple)" : "2px solid transparent",
              borderBottom: "none",
              borderLeft: "none",
              borderRight: "none",
              fontWeight: 600,
              fontSize: "13px",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              transition: "all 0.15s"
            }}
          >
            <span>📝</span>
            <span>scratchpad.js</span>
          </button>

          <button
            onClick={() => setActiveTab("notes")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "0 14px",
              height: "100%",
              background: activeTab === "notes" ? "var(--bg-dark)" : "transparent",
              color: activeTab === "notes" ? "var(--text-main)" : "var(--text-muted)",
              borderTop: activeTab === "notes" ? "2px solid var(--accent-green)" : "2px solid transparent",
              borderBottom: "none",
              borderLeft: "none",
              borderRight: "none",
              fontWeight: 600,
              fontSize: "13px",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              transition: "all 0.15s"
            }}
          >
            <span>📑</span>
            <span>notes.md</span>
          </button>
        </div>

        {/* Editor Metadata */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "12px", color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
          <span style={{ background: "rgba(56, 189, 248, 0.1)", color: "var(--accent-cyan)", padding: "2px 8px", borderRadius: "10px", fontWeight: 700, fontSize: "11px" }}>
            {isDesktop ? "💻 Monaco Editor" : "📱 CodeMirror"}
          </span>
          {activeTab === "code" && <span>{lineCount} lines | {code.length} chars</span>}
        </div>
      </div>

      {/* Editor Body */}
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        {activeTab === "code" && (
          isDesktop ? (
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
          )
        )}

        {activeTab === "scratchpad" && (
          isDesktop ? (
            <Editor
              height="100%"
              language="javascript"
              value={scratchpadCode}
              onChange={(val) => setScratchpadCode(val || "")}
              theme="vs-dark"
              options={{
                fontSize: 14,
                fontFamily: "'JetBrains Mono', monospace",
                minimap: { enabled: false },
                automaticLayout: true,
                scrollBeyondLastLine: false,
                padding: { top: 16 }
              }}
            />
          ) : (
            <div style={{ height: "100%", overflowY: "auto" }}>
              <CodeMirror
                value={scratchpadCode}
                height="100%"
                theme="dark"
                extensions={[javascript()]}
                onChange={(val) => setScratchpadCode(val || "")}
                style={{ fontSize: "14px", fontFamily: "var(--font-mono)" }}
              />
            </div>
          )
        )}

        {activeTab === "notes" && (
          <textarea
            value={notesText}
            onChange={(e) => setNotesText(e.target.value)}
            placeholder="Write your project notes or TODO checklist here..."
            style={{
              width: "100%",
              height: "100%",
              background: "var(--bg-dark)",
              color: "var(--text-main)",
              border: "none",
              outline: "none",
              padding: "20px",
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              lineHeight: "1.6",
              resize: "none"
            }}
          />
        )}
      </div>
    </div>
  );
}
