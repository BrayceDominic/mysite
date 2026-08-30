import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "BuyTena — Customer retention & revenue recovery platform",
        description: "SaaS retention platform delivering a 30% average repeat-purchase lift and 10k+ customers onboarded.",
        roles: ["SaaS", "Retention", "2024"],
        image: "/images/projects/illustration-1.svg",
        url: "https://buytena.braycedominic.com/",
        caseStudy: "/projects/buytena"
    },
    {
        title: "MediLink Tanzania — Healthcare access platform",
        description: "Healthcare access platform for East Africa with 5+ facilities onboarded and 3k+ patients served.",
        roles: ["Healthcare", "2024"],
        image: "/images/projects/illustration-2.svg",
        url: "https://ichh.or.tz/medilink/",
        caseStudy: "/projects/medilink-tanzania"
    },
    {
        title: "Barbra's Kitchen — Mobile-first food ordering platform",
        description: "Mobile-first food ordering platform with 100% responsive UI and real-time order tracking.",
        roles: ["Food & Beverage", "2024"],
        image: "/images/projects/illustration-3.svg",
        url: "https://ichh.or.tz/barbraskitchen/",
        caseStudy: "/projects/barbras-kitchen"
    },
    {
        title: "LYCUS Technologies — Corporate site for software & robotics",
        description: "Corporate site with a 100 Lighthouse performance score, structured for search.",
        roles: ["Technology", "2025"],
        image: "/images/projects/illustration-1.svg",
        url: "https://lycustechnologies.netlify.app/",
        caseStudy: "/projects/lycus-technologies"
    },
    {
        title: "AMSO Foundation — Nonprofit digital platform",
        description: "Nonprofit platform with an integrated giving flow and events, gallery & storytelling.",
        roles: ["Nonprofit", "2024"],
        image: "/images/projects/illustration-2.svg",
        url: "https://amsofoundation.netlify.app/",
        caseStudy: "/projects/amso-foundation"
    },
    {
        title: "WASHABANDO WiFi — WiFi with mobile-money billing",
        description: "High-speed WiFi service with M-Pesa mobile money payments and instant connectivity activation.",
        roles: ["Telecom", "2025"],
        image: "/images/projects/illustration-3.svg",
        url: "https://washabando.netlify.app/",
        caseStudy: "/projects/washabando"
    },
    {
        title: "ICHH Tanzania — Institutional site for public-health NGO",
        description: "Institutional site with an integrated giving portal and program & outreach updates.",
        roles: ["Healthcare", "NGO", "2024"],
        image: "/images/projects/illustration-1.svg",
        url: "https://ichh.or.tz/",
        caseStudy: "/projects/ichh-tanzania"
    },
    {
        title: "Bureau Exchange — Mobile currency exchange app",
        description: "Cross-platform currency exchange app built with Flutter featuring a live exchange rate feed.",
        roles: ["Fintech", "2025"],
        image: "/images/projects/illustration-2.svg",
        url: "https://github.com/BrayceDominic/bureau-exchange/releases",
        caseStudy: "/projects/bureau-exchange"
    },
    {
        title: "UniSafari Hub — University discovery for Tanzanian students",
        description: "University discovery with a filterable program catalog and side-by-side institution comparison.",
        roles: ["Education", "2024"],
        image: "/images/projects/illustration-3.svg",
        url: "https://unisafarihub.netlify.app/",
        caseStudy: "/projects/unisafari-hub"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};