/**
 * Studio portfolio - web / SaaS / hardware product design.
 *
 * Tab labels:
 *   Work         -> shipped projects
 *   In Progress  -> active builds
 */

export type ProjectKind = "web" | "saas" | "hardware" | "product";

export type PortfolioProject = {
  id: string;
  name: string;
  line: string;
  kind: ProjectKind[];
  year: string;
  status: "shipped" | "in-progress";
  buildId?: string;
  /** Live / rebuild URL */
  external?: string;
  /** Pre-rebuild original site (before/after) */
  original?: string;
  sections: {
    id: string;
    title: string;
    body: string;
  }[];
};

export const KIND_LABEL: Record<ProjectKind, string> = {
  web: "Web",
  saas: "SaaS",
  hardware: "Hardware",
  product: "Product",
};

export const PORTFOLIO_TABS = [
  {
    id: "work" as const,
    label: "Work",
    eyebrow: "Selected",
    empty: "Selected work coming soon.",
  },
  {
    id: "in-progress" as const,
    label: "In Progress",
    eyebrow: "Studio",
    empty: "Nothing active right now.",
  },
] as const;

export type PortfolioTabId = (typeof PORTFOLIO_TABS)[number]["id"];

export const PROJECTS: PortfolioProject[] = [
  {
    id: "txdiepflap",
    name: "Reconstruction Associates",
    line: "Full rebuild for Breast Reconstruction Associates, multi-location microsurgical practice.",
    kind: ["web"],
    year: "2026",
    status: "shipped",
    external: "https://txdiepflap.vercel.app/",
    original: "https://txdiepflap.com/",
    sections: [
      {
        id: "brief",
        title: "Brief",
        body: "The client needed a patient site that actually matched their practice. Multi-location DIEP flap work, natural-tissue reconstruction, the kind of surgery people research for months before they pick a surgeon. So I kept their voice and the tagline they already had, and I threw the old CMS out instead of trying to dress it up.",
      },
      {
        id: "before",
        title: "Before",
        body: "We had stock photos cycling through a carousel, and a medical template that could have belonged to almost any clinic. A phone number fixed in the header strip. Pages that loaded at different speeds. Navigation that was functional but not doing much for first-time patients. It worked fine if you already knew the office, but it did not work if you were trying to decide whether to trust them.",
      },
      {
        id: "elevation",
        title: "What I built",
        body: "The rebuild opens on real photography, not stock. The frosted glass nav was added so the bar stays light and out of the way. Schedule Consultation sits as the primary action, and Explore DIEP Flap sits under it. Our hero now carries three trust lines: Natural tissue, Muscle-sparing, and two surgeons for every case. Then the rest of the site follows the procedure itself: Surgery, Gallery, Testimonials, FAQs, Locations, Resources. We kept their magenta. Soft colors, quieter type, and spacing that does not feel like a waiting room.",
      },
      {
        id: "outcome",
        title: "Outcome",
        body: "The new build reads as specialty care when you land on it. Live at txdiepflap.vercel.app. A clean reference for practices that want their site to carry the same weight as the work they do.",
      },
    ],
  },
  {
    id: "seanfalyon",
    name: "Sean Falyon",
    line: "Full rebuild for a cultural curator and party rocker DJ. Be Everywhere.",
    kind: ["web"],
    year: "2026",
    status: "shipped",
    external: "https://seanfalyon.vercel.app/",
    original: "https://www.seanfalyon.com/",
    sections: [
      {
        id: "brief",
        title: "Brief",
        body: "The client needed a site that actually matched the rooms he builds. Sean Falyon, cultural curator and party rocker DJ, rooted in Black music, twenty-plus years across stages and cities. So I kept Be Everywhere and the booking path he already had, and I threw the Wix build out instead of trying to dress it up.",
      },
      {
        id: "before",
        title: "Before",
        body: "We had a Wix site doing the job. Photo hero, gold type, lists of residencies and mixes, a Book Sean button up top. It worked fine if you already knew his calendar, but it did not work if you were a brand or a promoter landing cold and trying to feel the weight of the night.",
      },
      {
        id: "elevation",
        title: "What I built",
        body: "The rebuild opens on a black field and a 3D portrait, gold wordmark under it, and Book Sean as the main move. Then a ticker carries the lines he already uses: Cultural curator + party rocker DJ, Rooted in Black music, Be Everywhere. Nav is EPK, Mixes, Bulletin, Events, Shop. SoundCloud sits on the page, and HoneyBook handles the booking. The rest follows how he actually works: radio every Friday, residencies, live rooms, press kit.",
      },
      {
        id: "stack",
        title: "Stack",
        body: "Vite and React on the front. Tailwind for the system. Framer Motion on the motion. SoundCloud for the edits. HoneyBook for booking. Shop wired for merch. Deployed on Vercel.",
      },
      {
        id: "outcome",
        title: "Outcome",
        body: "The new build reads as a working artist site when you land on it. Live at seanfalyon.vercel.app. A clean reference for DJs and curators who want their site to carry the same weight as the night.",
      },
    ],
  },
  {
    id: "checkclock",
    name: "CheckClock",
    line: "Physical detention evidence kit, check-in / check-out window display.",
    kind: ["hardware", "product"],
    year: "2026",
    status: "in-progress",
    buildId: "checkclock",
    sections: [
      {
        id: "status",
        title: "Status",
        body: "Prototyping. Design & source -> first units -> self-test -> friend pilots -> company pilot.",
      },
      {
        id: "focus",
        title: "Focus",
        body: "Answers the only two questions that matter at the dock: what time did you check in, and what time did you check out. Offline-first. No dock app required.",
      },
      {
        id: "open",
        title: "Open build",
        body: "Full brief, phases, and live tracker live in the build sandbox.",
      },
    ],
  },
];

export function projectsForTab(tab: PortfolioTabId): PortfolioProject[] {
  if (tab === "work") {
    return PROJECTS.filter((p) => p.status === "shipped");
  }
  return PROJECTS.filter((p) => p.status === "in-progress");
}
