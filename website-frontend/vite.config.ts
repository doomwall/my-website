import { defineConfig } from 'vite';
import path from "path"
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';

function removeCrossOrigin() {
  return {
    name: 'remove-crossorigin',
    transformIndexHtml(html: string) {
      return html.replace(/ crossorigin/g, '');
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), removeCrossOrigin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_TARGET || 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
