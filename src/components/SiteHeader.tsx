import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Menu, X, ArrowUpRight } from "lucide-react";
import cbsLogo from "@/assets/cbs-logo.png";

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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-brand-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0 group" aria-label="CBS Group — Home">
          <img
            src={cbsLogo}
            alt="CBS Group"
            className="h-9 w-auto rounded-md object-contain transition-transform group-hover:scale-[1.03]"
          />
          <span className="hidden md:inline text-[11px] font-medium tracking-[0.22em] uppercase text-foreground/50">
            Centric Business Solutions
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {links.slice(1).map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`text-[12px] font-medium tracking-wide transition-colors story-link ${
                  active ? "text-foreground" : "text-foreground/55 hover:text-foreground"
                }`}
              >
                {t(l.key)}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="text-[11px] font-medium tracking-tighter rounded-full border border-brand-line px-2.5 py-1 hover:border-brand-teal/60 hover:text-brand-teal transition-colors"
            aria-label="Toggle language"
          >
            {lang === "en" ? "العربية" : "EN"}
          </button>
          <Link
            to="/partnership"
            className="hidden sm:inline-flex group relative overflow-hidden rounded-full bg-brand-teal text-primary-foreground text-[12px] font-medium py-2 ps-3.5 pe-2 items-center gap-2 hover:shadow-[0_10px_30px_-10px_var(--brand-glow)] transition-all"
          >
            <span>{t("nav.portal")}</span>
            <ArrowUpRight className={`size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${lang === "ar" ? "-scale-x-100" : ""}`} />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden ml-1 rounded-full p-2 border border-brand-line text-foreground/70 hover:text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-background/95 backdrop-blur-xl border-t border-brand-line`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-foreground/80 hover:text-brand-teal">
              {t(l.key)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
