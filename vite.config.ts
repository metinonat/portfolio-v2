import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@/api": "/src/common/api",
      "@/components": "/src/common/components",
      "@/context": "/src/common/context",
      "@/hooks": "/src/common/hooks",
      "@/pages": "/src/pages",
      "@/utils": "/src/utils",
    },
  },
});
