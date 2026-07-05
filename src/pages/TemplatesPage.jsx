import React, { useState } from "react";

export default function TemplatesPage({ onLaunchTemplate }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyTemplate = (id, codeText) => {
    navigator.clipboard.writeText(codeText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const templates = [
    {
      id: "py-analytics",
      title: "Data Science & Matrix Processing",
      language: "python",
      category: "data",
      badge: "🐍 Python 3",
      desc: "Simulates dataset normalisation and statistical analytics using standard Python data structures and generators.",
      code: `# PulseIDE - Python Data Analytics Template
# Notice: Click "Open Directly in IDE" to run interactively!

def analyze_dataset(data_points):
    print("--- 📊 PulseIDE Data Analytics Pipeline ---")
    total = sum(data_points)
    avg = total / len(data_points)
    variance = sum((x - avg) ** 2 for x in data_points) / len(data_points)
    
    print(f"Dataset Size: {len(data_points)} samples")
    print(f"Mean Value:   {avg:.2f}")
    print(f"Variance:     {variance:.2f}")
    return avg, variance

if __name__ == "__main__":
    sample_data = [45.2, 88.1, 12.4, 99.8, 53.6, 72.0, 31.5]
    analyze_dataset(sample_data)
    
    user_val = input("\nEnter a custom test value to append: ")
    try:
        sample_data.append(float(user_val))
        print("Updated results:")
        analyze_dataset(sample_data)
    except ValueError:
        print("Invalid number format!")
`
    },
    {
      id: "cpp-sorting",
      title: "High-Performance QuickSort & Search",
      language: "cpp",
      category: "algo",
      badge: "⚡ C++17",
      desc: "Optimized in-place QuickSort implementation demonstrating C++ pointers, references, and standard input/output streams.",
      code: `// PulseIDE - C++ High Performance Algorithms
// Notice: Click "Open Directly in IDE" to compile with GCC!

#include <iostream>
#include <vector>
#include <algorithm>

void printVector(const std::vector<int>& vec) {
    for (int val : vec) {
        std::cout << val << " ";
    }
    std::cout << "\\n";
}

int main() {
    std::cout << "--- ⚡ PulseIDE C++ Algorithm Engine ---\\n";
    std::vector<int> numbers = {64, 34, 25, 12, 22, 11, 90};
    
    std::cout << "Original Array: ";
    printVector(numbers);
    
    std::sort(numbers.begin(), numbers.end());
    
    std::cout << "Sorted Array:   ";
    printVector(numbers);
    
    int target;
    std::cout << "\\nEnter a number to search in array: ";
    if (std::cin >> target) {
        if (std::binary_search(numbers.begin(), numbers.end(), target)) {
            std::cout << "✅ Found " << target << " in the sorted array!\\n";
        } else {
            std::cout << "❌ Value " << target << " not present in array.\\n";
        }
    }
    return 0;
}
`
    },
    {
      id: "rust-safety",
      title: "Memory-Safe Ownership & Structs",
      language: "rust",
      category: "systems",
      badge: "🦀 Rust",
      desc: "Demonstrates Rust's zero-cost abstractions, memory ownership rules, and pattern matching without garbage collection.",
      code: `// PulseIDE - Rust Memory Safety Sandbox
// Notice: Click "Open Directly in IDE" to compile with Rustc!

use std::io;

struct ServerNode {
    id: u32,
    hostname: String,
    active: bool,
}

impl ServerNode {
    fn new(id: u32, hostname: &str) -> Self {
        ServerNode {
            id,
            hostname: hostname.to_string(),
            active: true,
        }
    }

    fn status(&self) {
        println!("Node #{}: [{}] -> Status: {}", 
                 self.id, self.hostname, if self.active { "ONLINE 🟢" } else { "OFFLINE 🔴" });
    }
}

fn main() {
    println!("--- 🦀 PulseIDE Rust Systems Engine ---");
    let node1 = ServerNode::new(101, "us-east-cluster-1");
    let node2 = ServerNode::new(102, "eu-central-docker-2");

    node1.status();
    node2.status();

    println!("\\nEnter a command (ping/shutdown): ");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");

    match input.trim() {
        "ping" => println!("🏓 PONG! All systems operational."),
        "shutdown" => println!("⚠️ Graceful shutdown initiated."),
        other => println!("Unknown command: {}", other),
    }
}
`
    },
    {
      id: "java-banking",
      title: "Enterprise OOP Banking Ledger",
      language: "java",
      category: "enterprise",
      badge: "☕ Java 17",
      desc: "Object-oriented banking transaction model utilizing encapsulation, exception handling, and interactive Scanner input.",
      code: `// PulseIDE - Java Enterprise Sandbox
// Notice: Click "Open Directly in IDE" to run with OpenJDK!

import java.util.Scanner;

class BankAccount {
    private String accountNumber;
    private double balance;

    public BankAccount(String accNum, double initialDeposit) {
        this.accountNumber = accNum;
        this.balance = initialDeposit;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("✅ Deposited $" + amount + ". New Balance: $" + balance);
        }
    }

    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("💸 Withdrew $" + amount + ". Remaining Balance: $" + balance);
        } else {
            System.out.println("❌ Insufficient funds! Current Balance: $" + balance);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("--- ☕ PulseIDE Java Enterprise Ledger ---");
        BankAccount account = new BankAccount("PULSE-9942", 500.00);
        
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter withdrawal amount: $");
        if (scanner.hasNextDouble()) {
            double amt = scanner.nextDouble();
            account.withdraw(amt);
        }
        scanner.close();
    }
}
`
    },
    {
      id: "go-concurrency",
      title: "Goroutines & Channel Pipelines",
      language: "go",
      category: "systems",
      badge: "🐹 Go 1.21",
      desc: "Showcases Go's lightweight concurrency model using goroutines and buffered channels for asynchronous job processing.",
      code: `// PulseIDE - Go Concurrency Pipeline
// Notice: Click "Open Directly in IDE" to execute!

package main

import (
	"fmt"
	"time"
)

func worker(id int, jobs <-chan int, results chan<- int) {
	for j := range jobs {
		fmt.Printf("👷 Worker %d processing job #%d\\n", id, j)
		time.Sleep(time.Millisecond * 300)
		results <- j * 2
	}
}

func main() {
	fmt.Println("--- 🐹 PulseIDE Go Concurrency Engine ---")
	jobs := make(chan int, 5)
	results := make(chan int, 5)

	// Start 3 concurrent worker goroutines
	for w := 1; w <= 3; w++ {
		go worker(w, jobs, results)
	}

	// Send 5 jobs
	for j := 1; j <= 5; j++ {
		jobs <- j
	}
	close(jobs)

	// Collect results
	for a := 1; a <= 5; a++ {
		res := <-results
		fmt.Printf("✅ Result received: %d\\n", res)
	}
}
`
    },
    {
      id: "js-async",
      title: "Asynchronous Promises & Event Loop",
      language: "javascript",
      category: "web",
      badge: "⚡ Node.js 20",
      desc: "Modern JavaScript async/await patterns, non-blocking timers, and standard input stream handling.",
      code: `// PulseIDE - Node.js Async Sandbox
// Notice: Click "Open Directly in IDE" to execute!

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("--- ⚡ PulseIDE Node.js Async Engine ---");

async function simulateCloudTask(taskName, ms) {
  console.log(\`⏳ Starting \${taskName}...\`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(\`✅ \${taskName} completed in \${ms}ms\`);
    }, ms);
  });
}

async function runPipeline() {
  const res1 = await simulateCloudTask("Database Authentication", 400);
  console.log(res1);
  
  const res2 = await simulateCloudTask("Docker Container Allocation", 600);
  console.log(res2);
  
  rl.question("\\nEnter your favorite programming language: ", (answer) => {
    console.log(\`🎉 Awesome! Setting up a \${answer} workspace on PulseIDE!\`);
    rl.close();
  });
}

runPipeline();
`
    }
  ];

  const categories = [
    { id: "all", label: "All Templates" },
    { id: "data", label: "📊 Data Science" },
    { id: "algo", label: "⚡ Algorithms" },
    { id: "systems", label: "🦀 Systems & Concurrency" },
    { id: "enterprise", label: "☕ Enterprise OOP" },
    { id: "web", label: "🌐 Async Web" }
  ];

  const filtered = selectedCategory === "all" 
    ? templates 
    : templates.filter(t => t.category === selectedCategory);

  return (
    <div className="animate-fade-in" style={{ padding: "60px 0 100px" }}>
      <div className="marketing-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto" }}>
          <div className="bestdio-badge" style={{ marginBottom: "16px" }}>
            📂 CODE SHOWCASE & TEMPLATES
          </div>
          <h1 style={{ fontSize: "42px", fontWeight: 900, color: "#fff", marginBottom: "20px" }}>
            Interactive <span className="hero-gradient-text">Template Library</span>
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-muted)", lineHeight: "1.6" }}>
            Explore production-ready algorithms and system patterns across 10 programming languages. 
            You can copy any code snippet or click <em>"Open Directly in IDE"</em> to launch and run it immediately!
          </p>
        </div>

        {/* Category Filter */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "50px"
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                background: selectedCategory === cat.id ? "var(--bestdio-cyan)" : "var(--bg-surface)",
                color: selectedCategory === cat.id ? "#000" : "var(--text-main)",
                border: "1px solid var(--border)",
                padding: "10px 20px",
                borderRadius: "30px",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "30px"
        }}>
          {filtered.map((tmpl) => (
            <div key={tmpl.id} className="glass-card" style={{
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              border: "1px solid var(--border)"
            }}>
              {/* Card Header */}
              <div style={{
                padding: "24px 24px 16px",
                borderBottom: "1px solid var(--border)",
                background: "rgba(15, 23, 42, 0.4)"
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{
                    background: "rgba(0, 242, 254, 0.15)",
                    color: "var(--bestdio-cyan)",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: 800
                  }}>
                    {tmpl.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>
                  {tmpl.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: "1.5" }}>
                  {tmpl.desc}
                </p>
              </div>

              {/* Code Preview */}
              <div style={{
                padding: "20px",
                background: "#05070b",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "#a78bfa",
                lineHeight: "1.6",
                flex: 1,
                overflowX: "auto",
                maxHeight: "240px",
                borderBottom: "1px solid var(--border)"
              }}>
                <pre style={{ margin: 0 }}>
                  {tmpl.code}
                </pre>
              </div>

              {/* Action Footer (Copy Code & Open in IDE) */}
              <div style={{
                padding: "20px 24px",
                background: "var(--bg-surface)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                flexWrap: "wrap"
              }}>
                <button
                  onClick={() => handleCopyTemplate(tmpl.id, tmpl.code)}
                  className="btn btn-secondary"
                  style={{
                    padding: "8px 16px",
                    fontSize: "13px",
                    fontWeight: 700,
                    borderColor: copiedId === tmpl.id ? "var(--bestdio-emerald)" : "var(--border)",
                    color: copiedId === tmpl.id ? "var(--bestdio-emerald)" : "var(--text-main)",
                    background: copiedId === tmpl.id ? "rgba(16, 185, 129, 0.15)" : "var(--bg-raised)"
                  }}
                >
                  {copiedId === tmpl.id ? "✅ Copied!" : "📋 Copy Code"}
                </button>
                <button
                  onClick={() => onLaunchTemplate(tmpl.language, tmpl.code)}
                  className="btn btn-primary"
                  style={{ padding: "10px 24px", fontSize: "14px", fontWeight: 800 }}
                  title="Launch this template directly in PulseIDE"
                >
                  <span>⚡ Open Directly in IDE</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
