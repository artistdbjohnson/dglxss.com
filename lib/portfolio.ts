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

export const KIND_LABEL: Record<ProjectKind, UiDict> = {
  web: UI.kindWeb,
  saas: UI.kindSaas,
  hardware: UI.kindHardware,
  product: UI.kindProduct,
};

export const PORTFOLIO_TABS = [
  {
    id: "work" as const,
    ...PORTFOLIO_TAB_COPY.work,
  },
  {
    id: "in-progress" as const,
    ...PORTFOLIO_TAB_COPY["in-progress"],
  },
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

export function sectionTitle(
  section: PortfolioProject["sections"][number],
  locale: Locale,
) {
  return pick(section.title, locale);
}

export function sectionBody(
  section: PortfolioProject["sections"][number],
  locale: Locale,
) {
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

export const PROJECTS: PortfolioProject[] = [

  {
    id: "aectm",
    name: "AECTM Castro Marim",
    line: {
      en: "Full multi-page restyle for a Portuguese public school cluster — quiet institutional craft, exact PT copy, EN twin.",
      pt: "Restyle multi-página completo para um agrupamento escolar público português — ofício institucional quieto, copy PT exacto, gémeo EN.",
    },
    kind: ["web"],
    year: "2026",
    status: "shipped",
    external: "https://aectm.vercel.app/",
    original: "https://aectm.pt/",
    sections: [
      {
        id: "brief",
        title: { en: "Brief", pt: "Brief" },
        body: {
          en: "Agrupamento de Escolas de Castro Marim needed a site parents and staff could trust — clear structure, calendars, documents, Erasmus, and news — without inventing school policy. Keep every Portuguese label and body from the live WordPress site. Give an English twin for chrome and key titles. Kill the generic blue preload bars.",
          pt: "O Agrupamento de Escolas de Castro Marim precisava de um site em que pais e staff confiassem — estrutura clara, calendários, documentos, Erasmus e notícias — sem inventar política escolar. Manter cada rótulo e corpo em português do WordPress vivo. Dar um gémeo em inglês para o chrome e títulos-chave. Matar as barras azuis genéricas de preload.",
        },
      },
      {
        id: "before",
        title: { en: "Before", pt: "Antes" },
        body: {
          en: "A dated CodeVibrant WordPress theme: mega-menu soup, a loud blue signal-bar splash, and years of news archive fighting for attention. The information was there — escolas, estrutura, alunos, ementas, contactos — but the surface felt like 2018 admin chrome, not a school community.",
          pt: "Um tema WordPress CodeVibrant datado: sopa de mega-menu, splash de barras azuis ruidosas, e anos de arquivo de notícias a disputar atenção. A informação estava lá — escolas, estrutura, alunos, ementas, contactos — mas a superfície parecia chrome de admin de 2018, não uma comunidade escolar.",
        },
      },
      {
        id: "elevation",
        title: { en: "What I built", pt: "O que construí" },
        body: {
          en: "A Motionsites aurora-onboard remap into an institutional welcome: staggered phases, tonal Inter surfaces, and a Motionsites quiet crest loader with thin progress — no blue bars. Theme and locale sit as one designed chrome cluster. The crest collapses into a sticky bar with section-aware underlines. News cards open a shared-layout reading panel with Comunidade / Avisos intent density. Exact PT transplant across structure, documents, students, activities, and contacts; EN twin for chrome. Footer: built by dglxss.",
          pt: "Um remap Motionsites aurora-onboard para um welcome institucional: fases em stagger, superfícies Inter tonais, e um loader quieto de brasão Motionsites com progresso fino — sem barras azuis. Tema e idioma num único cluster de chrome desenhado. O brasão colapsa numa barra sticky com underlines por secção. Os cards de notícias abrem um painel de leitura shared-layout com densidade Comunidade / Avisos. Transplante PT exacto em estrutura, documentos, alunos, atividades e contactos; gémeo EN no chrome. Footer: construído por dglxss.",
        },
      },
      {
        id: "stack",
        title: { en: "Stack", pt: "Stack" },
        body: {
          en: "Next.js and React. Tailwind for the system. Inter for type. Framer Motion for logo-collapse, section chrome, and the news reading panel. Live school photography and marks. Deployed on Vercel.",
          pt: "Next.js e React. Tailwind para o sistema. Inter na tipografia. Framer Motion para logo-collapse, chrome de secção e o painel de leitura de notícias. Fotografia e marcas da escola. Publicado na Vercel.",
        },
      },
      {
        id: "outcome",
        title: { en: "Outcome", pt: "Resultado" },
        body: {
          en: "A school-cluster site that reads like Castro Marim, not a WP theme — live at aectm.vercel.app.",
          pt: "Um site de agrupamento que se lê como Castro Marim, não como tema WP — live em aectm.vercel.app.",
        },
      },
    ],
  },
  {
    id: "luxury-home-remodeling",
    name: "Luxury Home Remodeling",
    line: {
      en: "Website redesign for a Bay Area luxury kitchen, bath, and whole-home remodeler — quiet editorial craft, exact marketing words.",
      pt: "Redesign do site para um remodelador de luxo de cozinhas, casas de banho e habitação na Bay Area — ofício editorial quieto, palavras de marketing exactas.",
    },
    kind: ["web"],
    year: "2026",
    status: "shipped",
    external: "https://luxury-home-remodeling.vercel.app/",
    original: "https://luxuryhomeremodeling.com/",
    sections: [
      {
        id: "brief",
        title: { en: "Brief", pt: "Brief" },
        body: {
          en: "Luxury Home Remodeling needed a site that matched their Bay Area craft — kitchen, bath, whole-home, pools, landscaping — without rewriting the phone, CSLB license, or the service blurbs they already publish. Restyle, not a rebrand. Keep every marketing line. Make the digital surface feel as quiet-luxury as the work.",
          pt: "A Luxury Home Remodeling precisava de um site à altura do ofício na Bay Area — cozinha, banho, habitação, piscinas, paisagismo — sem reescrever o telefone, a licença CSLB, ou os textos de serviço que já publicam. Restyle, não um rebrand. Manter cada linha de marketing. Fazer a superfície digital sentir-se tão quiet-luxury quanto o trabalho.",
        },
      },
      {
        id: "before",
        title: { en: "Before", pt: "Antes" },
        body: {
          en: "The live site sat on a WordPress theme with SEO-stuffed nav, placeholder portfolio labels (\"Luxury Bathroom – 1\"…), and generic award chrome. The craft offline did not match the digital. Contact and license were present — the hierarchy was not.",
          pt: "O site vivo estava num tema WordPress com navegação SEO-stuffed, labels de portfólio placeholder (\"Luxury Bathroom – 1\"…) e chrome genérico de prémios. O ofício offline não batia com o digital. Contacto e licença estavam lá — a hierarquia não.",
        },
      },
      {
        id: "elevation",
        title: { en: "What I built", pt: "O que construí" },
        body: {
          en: "A Produx.design craft freeze: dark-first editorial luxury, bronze accent, stacked manifesto hero, numbered services with quiet chips, and portfolio cards that keep their stub titles. Logo-collapse sticky nav and a provenance strip for CSLB #1044943, Angi, and Google reviews. Exact service and process copy. EN/PT and dark/light throughout. Footer: built by dglxss.",
          pt: "Um craft freeze Produx.design: luxo editorial dark-first, acento bronze, hero manifesto em stack, serviços numerados com chips quietos, e cards de portfólio que mantêm os títulos stub. Nav sticky com logo-collapse e uma faixa de proveniência para CSLB #1044943, Angi e Google reviews. Copy exacto de serviços e processo. EN/PT e dark/light em todo o site. Footer: construído por dglxss.",
        },
      },
      {
        id: "stack",
        title: { en: "Stack", pt: "Stack" },
        body: {
          en: "Next.js and React. Tailwind for the system. Instrument Serif and Inter for type. Their live photography. Framer Motion for quiet reveals. Deployed on Vercel.",
          pt: "Next.js e React. Tailwind para o sistema. Instrument Serif e Inter na tipografia. A fotografia que já tinham. Framer Motion para reveals quietos. Publicado na Vercel.",
        },
      },
      {
        id: "outcome",
        title: { en: "Outcome", pt: "Resultado" },
        body: {
          en: "A Bay Area remodeler site that reads like quiet luxury, not a theme — live at luxury-home-remodeling.vercel.app.",
          pt: "Um site de remodelação na Bay Area que se lê como quiet luxury, não como tema — live em luxury-home-remodeling.vercel.app.",
        },
      },
    ],
  },
  {
    id: "village-cascais",
    name: "The Village Cascais",
    line: {
      en: "Website redesign for a cowork, language, and workshop community in Pai do Vento, Cascais — bilingual, mobile-first, easy to join.",
      pt: "Redesign do site para uma comunidade de co-work, línguas e workshops no Pai do Vento, Cascais — bilingue, mobile-first, fácil de juntar.",
    },
    kind: ["web"],
    year: "2026",
    status: "shipped",
    external: "https://village-cascais-self.vercel.app/",
    original: "https://www.the-village.pt/",
    sections: [
      {
        id: "brief",
        title: { en: "Brief", pt: "Brief" },
        body: {
          en: "The Village needed a site that felt like the room — a Cascais community of desks, Portuguese classes, English support, and clubs — without rewriting their prices or their voice. Keep every euro they already publish. Make it readable on a phone. Give people a real way to get in touch.",
          pt: "The Village precisava de um site que parecesse a sala — uma comunidade em Cascais de secretárias, aulas de Português, apoio de Inglês e clubes — sem reescrever os preços nem a voz. Manter cada euro que já publicam. Ler-se bem no telemóvel. Dar um caminho real de contacto.",
        },
      },
      {
        id: "before",
        title: { en: "Before", pt: "Antes" },
        body: {
          en: "The live homepage is a dated one-page template. Co-work bands, language copy, and workshops are all there, but the hierarchy is soup. Contact chrome still prints placeholder phone and email. If you already know Rua de Santarém, you can find them. If you are choosing a desk in Cascais cold, the page does not help.",
          pt: "A homepage actual é um template de uma página datado. As faixas de co-work, o texto das línguas e os workshops estão lá, mas a hierarquia é sopa. O contacto ainda imprime telefone e email placeholder. Se já se conhece a Rua de Santarém, encontra-se. Se se está a escolher uma secretária em Cascais a frio, a página não ajuda.",
        },
      },
      {
        id: "elevation",
        title: { en: "What I built", pt: "O que construí" },
        body: {
          en: "A full-viewport community hero on their own collab film, then the real desk bands — €85 half-days, €125 full-day fixed, €55 private room, €15 day pass — with 5G, kitchenette, and VAT called out as they publish them. Portuguese classes and extracurricular English keep their wording and prices. Book Club, Art Club, and Stitch 'n' Bitch sit on their photographs. Contact is a form, not a fake 555 number. PT/EN and dark/light throughout. Footer: built by dglxss.",
          pt: "Um hero de comunidade em ecrã inteiro no filme de colaboração deles, depois as faixas reais de secretária — €85 meios dias, €125 dia inteiro fixo, €55 sala privada, €15 dia avulso — com 5G, copa e IVA como publicam. As aulas de Português e o Inglês extracurricular mantêm o texto e os preços. Book Club, Art Club e Stitch 'n' Bitch nas fotografias deles. O contacto é um formulário, não um 555 falso. PT/EN e dark/light em todo o site. Footer: construído por dglxss.",
        },
      },
      {
        id: "stack",
        title: { en: "Stack", pt: "Stack" },
        body: {
          en: "Next.js and React. Tailwind for the system. Inter for type. Their live photography and hero video. Deployed on Vercel.",
          pt: "Next.js e React. Tailwind para o sistema. Inter na tipografia. A fotografia e o vídeo hero que já tinham. Publicado na Vercel.",
        },
      },
      {
        id: "outcome",
        title: { en: "Outcome", pt: "Resultado" },
        body: {
          en: "A community site that reads like Cascais, not a template — live at village-cascais-self.vercel.app.",
          pt: "Um site de comunidade que se lê como Cascais, não como template — live em village-cascais-self.vercel.app.",
        },
      },
    ],
  },
  {
    id: "novo-freire",

    name: "Novo & Freire",
    line: {
      en: "Website redesign for a Clínica Médica e de Fisioterapia in São Pedro do Estoril — clean, mobile-first patient experience.",
      pt: "Redesign do site para uma Clínica Médica e de Fisioterapia em São Pedro do Estoril — experiência de paciente limpa e mobile-first.",
    },
    kind: ["web"],
    year: "2026",
    status: "shipped",
    external: "https://novo-freire.vercel.app/",
    original: "https://novoefreire.pai.pt/",
    sections: [
      {
        id: "brief",
        title: { en: "Brief", pt: "Brief" },
        body: {
          en: "Novo & Freire needed a patient site that felt like the clinic — calm, clear, easy on a phone — without changing their brand or rewriting their clinical copy. Keep every service name, phone, email, and Maps location exact. Elevate the presentation: hierarchy, type, photography, and contact paths.",
          pt: "A Novo & Freire precisava de um site de pacientes que parecesse a clínica — calmo, claro, fácil no telemóvel — sem mudar a marca nem reescrever o texto clínico. Manter cada nome de serviço, telefone, email e localização no Maps. Elevar a apresentação: hierarquia, tipografia, fotografia e caminhos de contacto.",
        },
      },
      {
        id: "before",
        title: { en: "Before", pt: "Antes" },
        body: {
          en: "The live site sat on a dated directory-style template. Crowded service banners, a favicon standing in as the logo, and clinical copy trapped in a layout that worked if you already knew the address — not if you were choosing a fisioterapia clinic cold.",
          pt: "O site vivo estava num template de diretório datado. Banners de serviços sobrecarregados, um favicon a fazer de logótipo, e o texto clínico preso num layout que funcionava se já se conhecia a morada — não se se estava a escolher uma clínica de fisioterapia de frio.",
        },
      },
      {
        id: "elevation",
        title: { en: "What I built", pt: "O que construí" },
        body: {
          en: "A quiet navy-and-cream interface with a clear Contacte-nos path into the same phone and email they already publish. Mission, clinical departments, and physiotherapy services keep their exact Portuguese wording. Custom wordmark, bilingual PT/EN, service detail modals, Maps and Facebook for social proof, and a photo gallery above contact. Footer: built by dglxss.",
          pt: "Uma interface quieta em navy e cream com um caminho claro de Contacte-nos para o mesmo telefone e email que já publicam. Missão, departamentos clínicos e serviços de fisioterapia mantêm o português exacto. Wordmark próprio, bilingue PT/EN, modais de serviço, Maps e Facebook como prova social, e uma galeria fotográfica acima do contacto. Footer: built by dglxss.",
        },
      },
      {
        id: "stack",
        title: { en: "Stack", pt: "Stack" },
        body: {
          en: "Next.js and React. Tailwind for the design system. Plus Jakarta Sans and Source Sans 3 for type. Custom clinical photography for heroes and services. Deployed on Vercel.",
          pt: "Next.js e React. Tailwind para o sistema. Plus Jakarta Sans e Source Sans 3. Fotografia clínica à medida para heroes e serviços. Publicado na Vercel.",
        },
      },
      {
        id: "outcome",
        title: { en: "Outcome", pt: "Resultado" },
        body: {
          en: "A clinic website that reads like care, not a template — live for patients at novo-freire.vercel.app.",
          pt: "Um site de clínica que se lê como cuidado, não como template — live para pacientes em novo-freire.vercel.app.",
        },
      },
    ],
  },
  {
    id: "netjets",
    name: "NetJets",
    line: {
      en: "Full rebuild for the pioneer of fractional private aviation. Restyle, not a rebrand.",
      pt: "Rebuild completo para o pioneiro da aviação privada fraccionada. Restyle, não um rebrand.",
    },
    kind: ["web"],
    year: "2026",
    status: "shipped",
    external: "https://netjets-rebuild.vercel.app/",
    original: "https://www.netjets.com/en-us/",
    sections: [
      {
        id: "brief",
        title: { en: "Brief", pt: "Brief" },
        body: {
          en: "The brief was a restyle, not a rebrand. NetJets already had the lines. Pioneer of fractional ownership, Berkshire company, largest private fleet. So I kept their copy and the 877 number they already use, and I rebuilt the pages so the site feels like the product instead of a corporate homepage doing its best.",
          pt: "O brief era um restyle, não um rebrand. A NetJets já tinha as linhas. Pioneira da propriedade fraccionada, empresa Berkshire, maior frota privada. Mantive o copy e o número 877 que já usam, e reconstruí as páginas para o site parecer o produto — em vez de uma homepage corporativa a fazer o melhor que pode.",
        },
      },
      {
        id: "before",
        title: { en: "Before", pt: "Antes" },
        body: {
          en: "We had a dense marketing site doing the job. Claims stacked on claims, program tiles, a phone strip, and a lot of pages that read like a brochure. It worked fine if you already fly with them. It did not work as well if you were comparing programs and trying to see the cabin.",
          pt: "Tínhamos um site de marketing denso a fazer o trabalho. Claims empilhados, mosaicos de programas, uma faixa de telefone, e muitas páginas a ler-se como um brochure. Funcionava bem se já se voava com eles. Funcionava pior se se estava a comparar programas e a tentar ver a cabine.",
        },
      },
      {
        id: "elevation",
        title: { en: "What I built", pt: "O que construí" },
        body: {
          en: "The rebuild opens on a dark glass hero and a Global 7500 flyover. Then it keeps the home stack they already run. Pinnacle, cost transparency, new aircraft arriving in 2026, the luxury band, corporate travel, NetJets vs others, news, explore. Fleet pages carry the actual tails and cabin stills. Contact stays Request Information and the same phone number. Liquid glass plates instead of a template grid.",
          pt: "O rebuild abre num hero de glass escuro e num overflight do Global 7500. Depois mantém o stack home que já correm. Pinnacle, transparência de custos, novas aeronaves em 2026, a banda de luxo, travel corporativo, NetJets vs outros, news, explore. As páginas de frota trazem as caudas reais e stills de cabine. Contacto mantém Request Information e o mesmo telefone. Placas de liquid glass em vez de uma grelha de template.",
        },
      },
      {
        id: "stack",
        title: { en: "Stack", pt: "Stack" },
        body: {
          en: "Next.js and React on the front. Tailwind for the system. Framer Motion on the motion. Three.js and React Three Fiber where the page needs depth. Instrument Serif and Barlow for type, Work Sans standing in for the wordmark. Hero video on the Global 7500. Deployed on Vercel.",
          pt: "Next.js e React no front. Tailwind para o sistema. Framer Motion no movimento. Three.js e React Three Fiber onde a página precisa de profundidade. Instrument Serif e Barlow na tipografia, Work Sans no wordmark. Vídeo hero do Global 7500. Publicado na Vercel.",
        },
      },
      {
        id: "outcome",
        title: { en: "Outcome", pt: "Resultado" },
        body: {
          en: "You get the fleet on first look. Live at netjets-rebuild.vercel.app. A clean reference for a brand that already owns the category and still needs the homepage to look like it.",
          pt: "A frota aparece à primeira vista. Live em netjets-rebuild.vercel.app. Uma referência limpa para uma marca que já domina a categoria e ainda precisa que a homepage o mostre.",
        },
      },
    ],
  },
  {
    id: "txdiepflap",
    name: "Reconstruction Associates",
    line: {
      en: "Full rebuild for Breast Reconstruction Associates, multi-location microsurgical practice.",
      pt: "Rebuild completo para a Breast Reconstruction Associates, prática microcirúrgica multi-localização.",
    },
    kind: ["web"],
    year: "2026",
    status: "shipped",
    external: "https://txdiepflap.vercel.app/",
    original: "https://txdiepflap.com/",
    sections: [
      {
        id: "brief",
        title: { en: "Brief", pt: "Brief" },
        body: {
          en: "The client needed a patient site that actually matched their practice. Multi-location DIEP flap work, natural-tissue reconstruction, the kind of surgery people sit with for months before they pick a surgeon. So I kept their voice and the tagline they already had, and I built the pages from scratch instead of polishing the old CMS.",
          pt: "O cliente precisava de um site de pacientes que correspondesse de verdade à prática. Trabalho DIEP flap em várias localizações, reconstrução com tecido natural — o tipo de cirurgia com que as pessoas convivem meses antes de escolher cirurgião. Mantive a voz e o tagline que já tinham, e construí as páginas de raiz em vez de polir o CMS antigo.",
        },
      },
      {
        id: "before",
        title: { en: "Before", pt: "Antes" },
        body: {
          en: "We had stock photos cycling through a carousel, and a medical template that could have belonged to almost any clinic. A phone number fixed in the header strip. Pages that loaded at different speeds. Navigation that was functional but not doing much for first-time patients. It worked fine if you already knew the office, but it did not work if you were trying to decide whether to trust them.",
          pt: "Tínhamos stock photos num carrossel, e um template médico que podia pertencer a quase qualquer clínica. Um telefone fixo na faixa do header. Páginas a carregar a ritmos diferentes. Navegação funcional, mas a fazer pouco pelos pacientes à primeira visita. Funcionava se já se conhecia o consultório — não se se estava a decidir se se podia confiar neles.",
        },
      },
      {
        id: "elevation",
        title: { en: "What I built", pt: "O que construí" },
        body: {
          en: "The rebuild opens on real photography, not stock. The frosted glass nav was added so the bar stays light and out of the way. Schedule Consultation sits as the primary action, and Explore DIEP Flap sits under it. Our hero now carries three trust lines: Natural tissue, Muscle-sparing, and two surgeons for every case. Then the rest of the site follows the procedure itself: Surgery, Gallery, Testimonials, FAQs, Locations, Resources. We kept their magenta. Soft colors, quieter type, and spacing that does not feel like a waiting room.",
          pt: "O rebuild abre com fotografia real, não stock. A nav em frosted glass mantém a barra leve e fora do caminho. Schedule Consultation é a ação primária; Explore DIEP Flap fica por baixo. O hero traz três linhas de confiança: Natural tissue, Muscle-sparing, e dois cirurgiões por caso. O resto do site segue o procedimento: Surgery, Gallery, Testimonials, FAQs, Locations, Resources. Mantivemos o magenta. Cores suaves, tipografia mais quieta, e espaçamento que não parece uma sala de espera.",
        },
      },
      {
        id: "outcome",
        title: { en: "Outcome", pt: "Resultado" },
        body: {
          en: "You get specialty care on first look. Live at txdiepflap.vercel.app. A clean reference for practices that want their site to carry the same weight as the work they do.",
          pt: "Cuidados de especialidade à primeira vista. Live em txdiepflap.vercel.app. Uma referência limpa para práticas que querem que o site tenha o mesmo peso do trabalho que fazem.",
        },
      },
    ],
  },
  {
    id: "seanfalyon",
    name: "DJ Sean Falyon",
    line: {
      en: "Full rebuild for a cultural curator and party rocker DJ. Be Everywhere.",
      pt: "Rebuild completo para um cultural curator e party rocker DJ. Be Everywhere.",
    },
    kind: ["web"],
    year: "2026",
    status: "shipped",
    external: "https://seanfalyon.vercel.app/",
    original: "https://www.seanfalyon.com/",
    sections: [
      {
        id: "brief",
        title: { en: "Brief", pt: "Brief" },
        body: {
          en: "The client needed a site that actually matched the rooms he builds. Sean Falyon, cultural curator and party rocker DJ, rooted in Black music, twenty-plus years across stages and cities. So I kept Be Everywhere and the booking path he already had, and I moved him off Wix onto a stack we could control.",
          pt: "O cliente precisava de um site que correspondesse às salas que constrói. Sean Falyon, cultural curator e party rocker DJ, enraizado na Black music, mais de vinte anos em palcos e cidades. Mantive Be Everywhere e o caminho de booking que já tinha, e tirei-o do Wix para um stack que controlamos.",
        },
      },
      {
        id: "before",
        title: { en: "Before", pt: "Antes" },
        body: {
          en: "We had a Wix site doing the job. Photo hero, gold type, lists of residencies and mixes, a Book Sean button up top. Fine if you already had him in the rotation. Less fine if you were a brand or a promoter landing cold and trying to feel the night.",
          pt: "Tínhamos um site Wix a fazer o trabalho. Hero fotográfico, tipografia dourada, listas de residencies e mixes, um botão Book Sean no topo. Bom se já o tinhas na rotação. Menos bom se eras uma marca ou um promoter a aterrar a frio e a tentar sentir a noite.",
        },
      },
      {
        id: "elevation",
        title: { en: "What I built", pt: "O que construí" },
        body: {
          en: "The rebuild opens on a black field and a 3D portrait, gold wordmark under it, and Book Sean as the main move. Then a ticker carries the lines he already uses: Cultural curator + party rocker DJ, Rooted in Black music, Be Everywhere. Nav is EPK, Mixes, Bulletin, Events, Shop. SoundCloud sits on the page, and HoneyBook handles the booking. The rest follows how he actually works: radio every Friday, residencies, live rooms, press kit.",
          pt: "O rebuild abre num campo preto e um retrato 3D, wordmark dourado por baixo, e Book Sean como ação principal. Depois um ticker traz as linhas que já usa: Cultural curator + party rocker DJ, Rooted in Black music, Be Everywhere. Nav: EPK, Mixes, Bulletin, Events, Shop. SoundCloud na página; HoneyBook trata do booking. O resto segue como ele trabalha: rádio à sexta, residencies, salas ao vivo, press kit.",
        },
      },
      {
        id: "stack",
        title: { en: "Stack", pt: "Stack" },
        body: {
          en: "Vite and React on the front. Tailwind for the system. Framer Motion on the motion. SoundCloud for the edits. HoneyBook for booking. Shop wired for merch. Deployed on Vercel.",
          pt: "Vite e React no front. Tailwind para o sistema. Framer Motion no movimento. SoundCloud para os edits. HoneyBook para booking. Shop ligado a merch. Publicado na Vercel.",
        },
      },
      {
        id: "outcome",
        title: { en: "Outcome", pt: "Resultado" },
        body: {
          en: "You land on an artist site that is actually working. Live at seanfalyon.vercel.app. Built so a promoter can send it in a booking thread and not have to apologize for the page.",
          pt: "Aterras num site de artista que está de facto a funcionar. Live em seanfalyon.vercel.app. Feito para um promoter poder enviar no thread de booking sem ter de pedir desculpa pela página.",
        },
      },
    ],
  },
  {
    id: "checkclock",
    name: "CheckClock",
    line: {
      en: "Physical detention evidence kit, check-in / check-out window display.",
      pt: "Kit físico de evidência de detenção, display de janela check-in / check-out.",
    },
    kind: ["hardware", "product"],
    year: "2026",
    status: "in-progress",
    buildId: "checkclock",
    sections: [
      {
        id: "status",
        title: { en: "Status", pt: "Estado" },
        body: {
          en: "Prototyping. Design & source -> first units -> self-test -> friend pilots -> company pilot.",
          pt: "Prototipagem. Design & source -> primeiras unidades -> self-test -> pilots com amigos -> pilot com empresa.",
        },
      },
      {
        id: "focus",
        title: { en: "Focus", pt: "Foco" },
        body: {
          en: "Answers the only two questions that matter at the dock: what time did you check in, and what time did you check out. Offline-first. No dock app required.",
          pt: "Responde às únicas duas perguntas que importam no cais: a que horas fez check-in, e a que horas fez check-out. Offline-first. Sem app no cais.",
        },
      },
      {
        id: "open",
        title: { en: "Open build", pt: "Build aberto" },
        body: {
          en: "Full brief, phases, and live tracker live in the build sandbox.",
          pt: "Brief completo, fases e tracker live no sandbox do build.",
        },
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
