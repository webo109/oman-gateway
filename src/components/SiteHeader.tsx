import { Link, useRouterState } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

const links = [
  { to: "/", key: "nav.home" as const },
  { to: "/power", key: "nav.power" as const },
  { to: "/roadmap", key: "nav.roadmap" as const },
  { to: "/localization", key: "nav.localization" as const },
  { to: "/partnership", key: "nav.partnership" as const },
];

export function SiteHeader() {
  const { t, lang, toggle } = useI18n();
  const { location } = useRouterState();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-brand-line bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="size-3 bg-brand-teal" aria-hidden />
          <span className="text-sm font-semibold tracking-tighter uppercase whitespace-nowrap">
            <span className="hidden sm:inline">CBS — Centric Business Solutions</span>
            <span className="sm:hidden">CBS</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {links.slice(1).map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`text-xs font-medium uppercase tracking-widest transition-colors ${
                  active ? "text-foreground" : "text-foreground/50 hover:text-foreground"
                }`}
              >
                {t(l.key)}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-xs font-medium uppercase tracking-tighter border border-brand-line px-2 py-1 hover:bg-foreground hover:text-background transition-colors"
            aria-label="Toggle language"
          >
            {lang === "en" ? "العربية" : "EN"}
          </button>
          <Link
            to="/partnership"
            className="hidden sm:inline-flex bg-brand-teal text-background text-sm font-medium py-2 px-3 items-center gap-2 ring-1 ring-brand-teal/20 transition-transform active:scale-[0.98]"
          >
            <span>{t("nav.portal")}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`size-4 shrink-0 ${lang === "ar" ? "rotate-180" : ""}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M15 12l-6.75 6.75" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}