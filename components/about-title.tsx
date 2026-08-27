"use client";

import { useEffect, useState } from "react";

const SOLO = ["maker", "builder", "dreamer"] as const;
const FINAL = ["maker", "dreamer", "builder"] as const;

const FADE_IN = 480;
const HOLD = 720;
const FADE_OUT = 380;
const GAP = 80;

export function AboutTitle() {
  const [phase, setPhase] = useState<"solo" | "final">("solo");
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(false);
  const [finalIn, setFinalIn] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPhase("final");
      setFinalIn(true);
      return;
    }

    let cancelled = false;
    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => {
      timers.push(window.setTimeout(fn, ms));
    };

    const playSolo = (i: number) => {
      if (cancelled) return;
      setPhase("solo");
      setIndex(i);
      setShown(false);
      later(() => {
        if (cancelled) return;
        setShown(true);
        later(() => {
          if (cancelled) return;
          setShown(false);
          later(() => {
            if (i + 1 < SOLO.length) playSolo(i + 1);
            else revealFinal();
          }, FADE_OUT + GAP);
        }, HOLD);
      }, 40);
    };

    const revealFinal = () => {
      if (cancelled) return;
      setPhase("final");
      setFinalIn(false);
      later(() => setFinalIn(true), 40);
    };

    playSolo(0);
    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  const serif = { fontFamily: "var(--font-serif), Georgia, serif" } as const;

  if (phase === "solo") {
    return (
      <p
        className="about-title text-white lowercase tracking-tight"
        style={{
          ...serif,
          opacity: shown ? 1 : 0,
          transform: shown ? "translateY(0)" : "translateY(10px)",
          transition: `opacity ${shown ? FADE_IN : FADE_OUT}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${shown ? FADE_IN : FADE_OUT}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        }}
      >
        {SOLO[index]}
      </p>
    );
  }

  return (
    <p
      className="about-title text-white lowercase tracking-tight flex flex-wrap items-baseline justify-center gap-x-[0.45em]"
      style={serif}
      aria-label="maker dreamer builder"
    >
      {FINAL.map((word, i) => (
        <span key={word} className="inline-flex items-baseline gap-x-[0.45em]">
          {i > 0 && (
            <span
              aria-hidden
              className="text-[0.55em] text-white/55"
              style={{
                opacity: finalIn ? 1 : 0,
                transform: finalIn ? "scale(1)" : "scale(0.6)",
                transition: `opacity 500ms cubic-bezier(0.22, 1, 0.36, 1) ${180 + i * 220}ms, transform 500ms cubic-bezier(0.22, 1, 0.36, 1) ${180 + i * 220}ms`,
              }}
            >
              •
            </span>
          )}
          <span
            style={{
              opacity: finalIn ? 1 : 0,
              transform: finalIn ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 620ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 220}ms, transform 620ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 220}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </p>
  );
}
