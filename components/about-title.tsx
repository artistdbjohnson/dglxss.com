"use client";

import { useLocale } from "@/lib/locale";
import { t, UI } from "@/lib/ui-strings";

export function AboutTitle() {
  const { locale } = useLocale();
  const words = [
    t(UI.aboutWordBuilder, locale),
    t(UI.aboutWordMaker, locale),
    t(UI.aboutWordDreamer, locale),
  ] as const;

  return (
    <p
      className="about-title about-stack text-white lowercase tracking-tight"
      style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
      aria-label={words.join(" ")}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="about-stack-word"
          style={{ animationDelay: `${420 + i * 1200}ms` }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}
