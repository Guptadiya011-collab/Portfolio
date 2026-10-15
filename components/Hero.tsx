"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site.config";
import { Float } from "./ui/Motion";
import { Squiggle, StarBurst, Cursor, Spiral, Bolt, ArrowScribble } from "./ui/Doodles";

function RotatingWord() {
  const words = site.heroLineWords;
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, [reduce, words.length]);
  return (
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: "0.5em", opacity: 0, rotate: -3 }}
          animate={{ y: 0, opacity: 1, rotate: -2 }}
          exit={{ y: "-0.5em", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block font-hand text-marigold"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="desk-surface relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-24">
      {/* floating doodles */}
      <Float className="absolute left-[8%] top-[22%] text-paper/25" amount={12} duration={7}>
        <Spiral className="h-14 w-14" />
      </Float>
      <Float className="absolute right-[10%] top-[18%] text-cyan/40" amount={9} duration={8} rotate={8}>
        <Bolt className="h-10 w-10" />
      </Float>
      <Float className="absolute left-[14%] bottom-[16%] text-marigold/50" amount={10} duration={6} rotate={-6}>
        <StarBurst className="h-9 w-9" />
      </Float>
      <Float className="absolute right-[13%] bottom-[22%] text-paper/25" amount={11} duration={7.5}>
        <ArrowScribble className="h-14 w-16" />
      </Float>
      <Float className="absolute right-[24%] top-[38%] text-cyan/30" amount={8} duration={9}>
        <Cursor className="h-8 w-8" />
      </Float>

      {/* the notebook / tablet device */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-4xl rounded-[2rem] bg-marigold p-2 shadow-card sm:p-3"
      >
        <div className="grid-paper relative overflow-hidden rounded-[1.5rem] px-6 py-10 sm:px-12 sm:py-14">
          {/* corner label */}
          <span className="absolute right-4 top-3 font-mono text-[10px] uppercase tracking-widest text-paper-ink/50">
            untitled — draft 01
          </span>

          <div className="grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="font-hand text-3xl text-clay sm:text-4xl">{site.firstName} ✦</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.25em] text-paper-ink/70 sm:text-sm">
                {site.roles.join(" · ")}
              </p>

              <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.05] text-paper-ink sm:text-6xl">
                {site.heroLineStart}
                <br />
                <RotatingWord />
                <span className="text-clay">.</span>
              </h1>

              <p className="relative mt-6 max-w-md font-sans text-sm leading-relaxed text-paper-ink/80">
                I&apos;m a computer science student at Manipal Institute of Technology,
                Bengaluru. I build software, experiment with AI, and spend an
                unreasonable amount of time thinking about how things should look and
                work — usually mid-project, learning something new, or sketching the next idea.
                <span className="mt-3 block font-hand text-xl text-marigold-600">
                  ideas → sketches → working projects
                </span>
                <Squiggle className="mt-2 h-4 w-40 text-marigold-600" />
              </p>

              <p className="mt-5 font-mono text-xs text-paper-ink/60">
                {site.location} · {site.timezone}
              </p>
            </div>

            {/* mini hand-drawn "screen" illustration */}
            <div className="relative mx-auto w-full max-w-[280px]">
              <HandDrawnScreen />
            </div>
          </div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        scroll ↓
      </motion.a>
    </section>
  );
}

function HandDrawnScreen() {
  return (
    <svg viewBox="0 0 280 240" className="w-full" fill="none">
      {/* browser window drawn like a sketch */}
      <g stroke="#c4592f" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="24" y="22" width="232" height="150" rx="10" />
        <path d="M24 46 H256" />
        <circle cx="40" cy="34" r="3" />
        <circle cx="52" cy="34" r="3" />
        <circle cx="64" cy="34" r="3" />
        <rect x="96" y="28" width="120" height="12" rx="6" />
        {/* content lines */}
        <path d="M44 70 H150 M44 84 H120 M44 98 H160 M44 112 H100" />
        {/* a little bar chart */}
        <path d="M180 150 V96 M204 150 V78 M228 150 V112" strokeWidth={7} className="opacity-80" />
      </g>
      {/* plant + person sketch under it */}
      <g stroke="#2a251c" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
        <path d="M60 210 C 60 190, 72 184, 78 176 M60 210 C 58 194, 46 190, 40 182 M60 210 V186" />
        <circle cx="150" cy="192" r="12" />
        <path d="M150 204 V226 M150 210 L134 220 M150 210 L166 220 M150 226 L138 238 M150 226 L162 238" />
      </g>
      {/* cursor */}
      <g stroke="#4fb0c6" strokeWidth={2.2} strokeLinejoin="round" strokeLinecap="round">
        <path d="M210 176 L210 202 L217 195 L222 206 L228 203 L223 193 L232 193 Z" fill="#4fb0c6" fillOpacity="0.15" />
      </g>
    </svg>
  );
}
