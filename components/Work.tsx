"use client";

import { useState } from "react";
import { softwareProjects, type Project } from "@/lib/projects";
import { Reveal, Parallax } from "./ui/Motion";
import { BrowserFrame, TerminalFrame, DashboardFrame, PhoneFrame } from "./ui/Frames";
import { ProjectMock } from "./ProjectMock";
import ProjectModal from "./ProjectModal";
import { TiltCard } from "./ui/TiltCard";
import { ArrowScribble } from "./ui/Doodles";

function DeviceFor({ project }: { project: Project }) {
  const inner = <ProjectMock id={project.id} />;
  switch (project.frame) {
    case "terminal":
      return <TerminalFrame title={`~/${project.id}`}>{inner}</TerminalFrame>;
    case "dashboard":
      return <DashboardFrame title={project.id}>{inner}</DashboardFrame>;
    case "phone":
      return <PhoneFrame>{inner}</PhoneFrame>;
    default:
      return <BrowserFrame url={`${project.id}.app`}>{inner}</BrowserFrame>;
  }
}

export default function Work() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="work" className="blueprint relative border-y border-cyan/10 px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/80">
              02 — the workstation
            </p>
            <h2 className="mt-3 font-serif text-4xl text-paper sm:text-6xl">
              Things I&apos;ve built
            </h2>
            <p className="mx-auto mt-3 max-w-md font-sans text-sm text-paper/60">
              Software, AI &amp; hardware — live on the bench. Tap any screen for the
              full case study.
            </p>
          </div>
        </Reveal>

        <div className="space-y-24">
          {softwareProjects.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.id}>
                <div
                  className={`grid items-center gap-8 md:grid-cols-2 ${
                    flip ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* device */}
                  <Parallax speed={22}>
                    <TiltCard
                      max={9}
                      baseRotate={flip ? 1.2 : -1.2}
                      glareColor="rgba(127,225,242,0.4)"
                      className="rounded-xl"
                    >
                      <button
                        onClick={() => setOpen(p)}
                        aria-label={`Open case study: ${p.title}`}
                        className="block w-full cursor-pointer text-left"
                      >
                        <DeviceFor project={p} />
                      </button>
                    </TiltCard>
                  </Parallax>

                  {/* text */}
                  <div className={flip ? "md:pr-6" : "md:pl-6"}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-block rounded-full border border-cyan/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-300/90">
                        {p.category} · {p.year}
                      </span>
                      {p.status ? (
                        <span className="inline-block rounded-full border border-marigold/40 bg-marigold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-marigold-300">
                          {p.status}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-4 font-serif text-3xl text-paper sm:text-4xl">{p.title}</h3>
                    <p className="mt-2 font-hand text-2xl text-marigold-300">{p.tagline}</p>
                    <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-paper/70">
                      {p.built}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tools.slice(0, 5).map((t) => (
                        <span key={t} className="font-mono text-[11px] text-paper/50">
                          {t}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setOpen(p)}
                      className="group mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-300 transition hover:text-marigold"
                    >
                      open case study
                      <ArrowScribble className="h-5 w-7 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
