# CloudIDE Frontend (Multi-Language Interactive Sandbox)

This is the standalone **Frontend UI & Editor** for CloudIDE. Built with **React**, **Vite**, **Monaco Editor** (for Desktop), **CodeMirror** (for Mobile), and **Xterm.js** connected over **Socket.io** WebSockets.

## Key Features
- **True Interactive Terminal**: Line-by-line TTY execution using `@xterm/xterm` and `node-pty`. Type interactive inputs (e.g. Python `input()`, C++ `cin`, Java `Scanner`) directly into the terminal!
- **Responsive Editor Switching**: Automatically renders **Monaco Editor** on desktop screens (`>=850px`) for a full VS Code feel, and switches to **CodeMirror** on mobile devices for smooth touch selection and scrolling.
- **Multi-File Scratchpad**: Includes a built-in tabbed file tree allowing you to switch between main source code, a scratchpad buffer, and project markdown notes.
- **Server Configuration Modal**: Easily switch between local development (`http://localhost:5000`) and cloud-hosted backend instances.

---

## 🛠️ Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:5173`. Ensure your `cloud-ide-backend` server is running on port `5000`!

---

## ☁️ Cloud Deployment (Vercel / Netlify)

This static SPA can be hosted for free on **Vercel** or **Netlify**.

### Deploying to Vercel:
1. Create a new repository on GitHub and push this folder (`cloud-ide-frontend`).
2. Go to [Vercel Dashboard](https://vercel.com/) -> **Add New Project**.
3. Import your GitHub repository.
4. Set **Framework Preset** to **Vite**.
5. Add an Environment Variable:
   - Name: `VITE_BACKEND_URL`
   - Value: Your cloud backend URL (e.g., `https://cloud-ide-backend.onrender.com`)
6. Click **Deploy**. Your CloudIDE is now live!
