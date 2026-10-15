import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#17150f",
          800: "#1e1b13",
          700: "#26221a",
          600: "#332e23",
        },
        paper: {
          DEFAULT: "#f0e6d1",
          200: "#e8dcc2",
          300: "#ddceac",
          ink: "#2a251c",
          line: "#aeb9cf",
        },
        marigold: {
          DEFAULT: "#e0973a",
          600: "#cf7f27",
          300: "#f0bd73",
        },
        clay: "#c4592f",
        cyan: {
          DEFAULT: "#4fb0c6",
          300: "#7fe1f2",
          600: "#2f8296",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        hand: ["var(--font-hand)", "cursive"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 40px -18px rgba(0,0,0,0.65)",
        paper: "0 14px 30px -14px rgba(0,0,0,0.5)",
        glow: "0 0 40px -6px rgba(127,225,242,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
