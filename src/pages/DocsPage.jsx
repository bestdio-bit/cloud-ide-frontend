import React from "react";

export default function DocsPage({ setCurrentView }) {
  const sections = [
    {
      title: "1. Getting Started with Interactive TTY Execution",
      content: `Unlike traditional online code evaluators that execute your script asynchronously and only return the final output block, Bestdio CloudIDE connects your browser directly to a live pseudo-terminal process (node-pty) via Socket.io. This means you can write scripts that prompt for user input in real time!`,
      code: `# Python Example with Interactive Input
name = input("Please enter your name: ")
age = int(input("Please enter your age: "))

print(f"Hello {name}, in 5 years you will be {age + 5} years old!")`
    },
    {
      title: "2. Standard Input in C++ and Java",
      content: `Our Linux Docker container comes pre-equipped with GCC and OpenJDK 17. When you run C++ or Java programs that read from standard input, simply click inside the terminal panel on the right after hitting Run Code and type your response!`,
      code: `// Java Scanner Example
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter two integers separated by space: ");
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        System.out.println("Sum = " + (a + b));
        scanner.close();
    }
}`
    },
    {
      title: "3. Connecting Custom Cloud Backend Servers",
      content: `By default, the CloudIDE frontend connects to your live Render or Koyeb Docker container. If you want to connect to a local development server or your own self-hosted backend on AWS/GCP, click the "● Server Online" / "⚙️" status badge in the top right navbar. Enter your custom WebSocket URL (e.g., http://localhost:5000) and click Save & Connect.`,
      code: `// Example Socket.io Server Configuration URL
https://cloud-ide-backend-bestdio.onrender.com
// or Local Testing:
http://localhost:5000`
    },
    {
      title: "4. Supported Languages & Extensions",
      content: `Bestdio CloudIDE automatically manages filename extensions and compiler flags for all 10+ supported languages:
• Python 3 (.py) -> python3 -u main.py
• C++17 (.cpp) -> g++ -O2 -std=c++17 main.cpp -o main && ./main
• Rust (.rs) -> rustc main.rs && ./main
• Java (.java) -> javac Main.java && java Main
• Go (.go) -> go run main.go
• Node.js (.js) -> node main.js`,
      code: `// All compilers run inside an ephemeral Debian Linux Docker container
// guaranteeing 100% isolation and security.`
    }
  ];

  return (
    <div className="animate-fade-in" style={{ padding: "60px 0 100px" }}>
      <div className="marketing-container" style={{ maxWidth: "960px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="bestdio-badge" style={{ marginBottom: "16px" }}>
            📚 DOCUMENTATION & TUTORIALS
          </div>
          <h1 style={{ fontSize: "42px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>
            Bestdio <span className="hero-gradient-text">Developer Guides</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: "1.6" }}>
            Learn how to leverage true line-by-line terminal interactivity, configure custom WebSocket servers, and master multi-language cloud execution.
          </p>
        </div>

        {/* Documentation Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {sections.map((sec, idx) => (
            <div key={idx} className="glass-card" style={{ padding: "40px" }}>
              <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
                {sec.title}
              </h3>
              <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "24px", whiteSpace: "pre-line" }}>
                {sec.content}
              </p>
              <div style={{
                background: "#05070b",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                padding: "20px",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--bestdio-cyan)",
                overflowX: "auto"
              }}>
                <pre style={{ margin: 0 }}>
                  {sec.code}
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <button
            onClick={() => setCurrentView("ide")}
            className="btn btn-bestdio"
            style={{ padding: "16px 40px", fontSize: "16px" }}
          >
            <span>⚡ Launch CloudIDE Workspace</span>
          </button>
        </div>
      </div>
    </div>
  );
}
