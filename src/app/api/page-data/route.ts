import { NextResponse } from "next/server";
import { projects } from "@/lib/projects-data";

const experienceData = [
    {
        icon: "/images/icon/spark-icon.svg",
        role: "Discovery",
        location: "30-min call",
        startYear: "Step",
        endYear: "01",
        bulletPoints: [
            "Define success, scope, and budget in an initial 30-minute call."
        ]
    },
    {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Proposal",
        location: "Fixed scope",
        startYear: "Step",
        endYear: "02",
        bulletPoints: [
            "Fixed-scope plan with timeline, deliverables, and price."
        ]
    },
    {
        icon: "/images/icon/asana-icon.svg",
        role: "Build",
        location: "Weekly demos",
        startYear: "Step",
        endYear: "03",
        bulletPoints: [
            "Weekly demos — you see progress, not just promises."
        ]
    },
    {
        icon: "/images/icon/spark-icon.svg",
        role: "Launch",
        location: "Post-launch support",
        startYear: "Step",
        endYear: "04",
        bulletPoints: [
            "Deployment, monitoring, and 30 days of post-launch support."
        ]
    },
]

const educationData = [
    {
        date: "Why clients stay",
        title: "Business results over lines shipped",
        subtitle: "Revenue recovered, customers retained, hours saved. Full ownership from discovery to post-launch."
    },
];


const projectOverview = {
    caseStudies: projects.map((p) => ({
        name: p.name,
        url: `/projects/${p.slug}`,
    })),
    sideProjects: []
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};