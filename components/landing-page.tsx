"use client";

import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import Link from "next/link";
import { HeroParticles } from "@/components/hero-particles";
import { SiteNav } from "@/components/site-nav";
import { CaseStack } from "@/components/case-stack";
import { useLocale } from "@/lib/locale";
import { t, UI } from "@/lib/ui-strings";
import {
  PORTFOLIO_TABS,
  projectsForTab,
  tabEmpty,
  tabEyebrow,
  tabLabel,
  type PortfolioTabId,
} from "@/lib/portfolio";

export function LandingPage() {
  const { locale } = useLocale();
  const [tab, setTab] = useState<PortfolioTabId>("work");

  useEffect(() => {
    document.title = `${t(UI.brandLine, locale)} — ${t(UI.builtBy, locale)}`;
  }, [locale]);

  const projects = useMemo(() => projectsForTab(tab), [tab]);
  const tabMeta = PORTFOLIO_TABS.find((item) => item.id === tab)!;

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.style.scrollBehavior = "auto";
      document.documentElement.style.scrollSnapType = "none";
    }

    const hash = window.location.hash.replace("#", "");
    if (hash === "in-progress" || hash === "work") {
      setTab(hash);
    }
  }, []);

  const selectTab = (id: PortfolioTabId) => {
    setTab(id);
    const panel = document.getElementById("portfolio");
    if (panel) {
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (window.location.hash !== `#${id}`) {
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <div className="relative bg-black text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HeroParticles splitOnScroll />
      </div>

      <SiteNav tab={tab} onTab={selectTab} />

      <section className="snap-panel relative z-10 w-full flex flex-col">
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: [
              "radial-gradient(ellipse 100% 95% at 50% 48%, transparent 42%, rgba(0,0,0,0.18) 78%, rgba(0,0,0,0.42) 100%)",
              "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, transparent 12%, transparent 88%, rgba(0,0,0,0.32) 100%)",
            ].join(", "),
          }}
        />

        <div
          id="hero"
          className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-[var(--deck-top)] pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center"
        >
          <div className="flex flex-col items-center -translate-y-[4%] sm:-translate-y-[6%]">
            <h1
              className="hero-display hero-title hero-enter text-white lowercase max-w-[17ch] sm:max-w-[22ch] md:max-w-none"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              {t(UI.brandLine, locale)}
            </h1>
            <p className="hero-sub hero-enter-delay text-[0.8125rem] sm:text-sm md:text-[0.9375rem] text-white/62 mt-5 md:mt-7 font-medium">
              {t(UI.builtBy, locale)}
            </p>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="snap-panel snap-panel-loose relative z-10 flex flex-col border-t border-white/[0.06]"
        style={{
          background:
            "radial-gradient(ellipse 58% 86% at 50% 42%, rgba(5,5,5,0.5) 0%, rgba(5,5,5,0.18) 48%, transparent 72%)",
        }}
      >
        <div className="flex flex-col min-h-[100dvh] max-w-2xl lg:max-w-6xl xl:max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 lg:pt-10">
          <div className="mb-6 sm:mb-8 text-center shrink-0">
            <p className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-white/40 mb-1">
              {tabEyebrow(tabMeta, locale)}
            </p>
            <h2
              className="text-2xl sm:text-3xl text-white tracking-tight"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              {tabLabel(tabMeta, locale)}
            </h2>
          </div>

          <div
            role="tabpanel"
            id="portfolio-panel"
            aria-labelledby={`tab-${tab}`}
            className="shrink-0"
          >
            {projects.length === 0 ? (
              <div className="liquid-glass-card rounded-2xl px-5 py-10 text-center max-w-lg mx-auto">
                <p
                  className="text-white/80 text-base tracking-tight lowercase mb-1.5"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                >
                  {t(UI.soon, locale)}
                </p>
                <p className="text-white/55 text-sm leading-relaxed max-w-sm mx-auto">
                  {tabEmpty(tabMeta, locale)}
                </p>
              </div>
            ) : (
              <CaseStack projects={projects} />
            )}
          </div>

          <div className="flex-1 min-h-10" aria-hidden />

          <footer className="shrink-0 pt-8 pb-[max(1.5rem,env(safe-area-inset-bottom))] mt-6 border-t border-white/[0.06]">
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2 sm:gap-3">
              <p
                className="text-white/75 lowercase tracking-tight text-sm text-center sm:text-left"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                {t(UI.brandLine, locale)}
              </p>
              <div className="flex justify-center">
                <Link
                  href="/clients"
                  className="text-white/40 text-sm tracking-wide hover:text-white/70 transition-colors min-h-10 inline-flex items-center"
                >
                  {t(UI.clients, locale)}
                </Link>
              </div>
              <p className="text-white/40 text-sm tracking-wide text-center sm:text-right">
                {t(UI.builtBy, locale)}
              </p>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
