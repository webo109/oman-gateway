import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t, lang } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-brand-line py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-[40ch]">
          <div className="text-sm font-semibold tracking-tighter uppercase flex items-center gap-2 mb-6">
            <div className="size-3 bg-brand-teal" aria-hidden />
            CBS
          </div>
          <p className="text-sm text-foreground/60 leading-relaxed">{t("footer.tagline")}</p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
            {t("footer.qual")}
          </div>
          <Link
            to="/partnership"
            className="bg-background text-foreground border border-brand-line text-sm font-medium py-2 px-3 inline-flex items-center gap-2 transition-shadow hover:shadow-sm"
          >
            {t("footer.submit")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] uppercase tracking-widest text-foreground/50">
            <a href="mailto:executive@cbs-oman.com" className="hover:text-foreground">
              executive@cbs-oman.com
            </a>
            <span aria-hidden>·</span>
            <Link to="/privacy" className="hover:text-foreground">
              {lang === "ar" ? "الخصوصية" : "Privacy"}
            </Link>
            <span aria-hidden>·</span>
            <Link to="/terms" className="hover:text-foreground">
              {lang === "ar" ? "الشروط" : "Terms"}
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-line flex flex-col sm:flex-row justify-between gap-2 text-[10px] text-foreground/40 uppercase tracking-widest">
        <span>
          © {year} {t("footer.rights")}
        </span>
        <span>{t("footer.address")}</span>
      </div>
    </footer>
  );
}
