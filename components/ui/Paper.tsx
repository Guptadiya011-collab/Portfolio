import type { CSSProperties, ReactNode } from "react";

/** A strip of washi tape. Position it with `style` (top/left/right) via className. */
export function Tape({
  className = "",
  rotate = -6,
  color = "rgba(224,197,138,0.6)",
}: {
  className?: string;
  rotate?: number;
  color?: string;
}) {
  return (
    <span
      className={`tape ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, background: color }}
      aria-hidden
    />
  );
}

export function PushPin({ className = "", color = "#c4592f" }: { className?: string; color?: string }) {
  return (
    <span className={`absolute h-4 w-4 rounded-full ${className}`} aria-hidden
      style={{
        background: `radial-gradient(circle at 35% 30%, #fff8, ${color})`,
        boxShadow: "0 3px 5px rgba(0,0,0,0.35)",
      }}
    />
  );
}

/** A rotated sheet of paper with a soft drop shadow. */
export function PaperCard({
  children,
  className = "",
  rotate = 0,
  variant = "plain",
  style,
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  variant?: "plain" | "grid" | "lined" | "clay";
  style?: CSSProperties;
}) {
  const surface =
    variant === "grid"
      ? "grid-paper"
      : variant === "lined"
        ? "lined-paper"
        : variant === "clay"
          ? "paper-surface"
          : "paper-surface";
  const clay = variant === "clay" ? "!bg-clay text-paper" : "text-paper-ink";
  return (
    <div
      className={`relative shadow-paper ${surface} ${clay} ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    >
      {children}
    </div>
  );
}
