import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@/api": "./src/api",
      "@/components": "./src/components",
      "@/assets": "./src/assets",
      "@/pages": "./src/pages",
      "@/utils": "./src/utils",
      "@/types": "./src/types",
    },
  },
});
