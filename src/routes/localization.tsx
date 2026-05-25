import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/localization")({
  head: () =>
    pageSeo({
      path: "/localization",
      title: "The Localization Advantage — CBS",
      description:
        "ICV scoring, regulatory navigation, and Oman Vision 2040 integration: the three pillars CBS offers foreign tier-1 partners.",
      ogDescription:
        "Three pillars: ICV optimization, regulatory navigation, Vision 2040 integration.",
    }),
  component: LocalizationPage,
});

function LocalizationPage() {
  const { t, lang } = useI18n();

  const pillars = [
    {
      n: "01",
      h: t("loc.pillar1.h"),
      p: t("loc.pillar1.p"),
      detail:
        lang === "ar"
          ? "تطبق العقود العامة وشبه الحكومية مقاييس صارمة للقيمة المحلية المضافة. تعمل CBS كهيكل خاص مُصمّم خصيصاً للجهات التقنية الأجنبية، يوفر الإطار اللازم لتعظيم تقييم العطاءات التفضيلي."
          : "Public and semi-governmental contracts strictly enforce ICV scoring. CBS provides the private corporate framework foreign technology entities need to maximize preferential tender scoring.",
    },
    {
      n: "02",
      h: t("loc.pillar2.h"),
      p: t("loc.pillar2.p"),
      detail:
        lang === "ar"
          ? "يستلزم التنقل في القانون التجاري العُماني والترخيص والتعاقد مع المرافق المدعومة من الدولة شريكاً محلياً قابلاً للتمويل. نحن نمثل الواجهة القانونية والإدارية لشركات الهندسة الدولية."
          : "Navigating Omani corporate law, permitting, and state-backed utility contracting requires a bankable local partner. CBS acts as the legal and administrative interface for international engineering firms.",
    },
    {
      n: "03",
      h: t("loc.pillar3.h"),
      p: t("loc.pillar3.p"),
      detail:
        lang === "ar"
          ? "تستفيد CBS من موقع سلطنة عُمان كممر طاقة نظيف عابر للحدود إلى شرق وجنوب أفريقيا، بما يتماشى مباشرة مع رؤية عُمان 2040 وأهداف التنويع الاقتصادي."
          : "CBS leverages Oman's strategic position as a cross-border clean-energy corridor to East and Southern Africa, directly aligned with Oman Vision 2040 and economic diversification objectives.",
    },
  ];

  return (
    <PageShell>
      <section className="px-6 pt-28 pb-12 border-b border-brand-line">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-accent mb-6">
            {t("loc.eye")}
          </div>
          <h1 className="text-4xl sm:text-6xl font-extralight tracking-tight text-balance leading-[1.05] mb-8 max-w-4xl">
            {t("loc.h")}
          </h1>
          <p className="text-base sm:text-lg text-foreground/60 leading-relaxed max-w-[64ch]">
            {t("loc.lede")}
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-px bg-brand-line">
          {pillars.map((p) => (
            <div key={p.n} className="bg-background p-10 grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-3">
                <div className="text-[10px] font-mono text-brand-accent">[ {p.n} ]</div>
                <div className="text-4xl font-medium tracking-tight mt-2">{p.n}</div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h2 className="text-2xl font-extralight tracking-tight mb-3">{p.h}</h2>
                <p className="text-base text-foreground/70 leading-relaxed mb-4">{p.p}</p>
                <p className="text-sm text-foreground/50 leading-relaxed max-w-[64ch]">
                  {p.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
