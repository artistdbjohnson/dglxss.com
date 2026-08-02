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
  external?: string;
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
    sections: [
      {
        id: "brief",
        title: "Brief",
        body: "Bottom-up rebuild of the patient-facing site for a multi-location DIEP flap and natural-tissue breast reconstruction practice. Keep clinical authority and the core tagline. Replace a dated CMS template with a modern, conversion-focused experience that matches the quality of the surgery itself.",
      },
      {
        id: "before",
        title: "Before",
        body: "Stock-photo carousel, generic medical CMS layout, phone-number header strip, uneven content loading, and template-era navigation. Functional for staff. Weak as a brand asset for patients deciding where to trust their reconstruction.",
      },
      {
        id: "elevation",
        title: "Elevation",
        body: "Cinematic entry sequence with editorial photography. Frosted glass navigation. Clear hierarchy: Schedule Consultation as primary CTA, Explore DIEP Flap as secondary. Hero trust chips — Natural tissue, Muscle-sparing, Two surgeons every case. Procedure-led IA: Surgery, Gallery, Testimonials, FAQs, Locations, Resources. Soft clinical palette with the magenta brand mark retained. Typography and spacing tuned for calm confidence, not clinic noise.",
      },
      {
        id: "outcome",
        title: "Outcome",
        body: "An A-tier patient site that reads as premium specialty care on first glance. Live at txdiepflap.vercel.app. Built as a case study any practice can point to when they need to stop looking like a 2014 WordPress template.",
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
