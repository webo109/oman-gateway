import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CBS" },
      {
        name: "description",
        content:
          "Centric for Business Solutions is a private Omani corporate entity structured as a localization platform and strategic joint-venture vehicle.",
      },
      { property: "og:title", content: "About — CBS" },
      {
        property: "og:description",
        content: "A private Omani localization platform for state-backed infrastructure.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <PageShell>
      <section className="px-6 pt-16 pb-12 border-b border-brand-line">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-accent mb-6">
            {t("about.eye")}
          </div>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-balance leading-[1.05] mb-10 max-w-4xl">
            {t("about.h")}
          </h1>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7 space-y-6 text-base sm:text-lg text-foreground/70 leading-relaxed">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </div>
          <div className="col-span-12 md:col-span-5 space-y-6">
            <div className="border-t border-brand-line pt-4">
              <div className="text-[10px] uppercase tracking-widest text-foreground/40 mb-1">
                {t("about.registered")}
              </div>
              <div className="text-base font-medium">{t("about.registeredVal")}</div>
            </div>
            <div className="border-t border-brand-line pt-4">
              <div className="text-[10px] uppercase tracking-widest text-foreground/40 mb-1">
                {t("about.hq")}
              </div>
              <div className="text-base font-medium">{t("about.hqVal")}</div>
            </div>
            <div className="border-t border-brand-line pt-4">
              <div className="text-[10px] uppercase tracking-widest text-foreground/40 mb-1">
                {t("about.focus")}
              </div>
              <div className="text-base font-medium">{t("about.focusVal")}</div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}