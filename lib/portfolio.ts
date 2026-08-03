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
    name: "TX DIEP Flap",
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
        body: "Client needed a patient site that actually matched their practice. Multi-location DIEP flap work, natural-tissue reconstruction, the kind of surgery people research for months before they pick a surgeon. I kept their voice and the tagline they already had, and I threw the old CMS out instead of trying to dress it up.",
      },
      {
        id: "before",
        title: "Before",
        body: "Stock photos cycling through a carousel. A medical template that could have belonged to almost any clinic. Phone number fixed in the header strip, pages that loaded at different speeds, navigation that felt like 2014. It worked fine if you already knew the office. It did not work if you were a patient trying to decide whether to trust them.",
      },
      {
        id: "elevation",
        title: "What I built",
        body: "Opened on real photography, not stock. Frosted glass nav. Schedule Consultation sits as the primary action, Explore DIEP Flap under it. Hero carries three trust lines: Natural tissue, Muscle-sparing, Two surgeons every case. The rest of the site follows the procedure itself: Surgery, Gallery, Testimonials, FAQs, Locations, Resources. Kept their magenta. Soft colors, quieter type, spacing that does not feel like a waiting room.",
      },
      {
        id: "outcome",
        title: "Outcome",
        body: "Reads as specialty care when you land on it. Live at txdiepflap.vercel.app. Other practices can use it as a reference when they are tired of looking like a WordPress theme from ten years ago.",
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
