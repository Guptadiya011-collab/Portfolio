"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Burst = { id: number; x: number; y: number; hue: string; spin: number; kind: 0 | 1 };

const HUES = ["#e0973a", "#7fe1f2", "#c4592f", "#f0bd73"];

export default function ClickBurst() {
  const [bursts, setBursts] = useState<Burst[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onDown = (e: PointerEvent) => {
      // ignore text-selection drags on inputs/textareas
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) return;

      const id = ++idRef.current;
      const b: Burst = {
        id,
        x: e.clientX,
        y: e.clientY,
        hue: HUES[id % HUES.length],
        spin: (id * 37) % 360,
        kind: (id % 2) as 0 | 1,
      };
      setBursts((prev) => [...prev.slice(-11), b]);
      window.setTimeout(() => {
        setBursts((prev) => prev.filter((x) => x.id !== id));
      }, 650);
    };

    window.addEventListener("pointerdown", onDown);
    return () => window.removeEventListener("pointerdown", onDown);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[200] overflow-hidden">
      <AnimatePresence>
        {bursts.map((b) => (
          <div
            key={b.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: b.x, top: b.y }}
          >
            <motion.svg
              width={72}
              height={72}
              viewBox="-36 -36 72 72"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ rotate: b.spin }}
            >
              {/* expanding ring */}
              <motion.circle
                cx={0}
                cy={0}
                r={7}
                fill="none"
                stroke={b.hue}
                strokeWidth={2}
                initial={{ scale: 0.2, opacity: 0.9 }}
                animate={{ scale: 3.4, opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.2, 0.7, 0.3, 1] }}
              />
              {/* radiating spark strokes */}
              <motion.g
                initial={{ scale: 0.15, opacity: 1 }}
                animate={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.2, 0.7, 0.3, 1] }}
              >
                {(b.kind === 0 ? [0, 60, 120, 180, 240, 300] : [30, 90, 150, 210, 270, 330]).map(
                  (a, i) => (
                    <line
                      key={a}
                      x1={0}
                      y1={-9}
                      x2={0}
                      y2={-18}
                      stroke={i % 2 ? b.hue : HUES[(b.id + 1) % HUES.length]}
                      strokeWidth={2.4}
                      strokeLinecap="round"
                      transform={`rotate(${a})`}
                    />
                  ),
                )}
              </motion.g>
              {/* tiny center dot */}
              <motion.circle
                cx={0}
                cy={0}
                r={2.4}
                fill={b.hue}
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.svg>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
