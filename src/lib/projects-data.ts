export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  roles: string[];
  tagline: string;
  summary: string;
  liveUrl: string;
  image: string;
  metrics: ProjectMetric[];
  highlights: string[];
  stack: string[];
  color: string;
};

const baseUrl = "https://www.braycedominic.com";

export const projects: Project[] = [
  {
    slug: "buytena",
    name: "BuyTena",
    category: "SaaS · Retention",
    year: "2024",
    roles: ["SaaS", "Retention", "2024"],
    tagline: "Customer retention & revenue recovery platform",
    summary:
      "BuyTena is a SaaS platform built to help merchants recover lost revenue and grow repeat-purchase rates through automated retention flows and customer insight.",
    liveUrl: "https://buytena.braycedominic.com/",
    image: "/images/projects/illustration-1.svg",
    color: "#9282F8",
    metrics: [
      { value: "30%", label: "Avg repeat-purchase lift" },
      { value: "10k+", label: "Customers onboarded" },
    ],
    highlights: [
      "Design and build a full retention & revenue-recovery SaaS platform.",
      "Automated engagement flows that pull customers back to re-purchase.",
      "Actionable customer analytics to inform merchant decisions.",
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    slug: "medilink-tanzania",
    name: "MediLink Tanzania",
    category: "Healthcare",
    year: "2024",
    roles: ["Healthcare", "2024"],
    tagline: "Healthcare access platform for East Africa",
    summary:
      "MediLink connects patients across East Africa with healthcare facilities, making it easier to discover and access quality care.",
    liveUrl: "https://ichh.or.tz/medilink/",
    image: "/images/projects/illustration-2.svg",
    color: "#34D399",
    metrics: [
      { value: "5+", label: "Facilities onboarded" },
      { value: "3k+", label: "Patients served" },
    ],
    highlights: [
      "Built a patient-first healthcare access platform for East Africa.",
      "Onboarded multiple facilities and served thousands of patients.",
      "Focused on mobile-first experience for regional users.",
    ],
    stack: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    slug: "barbras-kitchen",
    name: "Barbra's Kitchen",
    category: "Food & Beverage",
    year: "2024",
    roles: ["Food & Beverage", "2024"],
    tagline: "Mobile-first food ordering platform",
    summary:
      "Barbra's Kitchen is a mobile-first food ordering platform with a fully responsive UI and real-time order tracking for a seamless dining experience.",
    liveUrl: "https://ichh.or.tz/barbraskitchen/",
    image: "/images/projects/illustration-3.svg",
    color: "#F472B6",
    metrics: [
      { value: "100%", label: "Mobile-first responsive UI" },
      { value: "Live", label: "Real-time order tracking" },
    ],
    highlights: [
      "Delivered a mobile-first, fully responsive ordering interface.",
      "Implemented real-time order tracking for customers.",
      "Optimised the checkout flow for faster conversions.",
    ],
    stack: ["Next.js", "React", "Firebase", "Tailwind CSS"],
  },
  {
    slug: "lycus-technologies",
    name: "LYCUS Technologies",
    category: "Technology",
    year: "2025",
    roles: ["Technology", "2025"],
    tagline: "Corporate site for a software & robotics firm",
    summary:
      "LYCUS Technologies is a corporate site for a software and robotics firm, engineered for speed with a perfect Lighthouse performance score and structured for search.",
    liveUrl: "https://lycustechnologies.netlify.app/",
    image: "/images/projects/illustration-1.svg",
    color: "#60A5FA",
    metrics: [
      { value: "100", label: "Lighthouse performance score" },
      { value: "SEO", label: "Structured for search" },
    ],
    highlights: [
      "Achieved a perfect 100 Lighthouse performance score.",
      "Engineered clean, semantic markup for strong SEO.",
      "Designed a modern corporate identity for a tech firm.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    slug: "amso-foundation",
    name: "AMSO Foundation",
    category: "Nonprofit",
    year: "2024",
    roles: ["Nonprofit", "2024"],
    tagline: "Nonprofit digital platform",
    summary:
      "AMSO Foundation is a nonprofit digital platform with an integrated giving flow plus events, gallery and storytelling to drive donations and engagement.",
    liveUrl: "https://amsofoundation.netlify.app/",
    image: "/images/projects/illustration-2.svg",
    color: "#FBBF24",
    metrics: [
      { value: "Donations", label: "Integrated giving flow" },
      { value: "Events", label: "Gallery & storytelling" },
    ],
    highlights: [
      "Built an integrated, frictionless giving flow.",
      "Added events, gallery and storytelling sections.",
      "Designed for maximum donor engagement.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    slug: "washabando",
    name: "WASHABANDO WiFi",
    category: "Telecom",
    year: "2025",
    roles: ["Telecom", "2025"],
    tagline: "High-speed WiFi with mobile-money billing",
    summary:
      "WASHABANDO WiFi delivers high-speed internet with M-Pesa mobile-money billing and instant connectivity activation for a smooth onboarding experience.",
    liveUrl: "https://washabando.netlify.app/",
    image: "/images/projects/illustration-3.svg",
    color: "#22D3EE",
    metrics: [
      { value: "M-Pesa", label: "Mobile money payments" },
      { value: "Instant", label: "Connectivity activation" },
    ],
    highlights: [
      "Integrated M-Pesa mobile-money billing end to end.",
      "Enabled instant connectivity activation after payment.",
      "Built a simple, secure customer onboarding flow.",
    ],
    stack: ["Next.js", "React", "Node.js", "M-Pesa API", "Tailwind CSS"],
  },
  {
    slug: "ichh-tanzania",
    name: "ICHH Tanzania",
    category: "Healthcare · NGO",
    year: "2024",
    roles: ["Healthcare", "NGO", "2024"],
    tagline: "Institutional site for a public-health NGO",
    summary:
      "ICHH Tanzania is an institutional site for a public-health NGO, with an integrated giving portal and ongoing program and outreach updates.",
    liveUrl: "https://ichh.or.tz/",
    image: "/images/projects/illustration-1.svg",
    color: "#F87171",
    metrics: [
      { value: "Donations", label: "Integrated giving portal" },
      { value: "News", label: "Program & outreach updates" },
    ],
    highlights: [
      "Built an institutional site with an integrated giving portal.",
      "Added a news section for health program updates.",
      "Designed for clarity and trust in a public-health context.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    slug: "bureau-exchange",
    name: "Bureau Exchange",
    category: "Fintech",
    year: "2025",
    roles: ["Fintech", "2025"],
    tagline: "Mobile currency exchange app",
    summary:
      "Bureau Exchange is a cross-platform mobile currency exchange app built with Flutter, featuring a live exchange rate feed for users in East Africa.",
    liveUrl: "https://github.com/BrayceDominic/bureau-exchange/releases",
    image: "/images/projects/illustration-2.svg",
    color: "#A78BFA",
    metrics: [
      { value: "Flutter", label: "Cross-platform (iOS & Android)" },
      { value: "Realtime", label: "Live exchange rate feed" },
    ],
    highlights: [
      "Built a cross-platform currency exchange app with Flutter.",
      "Integrated a live exchange rate feed.",
      "Optimised for iOS and Android from a single codebase.",
    ],
    stack: ["Flutter", "Dart", "REST API"],
  },
  {
    slug: "unisafari-hub",
    name: "UniSafari Hub",
    category: "Education",
    year: "2024",
    roles: ["Education", "2024"],
    tagline: "University discovery for Tanzanian students",
    summary:
      "UniSafari Hub helps Tanzanian students discover universities with a filterable program catalog and side-by-side institution comparison.",
    liveUrl: "https://unisafarihub.netlify.app/",
    image: "/images/projects/illustration-3.svg",
    color: "#4ADE80",
    metrics: [
      { value: "Search", label: "Filterable program catalog" },
      { value: "Compare", label: "Side-by-side institution view" },
    ],
    highlights: [
      "Built a filterable university and program catalog.",
      "Added side-by-side institution comparison.",
      "Designed a simple, student-first experience.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS"],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export { baseUrl };
