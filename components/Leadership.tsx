"use client";

import { Reveal, Parallax } from "./ui/Motion";
import { TiltCard } from "./ui/TiltCard";
import { Compass } from "./ui/Doodles";

const journey = [
  {
    seat: "01",
    role: "President",
    org: "SDG Club · MIT Bengaluru",
    what: "Building a more visible technical community on campus — creating chances for students to learn, collaborate, enter competitions, and work on projects that connect technology with real-world problems.",
    when: "Present",
    tags: ["Leadership", "Team coordination", "Technical community"],
  },
  {
    seat: "02",
    role: "Hackathon Winner",
    org: "NMKRV College",
    what: "Won a hackathon hosted at NMKRV College — built and shipped a working project under a tight deadline.",
    when: "",
    tags: ["Hackathon", "Winner", "Build sprint"],
  },
  {
    seat: "03",
    role: "Event Coordinator — CryptNite 2026",
    org: "MIT Bengaluru SDG Club",
    what: "Coordinated CryptNite, a national cybersecurity Capture-the-Flag event — online qualifiers and an on-campus final, with a ₹1,00,000 prize pool and teams of 3–4.",
    when: "2026",
    tags: ["Cybersecurity", "Event coordination", "CTF"],
  },
  {
    seat: "04",
    role: "Technical Events & Community",
    org: "MIT Bengaluru SDG Club",
    what: "Planning technical activities and student-facing events — from cybersecurity competitions to workshops and interactive campus experiences. The part I enjoy most is taking an idea from a discussion to something people can actually take part in.",
    when: "",
    tags: ["Event planning", "Collaboration", "Community building"],
  },
  {
    seat: "05",
    role: "Research & Technical Exploration",
    org: "Self-directed",
    what: "Exploring research questions around blockchain, identity and cybersecurity — decentralized identity using verifiable credentials and cryptography, and threat validation using blockchain — while learning to turn ideas into structured, testable work.",
    when: "",
    tags: ["Research", "Identity", "Cybersecurity"],
  },
];

function Ticket({ item, i }: { item: (typeof journey)[number]; i: number }) {
  return (
    <TiltCard
      max={8}
      baseRotate={i % 2 ? 1.2 : -1.2}
      glareColor="rgba(255,255,255,0.28)"
      className="flex overflow-hidden rounded-xl shadow-paper"
    >
      {/* stub */}
      <div className="relative flex w-16 shrink-0 flex-col items-center justify-between bg-clay py-4 text-paper">
        <span className="font-mono text-[9px] uppercase tracking-widest [writing-mode:vertical-rl]">
          admit one
        </span>
        <span className="font-serif text-xl">{item.seat}</span>
      </div>
      {/* perforation */}
      <div className="w-0 border-l-2 border-dashed border-ink/20" />
      {/* body */}
      <div className="paper-surface flex-1 p-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-clay">
            {item.org}
          </span>
          <span className="font-mono text-[10px] text-paper-ink/50">{item.when}</span>
        </div>
        <h3 className="mt-1 font-serif text-2xl text-paper-ink">{item.role}</h3>
        <p className="mt-1.5 font-sans text-sm text-paper-ink/75">{item.what}</p>
        {item.tags ? (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-clay/30 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-clay"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        {/* barcode */}
        <div className="mt-3 flex h-6 items-end gap-[2px]" aria-hidden>
          {Array.from({ length: 42 }).map((_, k) => (
            <span
              key={k}
              className="bg-paper-ink/70"
              style={{ width: k % 3 ? 1 : 2, height: `${40 + ((k * 7) % 60)}%` }}
            />
          ))}
        </div>
      </div>
    </TiltCard>
  );
}

export default function Leadership() {
  return (
    <section className="desk-surface relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/80">
              05 — the journey
            </p>
            <h2 className="mt-3 font-serif text-4xl text-paper sm:text-5xl">
              Places I&apos;ve been, teams I&apos;ve led
            </h2>
            <Compass className="mx-auto mt-4 h-10 w-10 text-marigold/70" />
          </div>
        </Reveal>

        <div className="relative space-y-8">
          {/* hand-drawn dotted path */}
          <svg
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 sm:block"
            width="40"
            viewBox="0 0 40 600"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M20 0 C 6 120, 34 240, 20 360 S 6 520, 20 600"
              fill="none"
              stroke="#e0973a"
              strokeWidth="2"
              strokeDasharray="1 9"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>

          {journey.map((item, i) => (
            <Parallax key={item.seat} speed={i % 2 ? -12 : 12}>
              <Reveal delay={i * 0.06}>
                <Ticket item={item} i={i} />
              </Reveal>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
}
