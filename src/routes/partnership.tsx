import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { OmaniStar } from "@/components/OmaniMotif";
import { useRevealAll } from "@/hooks/useReveal";
import { useI18n } from "@/lib/i18n";
import { pageSeo } from "@/lib/seo";
import { Compass, Infinity as InfinityIcon, Mail, MapPin, ArrowUpRight, Shield } from "lucide-react";

export const Route = createFileRoute("/partnership")({
  head: () =>
    pageSeo({
      path: "/partnership",
      title: "Partnership — CBS",
      description:
        "Partnership qualification for tier-1 global technology firms seeking joint-venture entry into MEA infrastructure markets via CBS.",
      ogDescription: "A qualifying filter, not a lead funnel. Direct executive contact only.",
    }),
  component: PartnershipPage,
});

function PartnershipPage() {
  const { t, lang } = useI18n();
  const root = useRevealAll();
  const criteria = [t("partner.c1"), t("partner.c2"), t("partner.c3"), t("partner.c4")];
  const corporateFacts = [
    { lbl: t("about.registered"), val: t("about.registeredVal") },
    { lbl: t("about.hq"), val: t("about.hqVal") },
    { lbl: t("about.focus"), val: t("about.focusVal") },
  ];
  const principles = [
    { I: Shield, h: t("about.p1Title"), p: t("about.p1Body") },
    { I: Compass, h: t("about.p2Title"), p: t("about.p2Body") },
    { I: InfinityIcon, h: t("about.p3Title"), p: t("about.p3Body") },
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
              {t("partner.eye")}
            </div>
            <h1 className="reveal reveal-delay-1 mt-6 text-5xl sm:text-7xl font-extralight tracking-[-0.02em] leading-[1.02] max-w-4xl">
              {lang === "ar" ? (
                t("partner.h")
              ) : (
                <>
                  Qualified alliances{" "}
                  <span className="font-serif italic text-brand-teal">only.</span>
                </>
              )}
            </h1>
            <p className="reveal reveal-delay-2 mt-8 text-base sm:text-lg text-foreground/65 leading-relaxed max-w-[64ch]">
              {t("partner.lede")}
            </p>
            <div className="reveal reveal-delay-3 mt-10 omani-stripe h-[3px] w-32 rounded-full opacity-80" />
          </div>
        </section>

        {/* Who CBS is — preserved from former /about page */}
        <section className="relative px-6 py-20 sm:py-24 border-t border-brand-line">
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 md:col-span-7 space-y-6 text-base sm:text-lg text-foreground/70 leading-relaxed">
              <div className="reveal text-[10px] font-mono uppercase tracking-[0.3em] text-brand-teal mb-3">
                {t("about.eye")}
              </div>
              <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl font-extralight tracking-tight text-foreground leading-[1.1] mb-4">
                {t("about.h")}
              </h2>
              <p className="reveal reveal-delay-1">{t("about.p1")}</p>
              <p className="reveal reveal-delay-2">{t("about.p2")}</p>
            </div>
            <div className="col-span-12 md:col-span-5 space-y-6 md:pt-12">
              {corporateFacts.map((f, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} border-t border-brand-line pt-4`}
                >
                  <div className="text-[10px] uppercase tracking-widest text-foreground/40 mb-1">
                    {f.lbl}
                  </div>
                  <div className="text-base font-medium">{f.val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Criteria */}
        <section className="relative px-6 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
          <div className="relative max-w-6xl mx-auto">
            <div className="reveal flex items-end justify-between mb-10">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-teal">
                  {t("partner.criteria")}
                </div>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extralight tracking-tight">
                  {lang === "ar" ? "معايير الشريك" : "What we look for"}
                </h2>
              </div>
              <OmaniStar className="hidden md:block size-12 text-brand-teal/30" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {criteria.map((c, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-2xl border border-brand-line bg-card/40 backdrop-blur p-7 flex items-start gap-5 tilt-card`}
                >
                  <span className="font-mono text-xs text-brand-teal shrink-0 mt-1">0{i + 1}</span>
                  <p className="text-base sm:text-lg font-medium text-foreground leading-snug">
                    {c}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-teal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operating Principles — preserved from former /about page */}
        <section className="relative px-6 py-20 sm:py-24 border-t border-brand-line">
          <div className="max-w-7xl mx-auto">
            <div className="reveal text-[10px] font-mono uppercase tracking-[0.3em] text-brand-teal mb-3">
              {t("about.principleEye")}
            </div>
            <h2 className="reveal reveal-delay-1 text-2xl sm:text-4xl font-extralight tracking-tight mb-10 sm:mb-14 max-w-2xl">
              {t("about.principleH")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-line border border-brand-line rounded-2xl overflow-hidden">
              {principles.map((p, i) => {
                const I = p.I;
                return (
                  <div
                    key={i}
                    className={`reveal reveal-delay-${i + 1} bg-card/40 backdrop-blur p-7 sm:p-8 hover:bg-card/70 transition-colors group`}
                  >
                    <I className="size-5 text-brand-teal mb-5 transition-transform group-hover:scale-110" />
                    <div className="text-base sm:text-lg font-medium mb-2">{p.h}</div>
                    <p className="text-sm text-foreground/60 leading-relaxed">{p.p}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="relative px-6 py-24 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full bg-brand-teal/10 blur-3xl" />
          </div>
          <div className="max-w-6xl mx-auto rounded-3xl border border-brand-line bg-gradient-to-br from-card/70 via-card/40 to-card/20 backdrop-blur overflow-hidden">
            <div className="grid md:grid-cols-12">
              <div className="md:col-span-5 p-8 sm:p-10 border-b md:border-b-0 md:border-e border-brand-line relative overflow-hidden">
                <div className="absolute inset-0 bg-omani-pattern opacity-30 pointer-events-none" />
                <div className="relative">
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-teal">
                    {t("partner.contact")}
                  </div>
                  <h3 className="mt-4 text-2xl sm:text-3xl font-extralight leading-tight">
                    {lang === "ar" ? (
                      "تواصل مباشر مع القيادة التنفيذية."
                    ) : (
                      <>
                        Direct line to{" "}
                        <span className="font-serif italic text-brand-teal">
                          executive leadership.
                        </span>
                      </>
                    )}
                  </h3>
                  <p className="mt-4 text-sm text-foreground/60 leading-relaxed">
                    {t("partner.note")}
                  </p>
                  <div className="mt-8 omani-stripe h-[3px] w-20 rounded-full opacity-80" />
                </div>
              </div>
              <div className="md:col-span-7 p-8 sm:p-10 space-y-4 sm:space-y-6">
                {(
                  [
                    {
                      I: Mail,
                      lbl: "Email",
                      val: "executive@cbs-oman.com",
                      href: "mailto:executive@cbs-oman.com",
                    },
                    { I: MapPin, lbl: t("about.hq"), val: t("about.hqVal"), href: undefined },
                  ] as const
                ).map((row, i) => {
                  const I = row.I;
                  const className = `reveal reveal-delay-${i + 1} group flex items-start gap-4 rounded-xl border border-brand-line bg-background/40 px-5 py-4 transition-all ${row.href ? "hover:bg-background/70 hover:border-brand-teal/40" : ""}`;
                  const inner = (
                    <>
                      <span className="grid place-items-center size-9 rounded-lg bg-brand-teal/15 text-brand-teal shrink-0">
                        <I className="size-4" />
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] uppercase tracking-widest text-foreground/45">
                          {row.lbl}
                        </div>
                        <div
                          className={`text-lg sm:text-xl font-medium tracking-tight truncate ${row.href ? "group-hover:text-brand-teal transition-colors" : ""}`}
                        >
                          {row.val}
                        </div>
                      </div>
                      {row.href && (
                        <ArrowUpRight className="size-4 text-foreground/40 group-hover:text-brand-teal transition-colors shrink-0 mt-2" />
                      )}
                    </>
                  );
                  return row.href ? (
                    <a key={i} href={row.href} className={className}>
                      {inner}
                    </a>
                  ) : (
                    <div key={i} className={className}>
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
