export function AnimatedBackground({ variant = "hero" }: { variant?: "hero" | "soft" }) {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid bg-grid-fade" />
      <div className="aurora" />
      {variant === "hero" && (
        <>
          <div className="absolute top-1/3 -left-24 size-80 rounded-full bg-brand-teal/20 blur-3xl animate-float" />
          <div
            className="absolute bottom-10 right-10 size-72 rounded-full bg-brand-amber/15 blur-3xl animate-float"
            style={{ animationDelay: "-3s" }}
          />
        </>
      )}
      <div className="absolute inset-0 grain" />
    </div>
  );
}
