"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useLocale, type Locale } from "@/lib/locale";
import {
  KIND_LABEL,
  projectLine,
  sectionBody,
  sectionTitle,
  type PortfolioProject,
} from "@/lib/portfolio";
import { hostLabel, surfaceFor } from "@/lib/case-surfaces";
import { t, UI, type UiDict } from "@/lib/ui-strings";

const TAB_COPY: Record<string, UiDict> = {
  brief: UI.tabBrief,
  before: UI.tabBefore,
  elevation: UI.tabBuilt,
  focus: UI.tabBuilt,
  stack: UI.tabStack,
  outcome: UI.tabOutcome,
  open: UI.tabBuild,
  status: UI.tabStatus,
};

function tabName(
  section: PortfolioProject["sections"][number],
  locale: Locale,
): string {
  const copy = TAB_COPY[section.id];
  return copy ? t(copy, locale) : sectionTitle(section, locale);
}

export function CaseStack({ projects }: { projects: PortfolioProject[] }) {
  const { locale } = useLocale();
  const [openId, setOpenId] = useState<string | null>(null);

  if (projects.length === 0) return null;

  return (
    <div className="case-list">
      {projects.map((project) => (
        <CaseCard
          key={project.id}
          project={project}
          open={openId === project.id}
          onToggle={() =>
            setOpenId((id) => (id === project.id ? null : project.id))
          }
        />
      ))}
      <p className="sr-only">{t(UI.scanHint, locale)}</p>
    </div>
  );
}

function CaseCard({
  project,
  open,
  onToggle,
}: {
  project: PortfolioProject;
  open: boolean;
  onToggle: () => void;
}) {
  const { locale } = useLocale();
  const [activeId, setActiveId] = useState(project.sections[0]?.id ?? "");
  const surface = surfaceFor(project.id);
  const active =
    project.sections.find((s) => s.id === activeId) ?? project.sections[0];
  const live = hostLabel(project.external);

  useEffect(() => {
    if (!open) return;
    const el = document.getElementById(project.id);
    if (!el) return;
    const nav = document.querySelector(".site-nav-fixed");
    const navH = nav instanceof HTMLElement ? nav.offsetHeight : 80;
    const rect = el.getBoundingClientRect();
    if (rect.top < navH + 8 || rect.bottom > window.innerHeight - 8) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [open, project.id]);

  return (
    <article
      id={project.id}
      className={`case-card ${open ? "is-open" : ""}`}
      style={
        {
          "--case-ink": surface.ink,
          "--case-paper": surface.paper,
          "--case-mist": surface.mist,
        } as CSSProperties
      }
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 min-h-11 flex items-start gap-3 shrink-0"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-1">
            <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
              {project.name}
            </h3>
            <span className="text-white/42 text-[11px] tabular-nums tracking-wide">
              {project.year}
            </span>
            {project.status === "in-progress" && (
              <span className="rounded-full px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold text-white/80 bg-white/[0.06]">
                {t(UI.inProgressBadge, locale)}
              </span>
            )}
          </div>
          <p
            className={`text-[13px] sm:text-sm text-white/55 leading-relaxed ${
              open ? "line-clamp-2" : ""
            }`}
          >
            {projectLine(project, locale)}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.kind.map((k) => (
              <span
                key={k}
                className="rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-white/65 bg-white/[0.06]"
              >
                {t(KIND_LABEL[k], locale)}
              </span>
            ))}
          </div>
        </div>
        <ChevronDown
          size={16}
          className={`shrink-0 mt-1 text-white/40 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && active && (
        <div className="case-card-body">
          <div
            className="case-tabs"
            role="tablist"
            aria-label={t(UI.caseTabsAria, locale)}
          >
            {project.sections.map((section) => {
              const selected = section.id === activeId;
              return (
                <button
                  key={section.id}
                  type="button"
                  role="tab"
                  id={`${project.id}-tab-${section.id}`}
                  aria-selected={selected}
                  aria-controls={`${project.id}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(section.id)}
                  className={`case-tab ${selected ? "is-active" : ""}`}
                >
                  {tabName(section, locale)}
                </button>
              );
            })}
          </div>

          <div
            id={`${project.id}-panel`}
            role="tabpanel"
            aria-labelledby={`${project.id}-tab-${active.id}`}
            className="case-tab-panel"
            aria-live="polite"
          >
            <p>{sectionBody(active, locale)}</p>
          </div>

          {(project.buildId || project.external || project.original) && (
            <div className="case-card-actions">
              {project.buildId ? (
                <>
                  <Link
                    href={`/builds/${project.buildId}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-3.5 py-2 text-[12px] font-medium min-h-9 hover:bg-white/90 transition-colors"
                  >
                    {t(UI.openBuild, locale)}
                    <ArrowUpRight size={13} />
                  </Link>
                  <Link
                    href={`/access#${project.buildId}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3.5 py-2 text-[12px] font-medium min-h-9 text-white/75 hover:text-white hover:bg-white/[0.1] transition-colors"
                    aria-label={t(UI.clientMaterialsAria, locale)}
                  >
                    {t(UI.clientMaterials, locale)}
                    <ArrowUpRight size={13} />
                  </Link>
                </>
              ) : (
                <>
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-3.5 py-2 text-[12px] font-medium min-h-9 hover:bg-white/90 transition-colors"
                    >
                      {t(UI.viewRebuild, locale)}
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                  {project.original && (
                    <a
                      href={project.original}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3.5 py-2 text-[12px] font-medium min-h-9 text-white/75 hover:text-white hover:bg-white/[0.1] transition-colors"
                    >
                      {t(UI.viewOriginal, locale)}
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                  {live && (
                    <span className="text-white/32 text-[11px] tracking-wide">
                      {live}
                    </span>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
