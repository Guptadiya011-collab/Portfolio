"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Reveal, Float } from "./ui/Motion";
import { PaperCard, Tape, PushPin } from "./ui/Paper";
import { TiltCard } from "./ui/TiltCard";
import { StarBurst, Squiggle, Terminal, Sprig } from "./ui/Doodles";

const beliefs = [
  {
    n: "01",
    text: "Make it work before making it fancy.",
    note: "A good-looking project is great. A good-looking project that actually works is better.",
    variant: "lined" as const,
    rotate: -1.5,
  },
  {
    n: "02",
    text: "Build for the person using it.",
    note: "The feature makes sense to you. Does it make sense to someone using it for the first time?",
    variant: "grid" as const,
    rotate: 1.2,
  },
  {
    n: "03",
    text: "Learn by getting your hands dirty.",
    note: "Tutorials help. Building something yourself teaches you what the tutorial left out.",
    variant: "plain" as const,
    rotate: -1,
  },
  {
    n: "04",
    text: "Good design isn't just decoration.",
    note: "The way something works matters just as much as the way it looks.",
    variant: "clay" as const,
    rotate: 1.6,
  },
];

/* A paper note that folds open (hinges down from its top edge) on scroll. */
function FoldPaper({
  children,
  variant,
  rotate = 0,
  className = "",
}: {
  children: ReactNode;
  variant: "lined" | "grid" | "plain" | "clay";
  rotate?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  // re-fires every time the note enters/leaves the viewport band
  const inView = useInView(ref, { amount: 0.45 });
  const open = reduce || inView;
  return (
    <div ref={ref} style={{ perspective: 1400 }} className="[transform-style:preserve-3d]">
      <motion.div
        initial={false}
        animate={
          open
            ? { rotateX: 0, opacity: 1, y: 0 }
            : { rotateX: -82, opacity: 0, y: -12 }
        }
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "50% 0%", transformStyle: "preserve-3d" }}
      >
        <TiltCard
          max={9}
          baseRotate={rotate}
          glareColor={variant === "clay" ? "rgba(255,255,255,0.28)" : "rgba(196,89,47,0.22)"}
          className={`rounded-xl ${className}`}
        >
          <PaperCard variant={variant} className="relative overflow-hidden rounded-xl px-7 py-7">
            {children}
            {/* center fold crease */}
            <span
              className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2"
              style={{ background: "linear-gradient(90deg,transparent,rgba(0,0,0,0.14),transparent)" }}
              aria-hidden
            />
            <span
              className="pointer-events-none absolute inset-x-0 top-1/2 h-4 -translate-y-full"
              style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.06), transparent)" }}
              aria-hidden
            />
          </PaperCard>
        </TiltCard>
      </motion.div>
    </div>
  );
}

