/**
 * Studio portfolio - web / SaaS / hardware product design.
 *
 * Copy is bilingual: Localized { en, pt }. Default locale PT.
 */

import type { Localized, Locale } from "@/lib/locale";
import { pick } from "@/lib/locale";
import { PORTFOLIO_TAB_COPY, UI, t, type UiDict } from "@/lib/ui-strings";
import { RECENT_CASES } from "@/lib/recent-cases";
import { LEGACY_CASES } from "@/lib/legacy-cases";

export type ProjectKind = "web" | "saas" | "hardware" | "product";

export type PortfolioProject = {
  id: string;
  name: string;
  line: Localized;
  kind: ProjectKind[];
  year: string;
  status: "shipped" | "in-progress";
  buildId?: string;
  external?: string;
  original?: string;
  sections: {
    id: string;
    title: Localized;
    body: Localized;
  }[];
};

export const KIND_LABEL: Record<ProjectKind, UiDict> = {
  web: UI.kindWeb,
  saas: UI.kindSaas,
  hardware: UI.kindHardware,
  product: UI.kindProduct,
};

export const PORTFOLIO_TABS = [
  { id: "work" as const, ...PORTFOLIO_TAB_COPY.work },
  { id: "in-progress" as const, ...PORTFOLIO_TAB_COPY["in-progress"] },
] as const;

export type PortfolioTabId = (typeof PORTFOLIO_TABS)[number]["id"];

export function tabLabel(tab: (typeof PORTFOLIO_TABS)[number], locale: Locale) {
  return t(tab.label, locale);
}
export function tabEyebrow(tab: (typeof PORTFOLIO_TABS)[number], locale: Locale) {
  return t(tab.eyebrow, locale);
}
export function tabEmpty(tab: (typeof PORTFOLIO_TABS)[number], locale: Locale) {
  return t(tab.empty, locale);
}
export function projectLine(project: PortfolioProject, locale: Locale) {
  return pick(project.line, locale);
}
export function sectionTitle(section: PortfolioProject["sections"][number], locale: Locale) {
  return pick(section.title, locale);
}
export function sectionBody(section: PortfolioProject["sections"][number], locale: Locale) {
  return pick(section.body, locale);
}
export function projectSections(
  p: PortfolioProject,
  locale: Locale,
): { id: string; title: string; body: string }[] {
  return p.sections.map((s) => ({
    id: s.id,
    title: sectionTitle(s, locale),
    body: sectionBody(s, locale),
  }));
}

export const PROJECTS: PortfolioProject[] = [...RECENT_CASES, ...LEGACY_CASES];

export function projectsForTab(tab: PortfolioTabId): PortfolioProject[] {
  if (tab === "work") {
    return PROJECTS.filter((p) => p.status === "shipped");
  }
  return PROJECTS.filter((p) => p.status === "in-progress");
}
