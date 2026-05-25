import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.power": "Power & Renewables",
  "nav.roadmap": "Strategic Roadmap",
  "nav.localization": "Localization",
  "nav.partnership": "Partnership",
  "nav.portal": "Partner Inquiry",
  "brand.tagline": "Centric for Business Solutions",
  "brand.sub": "Strategic Joint-Venture Vehicle / Sultanate of Oman",

  "home.eyebrow": "Sovereign Class · ICV Aligned",
  "home.h1.a": "Engineering the",
  "home.h1.b": "localization",
  "home.h1.c": "of MEA infrastructure.",
  "home.scrollHint": "Scroll",
  "home.lede":
    "CBS facilitates the secure entry of tier-1 global infrastructure firms into Omani and African markets, aligning foreign technical mastery with Sultanate Vision 2040 requirements.",

  "home.positioning.eye": "01 / Positioning",
  "home.positioning.h": "A private corporate vehicle for state-backed infrastructure.",
  "home.positioning.p":
    "CBS operates as a lean, privately-held localization platform — merging international technical execution with precise domestic compliance, ICV scoring, and regulatory navigation across the Middle East and African markets.",

  "roadmap.eye": "Implementation Cycle",
  "roadmap.h": "Phased Growth Roadmap",

  "active.eye": "Active Vertical",
  "active.h": "Power & Renewable Energy",
  "active.solarTitle": "Solar PV Utility",
  "active.solarBody":
    "Developing large-scale photovoltaic arrays in partnership with global IPP leaders.",
  "active.bessTitle": "BESS Integration",
  "active.bessBody": "Containerized Battery Energy Storage Systems for regional grid stability.",
  "active.gridTitle": "HV Grid Expansion",
  "active.gridBody":
    "High-voltage transmission infrastructure and substation modernization programs.",
  "active.viewDivision": "View division",

  "loc.eye": "04 / Structural Advantage",
  "loc.h": "The Localization Platform",
  "loc.lede":
    "Foreign technology firms face mounting barriers without localized content metrics. CBS resolves this through three compliance pillars.",
  "loc.pillar1.h": "ICV Optimization",
  "loc.pillar1.p":
    "Precise alignment with In-Country Value scoring frameworks to ensure preferential tender evaluation across semi-governmental utility contracts.",
  "loc.pillar2.h": "Regulatory Navigation",
  "loc.pillar2.p":
    "Domestic permitting, corporate-law shielding, and direct connectivity to ministries and regulators across Oman and the GCC.",
  "loc.pillar3.h": "Vision 2040 Integration",
  "loc.pillar3.p":
    "Strategic positioning within Oman's energy-transition roadmap as a cross-border clean-energy corridor to East and Southern Africa.",

  "partner.eye": "05 / Partnership",
  "partner.h": "Qualified Alliances Only",
  "partner.lede":
    "CBS forms exclusive alliances with privately-held, tier-1 global technology leaders. We seek bankable balance sheets, turnkey capability, and long-horizon orientation for joint development of state-backed utility assets.",
  "partner.criteria": "Partner Criteria",
  "partner.c1": "Privately-held tier-1 technology leader",
  "partner.c2": "Bankable balance sheet, IFI-grade",
  "partner.c3": "Turnkey manufacturing and EPC capability",
  "partner.c4": "Long-horizon, equity-style orientation",
  "partner.contact": "Executive Contact",
  "partner.note": "Direct executive contact only. CBS does not operate a lead-capture funnel.",

  "power.eye": "Division 01 · Active",
  "power.h": "Power & Renewable Energy",
  "power.lede":
    "The flagship vertical of CBS. Three operational sub-areas servicing state-backed utility deployment across Oman, East Africa, and Southern Africa.",

  "about.eye": "About",
  "about.h": "A private Omani corporate vehicle.",
  "about.p1":
    "Centric for Business Solutions is a privately-held company registered in the Sultanate of Oman, structured to act as a specialized localization platform and strategic joint-venture vehicle for state-backed utility, energy, and heavy industrial infrastructure.",
  "about.p2":
    "CBS operates as a private sector entity under a lean model — combining international technical execution with domestic compliance, localized content metrics, and regulatory navigation. We do not provide services; we structure alliances.",
  "about.hq": "Headquarters",
  "about.hqVal": "Muscat, Sultanate of Oman",
  "about.focus": "Corporate Focus",
  "about.focusVal": "Power Infrastructure & Cross-Border Industrial Joint Ventures",
  "about.registered": "Registered In",
  "about.registeredVal": "Sultanate of Oman",
  "about.vmEye": "Vision · Mission",
  "about.visionTitle": "Vision",
  "about.visionBody":
    "To be the Sultanate's premier private vehicle for routing tier-1 global infrastructure capital and technology into Oman and the broader MEA corridor — making localization the default, not the exception.",
  "about.missionTitle": "Mission",
  "about.missionBody":
    "Structure exclusive joint ventures between foreign technical leaders and state-backed counterparties. Deliver bankable, ICV-aligned execution across power, agriculture, and adjacent industrial verticals — at sovereign quality, on private timelines.",
  "about.principleEye": "Operating Principles",
  "about.principleH": "Three immovable rules.",
  "about.p1Title": "Localization-first",
  "about.p1Body":
    "Every alliance is calibrated to In-Country Value scoring before structure, not after.",
  "about.p2Title": "Sovereign-grade discretion",
  "about.p2Body":
    "We operate as a closed counterparty. No lead funnel, no public deal flow, no syndicated rounds.",
  "about.p3Title": "Long-horizon equity",
  "about.p3Body":
    "Partnerships are written for ten-year arcs — utilities, food systems, transition minerals.",

  "footer.address": "Muscat, Sultanate of Oman",
  "footer.qual": "Partnership Qualification",
  "footer.submit": "Partner Inquiry",
  "footer.rights": "Centric for Business Solutions. All rights reserved.",
  "footer.tagline":
    "A private Omani company localizing global expertise in the energy and infrastructure sector.",
};

