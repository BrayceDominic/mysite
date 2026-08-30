import { NextResponse } from "next/server";
import { projects } from "@/lib/projects-data";

const featureWork = projects.map((p) => ({
  title: `${p.name} — ${p.tagline}`,
  description: p.summary,
  roles: p.roles,
  image: p.image,
  url: p.liveUrl,
  caseStudy: `/projects/${p.slug}`,
}));

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};