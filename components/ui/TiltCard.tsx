"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionStyle,
} from "framer-motion";
import { useRef, type ReactNode, type CSSProperties } from "react";

/**
 * Cursor-following 3D tilt with a moving glare + lift.
 * Wrap any card. Degrades to a plain (optionally rotated) box on
 * touch devices and when reduced-motion is requested.
 */
export function TiltCard({
  children,
  className = "",
  max = 10,
  scale = 1.03,
  baseRotate = 0,
  glare = true,
  glareColor = "rgba(255,255,255,0.35)",
  style,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  scale?: number;
  baseRotate?: number;
  glare?: boolean;
  glareColor?: string;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 220, damping: 20, mass: 0.4 };
  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
  const s = useSpring(1, spring);

  // glare position follows the cursor
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  const glareOpacity = useSpring(0, { stiffness: 180, damping: 22 });
  const glareBg = useTransform(
    [gx, gy],
    ([x, y]: string[]) =>
      `radial-gradient(120px circle at ${x} ${y}, ${glareColor}, transparent 65%)`,
  );

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType === "touch") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }
  function onEnter(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType === "touch") return;
    s.set(scale);
    glareOpacity.set(1);
  }
  function onLeave() {
    px.set(0.5);
    py.set(0.5);
    s.set(1);
    glareOpacity.set(0);
  }

  if (reduce) {
    return (
      <div className={className} style={{ transform: `rotate(${baseRotate}deg)`, ...style }}>
        {children}
      </div>
    );
  }

  const motionStyle: MotionStyle = {
    rotateX: rx,
    rotateY: ry,
    scale: s,
    transformStyle: "preserve-3d",
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      style={{ perspective: 900, transform: `rotate(${baseRotate}deg)`, ...style }}
      className="[transform-style:preserve-3d]"
    >
      <motion.div style={motionStyle} className={`relative ${className}`}>
        {children}
        {glare && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] mix-blend-soft-light"
            style={{ opacity: glareOpacity, background: glareBg }}
          />
        )}
      </motion.div>
    </div>
  );
}
