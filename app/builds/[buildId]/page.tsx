import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio";
import { notFound } from "next/navigation";

const PHASES = [
  "Design & Source Parts",
  "Build First Working Units",
  "Self-Test on Own Truck",
  "Test with Trucking Friends",
  "Test with Known Company",
];

export default async function BuildPage({
  params,
}: {
  params: Promise<{ buildId: string }>;
}) {
  const { buildId } = await params;
  const project = PROJECTS.find((p) => p.buildId === buildId || p.id === buildId);
  if (!project) notFound();

  return (
    <div className="h-dvh max-h-dvh overflow-hidden bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-lg lg:max-w-xl flex flex-col max-h-[min(92dvh,760px)]">
        <Link
          href="/#in-progress"
          className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors mb-5 sm:mb-6 min-h-9 self-start"
        >
          <ArrowLeft size={15} />
          Back to studio
        </Link>

        <p className="text-[0.625rem] sm:text-[0.6875rem] font-medium tracking-[0.18em] uppercase text-white/40 mb-1.5">
          In progress
        </p>
        <h1
          className="text-2xl sm:text-3xl tracking-tight text-white mb-1.5"
          style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
        >
          {project.name}
        </h1>
        <p className="text-white/55 text-sm leading-snug mb-5 sm:mb-6">
          {project.line}
        </p>

        <div className="liquid-glass-card rounded-2xl sm:rounded-[1.35rem] p-4 sm:p-5 space-y-4 sm:space-y-5 overflow-y-auto overscroll-contain flex-1 min-h-0">
          {project.sections.map((s) => (
            <section key={s.id}>
              <h2 className="text-[0.625rem] sm:text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-white/40 mb-1.5">
                {s.title}
              </h2>
              <p className="text-[13px] sm:text-sm text-white/70 leading-relaxed">{s.body}</p>
            </section>
          ))}

          <section>
            <h2 className="text-[0.625rem] sm:text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-white/40 mb-2">
              Phases
            </h2>
            <ul className="space-y-1.5 sm:space-y-2">
              {PHASES.map((phase, i) => (
                <li
                  key={phase}
                  className="flex items-center gap-2.5 text-[13px] sm:text-sm text-white/70"
                >
                  <span className="liquid-glass rounded-full w-6 h-6 inline-flex items-center justify-center text-[10px] font-medium tabular-nums text-white/65 shrink-0">
                    {i + 1}
                  </span>
                  {phase}
                </li>
              ))}
            </ul>
          </section>

          <div className="pt-1">
            <Link
              href={`/access#${project.buildId || project.id}`}
              className="inline-flex items-center gap-2 rounded-full liquid-glass px-4 py-2 text-sm font-medium min-h-10 text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label="Open client materials for this build"
            >
              Client materials
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
