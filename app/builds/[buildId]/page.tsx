import { PROJECTS } from "@/lib/portfolio";
import { notFound } from "next/navigation";
import { BuildDetail } from "@/components/build-detail";

export default async function BuildPage({
  params,
}: {
  params: Promise<{ buildId: string }>;
}) {
  const { buildId } = await params;
  const project = PROJECTS.find((p) => p.buildId === buildId || p.id === buildId);
  if (!project) notFound();

  return <BuildDetail project={project} />;
}
