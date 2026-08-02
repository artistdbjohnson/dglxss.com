/**
 * Client go-live portal data — /clients
 * Website launch for clients who purchased a site.
 */

export type ManagedPlan = {
  id: string;
  name: string;
  price: number;
  blurb: string;
  features: string[];
  recommended?: boolean;
};

export type HostGuide = {
  id: string;
  label: string;
  portalUrl: string;
  portalLabel: string;
  steps: string[];
};

export type PortalStep = {
  id: string;
  title: string;
  short: string;
  director: string;
  body: string;
  actionLabel: string;
  hostPicker?: boolean;
  dns?: boolean;
  hostHelp?: boolean;
  plans?: boolean;
  contactForm?: boolean;
  accessOptions?: boolean;
  summary?: boolean;
  complete?: boolean;
};

export type PortalPath = {
  id: "self" | "managed";
  title: string;
  subtitle: string;
  badge: string;
  phaseLabel: string;
  steps: PortalStep[];
};

export const SUPPORT_EMAIL = "hello@dglxss.com";

export const DNS = {
  aRecord: "76.76.21.21",
  cname: "cname.vercel-dns.com",
};

export const MANAGED_PLANS: ManagedPlan[] = [
  {
    id: "care",
    name: "Care",
    price: 49,
    blurb: "Hosting, security updates, and small text changes.",
    features: ["Fast secure hosting", "SSL certificate", "Small copy updates", "Email support"],
  },
  {
    id: "steward",
    name: "Steward",
    price: 99,
    blurb: "Everything in Care, plus priority help and monthly improvements.",
    features: ["Everything in Care", "Priority support", "Monthly polish pass", "New page requests (reasonable)"],
    recommended: true,
  },
  {
    id: "partner",
    name: "Partner",
    price: 199,
    blurb: "Full partnership. We treat your site like our own.",
    features: ["Everything in Steward", "Faster turnaround", "Strategy check-ins", "Dedicated channel"],
  },
];

export const HOSTS: HostGuide[] = [
  {
    id: "godaddy",
    label: "GoDaddy",
    portalUrl: "https://dcc.godaddy.com/control/portfolio/",
    portalLabel: "Open GoDaddy",
    steps: [
      "Tap Open GoDaddy and sign in.",
      "Tap your website name (your domain).",
      "Tap DNS or Manage DNS.",
      "Find Type A (or @). Edit and paste the A value. Save.",
      "Find www (Type CNAME). Edit and paste the CNAME value. Save.",
      "Come back here and tap I saved the settings.",
    ],
  },
  {
    id: "bluehost",
    label: "Bluehost",
    portalUrl: "https://my.bluehost.com/",
    portalLabel: "Open Bluehost",
    steps: [
      "Tap Open Bluehost and sign in.",
      "Tap Domains.",
      "Tap your website name, then DNS.",
      "Find Type A (or @). Edit and paste the A value. Save.",
      "Find www. Edit and paste the CNAME value. Save.",
      "Come back here and tap I saved the settings.",
    ],
  },
  {
    id: "namecheap",
    label: "Namecheap",
    portalUrl: "https://ap.www.namecheap.com/domains/list/",
    portalLabel: "Open Namecheap",
    steps: [
      "Tap Open Namecheap and sign in.",
      "Tap Manage next to your website name.",
      "Tap Advanced DNS.",
      "Find Host @ (Type A). Edit and paste the A value. Save.",
      "Find Host www (Type CNAME). Edit and paste the CNAME value. Save All Changes.",
      "Come back here and tap I saved the settings.",
    ],
  },
  {
    id: "google",
    label: "Google Domains / Squarespace Domains",
    portalUrl: "https://account.squarespace.com/domains",
    portalLabel: "Open Squarespace Domains",
    steps: [
      "Tap Open Squarespace Domains and sign in.",
      "Tap your website name.",
      "Tap DNS or DNS settings.",
      "Edit the A row and paste the A value. Save.",
      "Edit the www row and paste the CNAME value. Save.",
      "Come back here and tap I saved the settings.",
    ],
  },
  {
    id: "cloudflare",
    label: "Cloudflare",
    portalUrl: "https://dash.cloudflare.com/",
    portalLabel: "Open Cloudflare",
    steps: [
      "Tap Open Cloudflare and sign in.",
      "Tap your website name.",
      "Tap DNS, then Records.",
      "Edit the A row and paste the A value. Save.",
      "Edit the www row and paste the CNAME value. Save.",
      "Come back here and tap I saved the settings.",
    ],
  },
  {
    id: "wordpress",
    label: "WordPress.com / WP Engine",
    portalUrl: "https://wordpress.com/domains/",
    portalLabel: "Open WordPress.com Domains",
    steps: [
      "Tap Open WordPress.com and sign in.",
      "Tap Domains, then your website name.",
      "Tap DNS records (or Manage DNS).",
      "Edit A and paste the A value. Edit www and paste the CNAME value. Save.",
      "Come back here and tap I saved the settings.",
    ],
  },
  {
    id: "other",
    label: "Other / I'm not sure",
    portalUrl: "",
    portalLabel: "",
    steps: [
      "Log into the company where you pay for your website name.",
      "Look for Domains, DNS, or Manage DNS.",
      "Paste the A value into the A (or @) row. Paste the CNAME value into the www row. Save.",
      "Stuck? Screenshot and email hello@dglxss.com.",
    ],
  },
];

