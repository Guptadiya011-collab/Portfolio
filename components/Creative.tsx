"use client";

import { useState } from "react";
import { creativeProjects } from "@/lib/projects";
import { Reveal, Float } from "./ui/Motion";
import { PaperCard, Tape, PushPin } from "./ui/Paper";
import { Sprig, StarBurst, Squiggle, Spiral } from "./ui/Doodles";

function SpiralBinding() {
  return (
    <svg viewBox="0 0 900 26" className="h-6 w-full" preserveAspectRatio="none" aria-hidden>
      {Array.from({ length: 30 }).map((_, i) => (
        <g key={i} transform={`translate(${16 + i * 30},0)`}>
          <rect x="-4" y="10" width="8" height="16" rx="4" fill="#9a8f78" />
          <ellipse cx="0" cy="8" rx="7" ry="8" fill="none" stroke="#c7bda6" strokeWidth="3" />
        </g>
      ))}
    </svg>
  );
}

/** A moodboard "photo" with a handwritten caption; flips for a short note. */
function CreativeTile({
  title,
  category,
  tagline,
  built,
  tools,
  rotate,
  fill,
  i,
  image,
}: {
  title: string;
  category: string;
  tagline: string;
  built: string;
  tools: string[];
  rotate: number;
  fill: string;
  i: number;
  image?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="group relative [perspective:1400px]"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {i % 2 === 0 ? (
        <Tape className="left-6 -top-3 z-30" rotate={-8} />
      ) : (
        <PushPin className="left-1/2 -top-2 z-30 -translate-x-1/2" />
      )}

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-label={`${title} — flip for details`}
        className={`relative block h-[21rem] w-full rounded-md shadow-paper transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* ── FRONT: framed artwork ── */}
        <div className="absolute inset-0 flex flex-col rounded-md bg-white p-2.5 [backface-visibility:hidden]">
          <div className="relative grid flex-1 place-items-center overflow-hidden rounded-sm bg-ink">
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image}
                alt={`${title} — ${category}`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
                draggable={false}
              />
            ) : (
              <div className="grid h-full w-full place-items-center text-center" style={{ background: fill }}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/80">
                  artwork coming soon
                </span>
              </div>
            )}
          </div>
          <div className="px-1 pt-2">
            <p className="truncate font-hand text-2xl leading-tight text-paper-ink">{title}</p>
            <p className="font-mono text-[9px] uppercase tracking-widest text-clay">
              {category} · hover to flip
            </p>
          </div>
        </div>

        {/* ── BACK: the note ── */}
        <div className="paper-surface absolute inset-0 flex flex-col rounded-md p-5 text-left [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="font-hand text-2xl text-clay">{title}</p>
          <p className="font-mono text-[9px] uppercase tracking-widest text-paper-ink/50">{category}</p>
          <p className="mt-3 flex-1 overflow-y-auto font-sans text-[12.5px] leading-relaxed text-paper-ink/85">
            {built}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tools.map((t) => (
              <span key={t} className="rounded border border-paper-ink/15 px-1.5 py-0.5 font-mono text-[9px] text-paper-ink/70">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-widest text-clay">↩ tap to flip back</p>
        </div>
      </button>

      <p className="mt-2 px-1 font-sans text-xs italic text-paper-ink/60">{tagline}</p>
    </div>
  );
}

const fills = [
  "linear-gradient(135deg,#c4592f,#e0973a)",
  "linear-gradient(135deg,#2a251c,#4fb0c6)",
  "linear-gradient(135deg,#e0973a,#f0bd73)",
  "linear-gradient(135deg,#4fb0c6,#7fe1f2)",
];
const rotations = [-2.5, 2, -1.5, 3, -2, 1.5];

export default function Creative() {
  return (
    <section id="creative" className="paper-surface relative overflow-hidden px-4 py-24 sm:py-32">
      {/* doodles floating on the paper */}
      <Float className="absolute right-[8%] top-24 text-clay/50" amount={9} duration={7}>
        <Spiral className="h-16 w-16" />
      </Float>
      <Sprig className="absolute left-[5%] top-40 h-24 w-16 text-marigold-600/50" />
      <Float className="absolute left-[12%] bottom-24 text-clay/40" amount={8} duration={6}>
        <StarBurst className="h-10 w-10" />
      </Float>

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-clay">
              04 — the other side of me
            </p>
            <h2 className="mt-3 font-serif text-5xl text-paper-ink sm:text-7xl">
              The Sketchbook
            </h2>
            <p className="mx-auto mt-2 max-w-md font-hand text-2xl text-clay">
              a little less code, a little more colour
              <Squiggle className="mx-auto mt-1 h-4 w-40 text-marigold-600" />
            </p>
          </div>
        </Reveal>

        {/* sketchbook page */}
        <Reveal delay={0.05}>
          <div className="mt-8">
            <SpiralBinding />
            <div className="grid-paper rounded-b-2xl border-x border-b border-black/5 p-6 sm:p-10">
              <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {creativeProjects.map((p, i) => (
                  <CreativeTile
                    key={p.id}
                    title={p.title}
                    category={p.category}
                    tagline={p.tagline}
                    built={p.built}
                    tools={p.tools}
                    rotate={rotations[i % rotations.length]}
                    fill={fills[i % fills.length]}
                    i={i}
                    image={p.image}
                  />
                ))}
              </div>
              <p className="mt-10 text-center font-hand text-2xl text-paper-ink/60">
                these are the kinds of things I make — real pieces land here as I add them ✦
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
