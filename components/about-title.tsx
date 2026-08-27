"use client";

const WORDS = ["builder", "maker", "dreamer"] as const;

export function AboutTitle() {
  return (
    <p
      className="about-title about-stack text-white lowercase tracking-tight"
      style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
      aria-label="builder maker dreamer"
    >
      {WORDS.map((word, i) => (
        <span
          key={word}
          className="about-stack-word"
          style={{ animationDelay: `${420 + i * 1200}ms` }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}
