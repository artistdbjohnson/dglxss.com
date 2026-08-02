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
    <div className="min-h-dvh bg-black text-white">
      <div className="max-w-2xl mx-auto px-5 sm:px-6 py-10 sm:py-14">
        <Link
          href="/#in-progress"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-10 min-h-10"
        >
          <ArrowLeft size={16} />
          Back to studio
        </Link>

        <p className="text-[0.6875rem] font-medium tracking-[0.18em] uppercase text-white/42 mb-2">
          In progress
        </p>
        <h1
          className="text-3xl sm:text-4xl tracking-tight text-white mb-3"
          style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
        >
          {project.name}
        </h1>
        <p className="text-white/60 text-base leading-relaxed mb-10">
          {project.line}
        </p>

        <div className="liquid-glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 space-y-6">
          {project.sections.map((s) => (
            <section key={s.id}>
              <h2 className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-white/42 mb-2">
                {s.title}
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">{s.body}</p>
            </section>
          ))}

          <section>
            <h2 className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-white/42 mb-3">
              Phases
            </h2>
            <ul className="space-y-2.5">
              {PHASES.map((phase, i) => (
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

          <div className="pt-3">
            <Link
              href={`/access#${project.buildId || project.id}`}
              className="inline-flex items-center gap-2 rounded-full liquid-glass px-5 py-2.5 text-sm font-medium min-h-11 text-white/75 hover:text-white hover:bg-white/[0.06] transition-colors"
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
