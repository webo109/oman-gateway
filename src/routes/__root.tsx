import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { I18nProvider } from "@/lib/i18n";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

import { OG_IMAGE_URL, SITE_ORIGIN } from "@/lib/seo";

const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Centric for Business Solutions",
  alternateName: "CBS",
  url: SITE_ORIGIN,
  description:
    "A private Omani localization platform and strategic joint-venture vehicle for tier-1 global infrastructure firms entering MEA markets.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Muscat",
    addressCountry: "OM",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "executive@cbs-oman.com",
    contactType: "Executive Office",
    availableLanguage: ["English", "Arabic"],
  },
  areaServed: [
    { "@type": "Place", name: "Sultanate of Oman" },
    { "@type": "Place", name: "Gulf Cooperation Council" },
    { "@type": "Place", name: "East Africa" },
    { "@type": "Place", name: "Southern Africa" },
  ],
  knowsAbout: [
    "Utility Solar PV",
    "Battery Energy Storage",
    "HV Transmission",
    "Substation Modernization",
    "ICV Optimization",
    "Sovereign Joint Ventures",
    "Vision 2040 Alignment",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      // Site-wide defaults only. Per-page title/description/canonical/og:url come from each route's pageSeo() helper.
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Centric for Business Solutions" },
      { property: "og:site_name", content: "Centric for Business Solutions" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "CBS — Omani localization platform for state-backed infrastructure",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORGANIZATION_JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <Outlet />
      </I18nProvider>
    </QueryClientProvider>
  );
}
