import type { PortfolioProject } from "@/lib/portfolio";

/**
 * Visual surfaces for existing portfolio cases only.
 * Palettes come from each case's published craft notes — not new case data.
 */
export type CaseSurface = {
  ink: string;
  paper: string;
  mist: string;
  motif: "garden" | "storm" | "stripe" | "canopy" | "blocks" | "aurora" | "bronze" | "warm" | "clinic" | "wing" | "soft" | "gold" | "dock" | "enamel" | "sage";
};

const SURFACES: Record<string, CaseSurface> = {
  "prime-six": {
    ink: "#DF5826",
    paper: "#0A0A0A",
    mist: "#F6F3EE",
    motif: "warm",
  },
  "franklin-plastic-surgery": {
    ink: "#A8946A",
    paper: "#1A1A1A",
    mist: "#F6F3EE",
    motif: "bronze",
  },
  "batley-carr-dental": {
    ink: "#8fbfb9",
    paper: "#141615",
    mist: "#f7f4ef",
    motif: "sage",
  },
  "boho-studios-medspa": {
    ink: "#a89d6a",
    paper: "#131313",
    mist: "#f6f3f3",
    motif: "warm",
  },
  "farmington-dental-ny": {
    ink: "#689ade",
    paper: "#07151f",
    mist: "#daedff",
    motif: "enamel",
  },
  "visconde-da-luz": {
    ink: "#c4a46a",
    paper: "#14261a",
    mist: "#e8dcc8",
    motif: "garden",
  },
  servpro: {
    ink: "#7dcea0",
    paper: "#063d28",
    mist: "#d9efe4",
    motif: "storm",
  },
  "roto-rooter": {
    ink: "#ff6b6b",
    paper: "#1a0a10",
    mist: "#f2c9c9",
    motif: "stripe",
  },
  "davey-tree": {
    ink: "#8fbf73",
    paper: "#102016",
    mist: "#dce8d4",
    motif: "canopy",
  },
  "budget-dumpster": {
    ink: "#f5c518",
    paper: "#1a1608",
    mist: "#fff3bf",
    motif: "blocks",
  },
  aectm: {
    ink: "#8eb4c8",
    paper: "#121820",
    mist: "#d7e4ec",
    motif: "aurora",
  },
  "luxury-home-remodeling": {
    ink: "#c4a36a",
    paper: "#12100c",
    mist: "#eadcc4",
    motif: "bronze",
  },
  "village-cascais": {
    ink: "#e0a06a",
    paper: "#1c1410",
    mist: "#f0d8c0",
    motif: "warm",
  },
  "novo-freire": {
    ink: "#c9b48a",
    paper: "#121826",
    mist: "#f3ead8",
    motif: "clinic",
  },
  netjets: {
    ink: "#c5cdd6",
    paper: "#0b1218",
    mist: "#e8eef4",
    motif: "wing",
  },
  txdiepflap: {
    ink: "#e07aa4",
    paper: "#1a1016",
    mist: "#f4e8ee",
    motif: "soft",
  },
  seanfalyon: {
    ink: "#ffd54a",
    paper: "#0c0c0c",
    mist: "#fff4c2",
    motif: "gold",
  },
  checkclock: {
    ink: "#d4a017",
    paper: "#161410",
    mist: "#f0e2b8",
    motif: "dock",
  },
};

const FALLBACK: CaseSurface = {
  ink: "#e8e8e8",
  paper: "#111111",
  mist: "#f2f2f2",
  motif: "wing",
};

export function surfaceFor(id: string): CaseSurface {
  return SURFACES[id] ?? FALLBACK;
}

export type MosaicSlot = {
  sectionId: string;
  placement: "left-top" | "left-bottom" | "hero";
};

export function mosaicSlots(project: PortfolioProject): MosaicSlot[] {
  const ids = project.sections.map((s) => s.id);
  const pick = (...wanted: string[]) =>
    wanted.find((id) => ids.includes(id)) ?? ids[0];

  if (project.id === "checkclock") {
    return [
      { sectionId: pick("status"), placement: "left-top" },
      { sectionId: pick("open"), placement: "left-bottom" },
      { sectionId: pick("focus"), placement: "hero" },
    ];
  }

  return [
    { sectionId: pick("before"), placement: "left-top" },
    { sectionId: pick("stack", "outcome"), placement: "left-bottom" },
    { sectionId: pick("elevation", "focus"), placement: "hero" },
  ];
}

export function hostLabel(url?: string): string | null {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function excerpt(body: string, max = 78): string {
  const clean = body.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max).replace(/\s+\S*$/, "")}…`;
}
