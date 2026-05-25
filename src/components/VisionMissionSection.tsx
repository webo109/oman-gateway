import { OmaniStar } from "./OmaniMotif";
import { useI18n } from "@/lib/i18n";
import { Eye, Target } from "lucide-react";
import substationImg from "@/assets/substation.jpg";

export function VisionMissionSection() {
  const { t, lang } = useI18n();

  return (
    <section className="relative px-6 py-20 sm:py-28 overflow-hidden">
      <img
        src={substationImg}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08] pointer-events-none"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-brand-teal/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-brand-teal mb-3">
          <OmaniStar className="size-4 text-brand-teal" />
          {t("about.vmEye")}
        </div>
        <h2 className="reveal reveal-delay-1 text-3xl sm:text-5xl font-extralight tracking-tight max-w-3xl mb-12 sm:mb-16 leading-[1.05]">
          {lang === "ar" ? (
            <>
              ما وراء البنية التحتية —{" "}
              <span className="font-serif italic text-brand-teal">هندسة سيادية</span>.
            </>
          ) : (
            <>
              Beyond infrastructure —{" "}
              <span className="font-serif italic text-brand-teal">sovereign architecture</span>.
            </>
          )}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <article className="reveal reveal-delay-1 group relative overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br from-brand-teal/10 via-card/40 to-card/10 backdrop-blur p-7 sm:p-9 tilt-card isolate flex flex-col">
            <div className="absolute -right-10 -top-10 size-48 rounded-full bg-brand-teal/15 blur-3xl pointer-events-none" />
            <div className="relative flex flex-col flex-1">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center size-11 rounded-xl bg-brand-teal text-primary-foreground">
                  <Eye className="size-5" />
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-foreground/45 uppercase">
                  [ 01 ]
                </span>
              </div>
              <h3 className="mt-6 text-2xl sm:text-3xl font-extralight tracking-tight">
                {t("about.visionTitle")}
              </h3>
              <p className="mt-4 text-base text-foreground/70 leading-relaxed">
                {t("about.visionBody")}
              </p>
              <div className="mt-auto pt-7">
                <div className="omani-stripe h-[3px] w-16 rounded-full opacity-80" />
              </div>
            </div>
          </article>

          <article className="reveal reveal-delay-2 group relative overflow-hidden rounded-2xl border border-brand-line bg-gradient-to-br from-brand-amber/10 via-card/40 to-card/10 backdrop-blur p-7 sm:p-9 tilt-card isolate flex flex-col">
            <div className="absolute -right-10 -top-10 size-48 rounded-full bg-brand-amber/15 blur-3xl pointer-events-none" />
            <div className="relative flex flex-col flex-1">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center size-11 rounded-xl bg-brand-amber/90 text-primary-foreground">
                  <Target className="size-5" />
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-foreground/45 uppercase">
                  [ 02 ]
                </span>
              </div>
              <h3 className="mt-6 text-2xl sm:text-3xl font-extralight tracking-tight">
                {t("about.missionTitle")}
              </h3>
              <p className="mt-4 text-base text-foreground/70 leading-relaxed">
                {t("about.missionBody")}
              </p>
              <div className="mt-auto pt-7">
                <div className="omani-stripe h-[3px] w-16 rounded-full opacity-80" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
