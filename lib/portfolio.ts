/**
 * Studio portfolio - web / SaaS / hardware product design.
 *
 * Copy is bilingual: Localized { en, pt }. Default locale PT.
 */

import type { Localized, Locale } from "@/lib/locale";
import { pick } from "@/lib/locale";
import { PORTFOLIO_TAB_COPY, UI, t, type UiDict } from "@/lib/ui-strings";

export type ProjectKind = "web" | "saas" | "hardware" | "product";

export type PortfolioProject = {
  id: string;
  name: string;
  line: Localized;
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
    title: Localized;
    body: Localized;
  }[];
};
