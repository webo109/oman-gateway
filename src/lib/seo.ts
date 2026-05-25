export const SITE_ORIGIN = "https://cbs-oman.com";
export const OG_IMAGE_URL = `${SITE_ORIGIN}/og-image.jpg`;

/**
 * Build per-route SEO meta + links. Each route should call this in its head()
 * so the canonical URL and og:url point to that specific page (not the homepage).
 *
 * Returns a tuple { meta, links } that can be spread into the route head() output.
 */
export function pageSeo(opts: {
  /** Route pathname starting with "/" (e.g. "/power"). */
  path: string;
  title: string;
  description: string;
  /** Optional override for the og:title (defaults to title). */
  ogTitle?: string;
  /** Optional override for the og:description (defaults to description). */
  ogDescription?: string;
}) {
  const url = `${SITE_ORIGIN}${opts.path === "/" ? "" : opts.path}`;
  const ogTitle = opts.ogTitle ?? opts.title;
  const ogDescription = opts.ogDescription ?? opts.description;

  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: ogTitle },
      { property: "og:description", content: ogDescription },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
