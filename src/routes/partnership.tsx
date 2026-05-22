import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/partnership")({
  head: () => ({
    meta: [
      { title: "Partnership — CBS" },
      {
        name: "description",
        content:
          "Partnership qualification for tier-1 global technology firms seeking joint-venture entry into MEA infrastructure markets via CBS.",
      },
      { property: "og:title", content: "Partnership — CBS" },
      {
        property: "og:description",
        content: "A qualifying filter, not a lead funnel. Direct executive contact only.",
      },
    ],
  }),
  component: PartnershipPage,
});

function PartnershipPage() {
  const { t, lang } = useI18n();

  return (
    <PageShell>
      <section className="px-6 pt-16 pb-12 border-b border-brand-line">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-accent mb-6">
            {t("partner.eye")}
          </div>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-balance leading-[1.05] mb-8 max-w-4xl">
            {t("partner.h")}
          </h1>
          <p className="text-base sm:text-lg text-foreground/60 leading-relaxed max-w-[64ch]">
            {t("partner.lede")}
          </p>
        </div>
      </section>

      <section className="px-6 py-16 bg-brand-sand border-b border-brand-line">
        <div className="max-w-5xl mx-auto">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-accent mb-8">
            {t("partner.criteria")}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-line border border-brand-line">
            {[t("partner.c1"), t("partner.c2"), t("partner.c3"), t("partner.c4")].map((c, i) => (
              <div key={i} className="bg-brand-sand p-8 flex items-start gap-4">
                <span className="text-[10px] font-mono text-brand-accent shrink-0 mt-1">0{i + 1}</span>
                <p className="text-base font-medium leading-snug">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-accent">
              {t("partner.contact")}
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-8">
            <div className="border-t border-brand-line pt-6">
              <div className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Email</div>
              <a
                href="mailto:executive@cbs-oman.com"
                className="text-2xl sm:text-3xl font-medium tracking-tight hover:text-brand-accent transition-colors"
              >
                executive@cbs-oman.com
              </a>
            </div>
            <div className="border-t border-brand-line pt-6">
              <div className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">
                {lang === "ar" ? "هاتف" : "Direct line"}
              </div>
              <a
                href="tel:+96824000000"
                className="text-2xl sm:text-3xl font-medium tracking-tight hover:text-brand-accent transition-colors"
              >
                +968 2400 0000
              </a>
            </div>
            <div className="border-t border-brand-line pt-6">
              <div className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">{t("about.hq")}</div>
              <div className="text-xl font-medium tracking-tight">{t("about.hqVal")}</div>
            </div>
            <p className="text-sm text-foreground/50 leading-relaxed max-w-[60ch] pt-4">{t("partner.note")}</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}