import type { ReactNode } from "react";

export function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden relative" aria-hidden>
      <div className="flex marquee-track gap-16 w-max">
        <div className="flex gap-16 items-center">{children}</div>
        <div className="flex gap-16 items-center">{children}</div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
