/** Subtle 8-point Omani star motif as a decorative accent. */
export function OmaniStar({ className = "size-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
        <polygon points="40,6 47,25 66,25 51,38 57,57 40,46 23,57 29,38 14,25 33,25" />
        <polygon
          points="40,74 47,55 66,55 51,42 57,23 40,34 23,23 29,42 14,55 33,55"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}

/** Stylized khanjar silhouette — Omani national emblem reference. */
export function Khanjar({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor" aria-hidden>
      <path
        d="M32 4c-3 6-5 12-5 18 0 5 2 9 5 12 3-3 5-7 5-12 0-6-2-12-5-18zm-9 32h18l-2 4h-14l-2-4zm-2 6h22l-4 18h-14l-4-18zm6 4l1 10h8l1-10h-10z"
        opacity="0.85"
      />
    </svg>
  );
}
