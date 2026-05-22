import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-14">{children}</main>
      <SiteFooter />
    </div>
  );
}