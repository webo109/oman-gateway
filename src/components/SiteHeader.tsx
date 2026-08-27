import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { divisions, statusLabel, type Division, type DivisionStatus } from "@/lib/divisions";
import { Menu, X, ArrowUpRight, ChevronDown, Moon, Sun } from "lucide-react";

const THEME_STORAGE_KEY = "cbs:color-theme";

function applyStoredTheme() {
  try {
    if (window.localStorage.getItem(THEME_STORAGE_KEY) === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else document.documentElement.removeAttribute("data-theme");
  } catch {
    // Storage can be unavailable in privacy-restricted browsing contexts.
  }
}

function toggleColorTheme() {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  if (next === "light") root.setAttribute("data-theme", "light");
  else root.removeAttribute("data-theme");
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // The visual toggle still works when persistence is unavailable.
  }
}

function badgeClass(status: DivisionStatus) {
  if (status === "active") return "bg-brand-teal/15 text-brand-teal";
  if (status === "planned") return "bg-foreground/10 text-foreground/70";
  return "border border-brand-line text-foreground/45";
}

function DivisionRow({
  d,
  lang,
  onClick,
}: {
  d: Division;
  lang: "en" | "ar";
  onClick: () => void;
}) {
  const Icon = d.icon;
  return (
    <Link
      to={d.to as never}
      params={d.params as never}
      onClick={onClick}
      className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-foreground/5"
    >
      <span className="flex min-w-0 items-center gap-2.5">
        <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-foreground/5 text-brand-teal">
          <Icon className="size-3.5" />
        </span>
        <span className="truncate text-[13px] text-foreground/85 group-hover:text-foreground">
          {lang === "ar" ? d.title.ar : d.title.en}
        </span>
      </span>
      <span
        className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.15em] ${badgeClass(d.status)}`}
      >
        {statusLabel(d.status, lang)}
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const { t, lang, toggle } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    applyStoredTheme();
  }, []);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onDivision = pathname === "/power" || pathname.startsWith("/vertical");
  const linkCls = (active: boolean) =>
    `inline-flex h-9 items-center text-[12px] font-medium leading-none tracking-wide transition-colors ${
      active ? "text-foreground" : "text-foreground/55 hover:text-foreground"
    }`;

  return (
    <nav
      className={`hide-scrollbar fixed inset-x-4 top-4 z-50 mx-auto max-h-[calc(100dvh-2rem)] max-w-7xl overflow-x-hidden overflow-y-auto rounded-2xl border shadow-[0_16px_50px_-24px_var(--brand-shadow)] backdrop-blur-xl transition-all duration-500 lg:max-h-none lg:overflow-visible ${
        scrolled ? "border-brand-line bg-background/85" : "border-brand-line/70 bg-background/60"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <Link to="/" className="group flex shrink-0 items-center gap-2.5">
          <span className="relative inline-flex">
            <span className="absolute inset-0 rounded-full bg-brand-teal/40 blur-md transition-all group-hover:blur-lg" />
            <span className="relative size-2.5 rounded-full bg-brand-teal" aria-hidden />
          </span>
          <span className="text-sm font-semibold tracking-tight">
            <span className="hidden sm:inline">
              CBS <span className="text-foreground/40">/ Centric Business Solutions</span>
            </span>
            <span className="sm:hidden">CBS</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="relative flex h-9 items-center">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              className={`inline-flex h-full items-center gap-1.5 text-[12px] font-medium leading-none tracking-wide transition-colors ${
                onDivision || menuOpen
                  ? "text-foreground"
                  : "text-foreground/55 hover:text-foreground"
              }`}
            >
              {lang === "ar" ? "القطاعات" : "Divisions"}
              <ChevronDown
                className={`size-3.5 transition-transform ${menuOpen ? "rotate-180" : ""}`}
              />
            </button>
            {menuOpen && (
              <div className="absolute top-full mt-3 w-[420px] rounded-2xl border border-brand-line bg-background/95 p-2 shadow-[0_30px_80px_-30px_var(--brand-shadow)] backdrop-blur-xl ltr:left-0 rtl:right-0">
                <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/35">
                  {lang === "ar" ? "القطاعات" : "Divisions"}
                </div>
                {divisions.map((d) => (
                  <DivisionRow key={d.slug} d={d} lang={lang} onClick={() => setMenuOpen(false)} />
                ))}
                <Link
                  to="/roadmap"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 flex items-center justify-between rounded-xl border-t border-brand-line px-3 py-2.5 text-[12px] text-foreground/55 hover:text-brand-teal"
                >
                  {lang === "ar" ? "خارطة الطريق الكاملة" : "View full roadmap"}
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            )}
          </div>

          <Link to="/localization" className={linkCls(pathname === "/localization")}>
            <span className="story-link">{t("nav.localization")}</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="rounded-full border border-brand-line px-2.5 py-1 text-[11px] font-medium tracking-tighter transition-colors hover:border-brand-teal/60 hover:text-brand-teal"
            aria-label="Toggle language"
          >
            {lang === "en" ? "العربية" : "EN"}
          </button>
          <button
            onClick={toggleColorTheme}
            className="theme-toggle grid size-8 place-items-center rounded-full border border-brand-line text-foreground/65 transition-colors hover:border-brand-teal/60 hover:text-brand-teal"
            aria-label={lang === "ar" ? "تبديل المظهر" : "Toggle color theme"}
          >
            <Sun className="theme-toggle__sun size-3.5" aria-hidden />
            <Moon className="theme-toggle__moon size-3.5" aria-hidden />
          </button>
          <Link
            to="/partnership"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-brand-teal py-2 pe-2 ps-3.5 text-[12px] font-medium text-primary-foreground transition-all hover:shadow-[0_10px_30px_-10px_var(--brand-glow)] sm:inline-flex"
          >
            <span>{t("nav.portal")}</span>
            <ArrowUpRight
              className={`size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${lang === "ar" ? "-scale-x-100" : ""}`}
            />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="ml-1 rounded-full border border-brand-line p-2 text-foreground/70 hover:text-foreground lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-brand-line bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[44rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-6">
          <div className="mb-1 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/35">
            {lang === "ar" ? "القطاعات" : "Divisions"}
          </div>
          {divisions.map((d) => (
            <DivisionRow key={d.slug} d={d} lang={lang} onClick={() => setOpen(false)} />
          ))}
          <div className="my-3 h-px bg-brand-line" />
          <Link
            to="/localization"
            className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand-teal"
          >
            {t("nav.localization")}
          </Link>
          <Link
            to="/roadmap"
            className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand-teal"
          >
            {t("nav.roadmap")}
          </Link>
          <Link
            to="/partnership"
            className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-brand-teal px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_10px_30px_-10px_var(--brand-glow)]"
          >
            <span>{t("nav.portal")}</span>
            <ArrowUpRight className={`size-3.5 ${lang === "ar" ? "-scale-x-100" : ""}`} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
