// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from 'path';

// Serve assets from root when deployed to Azure
const repoBase = '/';

export default defineConfig({
  base: repoBase,
  plugins: [react()],
  resolve: {
    alias: {
      // keep existing path aliasing available if needed
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

