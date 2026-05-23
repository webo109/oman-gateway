import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Counter } from "@/components/Counter";
import { Marquee } from "@/components/Marquee";
import { useRevealAll } from "@/hooks/useReveal";
import { useI18n } from "@/lib/i18n";
import { ArrowUpRight, ArrowRight, Zap, Cpu, Globe2, Layers, Shield, Sparkles, Sprout, Mountain, Truck, Wheat } from "lucide-react";
import substationImg from "@/assets/substation.jpg";
import solarImg from "@/assets/solar.jpg";
import bessImg from "@/assets/bess.jpg";
import gridImg from "@/assets/grid.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CBS — Centric for Business Solutions" },
      { name: "description", content: "Centric for Business Solutions (CBS): a private Omani localization platform and strategic joint-venture vehicle for tier-1 global infrastructure firms entering MEA markets." },
      { property: "og:title", content: "CBS — Centric for Business Solutions" },
      { property: "og:description", content: "A private Omani corporate vehicle for state-backed utility and infrastructure joint ventures." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t, lang } = useI18n();
  const root = useRevealAll();

  type PhaseCard = {
    no: string;
    status: "active" | "planned" | "future";
    icon: typeof Zap;
    title: string;
    body: string;
    to: string;
    params?: Record<string, string>;
  };
  const phases: PhaseCard[] = [
    { no: "01", status: "active", icon: Zap,
      title: lang === "ar" ? "الطاقة والمتجددة" : "Power & Renewables",
      body: lang === "ar" ? "القطاع التشغيلي الحالي. الطاقة الشمسية وأنظمة التخزين والشبكات عالية الجهد." : "Operational vertical. Utility solar PV, battery storage, and HV grid infrastructure.",
      to: "/power" },
    { no: "05", status: "active", icon: Sprout,
      title: lang === "ar" ? "الزراعة" : "Agriculture",
      body: lang === "ar" ? "زراعة منظمة وموجهة للتصدير عبر ممرات الأمن الغذائي بين الخليج وأفريقيا." : "Structured, export-oriented agriculture across Gulf–Africa food security corridors.",
      to: "/vertical/$slug", params: { slug: "agriculture" } },
    { no: "02", status: "planned", icon: Layers,
      title: lang === "ar" ? "البناء" : "Construction",
      body: lang === "ar" ? "هندسة مدنية متخصصة وأعمال بنية تحتية ثقيلة." : "Specialized civil engineering and heavy infrastructure execution.",
      to: "/vertical/$slug", params: { slug: "construction" } },
    { no: "03", status: "planned", icon: Truck,
      title: lang === "ar" ? "الخدمات اللوجستية" : "Logistics",
      body: lang === "ar" ? "نقل ثقيل وسلاسل توريد للمواقع الصناعية النائية." : "Heavy-lift transport and supply-chain orchestration for remote sites.",
      to: "/vertical/$slug", params: { slug: "logistics" } },
    { no: "04", status: "future", icon: Mountain,
      title: lang === "ar" ? "المعادن" : "Minerals",
      body: lang === "ar" ? "تموضع في المعادن الحرجة المرتبطة بتحول الطاقة." : "Strategic positioning in critical minerals tied to the energy transition.",
      to: "/vertical/$slug", params: { slug: "minerals" } },
    { no: "06", status: "future", icon: Wheat,
      title: lang === "ar" ? "استيراد وتصدير المواد الغذائية" : "Foodstuffs Import & Export",
      body: lang === "ar" ? "شبكات تجارة منظمة للسلع الأساسية بين شرق أفريقيا والخليج." : "Structured trading networks for staples between East Africa and the Gulf.",
      to: "/vertical/$slug", params: { slug: "foodstuffs" } },
  ];

  const capabilities = [
    "Utility Solar PV", "BESS Integration", "HV Transmission", "Substation Modernization",
    "ICV Certification", "Vision 2040 Alignment", "Sovereign JV Structuring", "Cross-Border Logistics",
  ];

  const verticals = [
    { img: solarImg, title: t("active.solarTitle"), body: t("active.solarBody"), tag: "1.2 GW Pipeline" },
    { img: bessImg, title: t("active.bessTitle"), body: t("active.bessBody"), tag: "400 MWh Capacity" },
    { img: gridImg, title: t("active.gridTitle"), body: t("active.gridBody"), tag: "HV / EHV" },
  ];

  return (
    <PageShell>
      <div ref={root}>
        {/* HERO */}
        <section className="relative isolate min-h-[92vh] flex items-end overflow-hidden">
          <AnimatedBackground variant="hero" />
          {/* Faint substation visual */}
          <img
            src={substationImg}
            alt=""
            aria-hidden
            className="absolute right-0 bottom-0 w-[72%] max-w-[1200px] opacity-[0.18] object-cover object-bottom mix-blend-luminosity pointer-events-none"
            style={{ maskImage: "radial-gradient(ellipse at right bottom, black 30%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at right bottom, black 30%, transparent 75%)" }}
          />

          <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
            <div className="reveal flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-brand-teal">
              <span className="relative inline-flex">
                <span className="absolute inset-0 rounded-full bg-brand-teal pulse-dot" />
                <span className="relative size-1.5 rounded-full bg-brand-teal" />
              </span>
              {t("home.eyebrow")}
            </div>

            <h1 className="reveal reveal-delay-1 mt-6 max-w-[18ch] text-5xl sm:text-7xl lg:text-[8.5rem] leading-[0.95] tracking-[-0.03em] font-light">
              <span className="block">Engineering the</span>
              <span className="block">
                <span className="font-serif italic font-normal bg-clip-text text-transparent bg-gradient-to-r from-brand-teal via-foreground to-brand-amber pr-2">localization</span>
              </span>
              <span className="block text-foreground/55">of MEA infrastructure.</span>
            </h1>

            <div className="reveal reveal-delay-2 mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <p className="md:col-span-6 text-base sm:text-lg text-foreground/65 leading-relaxed max-w-[52ch]">
                {t("home.lede")}
              </p>
              <div className="md:col-span-6 flex flex-col sm:flex-row md:justify-end gap-3">
                <Link to="/partnership"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-brand-teal text-primary-foreground px-5 py-3 text-sm font-medium hover:shadow-[0_20px_60px_-15px_var(--brand-glow)] transition-all">
                  {t("nav.portal")}
                  <ArrowUpRight className={`size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${lang === "ar" ? "-scale-x-100" : ""}`} />
                </Link>
                <Link to="/power"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-brand-line bg-foreground/5 backdrop-blur px-5 py-3 text-sm font-medium hover:bg-foreground/10 transition-colors">
                  {t("active.viewDivision")}
                  <ArrowRight className={`size-4 transition-transform group-hover:translate-x-1 ${lang === "ar" ? "-scale-x-100" : ""}`} />
                </Link>
              </div>
            </div>

            {/* Hero metrics row */}
            <div className="reveal reveal-delay-3 mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-line rounded-2xl overflow-hidden border border-brand-line">
              {[
                { k: "1.2", suf: " GW", lbl: lang === "ar" ? "خط أنابيب الطاقة الشمسية" : "Solar Pipeline", dec: 1 },
                { k: "400", suf: " MWh", lbl: lang === "ar" ? "سعة التخزين" : "BESS Capacity", dec: 0 },
                { k: "6", suf: "", lbl: lang === "ar" ? "قطاعات استراتيجية" : "Strategic Verticals", dec: 0 },
                { k: "2040", suf: "", lbl: lang === "ar" ? "رؤية عمان" : "Oman Vision", dec: 0 },
              ].map((m, i) => (
                <div key={i} className="bg-background/60 backdrop-blur px-5 py-6">
                  <div className="text-3xl sm:text-4xl font-light tracking-tight">
                    <Counter to={Number(m.k)} decimals={m.dec} suffix={m.suf} />
                  </div>
                  <div className="mt-2 text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/45">{m.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/40 hidden md:flex flex-col items-center gap-2">
            <span>Scroll</span>
            <span className="block h-8 w-px bg-gradient-to-b from-foreground/40 to-transparent" />
          </div>
        </section>

        {/* MARQUEE OF CAPABILITIES */}
        <section className="py-10 border-y border-brand-line bg-foreground/[0.02]">
          <Marquee>
            {capabilities.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-3 text-foreground/55">
                <Sparkles className="size-3 text-brand-teal" />
                <span className="text-sm font-medium tracking-wide whitespace-nowrap">{c}</span>
              </span>
            ))}
          </Marquee>
        </section>

        {/* POSITIONING */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40" />
          <div className="relative max-w-7xl mx-auto grid grid-cols-12 gap-y-10 gap-x-8">
            <div className="col-span-12 md:col-span-4 reveal">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-teal">{t("home.positioning.eye")}</div>
              <div className="mt-6 inline-flex items-center gap-2 text-xs text-foreground/45 font-mono">
                <Shield className="size-3.5" /> Sovereign Class · Privately Held
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-8">
              <h2 className="reveal text-3xl sm:text-5xl font-light tracking-tight leading-[1.05] text-balance">
                A private corporate vehicle for{" "}
                <span className="font-serif italic text-brand-teal">state-backed</span> infrastructure.
              </h2>
              <p className="reveal reveal-delay-1 text-base sm:text-lg text-foreground/65 max-w-[64ch] leading-relaxed">
                {t("home.positioning.p")}
              </p>
              <div className="reveal reveal-delay-2 grid grid-cols-1 sm:grid-cols-3 gap-px bg-brand-line border border-brand-line rounded-xl overflow-hidden">
                {[
                  { i: Cpu, h: "Technical Mastery", p: "Tier-1 foreign engineering execution." },
                  { i: Shield, h: "Compliance Shield", p: "Domestic legal and ICV calibration." },
                  { i: Globe2, h: "Corridor Access", p: "Oman → East / Southern Africa." },
                ].map((b, i) => {
                  const I = b.i;
                  return (
                    <div key={i} className="bg-card/40 backdrop-blur p-6 hover:bg-card transition-colors group">
                      <I className="size-5 text-brand-teal mb-4 transition-transform group-hover:scale-110" />
                      <div className="text-sm font-medium">{b.h}</div>
                      <div className="mt-1 text-xs text-foreground/55 leading-relaxed">{b.p}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ROADMAP STRIP */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
          <div className="relative">
            <div className="px-6 max-w-7xl mx-auto flex items-end justify-between mb-12 reveal">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-teal">{t("roadmap.eye")}</div>
                <h2 className="mt-3 text-3xl sm:text-5xl font-light tracking-tight">{t("roadmap.h")}</h2>
              </div>
              <Link to="/roadmap" className="hidden md:inline-flex items-center gap-2 text-xs font-medium text-foreground/60 hover:text-brand-teal group">
                {lang === "ar" ? "الخريطة الكاملة" : "Full roadmap"}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="px-6 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {phases.map((p, i) => {
                const I = p.icon;
                const isActive = p.status === "active";
                return (
                  <Link
                    key={i}
                    to={p.to as any}
                    params={p.params as any}
                    className={`reveal reveal-delay-${(i % 3) + 1} group relative rounded-2xl border ${isActive ? "border-brand-teal/40 bg-gradient-to-b from-brand-teal/10 to-transparent shimmer-border" : "border-brand-line bg-card/40"} backdrop-blur p-6 sm:p-7 min-h-[260px] flex flex-col justify-between transition-all duration-300 ease-out hover:scale-[1.04] hover:border-brand-teal/60 hover:shadow-[0_30px_80px_-30px_var(--brand-glow)] cursor-pointer`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`grid place-items-center size-10 rounded-xl ${isActive ? "bg-brand-teal text-primary-foreground" : "bg-foreground/5 text-foreground/60"}`}>
                          <I className="size-4" />
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.25em] text-foreground/45">P.{p.no}</span>
                      </div>
                      <span className={`text-[9px] font-mono uppercase tracking-[0.2em] px-2 py-1 rounded-full ${isActive ? "bg-brand-teal/15 text-brand-teal" : "border border-brand-line text-foreground/50"}`}>
                        {isActive ? (lang === "ar" ? "نشط" : "Active") : p.status === "planned" ? (lang === "ar" ? "مخطط" : "Planned") : (lang === "ar" ? "مستقبلي" : "Future")}
                      </span>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-xl font-medium group-hover:text-brand-teal transition-colors">{p.title}</h3>
                      <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{p.body}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="h-px flex-1 bg-gradient-to-r from-brand-teal/60 via-brand-line to-transparent" />
                      <ArrowUpRight className="ml-3 size-4 text-foreground/40 group-hover:text-brand-teal transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ACTIVE VERTICAL — POWER */}
        <section className="relative py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-end justify-between mb-12">
              <div className="reveal max-w-[56ch]">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-teal">{t("active.eye")}</div>
                <h2 className="mt-3 text-3xl sm:text-5xl font-light tracking-tight">
                  {t("active.h")}
                </h2>
              </div>
              <Link to="/power" className="reveal reveal-delay-1 inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-brand-teal group">
                {t("active.viewDivision")}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {verticals.map((v, i) => (
                <article key={i} className={`reveal reveal-delay-${i + 1} group relative overflow-hidden rounded-2xl border border-brand-line bg-card/40 tilt-card`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={v.img} alt={v.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-1 rounded-full bg-background/60 backdrop-blur border border-brand-line text-foreground/80">
                      {v.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium">{v.title}</h3>
                    <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{v.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LOCALIZATION TEASER */}
        <section className="relative py-28 px-6 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[680px] rounded-full bg-brand-teal/10 blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto rounded-3xl border border-brand-line bg-gradient-to-br from-card/70 via-card/40 to-card/10 backdrop-blur p-8 sm:p-14 overflow-hidden">
            <div className="grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7 reveal">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-teal">{t("loc.eye")}</div>
                <h2 className="mt-3 text-3xl sm:text-5xl font-light tracking-tight">
                  {t("loc.h")}
                </h2>
                <p className="mt-5 text-foreground/65 leading-relaxed max-w-[58ch]">{t("loc.lede")}</p>
                <Link to="/localization" className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-line bg-foreground/5 hover:bg-foreground/10 px-5 py-3 text-sm transition-colors">
                  {lang === "ar" ? "ميزة التوطين" : "Localization Advantage"}
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
              <ul className="md:col-span-5 space-y-3">
                {[t("loc.pillar1.h"), t("loc.pillar2.h"), t("loc.pillar3.h")].map((h, i) => (
                  <li key={i} className={`reveal reveal-delay-${i + 1} flex items-center justify-between gap-4 rounded-xl border border-brand-line bg-background/40 backdrop-blur px-5 py-4 hover:border-brand-teal/40 transition-colors`}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-brand-teal">0{i + 1}</span>
                      <span className="text-sm font-medium">{h}</span>
                    </div>
                    <ArrowRight className={`size-4 text-foreground/40 ${lang === "ar" ? "-scale-x-100" : ""}`} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative px-6 py-28">
          <div className="max-w-5xl mx-auto text-center reveal">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-teal">{t("partner.eye")}</div>
            <h2 className="mt-4 text-4xl sm:text-6xl font-light tracking-tight leading-[1.05] text-balance">
              {lang === "ar" ? "تحالفات مؤهلة فقط." : (<>Qualified alliances <span className="font-serif italic text-brand-teal">only.</span></>)}
            </h2>
            <p className="mt-6 text-foreground/65 leading-relaxed max-w-[60ch] mx-auto">{t("partner.lede")}</p>
            <div className="mt-10 flex justify-center">
              <Link to="/partnership" className="group inline-flex items-center gap-2 rounded-full bg-brand-teal text-primary-foreground px-6 py-3.5 text-sm font-medium hover:shadow-[0_20px_60px_-15px_var(--brand-glow)] transition-all">
                {t("nav.portal")}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
