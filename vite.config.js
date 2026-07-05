import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  },
  build: {
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      output: {
        manualChunks: {
          monaco: ['@monaco-editor/react'],
          codemirror: ['@uiw/react-codemirror', '@codemirror/lang-javascript', '@codemirror/lang-python', '@codemirror/lang-cpp', '@codemirror/lang-java', '@codemirror/lang-rust', '@codemirror/lang-go', '@codemirror/lang-php'],
          xterm: ['@xterm/xterm', '@xterm/addon-fit']
        }
      }
    }
  }
});
