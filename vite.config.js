import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the built site work from any folder or GitHub Pages repository name
export default defineConfig({
  plugins: [react()],
  base: "./",
});
