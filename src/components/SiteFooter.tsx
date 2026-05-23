import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import cbsLogo from "@/assets/cbs-logo.png";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="bg-background border-t border-brand-line py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-[40ch]">
          <img src={cbsLogo} alt="CBS Group" className="h-12 w-auto rounded-md object-contain mb-6" />
          <p className="text-sm text-foreground/60 leading-relaxed">{t("footer.ar")}</p>
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <div className="flex gap-4 text-[11px] uppercase tracking-widest text-foreground/50">
            <Link to="/about" className="hover:text-foreground">
              {t("nav.about")}
            </Link>
            <span>·</span>
            <a href="mailto:executive@cbs-oman.com" className="hover:text-foreground">
              executive@cbs-oman.com
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-line flex flex-col sm:flex-row justify-between gap-2 text-[10px] text-foreground/40 uppercase tracking-widest">
        <span>{t("footer.rights")}</span>
        <span>{t("footer.address")}</span>
      </div>
    </footer>
  );
}