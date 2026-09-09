"use client";

import Link from "next/link";
import { LanguageSwitch } from "@/components/language-switch";
import { useLocale } from "@/lib/locale";
import { t, UI } from "@/lib/ui-strings";

export function AboutNav() {
  const { locale } = useLocale();

  return (
    <nav className="relative z-20 px-4 sm:px-6 lg:px-10 pt-[max(1.25rem,env(safe-area-inset-top))] sm:pt-6 shrink-0">
      <div className="liquid-glass-nav rounded-full px-3.5 sm:px-5 lg:px-6 py-2 sm:py-2.5 flex items-center justify-between max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto gap-3">
        <Link
          href="/"
          className="flex items-center text-white shrink-0 min-h-11 pl-2.5 sm:pl-3"
        >
          <span
            className="text-[0.95rem] sm:text-base tracking-tight lowercase text-white/95"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            dglxss
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="rounded-full px-3.5 sm:px-4 py-2 text-[0.8125rem] sm:text-sm font-medium min-h-10 inline-flex items-center text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            {t(UI.home, locale)}
          </Link>
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  );
}
