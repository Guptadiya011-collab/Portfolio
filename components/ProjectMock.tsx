/* Illustrative UI mocks shown on the device screens.
   These are visual placeholders that convey the *kind* of product —
   not real data, users, or metrics. */

export function HerSaathiMock() {
  return (
    <div className="relative h-52 bg-ink p-3 sm:h-60">
      {/* map grid */}
      <div className="absolute inset-3 rounded-lg bg-[#0e1416]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,176,198,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(79,176,198,0.12) 1px,transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* route */}
      <svg viewBox="0 0 260 200" className="relative h-full w-full" fill="none">
        <path d="M30 170 C 70 150, 60 100, 110 90 S 180 70, 220 30"
          stroke="#7fe1f2" strokeWidth={3} strokeLinecap="round" strokeDasharray="1 10" />
        <circle cx="30" cy="170" r="6" fill="#e0973a" />
        <circle cx="220" cy="30" r="6" fill="#7fe1f2" />
        {/* signal pings */}
        <circle cx="120" cy="86" r="10" fill="#7fe1f2" fillOpacity="0.12" />
        <circle cx="120" cy="86" r="4" fill="#7fe1f2" />
      </svg>
      {/* signal chips */}
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
        {["well-lit", "busy now", "recent report", "safe route"].map((s) => (
          <span key={s} className="rounded-full border border-cyan/30 bg-ink-800/80 px-2 py-0.5 font-mono text-[9px] text-cyan-300/90">
            {s}
          </span>
        ))}
      </div>
      <span className="absolute right-4 top-4 flex items-center gap-1 font-mono text-[9px] text-emerald-300">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> live signals
      </span>
    </div>
  );
}

export function StudyOSMock() {
  return (
    <div className="h-52 bg-ink p-4 sm:h-56">
      <div className="mb-3 flex items-center justify-between">
        <div className="h-5 w-24 rounded bg-marigold/30" />
        <div className="flex gap-1.5">
          <span className="rounded-full bg-marigold/20 px-2 py-0.5 font-mono text-[9px] text-marigold-300">streak</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["Calculus", "Systems", "ML"].map((c, i) => (
          <div key={c} className="rounded-lg border border-white/10 bg-ink-800 p-2">
            <div className="mb-1.5 h-6 rounded bg-marigold/15" />
            <p className="truncate font-mono text-[9px] text-paper/70">{c}</p>
            <span className="mt-1 block h-1.5 overflow-hidden rounded bg-white/10">
              <span className="block h-full bg-marigold" style={{ width: `${60 + i * 12}%` }} />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-cyan/20 bg-ink-800 p-2.5">
        <p className="font-mono text-[9px] text-cyan-300/80">✦ AI tutor</p>
        <p className="mt-1 text-[10px] text-paper/70">Explain eigenvectors…</p>
        <p className="mt-1 text-[9px] text-paper/40">— answered with citations [1][2]</p>
      </div>
    </div>
  );
}

export function GenericAppMock() {
  return (
    <div className="h-52 bg-ink p-4 sm:h-56">
      <div className="mb-3 h-6 w-28 rounded bg-white/10" />
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-lg border border-white/10 bg-ink-800 p-2">
            <div className="mb-2 h-8 rounded bg-cyan/10" />
            <div className="h-2 w-3/4 rounded bg-white/10" />
            <div className="mt-1 h-2 w-1/2 rounded bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function DMSMock() {
  const carts = [
    { c: "C01", op: "Ramesh K.", st: "On route", tone: "text-emerald-300 border-emerald-400/40" },
    { c: "C02", op: "Sunita P.", st: "Loaded", tone: "text-cyan-300 border-cyan/40" },
    { c: "C03", op: "Unassigned", st: "Draft", tone: "text-paper/50 border-white/15" },
  ];
  return (
    <div className="h-52 bg-ink p-4 sm:h-56">
      <div className="mb-3 flex items-center justify-between">
        <div className="h-5 w-20 rounded bg-cyan/25" />
        <span className="font-mono text-[9px] text-paper/50">carts · operators</span>
      </div>
      <div className="overflow-hidden rounded-lg border border-white/10">
        {carts.map((r, i) => (
          <div
            key={r.c}
            className={`flex items-center gap-3 px-3 py-2 ${i ? "border-t border-white/10" : ""}`}
          >
            <span className="grid h-6 w-7 place-items-center rounded bg-cyan/15 font-mono text-[10px] text-cyan-300">
              {r.c}
            </span>
            <span className="flex-1 truncate text-[11px] text-paper/80">{r.op}</span>
            <span className={`rounded-full border px-2 py-0.5 font-mono text-[9px] ${r.tone}`}>
              {r.st}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-2 font-mono text-[9px] text-paper/40">// admin · role-based access</p>
    </div>
  );
}

export function ProjectMock({ id }: { id: string }) {
  if (id === "her-saathi") return <HerSaathiMock />;
  if (id === "studyos") return <StudyOSMock />;
  if (id === "dms") return <DMSMock />;
  return <GenericAppMock />;
}
