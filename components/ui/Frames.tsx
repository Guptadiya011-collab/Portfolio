import type { ReactNode } from "react";

function TrafficLights() {
  return (
    <div className="flex gap-1.5" aria-hidden>
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
    </div>
  );
}

export function BrowserFrame({
  url = "localhost:3000",
  children,
  className = "",
}: {
  url?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-ink-800 screen-glow ${className}`}>
      <div className="flex items-center gap-3 border-b border-white/10 bg-ink-700 px-3 py-2">
        <TrafficLights />
        <div className="flex-1">
          <div className="mx-auto flex max-w-[220px] items-center gap-2 rounded-md bg-ink px-2.5 py-1 font-mono text-[10px] text-cyan-300/80">
            <span className="h-2 w-2 rounded-full border border-cyan/50" />
            {url}
          </div>
        </div>
        <div className="h-3 w-3 rounded border border-white/15" aria-hidden />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

export function TerminalFrame({
  title = "~/build",
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-[#0c0f10] screen-glow ${className}`}>
      <div className="flex items-center gap-3 border-b border-white/10 bg-[#141a1b] px-3 py-2">
        <TrafficLights />
        <span className="font-mono text-[10px] text-cyan-300/70">{title}</span>
      </div>
      <div className="p-4 font-mono text-[11px] leading-relaxed text-cyan-300/90 md:text-xs">
        {children}
      </div>
    </div>
  );
}

export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative rounded-[2rem] border-[6px] border-ink-600 bg-ink-800 p-1.5 shadow-card screen-glow ${className}`}>
      <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-ink-600" aria-hidden />
      <div className="overflow-hidden rounded-[1.6rem] bg-ink">{children}</div>
    </div>
  );
}

export function DashboardFrame({
  children,
  title = "console",
  className = "",
}: {
  children: ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-ink-800 screen-glow ${className}`}>
      <div className="flex items-center gap-3 border-b border-white/10 bg-ink-700 px-3 py-2">
        <TrafficLights />
        <span className="font-mono text-[10px] text-cyan-300/70">{title}</span>
        <span className="ml-auto h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" aria-hidden />
      </div>
      <div className="flex">
        <div className="hidden w-10 shrink-0 flex-col items-center gap-3 border-r border-white/10 bg-ink py-3 sm:flex" aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="h-4 w-4 rounded bg-white/10" />
          ))}
        </div>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
