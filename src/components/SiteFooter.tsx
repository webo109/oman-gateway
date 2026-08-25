import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { divisions } from "@/lib/divisions";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  const { t, lang } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-line bg-background px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-12">
        <div className="col-span-2 max-w-[40ch] md:col-span-4">
          <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-tighter">
            <div className="size-3 bg-brand-teal" aria-hidden />
            CBS
          </div>
          <p className="text-sm leading-relaxed text-foreground/60">{t("footer.tagline")}</p>
        </div>

        <nav
          className="col-span-1 md:col-span-3"
          aria-label={lang === "ar" ? "القطاعات" : "Divisions"}
        >
          <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
            {lang === "ar" ? "القطاعات" : "Divisions"}
          </div>
          <ul className="space-y-2.5">
            {divisions.map((d) => (
              <li key={d.slug}>
                <Link
                  to={d.to as never}
                  params={d.params as never}
                  className="text-sm text-foreground/60 transition-colors hover:text-brand-teal"
                >
                  {lang === "ar" ? d.title.ar : d.title.en}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav
          className="col-span-1 md:col-span-2"
          aria-label={lang === "ar" ? "استكشاف" : "Explore"}
        >
          <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
            {lang === "ar" ? "استكشاف" : "Explore"}
          </div>
          <ul className="space-y-2.5">
            <li>
              <Link
                to="/localization"
                className="text-sm text-foreground/60 transition-colors hover:text-brand-teal"
              >
                {t("nav.localization")}
              </Link>
            </li>
            <li>
              <Link
                to="/roadmap"
                className="text-sm text-foreground/60 transition-colors hover:text-brand-teal"
              >
                {t("nav.roadmap")}
              </Link>
            </li>
            <li>
              <Link
                to="/partnership"
                className="text-sm text-foreground/60 transition-colors hover:text-brand-teal"
              >
                {t("nav.partnership")}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="col-span-2 md:col-span-3">
          <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
            {t("footer.qual")}
          </div>
          <Link
            to="/partnership"
            className="inline-flex items-center gap-2 border border-brand-line bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand-teal/50 hover:text-brand-teal"
          >
            {t("footer.submit")}
            <ArrowUpRight className={`size-4 shrink-0 ${lang === "ar" ? "-scale-x-100" : ""}`} />
          </Link>
          <div className="mt-5 flex flex-col gap-2 text-[11px] uppercase tracking-widest text-foreground/50">
            <a href="mailto:executive@cbs-oman.com" className="hover:text-foreground">
              executive@cbs-oman.com
            </a>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:text-foreground">
                {lang === "ar" ? "الخصوصية" : "Privacy"}
              </Link>
              <Link to="/terms" className="hover:text-foreground">
                {lang === "ar" ? "الشروط" : "Terms"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-2 border-t border-brand-line pt-8 text-[10px] uppercase tracking-widest text-foreground/40 sm:flex-row">
        <span>
          © {year} {t("footer.rights")}
        </span>
        <span>{t("footer.address")}</span>
      </div>
    </footer>
  );
}
