"use client";

import { useLocale, type Locale } from "@/lib/locale";
import { t, UI } from "@/lib/ui-strings";

const OPTIONS: { id: Locale; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "pt", label: "PT" },
];

export function LanguageSwitch({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={`flex items-center gap-1.5 shrink-0 ${className}`}
      role="group"
      aria-label={t(UI.langGroupAria, locale)}
    >
      {OPTIONS.map((opt, i) => {
        const active = locale === opt.id;
        return (
          <span key={opt.id} className="inline-flex items-center gap-1.5">
            {i > 0 && (
              <span className="text-white/30 text-[0.6875rem] select-none" aria-hidden>
                |
              </span>
            )}
            <button
              type="button"
              onClick={() => setLocale(opt.id)}
              aria-pressed={active}
              className={`px-0.5 py-1 text-[0.6875rem] sm:text-[0.75rem] tracking-wide min-h-9 inline-flex items-center transition-colors duration-200 ${
                active
                  ? "text-white font-semibold underline underline-offset-4 decoration-white/80"
                  : "text-white/45 font-medium hover:text-white/80"
              }`}
            >
              {opt.label}
            </button>
          </span>
        );
      })}
    </div>
  );
}
