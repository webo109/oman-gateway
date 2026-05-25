import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useI18n } from "@/lib/i18n";
import { pageSeo } from "@/lib/seo";

const LAST_UPDATED = "2026-05-24";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageSeo({
      path: "/privacy",
      title: "Privacy Policy — CBS",
      description:
        "How Centric for Business Solutions handles information collected through cbs-oman.com. Plain language, minimal data, no tracking.",
      ogDescription: "Privacy notice for cbs-oman.com — minimal data, no tracking.",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const { lang } = useI18n();
  const ar = lang === "ar";

  type Section = { h: string; body: string };
  const sections: Section[] = ar
    ? [
        {
          h: "ما الذي نجمعه",
          body: "لا يجمع موقع cbs-oman.com أي معلومات تعريفية شخصية. لا توجد نماذج، ولا حسابات مستخدمين، ولا تعقّب تحليلي. لا تُسجَّل عناوين IP ولا تُنقل إلى أطراف ثالثة.",
        },
        {
          h: "ملفات الارتباط والتخزين المحلي",
          body: "نستخدم خانة واحدة في التخزين المحلي للمتصفح (cbs:lang) لحفظ تفضيل اللغة بين الزيارات. لا تُستخدم ملفات ارتباط لأغراض التحليل أو التسويق أو التتبع عبر المواقع.",
        },
        {
          h: "البريد المباشر",
          body: "عندما تراسل executive@cbs-oman.com مباشرةً، فإن محتوى رسالتك ومعلومات الاتصال التي تقدمها تخضع لاتفاقيات السرية المعتادة بيننا وبين خادم البريد الإلكتروني الخاص بنا. لا تُشارك مع أي طرف ثالث.",
        },
        {
          h: "حقوقك",
          body: "بموجب لائحة حماية البيانات العامة الأوروبية (GDPR) وقانون كاليفورنيا لخصوصية المستهلك (CCPA) وما يماثلهما، يحق لك طلب الاطلاع على أي بيانات نحتفظ بها أو تعديلها أو حذفها. لتقديم طلب، أرسل بريداً إلى executive@cbs-oman.com.",
        },
        {
          h: "تحديثات هذه السياسة",
          body: "نُحدّث هذه الصفحة عند تغير الممارسات. التاريخ في أعلى الصفحة هو تاريخ آخر تعديل. لا تُجرى تغييرات بأثر رجعي.",
        },
      ]
    : [
        {
          h: "What we collect",
          body: "cbs-oman.com does not collect personally identifiable information. There are no forms, no user accounts, no analytics tracking. IP addresses are not logged or forwarded to third parties.",
        },
        {
          h: "Cookies and local storage",
          body: "We use a single browser local-storage entry (cbs:lang) to remember your language preference between visits. No cookies are used for analytics, marketing, or cross-site tracking.",
        },
        {
          h: "Direct correspondence",
          body: "When you email executive@cbs-oman.com directly, the contents of your message and any contact details you provide are subject to standard confidentiality between us and our email provider. We do not share them with any third party.",
        },
        {
          h: "Your rights",
          body: "Under GDPR, CCPA, and equivalent regimes, you may request access to, correction of, or deletion of any data we hold on you. Submit a request to executive@cbs-oman.com.",
        },
        {
          h: "Updates to this policy",
          body: "We update this page when practices change. The date at the top reflects the most recent revision. We do not make retroactive changes.",
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
            {ar ? "سياسة الخصوصية" : "Privacy Policy"}
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
              ? "تشغّل المركزية لحلول الأعمال هذا الموقع بهدف الاتصال التنفيذي فقط. لا توجد قنوات تسويقية ولا برامج تتبع. هذه السياسة تشرح بدقة ما يحدث للمعلومات عند زيارتك."
              : "Centric for Business Solutions operates this website strictly for executive contact. There are no marketing channels and no tracking programs. This notice explains precisely what happens to information when you visit."}
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
