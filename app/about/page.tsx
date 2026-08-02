import Link from "next/link";
import { AboutParticles } from "@/components/about-particles";

export const metadata = {
  title: "dglxss — maker",
  description: "maker",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-dvh h-dvh w-full bg-black text-white flex flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AboutParticles />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 95% 90% at 50% 48%, transparent 38%, rgba(0,0,0,0.28) 100%)",
            "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 16%, transparent 84%, rgba(0,0,0,0.28) 100%)",
          ].join(", "),
        }}
      />

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
          <Link
            href="/"
            className="rounded-full px-3.5 sm:px-4 py-2 text-[0.8125rem] sm:text-sm font-medium min-h-10 inline-flex items-center text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            Home
          </Link>
        </div>
      </nav>

      <main className="relative z-10 flex-1 flex items-center justify-center px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <p
          className="about-title hero-enter text-white lowercase tracking-tight"
          style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
        >
          maker
        </p>
      </main>
    </div>
  );
}