/* A small card that slides + swings in from one side on scroll. */
function SideCard({
  from,
  delay = 0,
  children,
}: {
  from: "left" | "right";
  delay?: number;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const dx = from === "left" ? -110 : 110;
  const ry = from === "left" ? 34 : -34;
  return (
    <div style={{ perspective: 900 }}>
      <motion.div
        initial={reduce ? false : { x: dx, rotateY: ry, opacity: 0 }}
        whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ── the two flavours of side card ── */
function TechChip({ cmd, tag, rotate = 0 }: { cmd: string; tag: string; rotate?: number }) {
  return (
    <TiltCard max={12} baseRotate={rotate} glareColor="rgba(127,225,242,0.4)" className="rounded-lg">
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0c0f10] screen-glow">
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#141a1b] px-2.5 py-1.5">
          <Terminal className="h-3.5 w-4 text-cyan/70" />
          <span className="font-mono text-[9px] text-cyan-300/70">{tag}</span>
        </div>
        <p className="px-3 py-3 font-mono text-[11px] text-cyan-300/90">
          <span className="text-emerald-300">$</span> {cmd}
          <span className="animate-pulse"> ▊</span>
        </p>
      </div>
    </TiltCard>
  );
}

function ScrapNote({
  text,
  variant,
  rotate = 0,
  pin,
}: {
  text: string;
  variant: "lined" | "grid";
  rotate?: number;
  pin?: boolean;
}) {
  return (
    <div className="relative">
      {pin ? (
        <PushPin className="left-1/2 -top-2 z-20 -translate-x-1/2" />
      ) : (
        <Tape className="left-4 -top-3 z-20 !w-16" rotate={-8} />
      )}
      <TiltCard max={12} baseRotate={rotate} glareColor="rgba(196,89,47,0.22)" className="rounded-md">
        <PaperCard variant={variant} className="rounded-md px-4 py-4">
          <p className="font-hand text-2xl leading-tight text-paper-ink">{text}</p>
          <Squiggle className="mt-1 h-3 w-20 text-marigold-600" />
        </PaperCard>
      </TiltCard>
    </div>
  );
}

export default function Beliefs() {
  return (
    <section className="desk-surface relative px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative mb-16 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/70">
              — how I think —
            </p>
            <h2 className="mt-3 font-serif text-4xl text-paper sm:text-5xl">
              A few things I strongly believe in
            </h2>
            <Float className="absolute -right-2 -top-6 text-marigold/60 sm:right-10" amount={7} duration={6}>
              <StarBurst className="h-10 w-10" />
            </Float>
          </div>
        </Reveal>

        {/* left cards · folding notes · right cards */}
        <div className="grid items-center gap-10 md:grid-cols-[1fr_minmax(0,460px)_1fr] md:gap-6">
          {/* LEFT column (desktop) */}
          <div className="hidden flex-col justify-center gap-10 md:flex">
            <SideCard from="left">
              <TechChip tag="~/principles" cmd="make-it-work" rotate={-3} />
            </SideCard>
            <SideCard from="left" delay={0.12}>
              <ScrapNote text="sketch first, then build" variant="lined" rotate={-2.5} />
            </SideCard>
          </div>

          {/* CENTER folding notes */}
          <div className="space-y-6">
            {beliefs.map((b, i) => (
              <FoldPaper key={b.n} variant={b.variant} rotate={b.rotate}>
                <span className={`font-mono text-xs ${b.variant === "clay" ? "text-paper/60" : "text-clay/60"}`}>
                  {b.n}
                </span>
                <p className={`mt-1 font-hand text-3xl leading-tight sm:text-4xl ${b.variant === "clay" ? "text-paper" : "text-paper-ink"}`}>
                  {b.text}
                </p>
                <p className={`mt-2 font-sans text-sm ${b.variant === "clay" ? "text-paper/85" : "text-paper-ink/70"}`}>
                  {b.note}
                </p>
              </FoldPaper>
            ))}
          </div>

          {/* RIGHT column (desktop) */}
          <div className="hidden flex-col justify-center gap-10 md:flex">
            <SideCard from="right">
              <ScrapNote text="for the first-time user" variant="grid" rotate={3} pin />
            </SideCard>
            <SideCard from="right" delay={0.12}>
              <TechChip tag="~/habits" cmd="hands-dirty" rotate={2.5} />
            </SideCard>
          </div>

          {/* side cards on mobile */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            <SideCard from="left"><TechChip tag="~/p" cmd="make-it-work" rotate={-3} /></SideCard>
            <SideCard from="right"><ScrapNote text="sketch first" variant="lined" rotate={2} /></SideCard>
            <SideCard from="left" delay={0.1}><ScrapNote text="first-time user" variant="grid" rotate={-2} pin /></SideCard>
            <SideCard from="right" delay={0.1}><TechChip tag="~/h" cmd="hands-dirty" rotate={3} /></SideCard>
          </div>
        </div>

        <Sprig className="mx-auto mt-14 h-16 w-12 text-marigold-600/50" />
      </div>
    </section>
  );
}
