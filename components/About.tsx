"use client";

import { site } from "@/lib/site.config";
import { Reveal, Parallax, Float } from "./ui/Motion";
import { PaperCard, Tape, PushPin } from "./ui/Paper";
import { TiltCard } from "./ui/TiltCard";
import { BrowserFrame } from "./ui/Frames";
import { Sprig, Underline, StarBurst, ArrowScribble } from "./ui/Doodles";

const alsoList = [
  "a designer who notices details",
  "someone who turns ideas into projects",
  "a problem-solver",
  "a team leader",
  "an artist who needs an outlet",
];

export default function About() {
  return (
    <section id="about" className="desk-surface relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/70">
            01 — a little about me
          </p>
        </Reveal>

        {/* ── featured intro: polaroid + hello ── */}
        <div className="mt-10 grid items-center gap-10 md:grid-cols-[minmax(0,340px)_1fr]">
          <Reveal>
            <div className="mx-auto w-full max-w-[320px]">
              <TiltCard max={12} baseRotate={-3} glareColor="rgba(255,255,255,0.5)" className="rounded-sm">
                {/* polaroid */}
                <div className="relative rounded-sm bg-[#fbf6ea] p-3 pb-14 shadow-card">
                  <Tape className="left-1/2 -top-3 z-20 -translate-x-1/2" rotate={4} color="rgba(79,176,198,0.5)" />
                  <div className="overflow-hidden rounded-[2px] bg-ink">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/diya.jpg"
                      alt={`${site.name}`}
                      width={975}
                      height={1300}
                      className="h-auto w-full select-none"
                      draggable={false}
                    />
                  </div>
                  <p className="absolute bottom-4 left-0 right-0 text-center font-hand text-3xl text-paper-ink">
                    {site.firstName} — occasionally offline
                  </p>
                </div>
              </TiltCard>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative">
              <Float className="absolute -right-2 -top-6 text-marigold/60 sm:right-6" amount={7} duration={6}>
                <StarBurst className="h-9 w-9" />
              </Float>
              <p className="font-hand text-4xl text-marigold sm:text-5xl">hi, I&apos;m {site.firstName}</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-paper sm:text-4xl">
                I study computer science, but I don&apos;t want to stop at{" "}
                <span className="text-marigold-300">writing code</span>.
              </h2>
              <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-paper/75">
                I&apos;m pursuing B.Tech in Computer Science &amp; Engineering at Manipal
                Institute of Technology, Bengaluru. I like projects that mix software, AI
                and practical problem-solving — I&apos;ve explored ideas from a women&apos;s
                safety platform to an AI study workspace — and I enjoy the visual side too,
                from interfaces to posters. Outside my own projects, I organize technical
                events with my college&apos;s SDG Club. Still figuring things out, and
                learning by building along the way.
              </p>
              <p className="mt-4 font-mono text-xs text-paper/50">
                {site.study} · {site.location}
                <ArrowScribble className="mt-1 h-6 w-10 text-cyan/50" />
              </p>
            </div>
          </Reveal>
        </div>

        {/* ── main paper island ── */}
        <Reveal delay={0.05}>
          <div className="relative mt-14">
            <Tape className="left-8 -top-3 z-20" rotate={-8} />
            <Tape className="right-10 -top-3 z-20" rotate={7} />
            <PaperCard variant="grid" rotate={-0.6} className="rounded-2xl px-6 py-10 sm:px-12 sm:py-14">
              <h2 className="max-w-3xl font-serif text-3xl leading-tight text-clay sm:text-5xl">
                I turn complicated ideas into things people can actually use.
              </h2>

              <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
                {/* taped note: also... */}
                <div className="relative">
                  <TiltCard max={9} baseRotate={-2.5} glareColor="rgba(196,89,47,0.25)" className="rounded-md">
                    <PaperCard variant="lined" className="rounded-md px-6 py-6">
                      <PushPin className="left-1/2 -top-2 -translate-x-1/2" />
                      <p className="font-hand text-2xl text-paper-ink/80">
                        I&apos;m a computer science student,
                        <br /> but I&apos;m also…
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {alsoList.map((a) => (
                          <li key={a} className="font-hand text-2xl text-clay">
                            {a}
                          </li>
                        ))}
                      </ul>
                    </PaperCard>
                  </TiltCard>
                  <Sprig className="absolute -right-6 bottom-2 h-16 w-12 text-marigold-600/70" />
                </div>

                {/* laptop with code + github */}
                <div className="relative">
                  <TiltCard max={10} baseRotate={1.2} glareColor="rgba(127,225,242,0.4)" className="rounded-xl">
                    <BrowserFrame url={`github.com`}>
                      <div className="bg-[#0c0f10] p-4 font-mono text-[10px] leading-relaxed text-cyan-300/85 sm:text-[11px]">
                        <p><span className="text-marigold-300">const</span> diya = {"{"}</p>
                        <p className="pl-4">studying: <span className="text-paper/80">&quot;Computer Science&quot;</span>,</p>
                        <p className="pl-4">building: [<span className="text-paper/80">&quot;Her&nbsp;Saathi&quot;</span>, <span className="text-paper/80">&quot;StudyOS&quot;</span>],</p>
                        <p className="pl-4">interests: [<span className="text-paper/80">&quot;AI&quot;</span>, <span className="text-paper/80">&quot;Dev&quot;</span>, <span className="text-paper/80">&quot;Design&quot;</span>],</p>
                        <p className="pl-4">learning: <span className="text-paper/80">&quot;Always&quot;</span>,</p>
                        <p>{"}"}</p>
                        <p className="mt-2 text-paper/40">// make it, test it, improve it.</p>
                      </div>
                      <div className="flex items-center gap-2 bg-paper px-4 py-2.5 font-mono text-xs text-paper-ink">
                        <svg viewBox="0 0 16 16" className="h-4 w-4 fill-clay"><path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.34c-2.23.49-2.7-1.07-2.7-1.07-.36-.93-.89-1.18-.89-1.18-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.72 1.23 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.83-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.52.56.83 1.28.83 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" /></svg>
                        {site.links.github.replace("https://github.com/", "@")}
                      </div>
                    </BrowserFrame>
                  </TiltCard>
                </div>
              </div>
            </PaperCard>
          </div>
        </Reveal>

        {/* collaged energy / soul cards */}
        <div className="relative mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2">
          <Parallax speed={18}>
            <Reveal>
              <TiltCard max={8} baseRotate={-1.5} glareColor="rgba(196,89,47,0.2)" className="rounded-2xl">
                <PaperCard className="rounded-2xl px-7 py-8">
                  <h3 className="font-serif text-2xl text-clay">what gives me energy</h3>
                  <Underline className="h-3 w-40 text-marigold" />
                  <ul className="mt-4 space-y-2 font-sans text-sm text-paper-ink/85">
                    <li>◦ Building something with a team</li>
                    <li>◦ Seeing an idea become a working project</li>
                    <li>◦ Designing something from a blank canvas</li>
                    <li>◦ Tech that could be useful to someone</li>
                  </ul>
                </PaperCard>
              </TiltCard>
            </Reveal>
          </Parallax>

          <Parallax speed={-14}>
            <Reveal delay={0.08}>
              <TiltCard max={8} baseRotate={1.5} glareColor="rgba(255,255,255,0.25)" className="rounded-2xl">
                <PaperCard variant="clay" className="rounded-2xl px-7 py-8">
                  <h3 className="font-hand text-3xl">what I enjoy outside code</h3>
                  <p className="mt-3 font-sans text-sm text-paper/90">The creative side of things.</p>
                  <p className="mt-2 font-sans text-sm text-paper/90">
                    Graphic design, sketching ideas, experimenting with layouts, and
                    occasionally spending longer choosing a font than I planned to.
                  </p>
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-paper/60">
                    {site.study}
                  </p>
                </PaperCard>
              </TiltCard>
            </Reveal>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
