"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { HeroParticles } from "@/components/hero-particles";
import {
  KIND_LABEL,
  PORTFOLIO_TABS,
  projectsForTab,
  type PortfolioProject,
  type PortfolioTabId,
} from "@/lib/portfolio";

const BRAND = "what dreams may come true";
const STUDIO = "built by dglxss";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function LandingPage() {
  const [tab, setTab] = useState<PortfolioTabId>("work");
  const [openId, setOpenId] = useState<string | null>(null);

  const projects = useMemo(() => projectsForTab(tab), [tab]);
  const tabMeta = PORTFOLIO_TABS.find((t) => t.id === tab)!;

  useEffect(() => {
    setOpenId(projects[0]?.id ?? null);
  }, [tab, projects]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.style.scrollBehavior = "auto";
      document.documentElement.style.scrollSnapType = "none";
    }

    const hash = window.location.hash.replace("#", "");
    if (hash === "in-progress" || hash === "work") {
      setTab(hash);
      requestAnimationFrame(() => scrollToId("portfolio"));
    }
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Panel 1: Hero */}
      <section className="snap-panel relative w-full bg-black flex flex-col">
        <div className="absolute inset-0 z-0">
          <HeroParticles />
        </div>

        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: [
              "radial-gradient(ellipse 100% 95% at 50% 48%, transparent 42%, rgba(0,0,0,0.18) 78%, rgba(0,0,0,0.42) 100%)",
              "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, transparent 12%, transparent 88%, rgba(0,0,0,0.32) 100%)",
            ].join(", "),
          }}
        />

        <nav
          className="relative z-20 px-4 sm:px-6 lg:px-10 pt-[max(1.25rem,env(safe-area-inset-top))] sm:pt-6 shrink-0"
          aria-label="Primary"
        >
          <div className="liquid-glass-nav rounded-full px-3.5 sm:px-5 lg:px-6 py-2 sm:py-2.5 flex items-center justify-between max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto gap-3">
            <Link
              href="/about"
              className="flex items-center text-white shrink-0 min-h-11 pl-2.5 sm:pl-3 pr-1"
              aria-label="About dglxss"
            >
              <span
                className="text-[0.95rem] sm:text-base tracking-tight lowercase text-white/95"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                dglxss
              </span>
            </Link>
            <div className="flex items-center gap-0.5 sm:gap-1">
              {PORTFOLIO_TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setTab(t.id);
                    scrollToId("portfolio");
                  }}
                  className={`rounded-full px-3.5 sm:px-4 py-2 text-[0.8125rem] sm:text-sm font-medium min-h-10 inline-flex items-center transition-colors duration-200 ${
                    tab === t.id
                      ? "bg-white text-black shadow-[0_1px_0_rgba(255,255,255,0.35)_inset]"
                      : "text-white/70 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div
          id="hero"
          className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center"
        >
          <div className="flex flex-col items-center -translate-y-[4%] sm:-translate-y-[6%]">
            <h1
              className="hero-display hero-title hero-enter text-white lowercase max-w-[17ch] sm:max-w-[22ch] md:max-w-none"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              {BRAND}
            </h1>
            <p className="hero-sub hero-enter-delay text-[0.8125rem] sm:text-sm md:text-[0.9375rem] text-white/62 mt-5 md:mt-7 font-medium">
              {STUDIO}
            </p>
          </div>
        </div>
      </section>

      {/* Panel 2: Portfolio */}
      <section
        id="portfolio"
        className="snap-panel glass-field relative z-10 flex flex-col border-t border-white/[0.06]"
      >
        <div className="flex-1 min-h-0 flex flex-col max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full mx-auto px-4 sm:px-5 pt-4 sm:pt-5 pb-2">
          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Portfolio"
            className="liquid-glass-card rounded-full p-1 flex gap-1 mb-3 sm:mb-4 max-w-xs sm:max-w-sm mx-auto w-full shrink-0"
          >
            {PORTFOLIO_TABS.map((t) => {
              const active = tab === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={active}
                  aria-controls={`panel-${t.id}`}
                  onClick={() => setTab(t.id)}
                  className={`flex-1 rounded-full py-2 text-sm font-medium min-h-9 transition-colors duration-200 ${
                    active
                      ? "bg-white text-black shadow-[0_1px_0_rgba(255,255,255,0.35)_inset]"
                      : "text-white/55 hover:text-white"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Title - compact */}
          <div className="mb-3 text-center shrink-0">
            <p className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-white/40 mb-0.5">
              {tabMeta.eyebrow}
            </p>
            <h2
              className="text-xl sm:text-2xl text-white tracking-tight"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              {tabMeta.label}
            </h2>
          </div>

          {/* Cards */}
          <div
            role="tabpanel"
            id={`panel-${tab}`}
            aria-labelledby={`tab-${tab}`}
            className="flex-1 min-h-0 overflow-y-auto overscroll-contain scrollbar-none"
          >
            {projects.length === 0 ? (
              <div className="liquid-glass-card rounded-2xl px-5 py-8 text-center">
                <p
                  className="text-white/80 text-base tracking-tight lowercase mb-1.5"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                >
                  soon
                </p>
                <p className="text-white/55 text-sm leading-relaxed max-w-sm mx-auto">
                  {tabMeta.empty}
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-3 sm:gap-4 pb-1">
                {projects.map((project) => (
                  <ProjectBlock
                    key={project.id}
                    project={project}
                    open={openId === project.id}
                    onToggle={() =>
                      setOpenId((id) =>
                        id === project.id ? null : project.id,
                      )
                    }
                  />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <footer className="shrink-0 pt-2.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] border-t border-white/[0.06] mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-1.5 sm:gap-3">
              <p
                className="text-white/75 lowercase tracking-tight text-sm text-center sm:text-left"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                {BRAND}
              </p>
              <div className="flex justify-center">
                <Link
                  href="/clients"
                  className="text-white/40 text-sm tracking-wide hover:text-white/70 transition-colors"
                >
                  clients
                </Link>
              </div>
              <p className="text-white/40 text-sm tracking-wide text-center sm:text-right">
                {STUDIO}
              </p>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}

function ProjectBlock({
  project,
  open,
  onToggle,
}: {
  project: PortfolioProject;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      id={project.id}
      className={`liquid-glass-card rounded-2xl flex flex-col max-h-full ${
        open ? "ring-1 ring-white/15" : ""
      }`}
    >
      {/* Header - always visible */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full text-left px-4 sm:px-5 py-3.5 min-h-11 flex items-start gap-3 shrink-0"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-0.5">
            <h3 className="text-[0.95rem] sm:text-base font-semibold text-white tracking-tight">
              {project.name}
            </h3>
            <span className="text-white/42 text-[11px] tabular-nums tracking-wide">
              {project.year}
            </span>
            {project.status === "in-progress" && (
              <span className="liquid-glass rounded-full px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold text-white/80">
                In progress
              </span>
            )}
          </div>
          <p className="text-[12.5px] sm:text-[13px] text-white/55 leading-snug">
            {project.line}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.kind.map((k) => (
              <span
                key={k}
                className="liquid-glass rounded-full px-2 py-0.5 text-[10px] font-medium tracking-wide text-white/65"
              >
                {KIND_LABEL[k]}
              </span>
            ))}
          </div>
        </div>
        <ChevronDown
          size={16}
          className={`shrink-0 mt-0.5 text-white/40 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <>
          {/* Body scrolls inside card; actions stay pinned */}
          <div className="border-t border-white/[0.08] px-4 sm:px-5 pt-1 pb-2 space-y-3 overflow-y-auto overscroll-contain scrollbar-none max-h-[min(42vh,360px)]">
            {project.sections.map((section) => (
              <section
                key={section.id}
                id={`${project.id}-${section.id}`}
                className="pt-2.5"
              >
                <h4 className="text-[0.6rem] font-medium uppercase tracking-[0.15em] text-white/40 mb-1">
                  {section.title}
                </h4>
                <p className="text-[12.5px] sm:text-[13px] text-white/60 leading-relaxed">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          {/* Actions - always fully visible */}
          {(project.buildId || project.external || project.original) && (
            <div className="shrink-0 border-t border-white/[0.08] px-4 sm:px-5 py-3 flex flex-wrap items-center gap-2">
              {project.buildId ? (
                <>
                  <Link
                    href={`/builds/${project.buildId}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-3.5 py-2 text-[13px] font-medium min-h-9 hover:bg-white/90 transition-colors"
                  >
                    Open build
                    <ArrowUpRight size={14} />
                  </Link>
                  <Link
                    href={`/access#${project.buildId}`}
                    className="inline-flex items-center gap-1.5 rounded-full liquid-glass px-3.5 py-2 text-[13px] font-medium min-h-9 text-white/75 hover:text-white hover:bg-white/[0.06] transition-colors"
                    aria-label="Client materials"
                  >
                    Client materials
                    <ArrowUpRight size={14} />
                  </Link>
                </>
              ) : (
                <>
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-3.5 py-2 text-[13px] font-medium min-h-9 hover:bg-white/90 transition-colors"
                    >
                      View rebuild
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.original && (
                    <a
                      href={project.original}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full liquid-glass px-3.5 py-2 text-[13px] font-medium min-h-9 text-white/75 hover:text-white hover:bg-white/[0.06] transition-colors"
                    >
                      View original
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </>
              )}
            </div>
          )}
        </>
      )}
    </article>
  );
}
