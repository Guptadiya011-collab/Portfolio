// ─────────────────────────────────────────────────────────────
//  PROJECTS — add / edit here. Nothing is auto-generated.
//  Never invent metrics, users, or "completed" status. Projects
//  in progress stay marked "In development".
// ─────────────────────────────────────────────────────────────

export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  kind: "software" | "creative";
  title: string;
  tagline: string;
  year: string;
  role: string;
  /** honest state: "In development" | "Prototype" | "Completed" | contribution note */
  status?: string;
  /** short label shown on the card */
  category: string;
  problem: string;
  built: string;
  process: string;
  tools: string[];
  links: ProjectLink[];
  /** real artwork for creative tiles (path under /public) */
  image?: string;
  /** which mock "device" to render for software projects */
  frame?: "browser" | "terminal" | "phone" | "dashboard";
  /** accent hue for the card */
  accent?: "cyan" | "marigold";
};

export const projects: Project[] = [
  {
    id: "her-saathi",
    kind: "software",
    title: "Her Saathi",
    tagline:
      "Exploring how real-world information can help women make more informed decisions about their routes.",
    year: "2025",
    role: "Student builder",
    status: "In development",
    category: "AI · Women's Safety · Geospatial",
    problem:
      "Her Saathi started with a question: what if choosing a route involved more than just finding the shortest way to get somewhere? The hard part is making that information useful without presenting incomplete data as a guarantee of safety.",
    built:
      "A safety-focused mapping platform I'm building that brings together location data, environmental information, and reported incidents so routes can be compared. The idea includes a safety-intelligence map, route comparison by travel time and available safety indicators, a look at street-level observations, and evidence organised by location, source and freshness.",
    process:
      "A map can look convincing even when the data behind it is weak. One of the hardest parts is deciding what deserves to be shown, how reliable it is, and how to be honest about its limits — so it informs a decision rather than promising a safe route.",
    tools: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "Tailwind"],
    links: [{ label: "GitHub", href: "https://github.com/Guptadiya011-collab/HerSaathi" }],
    frame: "dashboard",
    accent: "cyan",
  },
  {
    id: "studyos",
    kind: "software",
    title: "StudyOS",
    tagline: "A personal workspace for studying, tracking progress, and keeping academic life organized.",
    year: "2025",
    role: "Student builder",
    status: "In development",
    category: "AI · Education · Productivity",
    problem:
      "StudyOS is my attempt to make studying feel less scattered — one place to keep track of what I'm learning, what needs attention, and what to work on next, instead of maintaining yet another disconnected list of tasks.",
    built:
      "An academic workspace I'm developing that brings together course and subject organization, study goals and progress tracking, academic planning and task management, and an AI tutor designed to answer questions with supporting sources.",
    process:
      "I wanted a study system that could work around the way I actually learn. The interesting challenge is tying planning, progress and an AI tutor together into one workspace that stays simple to use.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    links: [{ label: "GitHub", href: "https://github.com/Guptadiya011-collab/StudyOs" }],
    frame: "browser",
    accent: "marigold",
  },
  {
    id: "dms",
    kind: "software",
    title: "DMS",
    tagline: "A management system for a push-cart distribution business.",
    year: "2026",
    role: "Student builder · Full-stack",
    status: "In development",
    category: "Full-stack · Operations",
    problem:
      "Running a fleet of distribution push-carts means tracking products, carts, the operators running them, the stock loaded on each one, and the day's sales — usually across notebooks and messages. DMS is my attempt to put all of that in one admin system.",
    built:
      "A full-stack admin platform with role-based access (admin, manager, operator, vendor): product catalogue, a cart register with load lifecycle and stock, and operator assignment with history — one active operator per cart. Auth and data run on Supabase with row-level security. Planned next: stock intake and sales captured from a photo, then sales comparison across carts and operators.",
    process:
      "I built it in clear backend layers — routes, validation, services — with the database enforcing the rules (constraints and RLS) rather than trusting the client. The next interesting problem is turning a photo of a stock sheet into structured data.",
    tools: ["Next.js", "TypeScript", "Express", "Supabase", "PostgreSQL", "Tailwind", "Zod"],
    links: [],
    frame: "dashboard",
    accent: "cyan",
  },
  // ── Creative / graphic-design work (The Sketchbook) ─────────
  // Real pieces. Tap a tile to flip for a short note.
  {
    id: "gd-mentoredge-poster",
    kind: "creative",
    title: "MentorEdge — App Poster",
    tagline: "Brand identity · launch poster",
    year: "2026",
    role: "Designer",
    category: "Launch poster",
    problem: "Announce the MentorEdge app launch in a single, confident frame.",
    built: "Launch poster for the MentorEdge app — identity, iconography and layout for the 'Coming Soon' announcement.",
    process: "One composition that had to carry the brand and the message at a glance.",
    tools: ["Figma", "Canva"],
    image: "/gd/mentoredge-poster.jpg",
    links: [],
    accent: "marigold",
  },
  {
    id: "gd-mentoredge-brand",
    kind: "creative",
    title: "MentorEdge — Identity",
    tagline: "Logo · gradient system",
    year: "2026",
    role: "Branding",
    category: "Brand identity",
    problem: "A visual language for an EdTech research platform.",
    built: "Visual identity and pitch design for MentorEdge — the gradient wordmark and the presentation system around it.",
    process: "Built the wordmark first, then carried its colours through every slide.",
    tools: ["Figma"],
    image: "/gd/mentoredge-brand.jpg",
    links: [],
    accent: "marigold",
  },
  {
    id: "gd-mentoredge-brochure",
    kind: "creative",
    title: "MentorEdge — Brochure",
    tagline: "Product brochure · layout",
    year: "2026",
    role: "Designer",
    category: "Brochure",
    problem: "Explain the product's features without a wall of text.",
    built: "A product brochure laying out MentorEdge's features with device mockups and a clear reading flow.",
    process: "Paced the information so the eye moves feature to feature.",
    tools: ["Figma"],
    image: "/gd/mentoredge-brochure.jpg",
    links: [],
    accent: "marigold",
  },
  {
    id: "gd-ai-deck",
    kind: "creative",
    title: "AI Conference Deck",
    tagline: "Presentation design · event deck",
    year: "2026",
    role: "Designer",
    category: "Presentation design",
    problem: "A cohesive deck for a global higher-education AI conference.",
    built: "Slide design for a global conference on AI-driven sustainable technologies in higher education.",
    process: "A restrained, technical look that let the content lead.",
    tools: ["Figma", "Canva"],
    image: "/gd/ai-conference-deck.jpg",
    links: [],
    accent: "marigold",
  },
  {
    id: "gd-mitraz",
    kind: "creative",
    title: "Mitraz",
    tagline: "Infographic · brand concept",
    year: "2026",
    role: "Designer",
    category: "Infographic",
    problem: "Tell a brand's story in one considered frame.",
    built: "Concept and infographic design for Mitraz — a single-frame story built around strengths and opportunity.",
    process: "Illustration and type working together to make an idea feel calm.",
    tools: ["Canva", "Figma"],
    image: "/gd/mitraz.jpg",
    links: [],
    accent: "marigold",
  },
  {
    id: "gd-campus-vision",
    kind: "creative",
    title: "Building a Great Campus",
    tagline: "Editorial · typography",
    year: "2026",
    role: "Designer",
    category: "Typographic cover",
    problem: "A cover that sets a bold tone for a campus-vision talk.",
    built: "Bold typographic cover design for a campus-vision presentation.",
    process: "Big type over a real photo — confident and simple.",
    tools: ["Figma"],
    image: "/gd/campus-vision.jpg",
    links: [],
    accent: "marigold",
  },
  {
    id: "gd-scaling-skills",
    kind: "creative",
    title: "Scaling Skills to Jobs",
    tagline: "Editorial deck · report cover",
    year: "2026",
    role: "Designer",
    category: "Editorial deck",
    problem: "An editorial cover for a higher-education case clinic.",
    built: "Editorial cover design for a FOHE 2026 case clinic on skills-to-jobs pathways.",
    process: "Clean editorial layout with a calm, institutional feel.",
    tools: ["Figma"],
    image: "/gd/scaling-skills.jpg",
    links: [],
    accent: "marigold",
  },
  {
    id: "gd-the-asia",
    kind: "creative",
    title: "THE Asia Summit",
    tagline: "Event branding · summit deck",
    year: "2026",
    role: "Designer",
    category: "Event branding",
    problem: "On-brand slide design for a universities summit.",
    built: "Branded deck design for the THE Asia Universities Summit with MAHE.",
    process: "Matched an existing event brand and kept every slide consistent.",
    tools: ["Figma"],
    image: "/gd/the-asia.jpg",
    links: [],
    accent: "marigold",
  },
];

export const softwareProjects = projects.filter((p) => p.kind === "software");
export const creativeProjects = projects.filter((p) => p.kind === "creative");
