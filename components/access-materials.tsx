"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { AboutParticles } from "@/components/about-particles";
import { GO_LIVE_BUILDS, type GoLiveBuild } from "@/lib/go-live";

function resolveBuild(hash: string): GoLiveBuild {
  const id = hash.replace("#", "");
  return GO_LIVE_BUILDS.find((b) => b.id === id) ?? GO_LIVE_BUILDS[0];
}

export function AccessMaterials() {
  const router = useRouter();
  const [build, setBuild] = useState<GoLiveBuild>(GO_LIVE_BUILDS[0]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const apply = () => setBuild(resolveBuild(window.location.hash));
    apply();
    setReady(true);
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const close = useCallback(() => {
    router.push("/#in-progress");
  }, [router]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  // Lock body scroll while modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const phases = useMemo(() => build.phases, [build]);

  if (!ready) {
    return (
      <div className="min-h-dvh bg-black flex items-center justify-center">
        <p className="text-white/40 text-sm">Loading…</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-dvh w-full bg-black text-white">
      {/* Backdrop particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AboutParticles />
      </div>
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 95% 90% at 50% 42%, transparent 36%, rgba(0,0,0,0.45) 100%)",
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 18%, transparent 70%, rgba(0,0,0,0.5) 100%)",
          ].join(", "),
        }}
      />

      {/* Clickable backdrop — closes modal */}
      <button
        type="button"
        aria-label="Close materials"
        onClick={close}
        className="fixed inset-0 z-10 cursor-default"
      />

      {/* Centered modal shell */}
      <div className="fixed inset-0 z-20 flex items-center justify-center p-3 sm:p-5 md:p-8 pointer-events-none">
        <article
          role="dialog"
          aria-modal="true"
          aria-labelledby="access-title"
          onClick={(e) => e.stopPropagation()}
          className="pointer-events-auto w-full max-w-2xl lg:max-w-3xl max-h-[min(92dvh,880px)] flex flex-col liquid-glass-card rounded-2xl sm:rounded-[1.35rem] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
        >
          {/* Sticky header */}
          <header className="shrink-0 px-4 sm:px-6 pt-4 sm:pt-5 pb-3.5 sm:pb-4 border-b border-white/[0.08] flex items-start gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                <h1
                  id="access-title"
                  className="text-lg sm:text-xl tracking-tight text-white"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                >
                  {build.name}
                </h1>
                <span className="text-white/40 text-xs tabular-nums">{build.year}</span>
                <span className="liquid-glass rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold text-white/75">
                  {build.status}
                </span>
              </div>
              <p className="text-[13px] sm:text-sm text-white/55 leading-snug line-clamp-2">
                {build.line}
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="shrink-0 liquid-glass rounded-full p-2.5 text-white/60 hover:text-white hover:bg-white/[0.08] transition-colors min-h-10 min-w-10 inline-flex items-center justify-center"
            >
              <X size={18} />
            </button>
          </header>

          {/* Scrollable body — no visible scrollbar; wheel / trackpad / touch still work */}
          <div className="flex-1 overflow-y-auto overscroll-contain scrollbar-none px-4 sm:px-6 py-4 sm:py-5 space-y-5 sm:space-y-6">
            {build.sections.map((section) => (
              <section key={section.id}>
                <h2 className="text-[0.625rem] sm:text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-white/40 mb-1.5">
                  {section.title}
                </h2>
                <p className="text-[13px] sm:text-sm text-white/70 leading-relaxed">
                  {section.body}
                </p>
              </section>
            ))}

            <section>
              <h2 className="text-[0.625rem] sm:text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-white/40 mb-2.5">
                Phases
              </h2>
              <ul className="space-y-2">
                {phases.map((phase, i) => (
                  <li
                    key={phase}
                    className="flex items-center gap-2.5 text-[13px] sm:text-sm text-white/70"
                  >
                    <span className="liquid-glass rounded-full w-6 h-6 inline-flex items-center justify-center text-[10px] font-medium tabular-nums text-white/65 shrink-0">
                      {i + 1}
                    </span>
                    {phase}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sticky footer actions */}
          <footer className="shrink-0 px-4 sm:px-6 py-3.5 sm:py-4 border-t border-white/[0.08] flex flex-wrap items-center gap-2.5">
            <Link
              href={`/builds/${build.id}`}
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 sm:px-5 py-2.5 text-sm font-medium min-h-10 hover:bg-white/90 transition-colors"
            >
              Open build
              <ArrowUpRight size={15} />
            </Link>
            <button
              type="button"
              onClick={close}
              className="inline-flex items-center gap-2 rounded-full liquid-glass px-4 sm:px-5 py-2.5 text-sm font-medium min-h-10 text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              Close
            </button>
          </footer>
        </article>
      </div>
    </div>
  );
}
