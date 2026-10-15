"use client";

import { Reveal, Float } from "./ui/Motion";
import { TerminalFrame } from "./ui/Frames";
import { PaperCard, Tape } from "./ui/Paper";
import { TiltCard } from "./ui/TiltCard";
import { Bolt, StarBurst } from "./ui/Doodles";

// ⚠︎ Keep this fresh — what are you actually poking at right now?
const exploring = [
  "Full-stack development",
  "AI integration & tool use",
  "Geospatial systems",
  "Better project architecture",
  "Design systems",
];
const stickies = [
  { text: "building → something useful, one feature at a time", rotate: -4 },
  { text: "reading → docs, debugging threads, and the occasional research paper", rotate: 3 },
];

export default function Exploring() {
  return (
    <section className="desk-surface relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/80">
              06 — right now
            </p>
            <h2 className="mt-3 font-serif text-4xl text-paper sm:text-5xl">
              Currently exploring
            </h2>
          </div>
        </Reveal>

        <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <TiltCard max={8} glareColor="rgba(127,225,242,0.4)" className="rounded-xl">
            <TerminalFrame title="~/currently">
              <p><span className="text-emerald-300">➜</span> cat learning.log</p>
              <div className="mt-2 space-y-1.5">
                {exploring.map((e, i) => (
                  <p key={e}>
                    <span className="text-paper/40">{String(i + 1).padStart(2, "0")}</span>{" "}
                    <span className="text-marigold-300">→</span> {e}
                  </p>
                ))}
              </div>
              <p className="mt-3 text-paper/40">// build, test, learn, repeat.</p>
              <p className="mt-1"><span className="text-emerald-300">➜</span> <span className="animate-pulse">▊</span></p>
            </TerminalFrame>
            </TiltCard>
          </Reveal>

          <div className="relative flex flex-col items-center gap-6">
            <Float className="absolute -right-2 -top-8 text-marigold/60" amount={7} duration={6}>
              <Bolt className="h-9 w-6" />
            </Float>
            {stickies.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative w-56">
                  <Tape className="left-1/2 -top-3 z-20 -translate-x-1/2" rotate={i % 2 ? 5 : -5} />
                  <TiltCard max={11} baseRotate={s.rotate} glareColor="rgba(196,89,47,0.22)" className="rounded-md">
                    <PaperCard
                      variant={i % 2 ? "grid" : "lined"}
                      className="rounded-md px-5 py-6"
                    >
                      <p className="font-hand text-2xl text-paper-ink/85">{s.text}</p>
                    </PaperCard>
                  </TiltCard>
                </div>
              </Reveal>
            ))}
            <StarBurst className="h-8 w-8 text-cyan/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