const ar: Dict = {
  "nav.home": "الرئيسية",
  "nav.power": "الطاقة والمتجددة",
  "nav.roadmap": "خارطة الطريق",
  "nav.localization": "التوطين",
  "nav.partnership": "الشراكة",
  "nav.portal": "تواصل الشركاء",
  "brand.tagline": "المركزية لحلول الأعمال",
  "brand.sub": "أداة مشاريع مشتركة استراتيجية / سلطنة عُمان",

  "home.eyebrow": "فئة سيادية · متوافقة مع القيمة المحلية المضافة",
  "home.h1.a": "هندسة",
  "home.h1.b": "توطين",
  "home.h1.c": "البنية التحتية في الشرق الأوسط وأفريقيا.",
  "home.scrollHint": "تمرير",
  "home.lede":
    "تُمكّن CBS الشركات العالمية من الفئة الأولى من الدخول الآمن إلى الأسواق العُمانية والأفريقية، عبر مواءمة الخبرة الأجنبية مع متطلبات رؤية عُمان 2040.",

  "home.positioning.eye": "01 / الموقع",
  "home.positioning.h": "أداة شركات خاصة للبنية التحتية المدعومة من الدولة.",
  "home.positioning.p":
    "تعمل CBS كمنصة توطين خاصة ورشيقة، تجمع بين التنفيذ التقني الدولي والامتثال المحلي الدقيق ومقاييس القيمة المحلية المضافة عبر أسواق الشرق الأوسط وأفريقيا.",

  "roadmap.eye": "دورة التنفيذ",
  "roadmap.h": "خارطة النمو المرحلية",

  "active.eye": "القطاع النشط",
  "active.h": "الطاقة والطاقة المتجددة",
  "active.solarTitle": "الطاقة الشمسية الكهروضوئية",
  "active.solarBody":
    "تطوير مصفوفات كهروضوئية واسعة النطاق بالشراكة مع منتجي الطاقة المستقلين عالمياً.",
  "active.bessTitle": "أنظمة تخزين البطاريات",
  "active.bessBody": "أنظمة تخزين بطاريات حاوية لاستقرار الشبكة الإقليمية.",
  "active.gridTitle": "توسعة الشبكة عالية الجهد",
  "active.gridBody": "البنية التحتية للنقل عالي الجهد وتحديث المحطات الفرعية.",
  "active.viewDivision": "استعراض القطاع",

  "loc.eye": "04 / الميزة الهيكلية",
  "loc.h": "منصة التوطين",
  "loc.lede":
    "تواجه شركات التكنولوجيا الأجنبية حواجز متزايدة دون مقاييس محتوى محلي. تحل CBS ذلك عبر ثلاث ركائز للامتثال.",
  "loc.pillar1.h": "تحسين ICV",
  "loc.pillar1.p":
    "مواءمة دقيقة مع أُطر تسجيل القيمة المحلية المضافة لضمان تقييم تفضيلي للعطاءات في عقود المرافق شبه الحكومية.",
  "loc.pillar2.h": "التنقل التنظيمي",
  "loc.pillar2.p":
    "التراخيص المحلية، والحماية القانونية، والاتصال المباشر بالوزارات والجهات التنظيمية في عُمان ودول الخليج.",
  "loc.pillar3.h": "تكامل رؤية 2040",
  "loc.pillar3.p":
    "تموضع استراتيجي ضمن خارطة طريق الطاقة العُمانية كممر طاقة نظيف عابر للحدود إلى شرق وجنوب أفريقيا.",

  "partner.eye": "05 / الشراكة",
  "partner.h": "تحالفات مؤهلة فقط",
  "partner.lede":
    "تُقيم CBS تحالفات حصرية مع شركات تكنولوجيا عالمية خاصة من الفئة الأولى ذات ميزانيات قابلة للتمويل وقدرات تسليم متكاملة وأفق طويل الأمد.",
  "partner.criteria": "معايير الشريك",
  "partner.c1": "شركة تكنولوجيا خاصة من الفئة الأولى",
  "partner.c2": "ميزانية عمومية قابلة للتمويل من المؤسسات المالية الدولية",
  "partner.c3": "قدرات تصنيع وتنفيذ متكاملة (Turnkey/EPC)",
  "partner.c4": "توجه طويل الأمد بأسلوب رأس المال",
  "partner.contact": "تواصل تنفيذي",
  "partner.note": "تواصل تنفيذي مباشر فقط. لا تعمل CBS بنموذج جمع العملاء المحتملين.",

  "power.eye": "القطاع 01 · النشط",
  "power.h": "الطاقة والطاقة المتجددة",
  "power.lede":
    "القطاع الرائد لـ CBS. ثلاثة مجالات تشغيلية تخدم نشر المرافق المدعومة من الدولة في عُمان وشرق وجنوب أفريقيا.",

  "about.eye": "نبذة",
  "about.h": "أداة شركات عُمانية خاصة.",
  "about.p1":
    "المركزية لحلول الأعمال شركة خاصة مسجلة في سلطنة عُمان، مُهيكلة للعمل كمنصة توطين متخصصة وأداة مشاريع مشتركة استراتيجية للمرافق المدعومة من الدولة والبنية التحتية الصناعية الثقيلة.",
  "about.p2":
    "تعمل CBS وفق نموذج رشيق يجمع بين التنفيذ التقني الدولي والامتثال المحلي والتنقل التنظيمي. نحن لا نقدم خدمات؛ بل نُهيكل تحالفات.",
  "about.hq": "المقر الرئيسي",
  "about.hqVal": "مسقط، سلطنة عُمان",
  "about.focus": "التركيز المؤسسي",
  "about.focusVal": "البنية التحتية للطاقة والمشاريع المشتركة العابرة للحدود",
  "about.registered": "مكان التسجيل",
  "about.registeredVal": "سلطنة عُمان",
  "about.vmEye": "الرؤية · الرسالة",
  "about.visionTitle": "الرؤية",
  "about.visionBody":
    "أن تكون CBS الأداة الخاصة الأولى في السلطنة لتوجيه رأس مال البنية التحتية العالمي من الفئة الأولى وتقنياتها إلى عُمان وممرات الشرق الأوسط وأفريقيا — لتغدو منظومة التوطين هي القاعدة، لا الاستثناء.",
  "about.missionTitle": "الرسالة",
  "about.missionBody":
    "هيكلة تحالفات حصرية بين الرواد التقنيين الأجانب والجهات السيادية، وتسليم تنفيذ متوافق مع القيمة المحلية المضافة عبر قطاعات الطاقة والزراعة وما يتصل بها من قطاعات صناعية — بمعايير سيادية وبجداول خاصة.",
  "about.principleEye": "المبادئ التشغيلية",
  "about.principleH": "ثلاث قواعد لا تتزحزح.",
  "about.p1Title": "التوطين أولاً",
  "about.p1Body": "تُعاير كل شراكة وفق أُطر القيمة المحلية المضافة قبل الهيكلة، لا بعدها.",
  "about.p2Title": "تحفظ سيادي",
  "about.p2Body":
    "نعمل كطرف مغلق. لا قنوات لجمع العملاء، ولا تدفق صفقات عام، ولا جولات تمويل علنية.",
  "about.p3Title": "حصص طويلة الأمد",
  "about.p3Body": "تُكتب الشراكات لأفق عشري — مرافق، أنظمة غذائية، معادن انتقال الطاقة.",

  "footer.address": "مسقط، سلطنة عُمان",
  "footer.qual": "تأهيل الشراكة",
  "footer.submit": "تواصل الشركاء",
  "footer.rights": "المركزية لحلول الأعمال. جميع الحقوق محفوظة.",
  "footer.tagline": "شركة عمانية خاصة لتوطين الخبرات العالمية في قطاع الطاقة والبنية التحتية.",
};

const dicts = { en, ar };

interface I18nContext {
  lang: Lang;
  dir: "ltr" | "rtl";
  toggle: () => void;
  t: (key: keyof typeof en) => string;
}

const Ctx = createContext<I18nContext | null>(null);

const STORAGE_KEY = "cbs:lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  // Hydrate from localStorage on mount (client only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ar" || stored === "en") setLang(stored);
  }, []);

  // Sync to <html lang/dir> + persist on every change
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang);
    }
  }, [lang]);

  const t = (key: keyof typeof en) => dicts[lang][key] ?? en[key] ?? String(key);

  return (
    <Ctx.Provider
      value={{
        lang,
        dir: lang === "ar" ? "rtl" : "ltr",
        toggle: () => setLang((l) => (l === "en" ? "ar" : "en")),
        t,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
