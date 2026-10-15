"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site.config";

const items = [
  { id: "about", label: "about" },
  { id: "work", label: "work" },
  { id: "toolbox", label: "toolbox" },
  { id: "creative", label: "creative" },
  { id: "connect", label: "connect" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(30,27,19,0.82)" : "rgba(30,27,19,0)",
          borderColor: scrolled ? "rgba(240,230,209,0.12)" : "rgba(240,230,209,0)",
        }}
        transition={{ duration: 0.4 }}
        className="pointer-events-auto flex items-center gap-1 rounded-full border px-2 py-1.5 backdrop-blur-md sm:gap-2 sm:px-3"
      >
        <a
          href="#top"
          className="grid h-7 w-7 place-items-center rounded-full border border-marigold/50 font-serif text-[13px] font-bold leading-none text-marigold"
          aria-label="Back to top"
        >
          {site.firstName.charAt(0)}
        </a>
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className="rounded-full px-2.5 py-1 font-hand text-lg leading-none text-paper/85 transition-colors hover:text-marigold sm:px-3 sm:text-xl"
          >
            {it.label}
          </a>
        ))}
      </motion.nav>
    </div>
  );
}
