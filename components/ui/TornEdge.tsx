/** A rough torn-paper edge. Place at the boundary between the dark
    "desk" world and a cream paper section to make paper feel laid on top. */
export function TornEdge({
  flip = false,
  className = "",
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none relative z-10 -my-px h-6 w-full sm:h-8 ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M0 40 L0 18 C 40 10, 70 26, 110 16 S 180 6, 230 18 S 320 30, 380 14 S 470 4, 540 20 S 640 30, 710 12 S 820 6, 890 20 S 1000 30, 1070 14 S 1160 8, 1200 18 L1200 40 Z"
          className="fill-paper"
        />
      </svg>
    </div>
  );
}