export const PATHS: Record<"self" | "managed", PortalPath> = {
  self: {
    id: "self",
    title: "I'll use my current hosting",
    subtitle: "You keep GoDaddy, Bluehost, or whoever you already pay. We show you the exact clicks.",
    badge: "You stay in control",
    phaseLabel: "Self-host path",
    steps: [
      {
        id: "s1",
        title: "Confirm you can log in",
        short: "Log in check",
        director: "Open a new browser tab and log into where you manage your website or domain. Come back when you can see your account.",
        body: "You only need access to domain settings or website host.",
        actionLabel: "I can log in",
      },
      {
        id: "s2",
        title: "Tell us which host you use",
        short: "Your host",
        director: "Pick your company. Next we open the exact DNS screen for you.",
        body: "This unlocks one-click access to the right DNS page.",
        actionLabel: "Continue",
        hostPicker: true,
      },
      {
        id: "s3",
        title: "Copy your two DNS settings",
        short: "Copy settings",
        director: "Tap each Copy button. You will paste these into your host next.",
        body: "These two lines point your domain at the new website.",
        actionLabel: "I copied both",
        dns: true,
      },
      {
        id: "s4",
        title: "Paste them into your host",
        short: "Paste into host",
        director: "Use the Open button below to jump into your host. Follow the numbered steps — one at a time.",
        body: "We matched the steps to your host so you are not guessing.",
        actionLabel: "I saved the settings",
        hostHelp: true,
      },
      {
        id: "s5",
        title: "Wait for the green light",
        short: "Wait and check",
        director: "DNS can take 15–60 minutes. Open your domain in a private window. When you see the new site, mark complete.",
        body: "Old site for a while is normal.",
        actionLabel: "I see the new site — we're live!",
      },
    ],
  },
  managed: {
    id: "managed",
    title: "Have dglxss take care of everything",
    subtitle: "We host it on our systems, keep it secure, and maintain it. Simple monthly fee.",
    badge: "Recommended — hands-off",
    phaseLabel: "Managed by dglxss",
    steps: [
      {
        id: "m1",
        title: "Choose your monthly care plan",
        short: "Pick a plan",
        director: "Pick the plan that feels right. Steward is most common.",
        body: "All plans include hosting on our Vercel, security, and a real human.",
        actionLabel: "Continue with this plan",
        plans: true,
      },
      {
        id: "m2",
        title: "Tell us how to reach you",
        short: "Your details",
        director: "Enter email and domain. Double-check spelling.",
        body: "Used only to set up the site and send updates.",
        actionLabel: "Save my details",
        contactForm: true,
      },
      {
        id: "m3",
        title: "Share domain access",
        short: "Domain access",
        director: "Invite us to the domain account, or get simple DNS instructions instead.",
        body: "Domain always stays yours.",
        actionLabel: "I've decided how to share access",
        accessOptions: true,
      },
      {
        id: "m4",
        title: "Approve the hand-off",
        short: "Approve",
        director: "Review the summary. Approve and we deploy on our systems.",
        body: "You get an email when live for review.",
        actionLabel: "Approve — please take it from here",
        summary: true,
      },
      {
        id: "m5",
        title: "You're on monthly care",
        short: "You're set",
        director: "We handle hosting, updates, and stewardship.",
        body: "Welcome aboard.",
        actionLabel: "Finish",
        complete: true,
      },
    ],
  },
};
