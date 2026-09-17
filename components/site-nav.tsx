"use client";

import Link from "next/link";
import { LanguageSwitch } from "@/components/language-switch";
import { useLocale } from "@/lib/locale";
import {
  PORTFOLIO_TABS,
  tabLabel,
  type PortfolioTabId,
} from "@/lib/portfolio";
import { t, UI } from "@/lib/ui-strings";

export function SiteNav({
  tab,
  onTab,
}: {
  tab: PortfolioTabId;
  onTab: (id: PortfolioTabId) => void;
}) {
  const { locale } = useLocale();

  return (
    <nav
      className="site-nav-fixed px-4 sm:px-6 lg:px-10 pt-[max(0.7rem,env(safe-area-inset-top))] pb-2"
      aria-label={t(UI.navAria, locale)}
    >
      <div className="liquid-glass-nav rounded-full px-3.5 sm:px-5 lg:px-6 py-2 sm:py-2.5 flex items-center justify-between max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto gap-3">
        <Link
          href="/about"
          className="flex items-center text-white shrink-0 min-h-11 pl-2.5 sm:pl-3 pr-1"
          aria-label={t(UI.aboutAria, locale)}
        >
          <span
            className="text-[0.95rem] sm:text-base tracking-tight lowercase text-white/95"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            dglxss
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="flex items-center gap-0.5 sm:gap-1"
            role="tablist"
            aria-label={t(UI.portfolioAria, locale)}
          >
            {PORTFOLIO_TABS.map((tabItem) => {
              const active = tab === tabItem.id;
              return (
                <button
                  key={tabItem.id}
                  type="button"
                  role="tab"
                  id={`tab-${tabItem.id}`}
                  aria-selected={active}
                  aria-controls="portfolio-panel"
                  onClick={() => onTab(tabItem.id)}
                  className={`rounded-full px-3.5 sm:px-4 py-2 text-[0.8125rem] sm:text-sm font-medium min-h-10 inline-flex items-center transition-colors duration-200 ${
                    active
                      ? "bg-white text-black shadow-[0_1px_0_rgba(255,255,255,0.35)_inset]"
                      : "text-white/70 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {tabLabel(tabItem, locale)}
                </button>
              );
            })}
          </div>
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  );
}
