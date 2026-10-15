import Nav from "@/components/Nav";
import ClickBurst from "@/components/ClickBurst";
import SideRails from "@/components/SideRails";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Beliefs from "@/components/Beliefs";
import Work from "@/components/Work";
import Toolbox from "@/components/Toolbox";
import Creative from "@/components/Creative";
import Leadership from "@/components/Leadership";
import Exploring from "@/components/Exploring";
import Connect from "@/components/Connect";
import { TornEdge } from "@/components/ui/TornEdge";

export default function Home() {
  return (
    <main className="relative">
      <ClickBurst />
      <SideRails />
      <Nav />

      <Hero />
      <About />
      <Beliefs />

      {/* ── technical world ── */}
      <Work />
      <Toolbox />

      {/* ── peel into the creative world ── */}
      <TornEdge />
      <Creative />
      <TornEdge flip />

      {/* ── back to the desk ── */}
      <Leadership />
      <Exploring />
      <Connect />
    </main>
  );
}
