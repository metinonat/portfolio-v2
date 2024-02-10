import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@/api": "/src/api",
      "@/components": "/src/components",
      "@/context": "/src/context",
      "@/hooks": "/src/hooks",
      "@/pages": "/src/pages",
      "@/utils": "/src/utils",
      "@/types": "/src/types",
    },
  },
});
