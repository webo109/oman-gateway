import { Zap, Sprout, HardHat, Truck, Mountain, Wheat, type LucideIcon } from "lucide-react";
import type { Lang } from "./i18n";

export type DivisionStatus = "active" | "planned" | "future";

export interface Division {
  slug: string;
  no: string;
  status: DivisionStatus;
  icon: LucideIcon;
  title: { en: string; ar: string };
  blurb: { en: string; ar: string };
  to: string;
  params?: Record<string, string>;
}

/**
 * Single source of truth for the six CBS divisions, in roadmap order.
 * Consumed by the header divisions menu, footer sitemap, breadcrumbs, and
 * prev/next links so they never drift out of sync.
 */
export const divisions: Division[] = [
  {
    slug: "power",
    no: "01",
    status: "active",
    icon: Zap,
    title: { en: "Power & Renewables", ar: "الطاقة والمتجددة" },
    blurb: {
      en: "Utility solar PV, battery storage, and HV grid infrastructure.",
      ar: "الطاقة الشمسية وأنظمة التخزين والشبكات عالية الجهد.",
    },
    to: "/power",
  },
  {
    slug: "agriculture",
    no: "02",
    status: "active",
    icon: Sprout,
    title: { en: "Agriculture", ar: "الزراعة" },
    blurb: {
      en: "Export-oriented agriculture across Gulf–Africa food security corridors.",
      ar: "زراعة موجهة للتصدير عبر ممرات الأمن الغذائي بين الخليج وأفريقيا.",
    },
    to: "/vertical/$slug",
    params: { slug: "agriculture" },
  },
  {
    slug: "construction",
    no: "03",
    status: "planned",
    icon: HardHat,
    title: { en: "Construction", ar: "البناء" },
    blurb: {
      en: "Specialized civil engineering and heavy infrastructure execution.",
      ar: "هندسة مدنية متخصصة وأعمال بنية تحتية ثقيلة.",
    },
    to: "/vertical/$slug",
    params: { slug: "construction" },
  },
  {
    slug: "logistics",
    no: "04",
    status: "planned",
    icon: Truck,
    title: { en: "Logistics", ar: "الخدمات اللوجستية" },
    blurb: {
      en: "Heavy-lift transport and supply-chain orchestration for remote sites.",
      ar: "نقل ثقيل وسلاسل توريد للمواقع الصناعية النائية.",
    },
    to: "/vertical/$slug",
    params: { slug: "logistics" },
  },
  {
    slug: "minerals",
    no: "05",
    status: "future",
    icon: Mountain,
    title: { en: "Minerals", ar: "المعادن" },
    blurb: {
      en: "Strategic positioning in critical minerals tied to the energy transition.",
      ar: "تموضع في المعادن الحرجة المرتبطة بتحول الطاقة.",
    },
    to: "/vertical/$slug",
    params: { slug: "minerals" },
  },
  {
    slug: "foodstuffs",
    no: "06",
    status: "future",
    icon: Wheat,
    title: { en: "Foodstuffs Import & Export", ar: "استيراد وتصدير المواد الغذائية" },
    blurb: {
      en: "Structured trading networks for staples between East Africa and the Gulf.",
      ar: "شبكات تجارة منظمة للسلع الأساسية بين شرق أفريقيا والخليج.",
    },
    to: "/vertical/$slug",
    params: { slug: "foodstuffs" },
  },
];

export function statusLabel(status: DivisionStatus, lang: Lang): string {
  if (status === "active") return lang === "ar" ? "نشط" : "Active";
  if (status === "planned") return lang === "ar" ? "مخطط" : "Planned";
  return lang === "ar" ? "مستقبلي" : "Future";
}

/** Find a division by its slug (power uses /power, the rest use /vertical/$slug). */
export function findDivision(slug: string): Division | undefined {
  return divisions.find((d) => d.slug === slug);
}

/** Previous/next siblings in roadmap order, for cross-division navigation. */
export function adjacentDivisions(slug: string): { prev?: Division; next?: Division } {
  const i = divisions.findIndex((d) => d.slug === slug);
  if (i === -1) return {};
  return { prev: divisions[i - 1], next: divisions[i + 1] };
}
