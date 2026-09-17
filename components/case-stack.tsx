"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
  indexLabel,
  mosaicSlots,
  surfaceFor,
  type MosaicSlot,
} from "@/lib/case-surfaces";
import { t, UI } from "@/lib/ui-strings";

export function CaseStack({ projects }: { projects: PortfolioProject[] }) {
  const { locale } = useLocale();

  if (projects.length === 0) return null;

  return (
    <div className="case-deck">
      {projects.map((project, index) => (
        <CaseCard
          key={project.id}
          project={project}
          index={index}
          total={projects.length}
        />
      ))}
      <p className="sr-only">{t(UI.scanHint, locale)}</p>
    </div>
  );
}

function CaseCard({
  project,
  index,
  total,
}: {
  project: PortfolioProject;
  index: number;
  total: number;
}) {
  const { locale } = useLocale();
  const slots = useMemo(() => mosaicSlots(project), [project]);
  const defaultSlot =
    slots.find((s) => s.placement === "hero") ?? slots[0];
  const [activeId, setActiveId] = useState(defaultSlot.sectionId);
  const surface = surfaceFor(project.id);
  const scale = 1 - (total - 1 - index) * 0.012;
  const active =
    project.sections.find((s) => s.id === activeId) ?? project.sections[0];
  const live = hostLabel(project.external);

  return (
    <article
      id={project.id}
      className="case-deck-item"
      style={
        {
          "--i": index,
          "--z": index + 1,
          "--deck-scale": scale,
          "--case-ink": surface.ink,
          "--case-paper": surface.paper,
          "--case-mist": surface.mist,
        } as CSSProperties
      }
    >
      <div className="case-deck-card">
        <header className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-3 sm:gap-4 min-w-0">
            <span
              className="case-index shrink-0 leading-none text-white/28"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              aria-hidden
            >
              {indexLabel(index)}
            </span>
            <div className="min-w-0 pt-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
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
              <p className="text-[13px] sm:text-sm text-white/58 leading-relaxed mt-1.5">
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
          </div>
        </header>

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
            <span className="note-slat-index" aria-hidden>
              {indexLabel(i)}
            </span>
            <span className="note-slat-title">
              {sectionTitle(section, locale)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
