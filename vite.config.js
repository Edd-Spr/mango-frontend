import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@hooks": path.resolve(__dirname, "./src/shared/hooks"),
      "@ui": path.resolve(__dirname, "./src/shared/ui"),
      "@modals": path.resolve(__dirname, "./src/shared/modals"),
      "@components": path.resolve(__dirname, "./src/shared/components"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
