import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects, baseUrl } from "@/lib/projects-data";
import { Button } from "@/components/ui/button";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "website",
      url: `${baseUrl}/projects/${project.slug}`,
      title: `${project.name} — Brayce Dominic`,
      description: project.summary,
      siteName: "Brayce Dominic",
    },
  };
}

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <>
      <section>
        <div className="container">
          <div className="border-x border-primary/10">
            <div className="max-w-3xl mx-auto px-4 sm:px-7 py-12 md:py-20">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors mb-8"
              >
                <span aria-hidden className="rotate-180">→</span> Back to work
              </Link>

              <div className="flex flex-col gap-3 mb-8">
                <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                  {project.category}
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl">{project.name}</h1>
                <p className="text-lg text-secondary font-normal">{project.tagline}</p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-primary/10 mb-8">
                <Image
                  src={project.image}
                  alt={`${project.name} — ${project.tagline}`}
                  width={900}
                  height={560}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {project.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-primary/10 p-5 bg-muted/20"
                  >
                    <p className="text-2xl sm:text-3xl font-semibold text-primary">
                      {m.value}
                    </p>
                    <p className="text-sm text-secondary mt-1">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-xl sm:text-2xl mb-3">Overview</h2>
                  <p className="text-secondary font-normal leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl mb-3">Highlights</h2>
                  <ul className="flex flex-col gap-2">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-secondary font-normal"
                      >
                        <span className="text-primary mt-1" aria-hidden>•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl mb-3">Tech stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm border border-primary/10 rounded-lg px-3 py-1.5 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-3">
                <Button asChild className="h-auto">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="py-3 px-5"
                  >
                    View live project
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-auto">
                  <Link href="#contact" className="py-3 px-5">
                    Start a project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
