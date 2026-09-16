import { NextResponse } from "next/server";
import { projects } from "@/lib/projects-data";

const featureWork = projects.map((p) => ({
  title: `${p.name}, ${p.tagline}`,
  description: p.summary,
  roles: p.roles,
  image: p.image,
  alt: p.alt,
  url: p.liveUrl,
  type: p.type,
  preview: p.preview !== false,
  caseStudy: `/projects/${p.slug}`,
}));

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};