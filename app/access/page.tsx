import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { AboutParticles } from "@/components/about-particles";
import { GO_LIVE_BUILDS } from "@/lib/go-live";

export const metadata = {
  title: "access — dglxss",
  description: "Client materials",
};

export default function AccessPage() {
  return (
    <div className="relative min-h-dvh w-full bg-black text-white flex flex-col">
      {/* Particle field — same system as about / home, slightly dimmed */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AboutParticles />
      </div>
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 95% 90% at 50% 42%, transparent 36%, rgba(0,0,0,0.32) 100%)",
            "linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, transparent 14%, transparent 78%, rgba(0,0,0,0.4) 100%)",
          ].join(", "),
        }}
      />

      {/* Nav — matches about / home liquid-glass pill */}
      <nav className="relative z-20 px-4 sm:px-6 lg:px-10 pt-[max(1.25rem,env(safe-area-inset-top))] sm:pt-6 shrink-0">
        <div className="liquid-glass-nav rounded-full px-3.5 sm:px-5 lg:px-6 py-2 sm:py-2.5 flex items-center justify-between max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto gap-3">
          <Link
            href="/"
            className="flex items-center text-white shrink-0 min-h-11 pl-2.5 sm:pl-3"
          >
            <span
              className="text-[0.95rem] sm:text-base tracking-tight lowercase text-white/95"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              dglxss
            </span>
          </Link>
          <div className="flex items-center gap-1">
            <Link
              href="/#in-progress"
              className="rounded-full px-3.5 sm:px-4 py-2 text-[0.8125rem] sm:text-sm font-medium min-h-10 inline-flex items-center text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              Studio
            </Link>
            <Link
              href="/"
              className="rounded-full px-3.5 sm:px-4 py-2 text-[0.8125rem] sm:text-sm font-medium min-h-10 inline-flex items-center text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 flex-1 px-5 sm:px-6 lg:px-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-10 sm:pt-14">
        <div className="max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          <Link
            href="/#in-progress"
            className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors mb-8 min-h-10"
          >
            <ArrowLeft size={16} />
            Back to studio
          </Link>

          <p className="text-[0.6875rem] font-medium tracking-[0.2em] uppercase text-white/42 mb-2.5">
            Client materials
          </p>
          <h1
            className="text-[1.85rem] sm:text-4xl lg:text-[2.75rem] tracking-tight text-white mb-3 lowercase"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            access
          </h1>
          <p className="text-white/55 text-sm sm:text-base leading-relaxed max-w-xl mb-12 sm:mb-14">
            Quiet briefs for active builds. Not listed in the main nav.
          </p>

          <div className="space-y-6 sm:space-y-8">
            {GO_LIVE_BUILDS.map((build) => (
              <article
                key={build.id}
                id={build.id}
                className="liquid-glass-card rounded-2xl sm:rounded-3xl overflow-hidden"
              >
                <header className="px-5 sm:px-7 lg:px-8 pt-6 sm:pt-7 pb-5 border-b border-white/[0.08]">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 mb-2">
                    <h2
                      className="text-xl sm:text-2xl tracking-tight text-white"
                      style={{
                        fontFamily: '"Instrument Serif", Georgia, serif',
                      }}
                    >
                      {build.name}
                    </h2>
                    <span className="text-white/42 text-xs tabular-nums tracking-wide">
                      {build.year}
                    </span>
                    <span className="liquid-glass rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold text-white/80">
                      {build.status}
                    </span>
                  </div>
                  <p className="text-sm sm:text-[0.95rem] text-white/60 leading-relaxed">
                    {build.line}
                  </p>
                </header>

                <div className="px-5 sm:px-7 lg:px-8 py-6 sm:py-7 space-y-7">
                  {build.sections.map((section) => (
                    <section key={section.id} id={`${build.id}-${section.id}`}>
                      <h3 className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-white/42 mb-2">
                        {section.title}
                      </h3>
                      <p className="text-sm sm:text-[0.95rem] text-white/68 leading-relaxed">
                        {section.body}
                      </p>
                    </section>
                  ))}

                  <section>
                    <h3 className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-white/42 mb-3">
                      Phases
                    </h3>
                    <ul className="space-y-2.5">
                      {build.phases.map((phase, i) => (
                        <li
                          key={phase}
                          className="flex items-center gap-3 text-sm text-white/75"
                        >
                          <span className="liquid-glass rounded-full w-7 h-7 inline-flex items-center justify-center text-[11px] font-medium tabular-nums text-white/70 shrink-0">
                            {i + 1}
                          </span>
                          {phase}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <Link
                      href={`/builds/${build.id}`}
                      className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium min-h-11 hover:bg-white/90 transition-colors"
                    >
                      Open build
                      <ArrowUpRight size={16} />
                    </Link>
                    <Link
                      href="/#in-progress"
                      className="inline-flex items-center gap-2 rounded-full liquid-glass px-5 py-2.5 text-sm font-medium min-h-11 text-white/80 hover:text-white hover:bg-white/[0.06] transition-colors"
                    >
                      Back to studio
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <footer className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p
              className="text-white/80 lowercase tracking-tight text-base sm:text-lg"
              style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
            >
              what dreams may come true
            </p>
            <p className="text-white/42 text-sm tracking-wide">
              built by dglxss
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
