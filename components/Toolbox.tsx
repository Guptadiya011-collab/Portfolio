"use client";

import { Reveal } from "./ui/Motion";
import { TiltCard } from "./ui/TiltCard";
import { Terminal, Bolt } from "./ui/Doodles";

// What I actually work with, plus a separate "exploring" drawer for things
// I'm still learning — kept honest, not every tool is an advanced skill.
const drawers: { label: string; tools: string[]; accent: "cyan" | "marigold" }[] = [
  { label: "Languages", tools: ["Python", "JavaScript", "TypeScript", "C", "C++", "SQL"], accent: "cyan" },
  { label: "Frontend", tools: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"], accent: "cyan" },
  { label: "Backend", tools: ["Node.js", "Express.js", "REST APIs", "Python", "FastAPI"], accent: "cyan" },
  { label: "AI / ML", tools: ["LLM APIs", "Prompt design", "AI integration", "Python for data"], accent: "marigold" },
  { label: "Data", tools: ["PostgreSQL", "Supabase", "MongoDB", "SQL"], accent: "marigold" },
  { label: "Tools", tools: ["Git", "GitHub", "VS Code", "Vercel", "Docker"], accent: "cyan" },
  { label: "Design", tools: ["Graphic design", "UI design", "Figma", "Canva", "Adobe"], accent: "marigold" },
  { label: "Exploring", tools: ["OpenCV", "PyTorch", "YOLO", "PostGIS"], accent: "marigold" },
];

export default function Toolbox() {
  return (
    <section id="toolbox" className="desk-surface relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-14 flex flex-col items-center text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/80">
              03 — my toolbox
            </p>
            <h2 className="mt-3 font-serif text-4xl text-paper sm:text-5xl">
              What&apos;s on the bench
            </h2>
          </div>
        </Reveal>

        {/* pegboard-style panel */}
        <div
          className="relative rounded-2xl border border-cyan/15 bg-ink-800/60 p-5 sm:p-8"
          style={{
            backgroundImage:
              "radial-gradient(rgba(79,176,198,0.14) 1.5px, transparent 1.5px)",
            backgroundSize: "26px 26px",
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {drawers.map((d, i) => (
              <Reveal key={d.label} delay={(i % 4) * 0.05}>
                <TiltCard
                  max={12}
                  scale={1.05}
                  glareColor={d.accent === "cyan" ? "rgba(127,225,242,0.35)" : "rgba(224,151,58,0.35)"}
                  className="h-full rounded-xl"
                >
                <div className="group h-full rounded-xl border border-white/10 bg-ink/80 p-4 transition hover:border-marigold/40">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[11px] uppercase tracking-widest ${
                        d.accent === "cyan" ? "text-cyan-300/90" : "text-marigold-300"
                      }`}
                    >
                      {d.label}
                    </span>
                    {d.accent === "cyan" ? (
                      <Terminal className="h-4 w-5 text-cyan/60" />
                    ) : (
                      <Bolt className="h-4 w-3 text-marigold/70" />
                    )}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {d.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-ink-700 px-2 py-1 font-mono text-[11px] text-paper/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
