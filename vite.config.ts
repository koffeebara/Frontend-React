import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      external: [/\/reserve\//],
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://zerojae175-dev.store",
        changeOrigin: true,
        secure: true,
        headers: {
          Origin: "https://zerojae175-dev.store",
        },
      },
    },
  },
});
