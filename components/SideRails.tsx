import { Terminal, Cursor, Sprig, Compass, Bolt, StarBurst } from "./ui/Doodles";

const glyphs = [Terminal, Cursor, Sprig, Compass, Bolt, StarBurst];

function Rail({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`pointer-events-none fixed top-0 z-40 hidden h-full w-10 flex-col items-center justify-between py-6 lg:flex ${
        side === "left" ? "left-0" : "right-0"
      }`}
      aria-hidden
    >
      {/* tick line */}
      <div
        className="absolute inset-y-0 w-px opacity-40"
        style={{
          left: side === "left" ? "1.6rem" : "auto",
          right: side === "right" ? "1.6rem" : "auto",
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(224,151,58,0.5) 0 2px, transparent 2px 22px)",
        }}
      />
      {glyphs.map((G, i) => (
        <div
          key={i}
          className="grid h-8 w-8 place-items-center rounded-md border border-marigold/25 bg-ink-800/60 text-marigold/70"
          style={{ transform: `rotate(${(i % 2 ? 1 : -1) * 3}deg)` }}
        >
          <G className="h-4 w-4" />
        </div>
      ))}
    </div>
  );
}

export default function SideRails() {
  return (
    <>
      <Rail side="left" />
      <Rail side="right" />
    </>
  );
}
