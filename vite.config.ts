import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Bare TanStack Start config — replaces @lovable.dev/vite-tanstack-config (which bundled
// the Cloudflare preset). Now uses Nitro with the Vercel preset so `vite build` produces
// .vercel/output/ that Vercel deploys natively.
export default defineConfig({
  server: {
    port: 8080,
    host: true,
  },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      // Use our own server.ts wrapper (catastrophic-h3-error handling).
      server: { entry: "server" },
    }),
    nitro({ preset: "vercel" }),
    viteReact(),
  ],
  resolve: {
    dedupe: [
      "react",
      "react-dom",
      "@tanstack/react-router",
      "@tanstack/react-start",
      "@tanstack/react-query",
    ],
  },
});
