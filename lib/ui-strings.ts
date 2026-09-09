import type { Locale } from "@/lib/locale";

export type UiDict = Record<Locale, string>;

export function t(dict: UiDict, locale: Locale): string {
  return dict[locale];
}

export const UI = {
  navAria: { en: "Primary", pt: "Principal" },
  aboutAria: { en: "About dglxss", pt: "Sobre dglxss" },
  portfolioAria: { en: "Portfolio", pt: "Portefólio" },
  langGroupAria: { en: "Select language", pt: "Selecionar idioma" },
  tabWork: { en: "Work", pt: "Trabalho" },
  tabInProgress: { en: "In Progress", pt: "Em curso" },
  eyebrowSelected: { en: "Selected", pt: "Selecionado" },
  eyebrowStudio: { en: "Studio", pt: "Estúdio" },
  emptyWork: {
    en: "Selected work coming soon.",
    pt: "Trabalho selecionado em breve.",
  },
  emptyInProgress: {
    en: "Nothing active right now.",
    pt: "Nada ativo de momento.",
  },
  soon: { en: "soon", pt: "em breve" },
  inProgressBadge: { en: "In progress", pt: "Em curso" },
  viewRebuild: { en: "View rebuild", pt: "Ver rebuild" },
  viewOriginal: { en: "View original", pt: "Ver original" },
  openLive: { en: "Open live", pt: "Abrir live" },
  original: { en: "Original", pt: "Original" },
  openBuild: { en: "Open build", pt: "Abrir build" },
  clientMaterials: { en: "Client materials", pt: "Materiais do cliente" },
  clientMaterialsAria: { en: "Client materials", pt: "Materiais do cliente" },
  collapseCard: { en: "Collapse card", pt: "Fechar cartão" },
  home: { en: "Home", pt: "Início" },
  clients: { en: "clients", pt: "clientes" },
  forClients: { en: "For clients", pt: "Para clientes" },
  loading: { en: "Loading…", pt: "A carregar…" },
  closeMaterials: { en: "Close materials", pt: "Fechar materiais" },
  close: { en: "Close", pt: "Fechar" },
  kindWeb: { en: "Web", pt: "Web" },
  kindSaas: { en: "SaaS", pt: "SaaS" },
  kindHardware: { en: "Hardware", pt: "Hardware" },
  kindProduct: { en: "Product", pt: "Produto" },
  aboutWordBuilder: { en: "builder", pt: "construtor" },
  aboutWordMaker: { en: "maker", pt: "criador" },
  aboutWordDreamer: { en: "dreamer", pt: "sonhador" },
  brandLine: {
    en: "what dreams may come true",
    pt: "onde os sonhos se fazem verdade",
  },
  builtBy: {
    en: "built by dglxss",
    pt: "feito por dglxss",
  },
} as const satisfies Record<string, UiDict>;

export const PORTFOLIO_TAB_COPY = {
  work: {
    label: UI.tabWork,
    eyebrow: UI.eyebrowSelected,
    empty: UI.emptyWork,
  },
  "in-progress": {
    label: UI.tabInProgress,
    eyebrow: UI.eyebrowStudio,
    empty: UI.emptyInProgress,
  },
} as const;
