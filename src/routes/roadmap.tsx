import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Strategic Roadmap — CBS" },
      {
        name: "description",
        content:
          "The CBS phased activation roadmap across six industrial verticals — Power, Construction, Logistics, Minerals, Agriculture, Foodstuffs.",
      },
      { property: "og:title", content: "Strategic Roadmap — CBS" },
      {
        property: "og:description",
        content: "Phased activation across six industrial verticals.",
      },
    ],
  }),
  component: RoadmapPage,
});

type Phase = "active" | "planned" | "future";

function RoadmapPage() {
  const { t, lang } = useI18n();

  const phases: { n: string; status: Phase; date: string; title: string; body: string }[] = [
    {
      n: "01",
      status: "active",
      date: lang === "ar" ? "نشط · 2024" : "Active · 2024",
      title: lang === "ar" ? "الطاقة والمتجددة" : "Power & Renewable Energy",
      body:
        lang === "ar"
          ? "أداة المشاريع المشتركة التشغيلية بالكامل — الطاقة الشمسية، أنظمة التخزين BESS، والشبكات عالية الجهد عبر دول الخليج وشرق أفريقيا."
          : "Fully operational JV vehicle — utility solar, BESS, and HV grid projects across the GCC and East Africa.",
    },
    {
      n: "02",
      status: "planned",
      date: lang === "ar" ? "مخطط · 2026" : "Planned · 2026",
      title: lang === "ar" ? "البناء" : "Construction",
      body:
        lang === "ar"
          ? "هندسة مدنية متخصصة وأعمال بنية تحتية ثقيلة دعماً لمشاريع المرافق."
          : "Specialized civil engineering and heavy infrastructure execution in support of utility deployment.",
    },
    {
      n: "03",
      status: "planned",
      date: lang === "ar" ? "مخطط · 2026" : "Planned · 2026",
      title: lang === "ar" ? "الخدمات اللوجستية" : "Logistics",
      body:
        lang === "ar"
          ? "نقل ثقيل وسلاسل توريد للمواقع الصناعية النائية في عُمان وأفريقيا."
          : "Heavy-lift transport and supply-chain orchestration for remote industrial sites.",
    },
    {
      n: "04",
      status: "future",
      date: lang === "ar" ? "أفق طويل" : "Long-horizon",
      title: lang === "ar" ? "المعادن" : "Minerals",
      body:
        lang === "ar"
          ? "تموضع في مجال المعادن الحرجة المرتبطة بتحول الطاقة وسلاسل توريد البطاريات."
          : "Strategic positioning in critical minerals tied to the energy transition and battery supply chains.",
    },
    {
      n: "05",
      status: "future",
      date: lang === "ar" ? "أفق طويل" : "Long-horizon",
      title: lang === "ar" ? "الزراعة" : "Agriculture",
      body:
        lang === "ar"
          ? "زراعة منظمة وموجهة للتصدير عبر ممرات الأمن الغذائي الخليجي-الأفريقي."
          : "Structured, export-oriented agriculture across Gulf-Africa food security corridors.",
    },
    {
      n: "06",
      status: "future",
      date: lang === "ar" ? "أفق طويل" : "Long-horizon",
      title: lang === "ar" ? "استيراد وتصدير المواد الغذائية" : "Foodstuffs Import & Export",
      body:
        lang === "ar"
          ? "شبكات تجارة منظمة للسلع الغذائية الأساسية بين شرق أفريقيا والخليج."
          : "Structured trading networks for staple commodities between East Africa and the Gulf.",
    },
  ];

  return (
    <PageShell>
      <section className="px-6 pt-16 pb-12 border-b border-brand-line">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-accent mb-6">
            {t("roadmap.eye")}
          </div>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-balance leading-[1.05] mb-8 max-w-4xl">
            {lang === "ar" ? "تفعيل مرحلي." : "Phased Activation."}
          </h1>
          <p className="text-base sm:text-lg text-foreground/60 leading-relaxed max-w-[64ch]">
            {lang === "ar"
              ? "يُحكم توسعنا تقييم صارم لجاهزية السوق. تُشير المراحل الخامدة إلى أهداف تخصيص رأس المال المستقبلية."
              : "Our expansion is governed by rigorous market-readiness assessments. Dormant phases indicate future capital allocation targets, not gaps."}
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {phases.map((p) => (
            <div
              key={p.n}
              className={`grid grid-cols-12 gap-6 py-10 border-b border-brand-line transition-opacity ${
                p.status === "active"
                  ? ""
                  : p.status === "planned"
                  ? "opacity-70"
                  : "opacity-40"
              }`}
            >
              <div className="col-span-12 md:col-span-2">
                <div className="text-5xl font-medium tracking-tight text-foreground/30">{p.n}</div>
              </div>
              <div className="col-span-12 md:col-span-2">
                <span
                  className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 inline-block ${
                    p.status === "active"
                      ? "bg-brand-teal text-background"
                      : p.status === "planned"
                      ? "border border-brand-line text-foreground/60"
                      : "border border-brand-line text-foreground/40"
                  }`}
                >
                  {p.status === "active"
                    ? lang === "ar"
                      ? "نشط"
                      : "Active"
                    : p.status === "planned"
                    ? lang === "ar"
                      ? "مخطط"
                      : "Planned"
                    : lang === "ar"
                    ? "مستقبلي"
                    : "Future"}
                </span>
                <div className="text-[10px] uppercase tracking-widest text-foreground/40 mt-2">{p.date}</div>
              </div>
              <div className="col-span-12 md:col-span-8">
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight mb-2">{p.title}</h2>
                <p className="text-sm text-foreground/60 leading-relaxed max-w-[60ch]">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}