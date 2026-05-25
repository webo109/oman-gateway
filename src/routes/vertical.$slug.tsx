import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { OmaniStar } from "@/components/OmaniMotif";
import { useRevealAll } from "@/hooks/useReveal";
import { useI18n } from "@/lib/i18n";
import { pageSeo } from "@/lib/seo";
import {
  ArrowUpRight,
  ArrowLeft,
  HardHat,
  Truck,
  Mountain,
  Sprout,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import agricultureImg from "@/assets/agriculture.jpg";
import agriculture2Img from "@/assets/agriculture-2.jpg";
import agriculture3Img from "@/assets/agriculture-3.jpg";
import constructionImg from "@/assets/construction.jpg";
import construction2Img from "@/assets/construction-2.jpg";
import construction3Img from "@/assets/construction-3.jpg";
import logisticsImg from "@/assets/logistics.jpg";
import logistics2Img from "@/assets/logistics-2.jpg";
import logistics3Img from "@/assets/logistics-3.jpg";
import mineralsImg from "@/assets/minerals.jpg";
import minerals2Img from "@/assets/minerals-2.jpg";
import minerals3Img from "@/assets/minerals-3.jpg";
import foodstuffsImg from "@/assets/foodstuffs.jpg";
import foodstuffs2Img from "@/assets/foodstuffs-2.jpg";
import foodstuffs3Img from "@/assets/foodstuffs-3.jpg";

type Status = "active" | "planned" | "future";

type Vertical = {
  slug: string;
  no: string;
  status: Status;
  date: { en: string; ar: string };
  icon: LucideIcon;
  title: { en: string; ar: string };
  eyebrow: { en: string; ar: string };
  lede: { en: string; ar: string };
  pillars: {
    title: { en: string; ar: string };
    body: { en: string; ar: string };
    points: { en: string[]; ar: string[] };
    img: string;
  }[];
};

const verticals: Record<string, Vertical> = {
  construction: {
    slug: "construction",
    no: "03",
    status: "planned",
    date: { en: "Planned · 2026", ar: "مخطط · 2026" },
    icon: HardHat,
    title: { en: "Construction", ar: "البناء" },
    eyebrow: {
      en: "Phase 03 — Civil & Heavy Infrastructure",
      ar: "المرحلة 03 — الهندسة المدنية والبنية التحتية الثقيلة",
    },
    lede: {
      en: "Specialized civil engineering and heavy infrastructure execution arm in support of CBS-led utility deployment across Oman and the wider region.",
      ar: "ذراع تنفيذ متخصص للهندسة المدنية والبنية التحتية الثقيلة لدعم نشر المرافق بقيادة CBS عبر عُمان والمنطقة.",
    },
    pillars: [
      {
        title: { en: "Heavy Civils", ar: "الأعمال المدنية الثقيلة" },
        body: {
          en: "Foundations, balance-of-plant and earthworks for utility-scale solar, BESS, and substation projects.",
          ar: "الأساسات وأعمال موازنة المحطات والحفريات لمشاريع الطاقة الشمسية وأنظمة التخزين والمحطات الفرعية.",
        },
        points: {
          en: ["Balance-of-plant works", "Site grading & access roads", "Concrete foundations"],
          ar: ["أعمال موازنة المحطة", "تسوية الموقع والطرق", "أساسات خرسانية"],
        },
        img: constructionImg,
      },
      {
        title: { en: "Structural EPC", ar: "تنفيذ EPC الإنشائي" },
        body: {
          en: "Turn-key structural delivery for industrial buildings, control rooms, and HV switchyards.",
          ar: "تسليم إنشائي متكامل للمباني الصناعية وغرف التحكم وساحات المفاتيح عالية الجهد.",
        },
        points: {
          en: ["Industrial buildings", "Control rooms", "HV switchyards"],
          ar: ["مباني صناعية", "غرف التحكم", "ساحات المفاتيح عالية الجهد"],
        },
        img: construction2Img,
      },
      {
        title: { en: "ICV-Aligned Delivery", ar: "تسليم متوافق مع ICV" },
        body: {
          en: "Workforce, sub-contractor and procurement plans calibrated to Oman In-Country Value targets.",
          ar: "خطط القوى العاملة والمقاولين والمشتريات معايرة وفق أهداف القيمة المحلية المضافة في عُمان.",
        },
        points: {
          en: ["Omani workforce", "Local supply chain", "ICV reporting"],
          ar: ["قوى عاملة عُمانية", "سلسلة توريد محلية", "تقارير ICV"],
        },
        img: construction3Img,
      },
    ],
  },
  logistics: {
    slug: "logistics",
    no: "04",
    status: "planned",
    date: { en: "Planned · 2026", ar: "مخطط · 2026" },
    icon: Truck,
    title: { en: "Logistics", ar: "الخدمات اللوجستية" },
    eyebrow: {
      en: "Phase 04 — Heavy-Lift & Supply Chain",
      ar: "المرحلة 04 — النقل الثقيل وسلاسل التوريد",
    },
    lede: {
      en: "Heavy-lift transport and supply-chain orchestration for remote industrial sites across Oman and East Africa.",
      ar: "نقل ثقيل وتنسيق سلاسل توريد للمواقع الصناعية النائية عبر عُمان وشرق أفريقيا.",
    },
    pillars: [
      {
        title: { en: "Heavy-Lift Transport", ar: "النقل الثقيل" },
        body: {
          en: "Movement of transformers, turbines, and oversize equipment from port to remote project sites.",
          ar: "نقل المحولات والتوربينات والمعدات الضخمة من الميناء إلى مواقع المشاريع النائية.",
        },
        points: {
          en: ["Port-to-site moves", "Permitting & escorts", "Specialized trailers"],
          ar: ["نقل من الميناء", "تصاريح ومرافقة", "مقطورات متخصصة"],
        },
        img: logistics2Img,
      },
      {
        title: { en: "Supply Chain Orchestration", ar: "تنسيق سلسلة التوريد" },
        body: {
          en: "Integrated freight, customs, and warehousing for multi-shipment industrial programs.",
          ar: "شحن وجمارك وتخزين متكامل للبرامج الصناعية متعددة الشحنات.",
        },
        points: {
          en: ["Multi-modal freight", "Customs clearance", "Staging yards"],
          ar: ["شحن متعدد الوسائط", "تخليص جمركي", "ساحات تجميع"],
        },
        img: logistics3Img,
      },
      {
        title: { en: "Cross-Border Corridors", ar: "ممرات عابرة للحدود" },
        body: {
          en: "Operational links connecting GCC ports with East-African industrial corridors.",
          ar: "روابط تشغيلية تصل موانئ الخليج بالممرات الصناعية في شرق أفريقيا.",
        },
        points: {
          en: ["GCC ↔ East Africa", "Bonded transit", "Last-mile rural access"],
          ar: ["الخليج ↔ شرق أفريقيا", "نقل برسم الجمارك", "وصول الميل الأخير"],
        },
        img: logisticsImg,
      },
    ],
  },
  minerals: {
    slug: "minerals",
    no: "05",
    status: "future",
    date: { en: "Long-horizon", ar: "أفق طويل" },
    icon: Mountain,
    title: { en: "Minerals", ar: "المعادن" },
    eyebrow: { en: "Phase 05 — Critical Minerals", ar: "المرحلة 05 — المعادن الحرجة" },
    lede: {
      en: "Strategic positioning in critical minerals tied to the energy transition and battery supply chains across Oman and East Africa.",
      ar: "تموضع استراتيجي في المعادن الحرجة المرتبطة بتحول الطاقة وسلاسل توريد البطاريات عبر عُمان وشرق أفريقيا.",
    },
    pillars: [
      {
        title: { en: "Battery Minerals", ar: "معادن البطاريات" },
        body: {
          en: "Selective exposure to copper, nickel, and rare earths via JV partners.",
          ar: "انكشاف انتقائي على النحاس والنيكل والعناصر النادرة عبر شركاء المشاريع المشتركة.",
        },
        points: { en: ["Copper", "Nickel", "Rare earths"], ar: ["نحاس", "نيكل", "عناصر نادرة"] },
        img: minerals2Img,
      },
      {
        title: { en: "Exploration JV", ar: "مشاريع استكشاف مشتركة" },
        body: {
          en: "Co-investment with tier-1 mining houses targeting Omani and East African concessions.",
          ar: "استثمار مشترك مع شركات تعدين من الفئة الأولى تستهدف امتيازات في عُمان وشرق أفريقيا.",
        },
        points: {
          en: ["Concession sourcing", "Geological surveys", "Permit structuring"],
          ar: ["جلب الامتيازات", "المسوحات الجيولوجية", "هيكلة التصاريح"],
        },
        img: mineralsImg,
      },
      {
        title: { en: "Processing & Offtake", ar: "المعالجة والاستيعاب" },
        body: {
          en: "Downstream processing and long-term offtake contracts into industrial buyers.",
          ar: "معالجة لاحقة وعقود استيعاب طويلة الأجل مع المشترين الصناعيين.",
        },
        points: {
          en: ["Refining capacity", "Offtake agreements", "Industrial buyers"],
          ar: ["طاقة تكرير", "اتفاقيات استيعاب", "مشترون صناعيون"],
        },
        img: minerals3Img,
      },
    ],
  },
  agriculture: {
    slug: "agriculture",
    no: "02",
    status: "active",
    date: { en: "Active · 2025", ar: "نشط · 2025" },
    icon: Sprout,
    title: { en: "Agriculture", ar: "الزراعة" },
    eyebrow: { en: "Phase 02 — Food Security Corridors", ar: "المرحلة 02 — ممرات الأمن الغذائي" },
    lede: {
      en: "Structured, export-oriented agriculture across Gulf-Africa food security corridors — now operational alongside the Power division.",
      ar: "زراعة منظمة وموجهة للتصدير عبر ممرات الأمن الغذائي بين الخليج وأفريقيا — تعمل الآن إلى جانب قطاع الطاقة.",
    },
    pillars: [
      {
        title: { en: "Controlled-Environment Farming", ar: "الزراعة في بيئة محكومة" },
        body: {
          en: "High-yield greenhouse and hydroponic systems calibrated for arid-climate productivity.",
          ar: "أنظمة بيوت محمية وزراعة مائية عالية الإنتاجية معايرة للمناخ الجاف.",
        },
        points: {
          en: ["Greenhouse arrays", "Hydroponics", "Water-efficient irrigation"],
          ar: ["مصفوفات بيوت محمية", "زراعة مائية", "ري موفر للمياه"],
        },
        img: agricultureImg,
      },
      {
        title: { en: "Export Corridors", ar: "ممرات التصدير" },
        body: {
          en: "Cold-chain export programs linking East African production with Gulf demand centers.",
          ar: "برامج تصدير بسلسلة تبريد تربط الإنتاج في شرق أفريقيا بمراكز الطلب الخليجية.",
        },
        points: {
          en: ["Cold-chain logistics", "GCC retail off-take", "Regulatory compliance"],
          ar: ["لوجستيات سلسلة التبريد", "استيعاب التجزئة الخليجية", "الامتثال التنظيمي"],
        },
        img: agriculture2Img,
      },
      {
        title: { en: "Food Security Partnerships", ar: "شراكات الأمن الغذائي" },
        body: {
          en: "Joint ventures with semi-governmental food security funds and strategic reserves.",
          ar: "مشاريع مشتركة مع صناديق الأمن الغذائي شبه الحكومية والاحتياطيات الاستراتيجية.",
        },
        points: {
          en: ["Sovereign food funds", "Strategic reserves", "Long-term contracts"],
          ar: ["صناديق غذاء سيادية", "احتياطيات استراتيجية", "عقود طويلة الأجل"],
        },
        img: agriculture3Img,
      },
    ],
  },
  foodstuffs: {
    slug: "foodstuffs",
    no: "06",
    status: "future",
    date: { en: "Long-horizon", ar: "أفق طويل" },
    icon: Wheat,
    title: { en: "Foodstuffs Import & Export", ar: "استيراد وتصدير المواد الغذائية" },
    eyebrow: {
      en: "Phase 06 — Structured Commodity Trading",
      ar: "المرحلة 06 — تجارة السلع المنظمة",
    },
    lede: {
      en: "Structured trading networks for staple commodities between East Africa and the Gulf, building on CBS agricultural and logistics capacity.",
      ar: "شبكات تجارة منظمة للسلع الأساسية بين شرق أفريقيا والخليج، مبنية على القدرات الزراعية واللوجستية لـ CBS.",
    },
    pillars: [
      {
        title: { en: "Staple Commodities", ar: "السلع الأساسية" },
        body: {
          en: "Grains, pulses, and edible oils sourced and traded under long-term frameworks.",
          ar: "الحبوب والبقوليات والزيوت الغذائية، مصدرة ومتداولة ضمن أطر طويلة الأجل.",
        },
        points: { en: ["Grains", "Pulses", "Edible oils"], ar: ["حبوب", "بقوليات", "زيوت غذائية"] },
        img: foodstuffs2Img,
      },
      {
        title: { en: "Trading Desk", ar: "مكتب التداول" },
        body: {
          en: "In-house origination and risk desk operating between East African sources and Gulf buyers.",
          ar: "مكتب نشأة وإدارة مخاطر داخلي بين المصادر في شرق أفريقيا والمشترين الخليجيين.",
        },
        points: { en: ["Origination", "Hedging", "Settlement"], ar: ["نشأة", "تحوط", "تسوية"] },
        img: foodstuffs3Img,
      },
      {
        title: { en: "Strategic Storage", ar: "التخزين الاستراتيجي" },
        body: {
          en: "Bonded warehousing and silo capacity at strategic Omani transit nodes.",
          ar: "مستودعات برسم الجمارك وصوامع تخزين عند العقد العبور الاستراتيجية في عُمان.",
        },
        points: {
          en: ["Silo capacity", "Bonded warehouses", "Transit nodes"],
          ar: ["سعة الصوامع", "مستودعات برسم الجمارك", "عقد العبور"],
        },
        img: foodstuffsImg,
      },
    ],
  },
};

export const Route = createFileRoute("/vertical/$slug")({
  beforeLoad: ({ params }) => {
    if (!verticals[params.slug]) throw notFound();
  },
  head: ({ params }) => {
    const v = verticals[params.slug];
    if (!v) return { meta: [{ title: "Vertical — CBS" }] };
    return pageSeo({
      path: `/vertical/${params.slug}`,
      title: `${v.title.en} — CBS`,
      description: v.lede.en,
    });
  },
  component: VerticalPage,
});

function VerticalPage() {
  const { slug } = Route.useParams();
  const v = verticals[slug];
  const { lang } = useI18n();
  const root = useRevealAll();
  if (!v) return null;
  const Icon = v.icon;

  const statusLabel =
    v.status === "active"
      ? lang === "ar"
        ? "نشط"
        : "Active"
      : v.status === "planned"
        ? lang === "ar"
          ? "مخطط"
          : "Planned"
        : lang === "ar"
          ? "مستقبلي"
          : "Future";

  return (
    <PageShell>
      <div ref={root}>
        {/* Hero */}
        <section className="relative isolate overflow-hidden pt-32 pb-20 px-6">
          <AnimatedBackground variant="soft" />
          <div className="absolute inset-0 bg-omani-pattern-soft opacity-60 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto">
            <Link
              to="/roadmap"
              className="reveal inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.25em] text-foreground/55 hover:text-brand-teal transition-colors"
            >
              <ArrowLeft className={`size-3.5 ${lang === "ar" ? "-scale-x-100" : ""}`} />
              {lang === "ar" ? "العودة إلى خارطة الطريق" : "Back to roadmap"}
            </Link>

            <div className="reveal reveal-delay-1 mt-8 flex flex-wrap items-center gap-3">
              <span className="grid place-items-center size-11 rounded-xl bg-brand-teal/15 text-brand-teal">
                <Icon className="size-5" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.3em] text-foreground/45">
                P.{v.no}
              </span>
              <span
                className={`text-[10px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded-full ${
                  v.status === "active"
                    ? "bg-brand-teal/15 text-brand-teal"
                    : v.status === "planned"
                      ? "border border-brand-line text-foreground/60"
                      : "border border-brand-line text-foreground/40"
                }`}
              >
                {statusLabel}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/45">
                {lang === "ar" ? v.date.ar : v.date.en}
              </span>
            </div>

            <div className="reveal reveal-delay-2 mt-6 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-brand-teal">
              <OmaniStar className="size-4 text-brand-teal" />
              {lang === "ar" ? v.eyebrow.ar : v.eyebrow.en}
            </div>

            <h1 className="reveal reveal-delay-2 mt-6 text-5xl sm:text-7xl font-extralight tracking-[-0.02em] leading-[1.02] max-w-4xl">
              {lang === "ar" ? v.title.ar : v.title.en}
              <span className="font-serif italic text-brand-teal">.</span>
            </h1>
            <p className="reveal reveal-delay-3 mt-8 text-base sm:text-lg text-foreground/65 leading-relaxed max-w-[64ch]">
              {lang === "ar" ? v.lede.ar : v.lede.en}
            </p>
            <div className="reveal reveal-delay-3 mt-10 omani-stripe h-[3px] w-32 rounded-full opacity-80" />
          </div>
        </section>

        {/* Pillars */}
        {v.pillars.map((p, i) => {
          const reverse = i % 2 === 1;
          return (
            <section key={i} className="relative px-6 py-20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
              <div className="relative max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center">
                <div className={`col-span-12 lg:col-span-5 ${reverse ? "lg:order-2" : ""} reveal`}>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-foreground/45">
                    [ {v.no}.{i + 1} ]
                  </span>
                  <h2 className="mt-4 text-3xl sm:text-4xl font-extralight tracking-tight mb-5">
                    {lang === "ar" ? p.title.ar : p.title.en}
                  </h2>
                  <p className="text-base text-foreground/65 leading-relaxed mb-6">
                    {lang === "ar" ? p.body.ar : p.body.en}
                  </p>
                  <ul className="space-y-2.5">
                    {(lang === "ar" ? p.points.ar : p.points.en).map((pt, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-foreground/75">
                        <span className="size-1.5 rounded-full bg-brand-teal shadow-[0_0_10px_var(--brand-glow)]" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`col-span-12 lg:col-span-7 ${reverse ? "lg:order-1" : ""} reveal reveal-delay-2`}
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-brand-line tilt-card isolate">
                    <img
                      src={p.img}
                      alt={lang === "ar" ? p.title.ar : p.title.en}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[16/10] object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
                      style={{ transformOrigin: "center", willChange: "transform" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/75 via-background/20 to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4">
                      <span className="grid place-items-center size-10 rounded-xl bg-brand-teal/20 backdrop-blur border border-brand-teal/30 text-brand-teal">
                        <Icon className="size-4" />
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-1 rounded-full bg-background/70 backdrop-blur border border-brand-line">
                        {v.no}.{i + 1}
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
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight leading-[1.05] text-balance">
              {lang === "ar" ? (
                "تبدأ محادثات الشراكة هنا."
              ) : (
                <>
                  Partnership conversations{" "}
                  <span className="font-serif italic text-brand-teal">start here.</span>
                </>
              )}
            </h2>
            <Link
              to="/partnership"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-brand-teal text-primary-foreground px-6 py-3.5 text-sm font-medium hover:shadow-[0_20px_60px_-15px_var(--brand-glow)] transition-all"
            >
              {lang === "ar" ? "البوابة" : "Partnership Portal"}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
