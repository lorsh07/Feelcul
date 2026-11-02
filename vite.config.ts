import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";

// 서버와 같은 .env를 읽어 PORT를 맞춘다
if (fs.existsSync(".env")) process.loadEnvFile(".env");

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: { "/api": `http://localhost:${process.env.PORT ?? 8787}` },
  },
});
