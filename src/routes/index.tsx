import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";
import substationImg from "@/assets/substation.jpg";
import solarImg from "@/assets/solar.jpg";
import bessImg from "@/assets/bess.jpg";
import gridImg from "@/assets/grid.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CBS — Centric for Business Solutions" },
      {
        name: "description",
        content:
          "Centric for Business Solutions (CBS): a private Omani localization platform and strategic joint-venture vehicle for tier-1 global infrastructure firms entering MEA markets.",
      },
      { property: "og:title", content: "CBS — Centric for Business Solutions" },
      {
        property: "og:description",
        content:
          "A private Omani corporate vehicle for state-backed utility and infrastructure joint ventures.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t, lang } = useI18n();

  const phases = [
    {
      no: "P.01",
      status: "active",
      title: lang === "ar" ? "الطاقة والمتجددة" : "Power & Renewables",
      body:
        lang === "ar"
          ? "القطاع التشغيلي الحالي. الطاقة الشمسية وأنظمة التخزين والشبكات عالية الجهد."
          : "Operational vertical. Utility solar PV, battery storage, and high-voltage grid infrastructure.",
    },
    {
      no: "P.02",
      status: "planned",
      title: lang === "ar" ? "البناء والخدمات اللوجستية" : "Construction & Logistics",
      body:
        lang === "ar"
          ? "نقل ثقيل متخصص وأعمال مدنية للبنية التحتية النائية."
          : "Heavy-lift logistics and specialized civil engineering for remote infrastructure.",
    },
    {
      no: "P.03",
      status: "future",
      title: lang === "ar" ? "المعادن والزراعة" : "Minerals & Agriculture",
      body:
        lang === "ar"
          ? "استخراج المعادن الحرجة وشبكات استيراد وتصدير المواد الغذائية بين شرق أفريقيا والخليج."
          : "Critical minerals extraction and foodstuffs import/export linking East Africa to the Gulf.",
    },
  ];

  return (
    <PageShell>
      {/* Hero */}
      <section className="px-6 pt-10 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-0 border-t border-s border-brand-line">
            <div className="col-span-12 lg:col-span-8 p-8 sm:p-12 border-e border-b border-brand-line bg-brand-sand cbs-reveal">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-accent mb-6">
                {t("home.eyebrow")}
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-balance leading-[1.02] mb-8">
                {t("home.h1.a")}
                <span className="text-brand-accent">{t("home.h1.b")}</span>
                {t("home.h1.c")}
              </h1>
              <p className="max-w-[52ch] text-base sm:text-lg text-foreground/60 leading-relaxed text-pretty">
                {t("home.lede")}
              </p>
              <div className="mt-10 h-px bg-foreground cbs-draw" style={{ maxWidth: "8rem" }} />
            </div>

            <div className="col-span-12 lg:col-span-4 border-e border-b border-brand-line p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden bg-foreground/5">
              <img
                src={substationImg}
                alt=""
                aria-hidden
                width={1024}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover opacity-15"
              />
              <div className="relative z-10">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/40 mb-2">
                  {t("home.capital")}
                </div>
                <div className="text-2xl sm:text-3xl font-medium">{t("home.capitalValue")}</div>
              </div>
              <div className="relative z-10 pt-12">
                <p className="text-xs text-foreground/60 uppercase leading-tight tracking-wider mb-4">
                  {t("home.arNote")}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium px-2 py-1 bg-background ring-1 ring-brand-line rounded-sm">
                    {t("home.icv")}
                  </span>
                  <span className="text-xs font-medium px-2 py-1 bg-background ring-1 ring-brand-line rounded-sm">
                    {t("home.jv")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-accent">
              {t("home.positioning.eye")}
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-balance leading-tight">
              {t("home.positioning.h")}
            </h2>
            <p className="text-base sm:text-lg text-foreground/60 max-w-[64ch] leading-relaxed">
              {t("home.positioning.p")}
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Roadmap */}
      <section className="bg-brand-teal text-background py-20 overflow-hidden">
        <div className="px-6 mb-10 flex items-baseline justify-between max-w-7xl mx-auto">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] opacity-50">
              {t("roadmap.eye")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mt-2">{t("roadmap.h")}</h2>
          </div>
          <div className="text-[10px] opacity-40 uppercase tracking-widest hidden md:block">
            {t("roadmap.scroll")}
          </div>
        </div>

        <div className="flex overflow-x-auto hide-scrollbar gap-0 border-y border-background/10">
          {phases.map((p, i) => (
            <div
              key={i}
              className={`min-w-[300px] sm:min-w-[400px] border-e border-background/10 p-10 sm:p-12 flex flex-col justify-between transition-colors hover:bg-background/5 ${
                p.status !== "active" ? "opacity-60" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-xs font-medium opacity-60">{p.no}</span>
                  <span
                    className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 ${
                      p.status === "active"
                        ? "bg-background text-brand-teal"
                        : "border border-background/30 text-background/60"
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
                </div>
                <h3 className="text-xl font-medium mb-4">{p.title}</h3>
                <p className="text-sm text-background/70 leading-relaxed max-w-[34ch]">{p.body}</p>
              </div>
              <div className="mt-12 h-px bg-background/20 relative">
                <div
                  className={`absolute -top-1 ${lang === "ar" ? "right-0" : "left-0"} size-2 rounded-full ${
                    p.status === "active" ? "bg-background" : "bg-background/40"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="px-6 max-w-7xl mx-auto mt-10">
          <Link
            to="/roadmap"
            className="text-[11px] uppercase tracking-widest font-medium underline underline-offset-8 decoration-background/30 hover:decoration-background"
          >
            {lang === "ar" ? "خارطة الطريق الكاملة" : "Full roadmap"}
          </Link>
        </div>
      </section>

      {/* Active Vertical */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-end justify-between mb-12">
            <div className="max-w-[56ch]">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent mb-4 block">
                {t("active.eye")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">{t("active.h")}</h2>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col border-s border-brand-line ps-4">
                <span className="text-2xl font-medium">1.2 GW</span>
                <span className="text-[10px] text-foreground/50 uppercase tracking-widest">
                  {t("active.pipeline")}
                </span>
              </div>
              <div className="flex flex-col border-s border-brand-line ps-4">
                <span className="text-2xl font-medium">400 MW</span>
                <span className="text-[10px] text-foreground/50 uppercase tracking-widest">
                  {t("active.bessCap")}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { img: solarImg, title: t("active.solarTitle"), body: t("active.solarBody"), n: "01" },
              { img: bessImg, title: t("active.bessTitle"), body: t("active.bessBody"), n: "02" },
              { img: gridImg, title: t("active.gridTitle"), body: t("active.gridBody"), n: "03" },
            ].map((c) => (
              <div
                key={c.n}
                className="group bg-background p-8 ring-1 ring-brand-line flex flex-col justify-between min-h-[420px] transition-shadow hover:shadow-sm"
              >
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-widest text-brand-accent mb-4">
                    0{c.n.slice(-1)}
                  </div>
                  <h3 className="text-lg font-medium mb-4">{c.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{c.body}</p>
                </div>
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="w-full aspect-[4/3] object-cover mt-6 rounded-sm outline outline-1 -outline-offset-1 outline-black/5"
                />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/power"
              className="text-[11px] uppercase tracking-widest font-medium underline underline-offset-8 decoration-brand-line hover:decoration-foreground"
            >
              {t("active.viewDivision")} →
            </Link>
          </div>
        </div>
      </section>

      {/* Localization */}
      <section className="px-6 py-24 bg-brand-sand border-y border-brand-line">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-3xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-accent mb-4 block">
              {t("loc.eye")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-6">{t("loc.h")}</h2>
            <p className="text-base sm:text-lg text-foreground/60 leading-relaxed">{t("loc.lede")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-line border border-brand-line">
            {[
              { h: t("loc.pillar1.h"), p: t("loc.pillar1.p"), n: "01" },
              { h: t("loc.pillar2.h"), p: t("loc.pillar2.p"), n: "02" },
              { h: t("loc.pillar3.h"), p: t("loc.pillar3.p"), n: "03" },
            ].map((p) => (
              <div key={p.n} className="bg-brand-sand p-8">
                <div className="text-[10px] font-mono text-brand-accent mb-6">[ {p.n} ]</div>
                <h3 className="font-medium text-lg mb-3">{p.h}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{p.p}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/localization"
              className="text-[11px] uppercase tracking-widest font-medium underline underline-offset-8 decoration-brand-line hover:decoration-foreground"
            >
              {lang === "ar" ? "تفاصيل التوطين" : "Localization details"} →
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="px-6 py-28">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-accent mb-6 block">
            {t("partner.eye")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight mb-6 text-balance">
            {t("partner.h")}
          </h2>
          <p className="text-base sm:text-lg text-foreground/60 leading-relaxed mb-10">{t("partner.lede")}</p>
          <Link
            to="/partnership"
            className="inline-block bg-brand-teal text-background px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-foreground transition-colors"
          >
            {lang === "ar" ? "بدء التواصل التنفيذي" : "Initiate executive contact"}
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
