import type { Metadata } from "next";
import { Fraunces, Caveat, JetBrains_Mono, Inter } from "next/font/google";
import { site } from "@/lib/site.config";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hand",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — Software Engineer & Designer`,
  description:
    "A creative engineer's digital workspace — software, AI, and design that ships.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${hand.variable} ${mono.variable} ${sans.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
