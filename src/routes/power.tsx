import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { OmaniStar } from "@/components/OmaniMotif";
import { useRevealAll } from "@/hooks/useReveal";
import { useI18n } from "@/lib/i18n";
import { ArrowUpRight, Sun, Battery, Cable } from "lucide-react";
import solarImg from "@/assets/solar.jpg";
import bessImg from "@/assets/bess.jpg";
import gridImg from "@/assets/grid.jpg";

export const Route = createFileRoute("/power")({
  head: () => ({
    meta: [
      { title: "Power & Renewable Energy — CBS" },
      { name: "description", content: "Utility-scale Solar PV, BESS, and HV Grid infrastructure: the active division of Centric for Business Solutions." },
      { property: "og:title", content: "Power & Renewable Energy — CBS" },
      { property: "og:description", content: "The active division of CBS — Solar PV, BESS, and HV Grid joint-venture deployment across Oman and Africa." },
    ],
  }),
  component: PowerPage,
});

function PowerPage() {
  const { t, lang } = useI18n();
  const root = useRevealAll();

  const areas = [
    {
      n: "01.1", icon: Sun, img: solarImg, title: t("active.solarTitle"),
      body: lang === "ar"
        ? "تطوير مصفوفات كهروضوئية بمئات الميجاواط متوافقة مع أهداف رؤية عُمان 2040 للطاقة المتجددة، عبر شراكات مع منتجي الطاقة المستقلين من الفئة الأولى."
        : "Development of multi-hundred megawatt photovoltaic arrays aligned with Oman Vision 2040 renewable targets, in joint venture with tier-1 Independent Power Producers.",
      points: lang === "ar" ? ["ميجاواط متعدد المئات", "نموذج EPC + IPP", "متوافق مع ICV"] : ["Multi-hundred MW scale", "EPC + IPP structure", "ICV-aligned execution"],
    },
    {
      n: "01.2", icon: Battery, img: bessImg, title: t("active.bessTitle"),
      body: lang === "ar"
        ? "أنظمة تخزين معيارية توفر استقرار الشبكة وإدارة الذروة للمرافق الإقليمية، مع التركيز على دمج الطاقة المتجددة."
        : "Modular storage systems providing grid stability, peak shaving, and renewable firming for regional utilities and semi-governmental off-takers.",
      points: lang === "ar" ? ["حاويات معيارية", "إدارة الذروة", "تثبيت الشبكة"] : ["Containerized modular units", "Peak shaving / frequency", "Renewable firming"],
    },
    {
      n: "01.3", icon: Cable, img: gridImg, title: t("active.gridTitle"),
      body: lang === "ar"
        ? "هندسة نقل عالية الجهد ومحطات فرعية لتقاسم الطاقة العابر للحدود بين دول الخليج وشرق أفريقيا."
        : "High-voltage transmission engineering and substation construction for cross-border power sharing between the GCC and East Africa.",
      points: lang === "ar" ? ["نقل عالي الجهد", "محطات فرعية", "ممرات عابرة للحدود"] : ["HV transmission lines", "Substation construction", "Cross-border corridors"],
    },
  ];

  return (
    <PageShell>
      <div ref={root}>
        {/* Hero */}
        <section className="relative isolate overflow-hidden pt-32 pb-20 px-6">
          <AnimatedBackground variant="soft" />
          <div className="absolute inset-0 bg-omani-pattern-soft opacity-60 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto">
            <div className="reveal flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-brand-teal">
              <OmaniStar className="size-4 text-brand-teal" />
              {t("power.eye")}
            </div>
            <h1 className="reveal reveal-delay-1 mt-6 text-5xl sm:text-7xl font-light tracking-[-0.02em] leading-[1.02] max-w-4xl">
              {lang === "ar" ? t("power.h") : (<>Power &amp; <span className="font-serif italic text-brand-teal">renewable</span> energy.</>)}
            </h1>
            <p className="reveal reveal-delay-2 mt-8 text-base sm:text-lg text-foreground/65 leading-relaxed max-w-[64ch]">{t("power.lede")}</p>
            <div className="reveal reveal-delay-3 mt-10 omani-stripe h-[3px] w-32 rounded-full opacity-80" />
          </div>
        </section>

        {/* Areas */}
        {areas.map((a, i) => {
          const I = a.icon;
          const reverse = i % 2 === 1;
          return (
            <section key={a.n} className="relative px-6 py-20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
              <div className="relative max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center">
                <div className={`col-span-12 lg:col-span-5 ${reverse ? "lg:order-2" : ""} reveal`}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="grid place-items-center size-10 rounded-xl bg-brand-teal/15 text-brand-teal">
                      <I className="size-5" />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.25em] text-foreground/45">[ {a.n} ]</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-5">{a.title}</h2>
                  <p className="text-base text-foreground/65 leading-relaxed mb-6">{a.body}</p>
                  <ul className="space-y-2.5">
                    {a.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-foreground/75">
                        <span className="size-1.5 rounded-full bg-brand-teal shadow-[0_0_10px_var(--brand-glow)]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`col-span-12 lg:col-span-7 ${reverse ? "lg:order-1" : ""} reveal reveal-delay-2`}>
                  <div className="group relative overflow-hidden rounded-2xl border border-brand-line tilt-card">
                    <img src={a.img} alt={a.title} loading="lazy" className="w-full aspect-[16/10] object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-background/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-1 rounded-full bg-background/70 backdrop-blur border border-brand-line">
                        {a.n}
                      </span>
                      <OmaniStar className="size-6 text-brand-teal/70" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="relative px-6 py-28 overflow-hidden">
          <div className="absolute inset-0 bg-omani-pattern-soft opacity-40" />
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full bg-brand-teal/15 blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-[1.05] text-balance">
              {lang === "ar" ? "تبدأ محادثات الشراكة هنا." : (<>Partnership conversations <span className="font-serif italic text-brand-teal">start here.</span></>)}
            </h2>
            <Link to="/partnership" className="group mt-10 inline-flex items-center gap-2 rounded-full bg-brand-teal text-primary-foreground px-6 py-3.5 text-sm font-medium hover:shadow-[0_20px_60px_-15px_var(--brand-glow)] transition-all">
              {t("nav.partnership")}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
