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
    }

    const hash = window.location.hash.replace("#", "");
    if (hash === "in-progress" || hash === "work") {
      setTab(hash);
      requestAnimationFrame(() => scrollToId("portfolio"));
    }
  }, []);

  return (
    <div className="bg-black text-white">
      <section className="relative min-h-dvh h-dvh w-full bg-black overflow-hidden flex flex-col">
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

      <section
        id="portfolio"
        className="glass-field relative z-10 border-t border-white/[0.06] px-5 sm:px-6 lg:px-10 py-16 sm:py-20 md:py-28"
      >
        <div className="max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          <div
            role="tablist"
            aria-label="Portfolio"
            className="liquid-glass-card rounded-full p-1.5 flex gap-1 mb-10 sm:mb-12 max-w-sm sm:max-w-md mx-auto lg:max-w-lg"
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
                  className={`flex-1 rounded-full py-3 text-sm font-medium min-h-11 transition-colors duration-200 ${
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

          <div className="mb-8 sm:mb-10 lg:mb-12 text-center lg:text-left">
            <p className="text-[0.6875rem] sm:text-xs font-medium tracking-[0.2em] uppercase text-white/42 mb-2.5">
              {tabMeta.eyebrow}
            </p>
            <h2
              className="text-[1.75rem] sm:text-3xl lg:text-4xl text-white tracking-tight"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              {tabMeta.label}
            </h2>
          </div>

          <div
            role="tabpanel"
            id={`panel-${tab}`}
            aria-labelledby={`tab-${tab}`}
            className="space-y-3.5 sm:space-y-4"
          >
            {projects.length === 0 ? (
              <div className="liquid-glass-card rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-12 sm:py-14 text-center">
                <p
                  className="text-white/80 text-base sm:text-lg tracking-tight lowercase mb-2"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                >
                  soon
                </p>
                <p className="text-white/60 text-sm sm:text-[0.9375rem] leading-relaxed max-w-sm mx-auto">
                  {tabMeta.empty}
                </p>
              </div>
            ) : (
              projects.map((project) => (
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
              ))
            )}
          </div>
        </div>
      </section>

      <footer className="glass-field border-t border-white/[0.06] px-5 sm:px-6 lg:px-10 py-10 sm:py-12">
        <div className="max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p
            className="text-white/85 lowercase tracking-tight text-base sm:text-lg"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            {BRAND}
          </p>
          <div className="flex items-center gap-4 sm:gap-5">
            <Link
              href="/access"
              className="text-white/42 text-sm tracking-wide hover:text-white/70 transition-colors"
            >
              access
            </Link>
            <p className="text-white/42 text-sm tracking-wide">{STUDIO}</p>
          </div>
        </div>
      </footer>
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
      className={`liquid-glass-card rounded-2xl sm:rounded-[1.35rem] lg:rounded-3xl ${
        open ? "ring-1 ring-white/15" : ""
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full text-left px-5 sm:px-6 lg:px-8 py-5 lg:py-6 min-h-14 flex items-start gap-4"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 mb-1.5">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white tracking-tight">
              {project.name}
            </h3>
            <span className="text-white/42 text-xs tabular-nums tracking-wide">
              {project.year}
            </span>
            {project.status === "in-progress" && (
              <span className="liquid-glass rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold text-white/80">
                In progress
              </span>
            )}
          </div>
          <p className="text-sm lg:text-[0.95rem] text-white/60 leading-relaxed">
            {project.line}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {project.kind.map((k) => (
              <span
                key={k}
                className="liquid-glass rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide text-white/70"
              >
                {KIND_LABEL[k]}
              </span>
            ))}
          </div>
        </div>
        <ChevronDown
          size={18}
          className={`shrink-0 mt-1 text-white/40 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-white/[0.08] px-5 sm:px-6 lg:px-8 pb-6 lg:pb-8 pt-1 space-y-5">
          {project.sections.map((section) => (
            <section
              key={section.id}
              id={`${project.id}-${section.id}`}
              className="pt-4"
            >
              <h4 className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-white/42 mb-2">
                {section.title}
              </h4>
              <p className="text-sm lg:text-[0.95rem] text-white/60 leading-relaxed">
                {section.body}
              </p>
            </section>
          ))}

          {(project.buildId || project.external) && (
            <div className="pt-1 flex flex-wrap items-center gap-3">
              {project.buildId ? (
                <>
                  <Link
                    href={`/builds/${project.buildId}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium min-h-11 hover:bg-white/90 transition-colors"
                  >
                    Open build
                    <ArrowUpRight size={16} />
                  </Link>
                  <Link
                    href={`/access#${project.buildId}`}
                    className="inline-flex items-center gap-2 rounded-full liquid-glass px-5 py-2.5 text-sm font-medium min-h-11 text-white/75 hover:text-white hover:bg-white/[0.06] transition-colors"
                    aria-label="Client materials"
                  >
                    Client materials
                    <ArrowUpRight size={16} />
                  </Link>
                </>
              ) : (
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium min-h-11 hover:bg-white/90 transition-colors"
                >
                  Visit
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
