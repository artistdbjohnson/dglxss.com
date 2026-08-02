/**
 * Studio portfolio — web / SaaS / hardware product design.
 *
 * Tab labels:
 *   Work         → shipped projects (awaiting owner-provided entries)
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

/** Shipped work left empty until real projects are provided. */
export const PROJECTS: PortfolioProject[] = [
  {
    id: "dockproof-kit",
    name: "DockProof Kit",
    line: "Physical detention evidence kit — arrival window display.",
    kind: ["hardware", "product"],
    year: "2026",
    status: "in-progress",
    buildId: "dockproof-kit",
    sections: [
      {
        id: "status",
        title: "Status",
        body: "Prototyping. Design & source → first units → self-test → friend pilots → company pilot.",
      },
      {
        id: "focus",
        title: "Focus",
        body: "Offline-first documentation tool for owner-operators. No dock app required.",
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
