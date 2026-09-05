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
    name: "Reconstruction Associates",
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
        body: "The client needed a patient site that actually matched their practice. Multi-location DIEP flap work, natural-tissue reconstruction, the kind of surgery people sit with for months before they pick a surgeon. So I kept their voice and the tagline they already had, and I built the pages from scratch instead of polishing the old CMS.",
      },
      {
        id: "before",
        title: "Before",
        body: "We had stock photos cycling through a carousel, and a medical template that could have belonged to almost any clinic. A phone number fixed in the header strip. Pages that loaded at different speeds. Navigation that was functional but not doing much for first-time patients. It worked fine if you already knew the office, but it did not work if you were trying to decide whether to trust them.",
      },
      {
        id: "elevation",
        title: "What I built",
        body: "The rebuild opens on real photography, not stock. The frosted glass nav was added so the bar stays light and out of the way. Schedule Consultation sits as the primary action, and Explore DIEP Flap sits under it. Our hero now carries three trust lines: Natural tissue, Muscle-sparing, and two surgeons for every case. Then the rest of the site follows the procedure itself: Surgery, Gallery, Testimonials, FAQs, Locations, Resources. We kept their magenta. Soft colors, quieter type, and spacing that does not feel like a waiting room.",
      },
      {
        id: "outcome",
        title: "Outcome",
        body: "You get specialty care on first look. Live at txdiepflap.vercel.app. A clean reference for practices that want their site to carry the same weight as the work they do.",
      },
    ],
  },
  {
    id: "seanfalyon",
    name: "DJ Sean Falyon",
    line: "Full rebuild for a cultural curator and party rocker DJ. Be Everywhere.",
    kind: ["web"],
    year: "2026",
    status: "shipped",
    external: "https://seanfalyon.vercel.app/",
    original: "https://www.seanfalyon.com/",
    sections: [
      {
        id: "brief",
        title: "Brief",
        body: "The client needed a site that actually matched the rooms he builds. Sean Falyon, cultural curator and party rocker DJ, rooted in Black music, twenty-plus years across stages and cities. So I kept Be Everywhere and the booking path he already had, and I moved him off Wix onto a stack we could control.",
      },
      {
        id: "before",
        title: "Before",
        body: "We had a Wix site doing the job. Photo hero, gold type, lists of residencies and mixes, a Book Sean button up top. Fine if you already had him in the rotation. Less fine if you were a brand or a promoter landing cold and trying to feel the night.",
      },
      {
        id: "elevation",
        title: "What I built",
        body: "The rebuild opens on a black field and a 3D portrait, gold wordmark under it, and Book Sean as the main move. Then a ticker carries the lines he already uses: Cultural curator + party rocker DJ, Rooted in Black music, Be Everywhere. Nav is EPK, Mixes, Bulletin, Events, Shop. SoundCloud sits on the page, and HoneyBook handles the booking. The rest follows how he actually works: radio every Friday, residencies, live rooms, press kit.",
      },
      {
        id: "stack",
        title: "Stack",
        body: "Vite and React on the front. Tailwind for the system. Framer Motion on the motion. SoundCloud for the edits. HoneyBook for booking. Shop wired for merch. Deployed on Vercel.",
      },
      {
        id: "outcome",
        title: "Outcome",
        body: "You land on an artist site that is actually working. Live at seanfalyon.vercel.app. Built so a promoter can send it in a booking thread and not have to apologize for the page.",
      },
    ],
  },
  {
    id: "netjets",
    name: "NetJets",
    line: "Full rebuild for the pioneer of fractional private aviation. Restyle, not a rebrand.",
    kind: ["web"],
    year: "2026",
    status: "shipped",
    external: "https://netjets-rebuild.vercel.app/",
    original: "https://www.netjets.com/en-us/",
    sections: [
      {
        id: "brief",
        title: "Brief",
        body: "The brief was a restyle, not a rebrand. NetJets already had the lines. Pioneer of fractional ownership, Berkshire company, largest private fleet. So I kept their copy and the 877 number they already use, and I rebuilt the pages so the site feels like the product instead of a corporate homepage doing its best.",
      },
      {
        id: "before",
        title: "Before",
        body: "We had a dense marketing site doing the job. Claims stacked on claims, program tiles, a phone strip, and a lot of pages that read like a brochure. It worked fine if you already fly with them. It did not work as well if you were comparing programs and trying to see the cabin.",
      },
      {
        id: "elevation",
        title: "What I built",
        body: "The rebuild opens on a dark glass hero and a Global 7500 flyover. Then it keeps the home stack they already run. Pinnacle, cost transparency, new aircraft arriving in 2026, the luxury band, corporate travel, NetJets vs others, news, explore. Fleet pages carry the actual tails and cabin stills. Contact stays Request Information and the same phone number. Liquid glass plates instead of a template grid.",
      },
      {
        id: "stack",
        title: "Stack",
        body: "Next.js and React on the front. Tailwind for the system. Framer Motion on the motion. Three.js and React Three Fiber where the page needs depth. Instrument Serif and Barlow for type, Work Sans standing in for the wordmark. Hero video on the Global 7500. Deployed on Vercel.",
      },
      {
        id: "outcome",
        title: "Outcome",
        body: "You get the fleet on first look. Live at netjets-rebuild.vercel.app. A clean reference for a brand that already owns the category and still needs the homepage to look like it.",
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
