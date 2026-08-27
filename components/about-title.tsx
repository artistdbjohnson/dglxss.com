"use client";

import { useEffect, useState } from "react";

const WORDS = ["builder", "maker", "dreamer"] as const;

const FADE_IN = 560;
const STAGGER = 820;

export function AboutTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(WORDS.length);
      return;
    }

    let cancelled = false;
    const timers: number[] = [];

    WORDS.forEach((_, i) => {
      timers.push(
        window.setTimeout(() => {
          if (!cancelled) setCount(i + 1);
        }, 80 + i * STAGGER),
      );
    });

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <p
      className="about-title text-white lowercase tracking-tight flex flex-col items-center leading-[1.2]"
      style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
      aria-label="builder maker dreamer"
    >
      {WORDS.map((word, i) => {
        const shown = i < count;
        return (
          <span
            key={word}
            className="block"
            style={{
              opacity: shown ? 1 : 0,
              transform: shown ? "translateY(0)" : "translateY(12px)",
              height: shown ? "auto" : 0,
              overflow: "hidden",
              transition: `opacity ${FADE_IN}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${FADE_IN}ms cubic-bezier(0.22, 1, 0.36, 1)`,
            }}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
}
