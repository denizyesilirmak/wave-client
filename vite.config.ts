import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@screens": "/src/screens",
      "@assets": "/src/assets",
      "@store": "/src/store",
      "@mocks": "/src/mocks",
    },
  },
});
