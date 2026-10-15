"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/projects";
import { ProjectMock } from "./ProjectMock";
import { BrowserFrame, TerminalFrame, DashboardFrame } from "./ui/Frames";

function Frame({ project }: { project: Project }) {
  const inner = <ProjectMock id={project.id} />;
  if (project.frame === "terminal") return <TerminalFrame title={`~/${project.id}`}>{inner}</TerminalFrame>;
  if (project.frame === "dashboard") return <DashboardFrame title={project.id}>{inner}</DashboardFrame>;
  return <BrowserFrame url={`${project.id}.app`}>{inner}</BrowserFrame>;
}

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300/70">{label}</p>
    <p className="mt-1.5 font-sans text-sm leading-relaxed text-paper/85">{children}</p>
  </div>
);

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (project) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative my-8 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-card"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-ink/60 text-paper/70 transition hover:text-marigold"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="blueprint p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-marigold">
                  {project.category} · {project.year}
                </p>
                {project.status ? (
                  <span className="rounded-full border border-marigold/40 bg-marigold/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-marigold-300">
                    {project.status}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-2 font-serif text-3xl text-paper sm:text-4xl">{project.title}</h3>
              <p className="mt-1 font-hand text-2xl text-cyan-300/90">{project.tagline}</p>
              <div className="mt-5">
                <Frame project={project} />
              </div>
            </div>

            <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8">
              <Field label="the problem">{project.problem}</Field>
              <Field label="what I built">{project.built}</Field>
              <Field label="my role">{project.role}</Field>
              <Field label="process">{project.process}</Field>
              <div className="sm:col-span-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300/70">tools</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span key={t} className="rounded-md border border-white/12 bg-ink px-2.5 py-1 font-mono text-[11px] text-paper/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 sm:col-span-2">
                {project.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-marigold/40 bg-marigold/10 px-4 py-1.5 font-mono text-xs text-marigold-300 transition hover:bg-marigold/20"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
