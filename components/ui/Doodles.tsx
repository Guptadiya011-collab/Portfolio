import type { SVGProps } from "react";

/* All doodles are original hand-styled inline SVG.
   They inherit color via `currentColor` unless a stroke is passed. */

const base = (p: SVGProps<SVGSVGElement>) => ({
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

export function Squiggle(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 24" {...base(p)}>
      <path d="M3 14 C 14 2, 22 2, 30 13 S 48 24, 58 12 S 78 2, 88 13 S 108 22, 117 10" />
    </svg>
  );
}

export function Underline(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 16" {...base(p)}>
      <path d="M4 9 C 40 3, 70 12, 110 6 S 178 3, 196 9" />
      <path d="M10 13 C 46 8, 86 15, 130 10 S 180 9, 192 13" opacity="0.5" />
    </svg>
  );
}

export function StarBurst(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...base(p)}>
      <path d="M24 4 V16 M24 32 V44 M4 24 H16 M32 24 H44 M10 10 L18 18 M30 30 L38 38 M38 10 L30 18 M18 30 L10 38" />
    </svg>
  );
}

export function ArrowScribble(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 60" {...base(p)}>
      <path d="M6 12 C 30 2, 70 4, 88 34" />
      <path d="M74 30 L90 36 L84 20" />
    </svg>
  );
}

export function Sprig(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 60 90" {...base(p)}>
      <path d="M30 86 C 30 60, 30 40, 30 8" />
      <path d="M30 60 C 18 54, 12 46, 12 34 C 24 36, 30 46, 30 58" />
      <path d="M30 44 C 42 38, 48 30, 48 18 C 36 20, 30 30, 30 42" />
      <path d="M30 30 C 22 26, 18 20, 18 12 C 26 14, 30 20, 30 28" />
    </svg>
  );
}

export function Cursor(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 44" {...base(p)}>
      <path d="M8 5 L8 33 L15 26 L20 38 L26 35 L21 24 L31 24 Z" />
    </svg>
  );
}

export function Spiral(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 60 60" {...base(p)}>
      <path d="M30 30 C 30 26, 26 24, 24 28 C 21 33, 28 40, 36 36 C 47 30, 42 14, 28 16 C 10 18, 12 44, 32 48" />
    </svg>
  );
}

export function Bolt(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 56" {...base(p)}>
      <path d="M24 4 L8 30 L20 30 L14 52 L34 22 L22 22 Z" />
    </svg>
  );
}

export function CircleScribble(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 90" {...base(p)}>
      <path d="M60 8 C 24 8, 8 30, 12 52 C 16 76, 52 84, 80 80 C 108 76, 116 48, 104 28 C 94 12, 68 6, 46 12" />
    </svg>
  );
}

export function Paperclip(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 70" {...base(p)}>
      <path d="M14 12 C 14 6, 26 6, 26 14 L26 52 C 26 62, 10 62, 10 50 L10 20 C 10 14, 20 14, 20 20 L20 48" />
    </svg>
  );
}

export function Terminal(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 56 44" {...base(p)}>
      <rect x="4" y="6" width="48" height="32" rx="4" />
      <path d="M13 18 L19 23 L13 28 M24 29 H34" />
    </svg>
  );
}

export function Compass(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 60 60" {...base(p)}>
      <circle cx="30" cy="30" r="24" />
      <path d="M38 22 L27 27 L22 38 L33 33 Z" />
    </svg>
  );
}
