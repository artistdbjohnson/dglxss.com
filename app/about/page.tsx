import { AboutParticles } from "@/components/about-particles";
import { AboutTitle } from "@/components/about-title";
import { AboutNav } from "@/components/about-nav";

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

      <AboutNav />

      <main className="relative z-10 flex-1 flex items-center justify-center px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center">
        <AboutTitle />
      </main>
    </div>
  );
}
