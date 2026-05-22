import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";
import solarImg from "@/assets/solar.jpg";
import bessImg from "@/assets/bess.jpg";
import gridImg from "@/assets/grid.jpg";

export const Route = createFileRoute("/power")({
  head: () => ({
    meta: [
      { title: "Power & Renewable Energy — CBS" },
      {
        name: "description",
        content:
          "Utility-scale Solar PV, Battery Energy Storage Systems (BESS), and High-Voltage Grid infrastructure: the active division of Centric for Business Solutions.",
      },
      { property: "og:title", content: "Power & Renewable Energy — CBS" },
      {
        property: "og:description",
        content:
          "The active division of CBS — Solar PV, BESS, and HV Grid joint-venture deployment across Oman and Africa.",
      },
    ],
  }),
  component: PowerPage,
});

function PowerPage() {
  const { t, lang } = useI18n();
  const areas = [
    {
      n: "01.1",
      title: t("active.solarTitle"),
      img: solarImg,
      body:
        lang === "ar"
          ? "تطوير مصفوفات كهروضوئية بمئات الميجاواط متوافقة مع أهداف رؤية عُمان 2040 للطاقة المتجددة، عبر شراكات مع منتجي الطاقة المستقلين من الفئة الأولى."
          : "Development of multi-hundred megawatt photovoltaic arrays aligned with Oman Vision 2040 renewable targets, in joint venture with tier-1 Independent Power Producers.",
      points:
        lang === "ar"
          ? ["ميجاواط متعدد المئات", "نموذج EPC + IPP", "متوافق مع ICV"]
          : ["Multi-hundred MW scale", "EPC + IPP structure", "ICV-aligned execution"],
    },
    {
      n: "01.2",
      title: t("active.bessTitle"),
      img: bessImg,
      body:
        lang === "ar"
          ? "أنظمة تخزين معيارية توفر استقرار الشبكة وإدارة الذروة للمرافق الإقليمية، مع التركيز على دمج الطاقة المتجددة."
          : "Modular storage systems providing grid stability, peak shaving, and renewable firming for regional utilities and semi-governmental off-takers.",
      points:
        lang === "ar"
          ? ["حاويات معيارية", "إدارة الذروة", "تثبيت الشبكة"]
          : ["Containerized modular units", "Peak shaving / frequency", "Renewable firming"],
    },
    {
      n: "01.3",
      title: t("active.gridTitle"),
      img: gridImg,
      body:
        lang === "ar"
          ? "هندسة نقل عالية الجهد ومحطات فرعية لتقاسم الطاقة العابر للحدود بين دول الخليج وشرق أفريقيا."
          : "High-voltage transmission engineering and substation construction for cross-border power sharing between the GCC and East Africa.",
      points:
        lang === "ar"
          ? ["نقل عالي الجهد", "محطات فرعية", "ممرات عابرة للحدود"]
          : ["HV transmission lines", "Substation construction", "Cross-border corridors"],
    },
  ];

  return (
    <PageShell>
      <section className="px-6 pt-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-accent mb-6">
            {t("power.eye")}
          </div>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-balance leading-[1.05] mb-8 max-w-4xl">
            {t("power.h")}
          </h1>
          <p className="text-base sm:text-lg text-foreground/60 leading-relaxed max-w-[64ch]">
            {t("power.lede")}
          </p>
        </div>
      </section>

      {areas.map((a, i) => (
        <section key={a.n} className={`px-6 py-16 ${i % 2 === 0 ? "bg-background" : "bg-brand-sand"} border-y border-brand-line`}>
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 lg:col-span-5">
              <div className="text-[10px] font-mono text-brand-accent mb-4">[ {a.n} ]</div>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-6">{a.title}</h2>
              <p className="text-base text-foreground/70 leading-relaxed mb-8">{a.body}</p>
              <ul className="space-y-2">
                {a.points.map((p, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-foreground/70">
                    <span className="size-1.5 bg-brand-teal" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <img
                src={a.img}
                alt={a.title}
                loading="lazy"
                width={1200}
                height={800}
                className="w-full aspect-[16/10] object-cover ring-1 ring-brand-line"
              />
            </div>
          </div>
        </section>
      ))}

      <section className="px-6 py-24 bg-brand-teal text-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight mb-6 text-balance">
            {lang === "ar"
              ? "تبدأ محادثات الشراكة هنا."
              : "Partnership conversations start here."}
          </h2>
          <Link
            to="/partnership"
            className="inline-block bg-background text-brand-teal px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-brand-sand transition-colors"
          >
            {t("nav.partnership")}
          </Link>
        </div>
      </section>
    </PageShell>
  );
}