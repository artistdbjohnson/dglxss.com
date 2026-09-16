import type { PortfolioProject } from "./portfolio";

export const RECENT_CASES: PortfolioProject[] = [
{
    id: "visconde-da-luz",
    name: "Visconde da Luz",
    line: {
      en: "Website redesign for a Cascais garden restaurant since 1976 — traditional Portuguese seafood, bilingual, reserve-ready.",
      pt: "Redesign do site de um restaurante de jardim em Cascais desde 1976 — marisco português tradicional, bilingue, pronto a reservar.",
    },
    kind: ["web"],
    year: "2026",
    status: "shipped",
    external: "https://visconde-da-luz.vercel.app/",
    original: "https://www.viscondedaluz.pt/",
    sections: [
      { id: "brief", title: { en: "Brief", pt: "Brief" }, body: {
        en: "Independent design study. Not affiliated with Restaurante Visconde da Luz. Keep A Alma da Tradição, the 1976 garden story, and every dish name they already publish. Make reserve and hours obvious on a phone.",
        pt: "Estudo de design independente. Sem afiliação com o Restaurante Visconde da Luz. Manter A Alma da Tradição, a história do jardim desde 1976, e todos os nomes de pratos que já publicam. Tornar a reserva e o horário óbvios no telemóvel.",
      }},
      { id: "before", title: { en: "Before", pt: "Antes" }, body: {
        en: "The live site runs on Páginas Amarelas template chrome — repeated hero slides, placeholder ementa captions, phone-and-email only. Heritage is strong; the digital path is thin.",
        pt: "O site vivo corre em chrome de template Páginas Amarelas — slides de hero repetidos, legendas de ementa placeholder, só telefone e email. A herança é forte; o caminho digital é fino.",
      }},
      { id: "elevation", title: { en: "What I built", pt: "O que construí" }, body: {
        en: "A Motionsites garden-curtain hero, place-card bilingual ementa, hours-aware reserve chrome, and exact contacts from Jardim Visconde da Luz. PT default with EN twin. Dark and light. Exact testimonials.",
        pt: "Um hero Motionsites com cortina de jardim, ementa bilingue em place-card, chrome de reserva consciente do horário, e contactos exactos do Jardim Visconde da Luz. PT por omissão com gémeo EN. Escuro e claro. Testemunhos exactos.",
      }},
      { id: "stack", title: { en: "Stack", pt: "Stack" }, body: {
        en: "React, Tailwind, Next.js on GitHub and Vercel. Craft from Motionsites mythic-naturecore with an Axiom innovation pass.",
        pt: "React, Tailwind, Next.js no GitHub e na Vercel. Ofício Motionsites mythic-naturecore com passe de inovação Axiom.",
      }},
      { id: "outcome", title: { en: "Outcome", pt: "Resultado" }, body: {
        en: "A Cascais garden restaurant pitch site live at visconde-da-luz.vercel.app.",
        pt: "Um site de pitch para o restaurante de jardim em Cascais — live em visconde-da-luz.vercel.app.",
      }},
    ],
  },
  {
    id: "servpro",
    name: "SERVPRO",
    line: {
      en: "Installable restoration PWA — exact public lines, their green, a phone-first path after a flood.",
      pt: "PWA instalável de restauro — linhas públicas exactas, o verde deles, um caminho no telemóvel depois de uma inundação.",
    },
    kind: ["web"],
    year: "2026",
    status: "shipped",
    external: "https://servpro-pwa.vercel.app/",
    original: "https://www.servpro.com/",
    sections: [
      { id: "brief", title: { en: "Brief", pt: "Brief" }, body: {
        en: "Independent design study. Not affiliated with SERVPRO. Keep the lines they already run — The #1 Choice in Cleanup and Restoration, Faster to Any Size Disaster — and the green they print. Make it something you can put on a home screen when the basement is wet.",
        pt: "Estudo de design independente. Sem afiliação com a SERVPRO. Manter as linhas que já correm — The #1 Choice in Cleanup and Restoration, Faster to Any Size Disaster — e o verde que imprimem. Fazer um sítio que se possa pôr no ecrã inicial quando a cave está molhada.",
      }},
      { id: "before", title: { en: "Before", pt: "Antes" }, body: {
        en: "The live marketing site is a national franchise machine. Franchise finder, insurance copy, industry tiles. It works if you already know to call SERVPRO. It is heavy if you are standing in water on a phone.",
        pt: "O site de marketing vivo é uma máquina nacional de franchising. Localizador de franchisados, texto de seguros, mosaicos de indústria. Funciona se já se sabe ligar à SERVPRO. É pesado se se está de pé na água com o telemóvel.",
      }},
      { id: "elevation", title: { en: "What I built", pt: "O que construí" }, body: {
        en: "A full-viewport restoration hero, liquid-glass nav, and their published service stack — water, fire, mold, storm — with the insurance-claim help they already describe. Installable. Home, services, book. Exact marketing strings. Their green.",
        pt: "Um hero de restauro em ecrã inteiro, nav em liquid-glass, e o stack de serviços que publicam — água, fogo, bolor, tempestade — com a ajuda ao seguro que já descrevem. Instalável. Home, serviços, booking. Strings de marketing exactas. O verde deles.",
      }},
      { id: "stack", title: { en: "Stack", pt: "Stack" }, body: {
        en: "Static HTML and CSS. Manifest and service worker so it installs. Deployed on Vercel.",
        pt: "HTML e CSS estáticos. Manifest e service worker para instalar. Publicado na Vercel.",
      }},
      { id: "outcome", title: { en: "Outcome", pt: "Resultado" }, body: {
        en: "A restoration PWA you can add to the home screen — live at servpro-pwa.vercel.app.",
        pt: "Uma PWA de restauro que se adiciona ao ecrã inicial — live em servpro-pwa.vercel.app.",
      }},
    ],
  },
  {
    id: "roto-rooter",
    name: "Roto-Rooter",
    line: {
      en: "Installable plumbing PWA — 90 years of public copy, their red, schedule on the phone.",
      pt: "PWA instalável de canalização — 90 anos de copy público, o vermelho deles, agendar no telemóvel.",
    },
    kind: ["web"],
    year: "2026",
    status: "shipped",
    external: "https://rotorooter-pwa.vercel.app/",
    original: "https://www.rotorooter.com/",
    sections: [
      { id: "brief", title: { en: "Brief", pt: "Brief" }, body: {
        en: "Independent design study. Not affiliated with Roto-Rooter. Keep The Plumbing Experts You've Trusted for Over 90 Years and the red they use on the truck. Give drains, water cleanup, and a schedule path that fits a phone.",
        pt: "Estudo de design independente. Sem afiliação com a Roto-Rooter. Manter The Plumbing Experts You've Trusted for Over 90 Years e o vermelho do camião. Dar desentupimentos, limpeza de água e um caminho de agenda que cabe no telemóvel.",
      }},
      { id: "before", title: { en: "Before", pt: "Antes" }, body: {
        en: "The live site is a national plumbing directory with a lot of franchise chrome. The history is there. The after-hours phone path is buried in marketing.",
        pt: "O site vivo é um directório nacional de canalização com muito chrome de franchise. A história está lá. O caminho de telefone fora de horas fica enterrado no marketing.",
      }},
      { id: "elevation", title: { en: "What I built", pt: "O que construí" }, body: {
        en: "A booking-first home, services, reviews, contact, and a mock schedule-to-pay flow so the path is visible. Exact public copy. Their red and navy. Installable.",
        pt: "Uma home a pensar no booking, serviços, reviews, contacto, e um fluxo mock de agenda até ao pagamento para o caminho se ver. Copy público exacto. Vermelho e navy deles. Instalável.",
      }},
      { id: "stack", title: { en: "Stack", pt: "Stack" }, body: {
        en: "Static HTML and CSS. Manifest and service worker. Deployed on Vercel.",
        pt: "HTML e CSS estáticos. Manifest e service worker. Publicado na Vercel.",
      }},
      { id: "outcome", title: { en: "Outcome", pt: "Resultado" }, body: {
        en: "A plumber PWA that reads like the truck, not a directory — live at rotorooter-pwa.vercel.app.",
        pt: "Uma PWA de canalizador que se lê como o camião, não como um directório — live em rotorooter-pwa.vercel.app.",
      }},
    ],
  },
  {
    id: "davey-tree",
    name: "Davey Tree",
    line: {
      en: "Installable tree-care PWA — 1880 copy, employee-owned since 1979, certified arborists.",
      pt: "PWA instalável de arboricultura — copy de 1880, propriedade dos trabalhadores desde 1979, arboristas certificados.",
    },
    kind: ["web"],
    year: "2026",
    status: "shipped",
    external: "https://davey-tree-pwa.vercel.app/",
    original: "https://www.davey.com/",
    sections: [
      { id: "brief", title: { en: "Brief", pt: "Brief" }, body: {
        en: "Independent design study. Not affiliated with The Davey Tree Expert Company. Keep Founded in 1880 and Employee-Owned Since 1979. Keep the certified-arborist claim they already publish. Make the consultation path readable on a phone.",
        pt: "Estudo de design independente. Sem afiliação com The Davey Tree Expert Company. Manter Founded in 1880 and Employee-Owned Since 1979. Manter a afirmação de arboristas certificados que já publicam. Fazer o caminho de consulta legível no telemóvel.",
      }},
      { id: "before", title: { en: "Before", pt: "Antes" }, body: {
        en: "The live site is a large corporate tree-care property. History and services are there. It reads like a company handbook more than a yard you can book from the driveway.",
        pt: "O site vivo é uma propriedade corporativa grande de cuidados com árvores. História e serviços estão lá. Lê-se mais como um manual de empresa do que um jardim que se reserva a partir do passeio.",
      }},
      { id: "elevation", title: { en: "What I built", pt: "O que construí" }, body: {
        en: "A nature-first hero on their forest green, services and crew, careers, and a mock consultation form. Exact public copy. Installable. No real booking behind the form.",
        pt: "Um hero a pensar na natureza no verde-floresta deles, serviços e equipa, carreiras, e um formulário mock de consulta. Copy público exacto. Instalável. Sem booking real por detrás do formulário.",
      }},
      { id: "stack", title: { en: "Stack", pt: "Stack" }, body: {
        en: "Static HTML and CSS. Manifest and service worker. Deployed on Vercel.",
        pt: "HTML e CSS estáticos. Manifest e service worker. Publicado na Vercel.",
      }},
      { id: "outcome", title: { en: "Outcome", pt: "Resultado" }, body: {
        en: "A tree-care PWA that keeps the 1880 line and fits a phone — live at davey-tree-pwa.vercel.app.",
        pt: "Uma PWA de arboricultura que mantém a linha de 1880 e cabe no telemóvel — live em davey-tree-pwa.vercel.app.",
      }},
    ],
  },
  {
    id: "budget-dumpster",
    name: "Budget Dumpster",
    line: {
      en: "Installable dumpster-rental PWA — their sizes, their yellow, a calculator you can use on site.",
      pt: "PWA instalável de aluguer de dumpsters — os tamanhos deles, o amarelo, uma calculadora utilizável no terreno.",
    },
    kind: ["web"],
    year: "2026",
    status: "shipped",
    external: "https://budgetdumpster-pwa.vercel.app/",
    original: "https://www.budgetdumpster.com/",
    sections: [
      { id: "brief", title: { en: "Brief", pt: "Brief" }, body: {
        en: "Independent design study. Not affiliated with Budget Dumpster. Keep Affordable dumpster rentals. Service you can depend on. Keep the published sizes and the four rental steps. Put the estimator where a phone can reach it.",
        pt: "Estudo de design independente. Sem afiliação com a Budget Dumpster. Manter Affordable dumpster rentals. Service you can depend on. Manter os tamanhos publicados e os quatro passos de aluguer. Pôr o estimador onde o telemóvel chega.",
      }},
      { id: "before", title: { en: "Before", pt: "Antes" }, body: {
        en: "The live site is a lead-gen rental funnel with a lot of SEO around it. The sizes are the product. They were easy to lose in the articles.",
        pt: "O site vivo é um funil de aluguer com muito SEO à volta. Os tamanhos são o produto. Era fácil perdê-los nos artigos.",
      }},
      { id: "elevation", title: { en: "What I built", pt: "O que construí" }, body: {
        en: "A split estimator on their yellow, the size cards, the four steps, and a mock cart-to-pay path. Exact public copy. Installable.",
        pt: "Um estimador em split no amarelo deles, os cards de tamanho, os quatro passos, e um caminho mock do carrinho ao pagamento. Copy público exacto. Instalável.",
      }},
      { id: "stack", title: { en: "Stack", pt: "Stack" }, body: {
        en: "Static HTML and CSS. Manifest and service worker. Deployed on Vercel.",
        pt: "HTML e CSS estáticos. Manifest e service worker. Publicado na Vercel.",
      }},
      { id: "outcome", title: { en: "Outcome", pt: "Resultado" }, body: {
        en: "A dumpster PWA that leads with the sizes — live at budgetdumpster-pwa.vercel.app.",
        pt: "Uma PWA de dumpsters que começa pelos tamanhos — live em budgetdumpster-pwa.vercel.app.",
      }},
    ],
  },
];
