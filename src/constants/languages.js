export const LANGUAGES = [
  { id: "javascript", label: "JavaScript (Node.js)", icon: "🟨", ext: "js", monacoLang: "javascript" },
  { id: "typescript", label: "TypeScript (TSX)",    icon: "🟦", ext: "ts", monacoLang: "typescript" },
  { id: "python",     label: "Python 3",            icon: "🐍", ext: "py", monacoLang: "python" },
  { id: "java",       label: "Java (OpenJDK)",      icon: "☕", ext: "java", monacoLang: "java" },
  { id: "c",          label: "C (GCC)",             icon: "🔩", ext: "c", monacoLang: "c" },
  { id: "cpp",        label: "C++ (G++)",           icon: "⚙️", ext: "cpp", monacoLang: "cpp" },
  { id: "go",         label: "Go (Golang)",         icon: "🐹", ext: "go", monacoLang: "go" },
  { id: "rust",       label: "Rust (Rustc)",        icon: "🦀", ext: "rs", monacoLang: "rust" },
  { id: "ruby",       label: "Ruby",                icon: "💎", ext: "rb", monacoLang: "ruby" },
  { id: "php",        label: "PHP 8+",              icon: "🐘", ext: "php", monacoLang: "php" },
];

export const STARTER_CODE = {
  javascript: `// JavaScript (Node.js) Interactive Sandbox
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('👋 Enter your developer name: ', (name) => {
  console.log(\`🚀 Welcome to CloudIDE, \${name}!\`);
  console.log('✨ JavaScript interactive TTY session completed.');
  rl.close();
});`,

  typescript: `// TypeScript (TSX Engine)
interface Developer {
  name: string;
  role: string;
  languages: number;
}

const dev: Developer = {
  name: "CloudIDE User",
  role: "Full Stack Engineer",
  languages: 10
};

console.log("⚡ TypeScript Execution Successful!");
console.log(\`User: \${dev.name} (\${dev.role}) - Supports \${dev.languages} languages!\`);`,

  python: `# Python 3 Interactive Sandbox
import sys

print("=== Python 3 Interactive TTY ===")
name = input("🐍 What is your favorite programming language? ")
print(f"Awesome choice! '{name}' runs lightning fast in CloudIDE.")

# Simple calculation test
numbers = [10, 20, 30, 40, 50]
print(f"Sum of {numbers} = {sum(numbers)}")`,

  java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Java OpenJDK Interactive TTY ===");
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("☕ Enter your project name: ");
        if (scanner.hasNextLine()) {
            String project = scanner.nextLine();
            System.out.println("Building project '" + project + "' with Java " + System.getProperty("java.version") + "...");
        } else {
            System.out.println("Hello from Java!");
        }
        scanner.close();
    }
}`,

  c: `#include <stdio.h>

int main() {
    printf("=== C (GCC) Interactive Sandbox ===\\n");
    char name[50];
    
    printf("🔩 Enter a username for C session: ");
    if (scanf("%49s", name) == 1) {
        printf("Welcome to CloudIDE C runtime, %s!\\n", name);
    } else {
        printf("Hello from C GCC!\\n");
    }
    
    return 0;
}`,

  cpp: `#include <iostream>
#include <string>
#include <vector>
#include <numeric>
using namespace std;

int main() {
    cout << "=== C++ (G++) Interactive Sandbox ===" << endl;
    
    string name;
    cout << "⚙️ Enter your developer handle: ";
    if (getline(cin, name) && !name.empty()) {
        cout << "Greetings, " << name << "! C++ stream is active." << endl;
    } else {
        cout << "Hello from C++ G++!" << endl;
    }
    
    vector<int> nums = {100, 200, 300};
    cout << "Vector sum: " << accumulate(nums.begin(), nums.end(), 0) << endl;
    return 0;
}`,

  go: `package main

import (
    "bufio"
    "fmt"
    "os"
    "runtime"
    "strings"
)

func main() {
    fmt.Println("=== Go (Golang) Interactive TTY ===")
    fmt.Printf("🐹 Running Go version: %s on %s/%s\\n", runtime.Version(), runtime.GOOS, runtime.GOARCH)
    
    reader := bufio.NewReader(os.Stdin)
    fmt.Print("Enter your target cloud platform: ")
    platform, _ := reader.ReadString('\\n')
    platform = strings.TrimSpace(platform)
    
    if platform != "" {
        fmt.Printf("Deploying Go service to %s... Done!\\n", platform)
    } else {
        fmt.Println("Hello from Go!")
    }
}`,

  rust: `use std::io::{self, Write};

fn main() {
    println!("=== Rust (Rustc) Interactive TTY ===");
    
    print!("🦀 What is your favorite Rust crate? ");
    io::stdout().flush().unwrap();
    
    let mut input = String::new();
    if io::stdin().read_line(&mut input).is_ok() {
        let crate_name = input.trim();
        if !crate_name.is_empty() {
            println!("Added dependency: {} v1.0.0 to Cargo.toml!", crate_name);
        } else {
            println!("Hello from Rust!");
        }
    }
}`,

  ruby: `# Ruby Interactive Sandbox
puts "=== Ruby Interactive TTY ==="
print "💎 What is your favorite Ruby framework? "
$stdout.flush

framework = gets
if framework
  puts "Awesome! #{framework.strip} is great for web development."
else
  puts "Hello from Ruby!"
end`,

  php: `<?php
echo "=== PHP 8+ Interactive TTY ===\\n";
echo "🐘 PHP Version: " . phpversion() . "\\n";

echo "Enter your favorite CMS or Framework: ";
$handle = fopen ("php://stdin","r");
$line = fgets($handle);
if ($line !== false && trim($line) !== "") {
    echo "Superb choice! " . trim($line) . " powered by PHP.\\n";
} else {
    echo "Hello from PHP!\\n";
}
fclose($handle);
?>`,
};
