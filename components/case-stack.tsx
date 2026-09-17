"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { useLocale } from "@/lib/locale";
import {
  KIND_LABEL,
  projectLine,
  sectionBody,
  sectionTitle,
  type PortfolioProject,
} from "@/lib/portfolio";
import {
  excerpt,
  hostLabel,
  mosaicSlots,
  surfaceFor,
  type MosaicSlot,
} from "@/lib/case-surfaces";
import { t, UI } from "@/lib/ui-strings";

export function CaseStack({ projects }: { projects: PortfolioProject[] }) {
  const { locale } = useLocale();
  const [openId, setOpenId] = useState<string | null>(null);

  if (projects.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 sm:gap-5">
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
  const slots = useMemo(() => mosaicSlots(project), [project]);
  const defaultSlot =
    slots.find((s) => s.placement === "hero") ?? slots[0];
  const [activeId, setActiveId] = useState(defaultSlot.sectionId);
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
    if (rect.top < navH + 8 || rect.bottom > window.innerHeight) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [open, project.id]);

  return (
    <article
      id={project.id}
      className={`case-card liquid-glass-card rounded-2xl flex flex-col ${
        open ? "ring-1 ring-white/15" : ""
      }`}
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
              <span className="liquid-glass rounded-full px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold text-white/80">
                {t(UI.inProgressBadge, locale)}
              </span>
            )}
          </div>
          <p className="text-[13px] sm:text-sm text-white/55 leading-relaxed">
            {projectLine(project, locale)}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.kind.map((k) => (
              <span
                key={k}
                className="liquid-glass rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-white/65"
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

      {open && (
        <>
          <div className="px-5 sm:px-6 pt-1 pb-4">
            <CaseMosaic
              project={project}
              slots={slots}
              activeId={activeId}
              onSelect={setActiveId}
            />

            <div className="case-read mt-4" aria-live="polite">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.15em] text-white/40 mb-1.5">
                {sectionTitle(active, locale)}
              </p>
              <p className="text-[13px] sm:text-sm text-white/68 leading-relaxed">
                {sectionBody(active, locale)}
              </p>
            </div>

            <NestedNoteDeck
              project={project}
              activeId={activeId}
              onSelect={setActiveId}
            />

            {(project.buildId || project.external || project.original) && (
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {project.buildId ? (
                  <>
                    <Link
                      href={`/builds/${project.buildId}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-4 py-2.5 text-[13px] font-medium min-h-10 hover:bg-white/90 transition-colors"
                    >
                      {t(UI.openBuild, locale)}
                      <ArrowUpRight size={14} />
                    </Link>
                    <Link
                      href={`/access#${project.buildId}`}
                      className="inline-flex items-center gap-1.5 rounded-full liquid-glass px-4 py-2.5 text-[13px] font-medium min-h-10 text-white/75 hover:text-white hover:bg-white/[0.06] transition-colors"
                      aria-label={t(UI.clientMaterialsAria, locale)}
                    >
                      {t(UI.clientMaterials, locale)}
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
                        className="inline-flex items-center gap-1.5 rounded-full bg-white text-black px-4 py-2.5 text-[13px] font-medium min-h-10 hover:bg-white/90 transition-colors"
                      >
                        {t(UI.viewRebuild, locale)}
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                    {project.original && (
                      <a
                        href={project.original}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full liquid-glass px-4 py-2.5 text-[13px] font-medium min-h-10 text-white/75 hover:text-white hover:bg-white/[0.06] transition-colors"
                      >
                        {t(UI.viewOriginal, locale)}
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                    {live && (
                      <span className="text-white/32 text-[11px] tracking-wide ml-1">
                        {live}
                      </span>
                    )}
                  </>
                )}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={onToggle}
            aria-label={t(UI.collapseCard, locale)}
            className="w-full flex items-center justify-center pb-3.5 pt-1 min-h-10 text-white/40 hover:text-white/70 transition-colors"
          >
            <ChevronUp size={16} strokeWidth={2} />
          </button>
        </>
      )}
    </article>
  );
}

function CaseMosaic({
  project,
  slots,
  activeId,
  onSelect,
}: {
  project: PortfolioProject;
  slots: MosaicSlot[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const { locale } = useLocale();
  const leftTop = slots.find((s) => s.placement === "left-top");
  const leftBottom = slots.find((s) => s.placement === "left-bottom");
  const hero = slots.find((s) => s.placement === "hero");

  return (
    <div
      className="case-mosaic"
      role="group"
      aria-label={t(UI.mosaicAria, locale)}
    >
      <div className="case-mosaic-col">
        {leftTop && (
          <MosaicTile
            project={project}
            slot={leftTop}
            active={activeId === leftTop.sectionId}
            onSelect={onSelect}
          />
        )}
        {leftBottom && (
          <MosaicTile
            project={project}
            slot={leftBottom}
            active={activeId === leftBottom.sectionId}
            onSelect={onSelect}
          />
        )}
      </div>
      {hero && (
        <MosaicTile
          project={project}
          slot={hero}
          active={activeId === hero.sectionId}
          onSelect={onSelect}
          tall
        />
      )}
    </div>
  );
}

function MosaicTile({
  project,
  slot,
  active,
  onSelect,
  tall = false,
}: {
  project: PortfolioProject;
  slot: MosaicSlot;
  active: boolean;
  onSelect: (id: string) => void;
  tall?: boolean;
}) {
  const { locale } = useLocale();
  const section = project.sections.find((s) => s.id === slot.sectionId);
  if (!section) return null;
  const surface = surfaceFor(project.id);
  const live = slot.sectionId === "outcome" || slot.sectionId === "open";

  return (
    <button
      type="button"
      onClick={() => onSelect(slot.sectionId)}
      aria-pressed={active}
      className={`mosaic-tile mosaic-${surface.motif} ${tall ? "mosaic-tile-tall" : ""} ${
        active ? "is-active" : ""
      }`}
    >
      <span className="mosaic-tile-label">
        {live && project.external
          ? t(UI.livePlate, locale)
          : sectionTitle(section, locale)}
      </span>
      {tall ? (
        <span className="mosaic-tile-name">{project.name}</span>
      ) : null}
      <span className="mosaic-tile-excerpt">
        {excerpt(sectionBody(section, locale), tall ? 110 : 64)}
      </span>
    </button>
  );
}

function NestedNoteDeck({
  project,
  activeId,
  onSelect,
}: {
  project: PortfolioProject;
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const { locale } = useLocale();
  const notes = project.sections;

  return (
    <div
      className="note-deck"
      role="listbox"
      aria-label={t(UI.nestedDeckAria, locale)}
      aria-activedescendant={`${project.id}-note-${activeId}`}
    >
      {notes.map((section, i) => {
        const active = section.id === activeId;
        return (
          <button
            key={section.id}
            id={`${project.id}-note-${section.id}`}
            type="button"
            role="option"
            aria-selected={active}
            onClick={() => onSelect(section.id)}
            className={`note-slat ${active ? "is-active" : ""}`}
            style={
              {
                "--slat-i": i,
                "--slat-z": notes.length - i,
                "--slat-scale": active ? 1 : 1 - (notes.length - 1 - i) * 0.012,
              } as CSSProperties
            }
          >
            <span className="note-slat-title">
              {sectionTitle(section, locale)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
