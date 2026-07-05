import React, { useState } from "react";

export default function TemplatesPage({ onLaunchTemplate }) {
  const [copiedId, setCopiedId] = useState(null);

  const templates = [
    {
      id: "py-interactive",
      title: "Interactive CLI Prompt",
      lang: "python",
      tag: "PYTHON 3",
      desc: "Demonstrates live bidirectional standard input streaming with time delays and user feedback.",
      code: `import time\n\nprint("⚡ Initializing Tilde Terminal Sandbox...")\ntime.sleep(0.5)\n\nname = input("➜ Enter your developer handle: ")\nprint(f"\\nWelcome to Tilde, {name}! 🚀")\n\nage_str = input("➜ Enter your years of coding experience: ")\ntry:\n    years = int(age_str)\n    print(f"Awesome! {years} years of building great software!")\nexcept ValueError:\n    print("That's a unique coding journey!")\n\nprint("All interactive tests completed successfully.")`
    },
    {
      id: "cpp-algo",
      title: "Competitive Algorithm Runner",
      lang: "cpp",
      tag: "C++17",
      desc: "Standard input/output competitive programming template using fast I/O and STL containers.",
      code: `#include <iostream>\n#include <vector>\n#include <numeric>\n\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    \n    cout << "⚡ Tilde C++17 Competitive Runner\\n";\n    cout << "➜ Enter number of elements: ";\n    int n;\n    if (!(cin >> n)) {\n        n = 5;\n        cout << n << " (defaulted)\\n";\n    }\n    \n    vector<int> nums(n);\n    cout << "➜ Enter " << n << " integers separated by space: ";\n    for(int i = 0; i < n; i++) {\n        if (!(cin >> nums[i])) nums[i] = i * 10;\n    }\n    \n    long long sum = accumulate(nums.begin(), nums.end(), 0LL);\n    cout << "\\n✅ Sum of elements: " << sum << "\\n";\n    return 0;\n}`
    },
    {
      id: "js-async",
      title: "Node.js Async & Streams",
      lang: "javascript",
      tag: "NODE.JS 20",
      desc: "Modern JavaScript asynchronous pattern using readline interface for terminal interactivity.",
      code: `const readline = require('readline');\n\nconst rl = readline.createInterface({\n  input: process.stdin,\n  output: process.stdout\n});\n\nconsole.log("⚡ Tilde Node.js 20 Interactive Environment");\n\nrl.question('➜ What is your favorite programming language? ', (answer) => {\n  console.log(\`\\n🔥 \${answer} is an incredible choice!\`);\n  \n  rl.question('➜ Are you ready to build in the cloud? (yes/no) ', (ready) => {\n    if (ready.toLowerCase().startsWith('y')) {\n      console.log("🚀 Let's deploy some code!");\n    } else {\n      console.log("Take your time, Tilde is always ready when you are!");\n    }\n    rl.close();\n  });\n});`
    },
    {
      id: "rust-cli",
      title: "Rust Systems IO",
      lang: "rust",
      tag: "RUST 1.75",
      desc: "Memory-safe systems programming template demonstrating stdin line reading and error handling.",
      code: `use std::io::{self, Write};\n\nfn main() {\n    println!("⚡ Tilde Rust 1.75 Systems Sandbox");\n    \n    print!("➜ Enter your system architecture (e.g. x86_64, ARM64): ");\n    io::stdout().flush().unwrap();\n    \n    let mut input = String::new();\n    io::stdin().read_line(&mut input).expect("Failed to read line");\n    \n    let arch = input.trim();\n    println!("\\n🛡️ Compiling target optimized for: {}", arch);\n    println!("Memory safety checks passed. Zero null pointers detected.");\n}`
    },
    {
      id: "go-concurrency",
      title: "Go Goroutines & Channels",
      lang: "go",
      tag: "GO 1.21",
      desc: "Concurrent worker pool demonstration with live terminal progress reporting.",
      code: `package main\n\nimport (\n\t"fmt"\n\t"time"\n)\n\nfunc worker(id int, jobs <-chan int, results chan<- int) {\n\tfor j := range jobs {\n\t\tfmt.Printf("👷 Worker %d processing job #%d\\n", id, j)\n\t\ttime.Sleep(time.Millisecond * 300)\n\t\tresults <- j * 2\n\t}\n}\n\nfunc main() {\n\tfmt.Println("⚡ Tilde Go 1.21 Concurrency Engine")\n\t\n\tconst numJobs = 4\n\tjobs := make(chan int, numJobs)\n\tresults := make(chan int, numJobs)\n\n\tfor w := 1; w <= 2; w++ {\n\t\tgo worker(w, jobs, results)\n\t}\n\n\tfor j := 1; j <= numJobs; j++ {\n\t\tjobs <- j\n\t}\n\tclose(jobs)\n\n\tfor a := 1; a <= numJobs; a++ {\n\t\t<-results\n\t}\n\tfmt.Println("\\n✅ All concurrent jobs completed successfully!")\n}`
    },
    {
      id: "java-scanner",
      title: "Java 17 Scanner I/O",
      lang: "java",
      tag: "JAVA 17",
      desc: "Object-oriented terminal application utilizing java.util.Scanner for user input.",
      code: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.println("⚡ Tilde Java 17 OpenJDK Environment");\n        \n        System.out.print("➜ Enter project name: ");\n        String project = scanner.nextLine();\n        \n        System.out.print("➜ Enter version number (e.g. 1.0.0): ");\n        String version = scanner.nextLine();\n        \n        System.out.println("\\n📦 Initializing Java package: " + project + " v" + version);\n        System.out.println("JVM Heap allocation normal. Ready for execution.");\n        scanner.close();\n    }\n}`
    }
  ];

  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="animate-fade-in" style={{ padding: "60px 0 100px" }}>
      <div className="marketing-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="tilde-badge" style={{ marginBottom: "16px" }}>
            <span>📚 CURATED STARTER TEMPLATES</span>
          </div>
          <h1 style={{ fontSize: "42px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>
            Launch Immediately into <span className="hero-gradient-text">Live Code</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
            Select any template below to test Tilde's interactive standard input streaming across different programming languages.
          </p>
        </div>

        {/* Template Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "28px" }}>
          {templates.map((t) => (
            <div
              key={t.id}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden"
              }}
            >
              {/* Card Header */}
              <div style={{
                padding: "24px 24px 16px",
                borderBottom: "1px solid var(--border)",
                background: "rgba(10, 15, 24, 0.4)"
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{
                    background: "rgba(56, 189, 248, 0.15)",
                    color: "var(--tilde-cyan)",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: 800
                  }}>
                    {t.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>
                  {t.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.6", margin: 0 }}>
                  {t.desc}
                </p>
              </div>

              {/* Code Preview Box */}
              <div style={{
                padding: "16px 24px",
                background: "#05070b",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "#cbd5e1",
                lineHeight: "1.6",
                maxHeight: "180px",
                overflowY: "auto",
                borderBottom: "1px solid var(--border)"
              }}>
                <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                  {t.code}
                </pre>
              </div>

              {/* Card Action Footer */}
              <div style={{
                padding: "16px 24px",
                background: "rgba(10, 15, 24, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                flexWrap: "wrap"
              }}>
                <button
                  onClick={() => handleCopy(t.id, t.code)}
                  className="btn btn-secondary"
                  style={{ padding: "8px 16px", fontSize: "13px", fontWeight: 700 }}
                  title="Copy snippet to clipboard"
                >
                  <span>{copiedId === t.id ? "✅ Copied!" : "📋 Copy Code"}</span>
                </button>
                <button
                  onClick={() => onLaunchTemplate(t.lang, t.code)}
                  className="btn btn-primary animate-glow"
                  style={{ padding: "10px 20px", fontSize: "13px", fontWeight: 800, flex: 1 }}
                >
                  <span>⚡ Open Directly in IDE ➜</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
