"use client";

import { site } from "@/lib/site.config";
import { Reveal, Float } from "./ui/Motion";
import { PaperCard, Tape } from "./ui/Paper";
import { TiltCard } from "./ui/TiltCard";
import { StarBurst, Cursor } from "./ui/Doodles";

function isPlaceholder(v: string) {
  return !v || v.includes("⚠︎");
}

const links = [
  { label: "Email", value: site.links.email, href: `mailto:${site.links.email}` },
  { label: "GitHub", value: site.links.github, href: site.links.github },
  { label: "LinkedIn", value: site.links.linkedin, href: site.links.linkedin },
  ...(site.links.resume ? [{ label: "Résumé", value: site.links.resume, href: site.links.resume }] : []),
];

export default function Connect() {
  return (
    <section id="connect" className="desk-surface relative overflow-hidden px-4 py-28 sm:py-36">
      <Float className="absolute left-[10%] top-16 text-marigold/50" amount={10} duration={7}>
        <StarBurst className="h-12 w-12" />
      </Float>
      <Float className="absolute right-[12%] bottom-24 text-cyan/40" amount={9} duration={8}>
        <Cursor className="h-9 w-9" />
      </Float>

      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/80">
            07 — connect
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-[1.05] text-paper sm:text-7xl">
            Let&apos;s build
            <br />
            something <span className="font-hand text-marigold">real</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-md font-sans text-sm text-paper/70">
            I&apos;m always happy to connect with people who enjoy building things,
            solving problems, or exploring new ideas — especially software internships,
            technical collaborations, and the chance to learn from people working on
            interesting projects.
          </p>
        </Reveal>

        {/* contact postcard */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-12 max-w-xl">
            <Tape className="left-8 -top-3 z-20" rotate={-8} />
            <Tape className="right-8 -top-3 z-20" rotate={7} />
            <TiltCard max={7} baseRotate={-0.5} glareColor="rgba(196,89,47,0.2)" className="rounded-2xl">
            <PaperCard variant="grid" className="rounded-2xl p-6 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {links.map((l) => {
                  const ph = isPlaceholder(l.value);
                  const Comp = ph ? "div" : "a";
                  return (
                    <Comp
                      key={l.label}
                      {...(!ph && { href: l.href, target: "_blank", rel: "noreferrer" })}
                      className={`group flex items-center justify-between rounded-xl border border-paper-ink/15 bg-paper/60 px-4 py-3 text-left transition ${
                        ph ? "opacity-70" : "hover:border-clay hover:bg-clay/10"
                      }`}
                    >
                      <span>
                        <span className="block font-mono text-[10px] uppercase tracking-widest text-clay">
                          {l.label}
                        </span>
                        <span className="block truncate font-hand text-xl text-paper-ink">
                          {ph ? "⚠︎ add in site.config" : l.value.replace(/^https?:\/\//, "")}
                        </span>
                      </span>
                      {!ph && (
                        <span className="font-mono text-clay transition-transform group-hover:translate-x-1">
                          ↗
                        </span>
                      )}
                    </Comp>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-paper-ink/15 pt-4">
                <span className="font-hand text-3xl text-clay">{site.name} ✦</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/diya-square.jpg"
                  alt={site.name}
                  width={80}
                  height={80}
                  className="h-14 w-14 -rotate-3 rounded-full border-2 border-clay/60 object-cover shadow-paper"
                  draggable={false}
                />
              </div>
            </PaperCard>
            </TiltCard>
          </div>
        </Reveal>

        <p className="mt-14 font-mono text-[10px] uppercase tracking-widest text-paper/40">
          thanks for making it all the way down here :)
        </p>
      </div>
    </section>
  );
}
