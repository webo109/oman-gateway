import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useI18n } from "@/lib/i18n";

export function PageShell({ children }: { children: ReactNode }) {
  const { lang } = useI18n();
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <a href="#main-content" className="skip-link">
        {lang === "ar" ? "تخطي إلى المحتوى" : "Skip to content"}
      </a>
      <SiteHeader />
      {/* No top padding on <main>: each page's hero handles its own header clearance,
          so the header can float transparently over the hero's background. */}
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
