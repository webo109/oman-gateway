import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { OmaniStar } from "@/components/OmaniMotif";
import { useRevealAll } from "@/hooks/useReveal";
import { useI18n } from "@/lib/i18n";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/partnership")({
  head: () => ({
    meta: [
      { title: "Partnership — CBS" },
      { name: "description", content: "Partnership qualification for tier-1 global technology firms seeking joint-venture entry into MEA infrastructure markets via CBS." },
      { property: "og:title", content: "Partnership — CBS" },
      { property: "og:description", content: "A qualifying filter, not a lead funnel. Direct executive contact only." },
    ],
  }),
  component: PartnershipPage,
});

function PartnershipPage() {
  const { t, lang } = useI18n();
  const root = useRevealAll();
  const criteria = [t("partner.c1"), t("partner.c2"), t("partner.c3"), t("partner.c4")];

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
            <h1 className="reveal reveal-delay-1 mt-6 text-5xl sm:text-7xl font-light tracking-[-0.02em] leading-[1.02] max-w-4xl">
              {lang === "ar" ? (t("partner.h")) : (<>Qualified alliances <span className="font-serif italic text-brand-teal">only.</span></>)}
            </h1>
            <p className="reveal reveal-delay-2 mt-8 text-base sm:text-lg text-foreground/65 leading-relaxed max-w-[64ch]">
              {t("partner.lede")}
            </p>
            <div className="reveal reveal-delay-3 mt-10 omani-stripe h-[3px] w-32 rounded-full opacity-80" />
          </div>
        </section>

        {/* Criteria */}
        <section className="relative px-6 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
          <div className="relative max-w-6xl mx-auto">
            <div className="reveal flex items-end justify-between mb-10">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-teal">{t("partner.criteria")}</div>
                <h2 className="mt-3 text-3xl sm:text-4xl font-light tracking-tight">
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
                  <p className="text-base sm:text-lg font-medium text-foreground leading-snug">{c}</p>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-teal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
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
              <div className="md:col-span-5 p-8 sm:p-10 border-e border-brand-line relative overflow-hidden">
                <div className="absolute inset-0 bg-omani-pattern opacity-30 pointer-events-none" />
                <div className="relative">
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-teal">{t("partner.contact")}</div>
                  <h3 className="mt-4 text-2xl sm:text-3xl font-light leading-tight">
                    {lang === "ar" ? "تواصل مباشر مع القيادة التنفيذية." : (<>Direct line to <span className="font-serif italic text-brand-teal">executive leadership.</span></>)}
                  </h3>
                  <p className="mt-4 text-sm text-foreground/60 leading-relaxed">{t("partner.note")}</p>
                  <div className="mt-8 omani-stripe h-[3px] w-20 rounded-full opacity-80" />
                </div>
              </div>
              <div className="md:col-span-7 p-8 sm:p-10 space-y-6">
                {[
                  { I: Mail, lbl: "Email", val: "executive@cbs-oman.com", href: "mailto:executive@cbs-oman.com" },
                  { I: Phone, lbl: lang === "ar" ? "هاتف مباشر" : "Direct line", val: "+968 2400 0000", href: "tel:+96824000000" },
                  { I: MapPin, lbl: t("about.hq"), val: t("about.hqVal") },
                ].map((row, i) => {
                  const I = row.I;
                  return (
                    <a
                      key={i}
                      href={row.href}
                      className={`reveal reveal-delay-${i + 1} group flex items-start gap-4 rounded-xl border border-brand-line bg-background/40 hover:bg-background/70 hover:border-brand-teal/40 px-5 py-4 transition-all ${!row.href ? "pointer-events-none" : ""}`}
                    >
                      <span className="grid place-items-center size-9 rounded-lg bg-brand-teal/15 text-brand-teal shrink-0">
                        <I className="size-4" />
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] uppercase tracking-widest text-foreground/45">{row.lbl}</div>
                        <div className="text-lg sm:text-xl font-medium tracking-tight truncate group-hover:text-brand-teal transition-colors">
                          {row.val}
                        </div>
                      </div>
                      {row.href && <ArrowUpRight className="size-4 text-foreground/40 group-hover:text-brand-teal transition-colors shrink-0 mt-2" />}
                    </a>
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
