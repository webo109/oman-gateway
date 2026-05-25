import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";
import { pageSeo } from "@/lib/seo";

const LAST_UPDATED = "2026-05-24";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageSeo({
      path: "/terms",
      title: "Terms of Use — CBS",
      description:
        "Terms governing use of cbs-oman.com. Information is provided for partnership qualification only and does not constitute a binding offer.",
      ogDescription: "Terms of use for cbs-oman.com.",
    }),
  component: TermsPage,
});

function TermsPage() {
  const { lang } = useI18n();
  const ar = lang === "ar";

  type Section = { h: string; body: string };
  const sections: Section[] = ar
    ? [
        {
          h: "الغرض من الموقع",
          body: "المحتوى المنشور على cbs-oman.com مخصص حصراً لأغراض التأهيل الأولي للشراكات. لا يشكّل أيٌّ من المعلومات هنا عرضاً ملزماً، أو استشارة قانونية، أو تعاقدية، أو مالية، أو دعوة للاستثمار.",
        },
        {
          h: "الاستخدام المسموح",
          body: "يُسمح بتصفح هذا الموقع وتنزيل صفحاته للقراءة الشخصية أو لأغراض التأهيل المؤسسي الداخلي. لا يجوز إعادة النشر التجاري، أو التعديل، أو الاستخراج الآلي دون إذن خطي مسبق.",
        },
        {
          h: "الملكية الفكرية",
          body: "اسم 'Centric for Business Solutions' والشعار وتصميم الموقع وكامل النصوص العربية والإنجليزية مملوكة للمركزية لحلول الأعمال. تظل حقوق الصور المرخّصة لمصوّريها الأصليين.",
        },
        {
          h: "إخلاء المسؤولية",
          body: "تُقدَّم المعلومات 'كما هي' دون أي ضمانات صريحة أو ضمنية. لا تتحمل CBS أي مسؤولية عن أي قرار يُتخذ بناءً على محتوى الموقع. علاقات الشراكة تنشأ فقط عبر اتفاقيات موقعة منفصلة.",
        },
        {
          h: "القانون الحاكم",
          body: "تخضع هذه الشروط لقوانين سلطنة عُمان. أي نزاع يُحال إلى الاختصاص القضائي لمحاكم سلطنة عُمان دون غيرها.",
        },
        {
          h: "تحديثات هذه الشروط",
          body: "قد نراجع هذه الشروط من وقتٍ لآخر. التاريخ في أعلى الصفحة يعكس آخر مراجعة. المراجعات لا تُطبَّق بأثر رجعي.",
        },
      ]
    : [
        {
          h: "Purpose of this site",
          body: "Content published on cbs-oman.com is intended solely for initial partnership qualification. None of the information here constitutes a binding offer, nor legal, contractual, financial, or investment advice or solicitation.",
        },
        {
          h: "Permitted use",
          body: "You may browse the site and save pages for personal reading or internal corporate qualification. Commercial republication, modification, or automated extraction is not permitted without prior written consent.",
        },
        {
          h: "Intellectual property",
          body: "The name 'Centric for Business Solutions', the mark, the site design, and all Arabic and English copy are the property of Centric for Business Solutions. Photographic image rights remain with their original licensors.",
        },
        {
          h: "Disclaimer of warranties",
          body: "Information is provided 'as is' without warranties of any kind, express or implied. CBS accepts no liability for decisions taken on the basis of the site's content. Partnership relationships arise only through separately executed agreements.",
        },
        {
          h: "Governing law",
          body: "These terms are governed by the laws of the Sultanate of Oman. Any dispute will be referred to the exclusive jurisdiction of the courts of the Sultanate of Oman.",
        },
        {
          h: "Updates to these terms",
          body: "We may revise these terms from time to time. The date at the top reflects the most recent revision. Revisions are not applied retroactively.",
        },
      ];

  return (
    <PageShell>
      <section className="px-6 pt-28 pb-12 border-b border-brand-line">
        <div className="max-w-4xl mx-auto">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-teal mb-6">
            {ar ? "السياسة القانونية" : "Legal"}
          </div>
          <h1 className="text-4xl sm:text-6xl font-extralight tracking-tight text-balance leading-[1.05] mb-6 max-w-3xl">
            {ar ? "شروط الاستخدام" : "Terms of Use"}
          </h1>
          <p className="text-sm text-foreground/45 font-mono">
            {ar ? "آخر تحديث · " : "Last updated · "}
            {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-10">
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
            {ar
              ? "تحكم هذه الشروط استخدامك لـ cbs-oman.com. باستخدام الموقع، فإنك تقرّ بأنك قرأتها وفهمتها وقبلت بالالتزام بها."
              : "These terms govern your use of cbs-oman.com. By using the site, you acknowledge that you have read, understood, and accepted them."}
          </p>

          <div className="space-y-12">
            {sections.map((s, i) => (
              <div key={i} className="border-t border-brand-line pt-8">
                <h2 className="text-xl sm:text-2xl font-extralight tracking-tight mb-3">{s.h}</h2>
                <p className="text-base text-foreground/70 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
