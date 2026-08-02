/**
 * Studio portfolio — web / SaaS / hardware product design.
 *
 * Tab labels:
 *   Work         → shipped projects
 *   In Progress  → active builds
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
    line: "Full rebuild for Breast Reconstruction Associates — multi-location microsurgical practice.",
    kind: ["web"],
    year: "2026",
    status: "shipped",
    external: "https://txdiepflap.vercel.app/",
    original: "https://txdiepflap.com/",
    sections: [
      {
        id: "brief",
        title: "Brief",
        body: "Client needed a patient site that actually matched the surgery. Multi-location DIEP flap and natural-tissue reconstruction practice. I kept their clinical voice and the core tagline, threw out the old CMS template, and built the whole thing from the ground up so it feels as deliberate as the work they do.",
      },
      {
        id: "before",
        title: "Before",
        body: "Stock photos in a carousel. Generic medical template. Phone number stuck in a header strip. Pages loading unevenly. Nav that belonged to 2014. Fine if you already worked there. Not fine if you were a patient trying to decide whether to trust them with reconstruction.",
      },
      {
        id: "elevation",
        title: "What I built",
        body: "Cinematic open with real editorial photography. Frosted glass nav. Schedule Consultation as the main move, Explore DIEP Flap second. Trust chips on the hero — Natural tissue, Muscle-sparing, Two surgeons every case. Structure follows the procedure: Surgery, Gallery, Testimonials, FAQs, Locations, Resources. Kept their magenta mark. Soft palette, quiet type, spacing that reads calm instead of clinic-busy.",
      },
      {
        id: "outcome",
        title: "Outcome",
        body: "Site that lands as specialty care on first look. Live at txdiepflap.vercel.app. Built so other practices can point at it when they are ready to stop looking like a WordPress theme from a decade ago.",
      },
    ],
  },
  {
    id: "checkclock",
    name: "CheckClock",
    line: "Physical detention evidence kit — check-in / check-out window display.",
    kind: ["hardware", "product"],
    year: "2026",
    status: "in-progress",
    buildId: "checkclock",
    sections: [
      {
        id: "status",
        title: "Status",
        body: "Prototyping. Design & source → first units → self-test → friend pilots → company pilot.",
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
