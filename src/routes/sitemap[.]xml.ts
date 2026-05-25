import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_ORIGIN } from "@/lib/seo";

const FALLBACK_ORIGIN = SITE_ORIGIN;

type Entry = { path: string; priority: string; changefreq: "weekly" | "monthly" };

const ENTRIES: Entry[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/power", priority: "0.9", changefreq: "weekly" },
  { path: "/roadmap", priority: "0.8", changefreq: "weekly" },
  { path: "/localization", priority: "0.8", changefreq: "monthly" },
  { path: "/partnership", priority: "0.9", changefreq: "monthly" },
  { path: "/vertical/agriculture", priority: "0.8", changefreq: "weekly" },
  { path: "/vertical/construction", priority: "0.6", changefreq: "monthly" },
  { path: "/vertical/logistics", priority: "0.6", changefreq: "monthly" },
  { path: "/vertical/minerals", priority: "0.5", changefreq: "monthly" },
  { path: "/vertical/foodstuffs", priority: "0.5", changefreq: "monthly" },
  { path: "/privacy", priority: "0.3", changefreq: "monthly" },
  { path: "/terms", priority: "0.3", changefreq: "monthly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const reqUrl = new URL(request.url);
        const origin =
          reqUrl.origin.startsWith("http://localhost") || reqUrl.origin.startsWith("http://127.")
            ? FALLBACK_ORIGIN
            : reqUrl.origin;
        const lastmod = new Date().toISOString().slice(0, 10);
        const urls = ENTRIES.map(
          (e) =>
            `  <url>\n    <loc>${origin}${e.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
