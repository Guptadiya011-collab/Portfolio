// ─────────────────────────────────────────────────────────────
//  EDIT ME — everything personal lives here.
//  Items still marked ⚠︎ need a real value from Diya (see report).
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Diya Gupta",
  firstName: "Diya",
  roles: ["Computer Science Student", "Developer", "Designer"],

  // The hero cycles these phrases in the handwritten accent.
  heroLineStart: "I like building things that",
  heroLineWords: ["solve real problems", "people actually use", "feel good to use"],

  location: "Bengaluru, India",
  timezone: "GMT +5:30",

  // Used in the About + Connect sections.
  study: "Manipal Institute of Technology · B.Tech CSE",

  links: {
    email: "guptadiya011@gmail.com",
    github: "https://github.com/Guptadiya011-collab",
    // ⚠︎ Add Diya's LinkedIn profile URL.
    linkedin: "⚠︎ [YOUR LINKEDIN]",
    twitter: "", // optional
    resume: "", // optional — link to a PDF
  },
} as const;

export type Site = typeof site;
