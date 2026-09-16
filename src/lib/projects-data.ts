export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  type: "Web" | "Mobile";
  category: string;
  year: string;
  roles: string[];
  tagline: string;
  summary: string;
  liveUrl: string;
  image: string;
  preview?: boolean;
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
    type: "Web",
    category: "SaaS · Customer Retention",
    year: "2024",
    roles: ["SaaS", "Retention", "SMS & WhatsApp"],
    tagline: "Bring customers back before they forget",
    summary:
      "BuyTena is a customer retention SaaS for East African service businesses. It tracks purchase cycles and sends automated SMS and WhatsApp reminders through M-Pesa-friendly billing, turning one-time buyers into repeat customers.",
    liveUrl: "https://buytena.com/",
    image: "/images/projects/buytena-v2.png",
    color: "#9282F8",
    metrics: [
      { value: "18%", label: "Avg repeat-rate lift" },
      { value: "847+", label: "Messages sent / month" },
    ],
    highlights: [
      "Automated SMS & WhatsApp reminders tuned to each business's return cycle.",
      "Retention analytics showing customers due, overdue, and recovered.",
      "Mobile money billing via M-Pesa, Tigo Pesa, and Airtel Money.",
      "Public API and webhooks for custom retention workflows.",
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    slug: "graphlinex",
    name: "GraphLineX",
    type: "Web",
    category: "Digital Startup",
    year: "2025",
    roles: ["Startup", "Brand", "Web"],
    tagline: "Youth-led digital startup from Tanzania",
    summary:
      "GraphLineX is a youth-led digital startup site from Tanzania built to present a fast-growing tech brand with a sharp identity, performant landing experience, and a funnel designed to convert visitors into customers.",
    liveUrl: "https://graphlinex.netlify.app/",
    image: "/images/projects/graphlinex-v2.png",
    color: "#60A5FA",
    metrics: [
      { value: "100", label: "Lighthouse performance" },
      { value: "SEO", label: "Structured for search" },
    ],
    highlights: [
      "Built a modern, high-converting brand landing page.",
      "Engineered semantic markup and fast load times for SEO.",
      "Responsive layouts across mobile, tablet, and desktop.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    slug: "tuwainvite",
    name: "TuwaInvite",
    type: "Web",
    category: "EventTech SaaS",
    year: "2025",
    roles: ["SaaS", "Events", "SMS & WhatsApp"],
    tagline: "Digital invitations, RSVP & SMS for every event",
    summary:
      "TuwaInvite is an event-management platform for Tanzanian organizers. It sends QR-coded digital invitations, tracks RSVPs in real time, runs door check-in, and collects contributions via M-Pesa, all from one dashboard.",
    liveUrl: "https://tuwainvite.braycedominic.com/",
    image: "/images/projects/tuwainvite.png",
    preview: false,
    color: "#F472B6",
    metrics: [
      { value: "2,000+", label: "Guests per event" },
      { value: "QR", label: "Invitations & check-in" },
    ],
    highlights: [
      "Digital invitation cards with unique QR codes per guest.",
      "Real-time RSVP, guest management, and door check-in.",
      "SMS & WhatsApp reminders plus M-Pesa contribution collection.",
      "Live event dashboard with attendance and contribution tracking.",
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "M-Pesa API"],
  },
  {
    slug: "nihotspot",
    name: "Nihotspot",
    type: "Web",
    category: "Telecom · WiFi",
    year: "2025",
    roles: ["Telecom", "WiFi", "M-Pesa"],
    tagline: "Connect, Pay, Browse, seamlessly",
    summary:
      "Nihotspot connects customers to high-speed WiFi with integrated M-Pesa billing. Users pay from their phone and get instant internet activation, making connectivity as simple as a mobile-money transaction.",
    liveUrl: "https://nihotspot.braycedominic.com/",
    image: "/images/projects/nihotspot-v2.png",
    color: "#22D3EE",
    metrics: [
      { value: "M-Pesa", label: "Pay & connect instantly" },
      { value: "30s", label: "Time-to-activation" },
    ],
    highlights: [
      "End-to-end mobile-money (M-Pesa) billing flow.",
      "Instant connectivity activation after payment.",
      "Simple, secure onboarding for customers and resellers.",
    ],
    stack: ["Next.js", "React", "Node.js", "M-Pesa API"],
  },
  {
    slug: "amso-foundation",
    name: "AMSO Foundation",
    type: "Web",
    category: "Nonprofit",
    year: "2024",
    roles: ["Nonprofit", "Donations", "Community"],
    tagline: "Uplifting communities through charity",
    summary:
      "AMSO Foundation is the digital home of an Iringa-based nonprofit honoring the legacy of Amani Msovela. The site drives donations and engagement through impact stories, program updates, event galleries, and a frictionless giving flow.",
    liveUrl: "https://amsofoundation.netlify.app/",
    image: "/images/projects/amso-foundation-v2.png",
    color: "#FBBF24",
    metrics: [
      { value: "500+", label: "Lives touched" },
      { value: "3", label: "Active programs" },
    ],
    highlights: [
      "Integrated giving flow built to maximize donor conversions.",
      "Program, impact, and event storytelling sections.",
      "Mobile-first design for a community-centered audience.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    slug: "directrent",
    name: "DirectRent",
    type: "Web",
    category: "PropTech · Marketplace",
    year: "2025",
    roles: ["Marketplace", "PropTech", "Mobile-first"],
    tagline: "Verified rental homes directly from landlords",
    summary:
      "DirectRent is a verified rental marketplace for Tanzania that connects tenants with landlords directly. It removes broker friction with property and landlord verification, digital viewing requests, transparency, and mobile-first workflows.",
    liveUrl: "https://directrenttz.netlify.app/",
    image: "/images/projects/directrent.png",
    color: "#34D399",
    metrics: [
      { value: "128", label: "Verified homes" },
      { value: "0", label: "Brokers" },
    ],
    highlights: [
      "Verified landlord KYC and property listings for safer renting.",
      "Digital viewing requests and direct tenant–landlord communication.",
      "Landlord dashboard for vacancy management and rental tracking.",
      "Mobile-first experience designed for Tanzanian urban renters.",
    ],
    stack: ["Next.js", "React", "Node.js", "Tailwind CSS"],
  },
  {
    slug: "unisafari-hub",
    name: "UniSafari Hub",
    type: "Web",
    category: "Tourism · Culture",
    year: "2024",
    roles: ["Tourism", "Nonprofit", "Booking"],
    tagline: "Tourism, charity & cultural exchange",
    summary:
      "UniSafari Hub blends tourism, charity, and cultural exchange. The platform showcases Tanzania's attractions, from Kilimanjaro to the Serengeti, and lets travelers plan customized safari, cultural, and community experiences.",
    liveUrl: "https://unisafarihub.netlify.app/",
    image: "/images/projects/unisafari-hub-v2.png",
    color: "#4ADE80",
    metrics: [
      { value: "3", label: "Languages (EN/DE/ES)" },
      { value: "MTL", label: "Mount Kilimanjaro + Serengeti" },
    ],
    highlights: [
      "Multi-language tourism and cultural exchange platform.",
      "Trip planner covering safari, cultural, and charity experiences.",
      "Community-focused storytelling that drives purposeful travel.",
    ],
    stack: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    slug: "barbras-kitchen",
    name: "Barbra's Kitchen",
    type: "Mobile",
    category: "Food & Beverage App",
    year: "2024",
    roles: ["Mobile", "Food Ordering", "Android"],
    tagline: "Mobile-first food ordering & tracking",
    summary:
      "Barbra's Kitchen is a mobile food ordering app with a fully responsive UI and real-time order tracking, built to give customers a seamless ordering and delivery experience from their phone.",
    liveUrl: "#contact",
    image: "/images/projects/illustration-2.svg",
    color: "#F472B6",
    metrics: [
      { value: "Realtime", label: "Order tracking" },
      { value: "Mobile", label: "Android & iOS ready" },
    ],
    highlights: [
      "Mobile-first food ordering flow optimized for conversions.",
      "Real-time order status and tracking for customers.",
      "Polished, responsive UI across phone and tablet.",
    ],
    stack: ["Flutter", "Dart", "Firebase"],
  },
  {
    slug: "judopos",
    name: "JudoPOS",
    type: "Mobile",
    category: "Retail POS App",
    year: "2025",
    roles: ["Mobile", "Retail", "Point of Sale"],
    tagline: "Point-of-sale app for modern retail",
    summary:
      "JudoPOS is a mobile point-of-sale application that lets retail businesses ring up sales, manage inventory, and track revenue from a phone or tablet, built for shops that need a lightweight, reliable POS that works offline-first.",
    liveUrl: "https://github.com/BrayceDominic/mysite/releases/download/judopos-v1.0/application-5c05f785-ec67-480f-a763-144906f3dccf.apk",
    image: "/images/projects/illustration-3.svg",
    color: "#F87171",
    metrics: [
      { value: "Offline", label: "Works offline first" },
      { value: "POS", label: "Sales + inventory" },
    ],
    highlights: [
      "Fast, reliable point-of-sale flows for daily retail.",
      "Inventory, product, and revenue management in one app.",
      "Offline-first design keeps sales moving without connectivity.",
    ],
    stack: ["Flutter", "Dart", "SQLite"],
  },
  {
    slug: "timiro-fx",
    name: "Timiro FX",
    type: "Mobile",
    category: "Fintech App",
    year: "2025",
    roles: ["Mobile", "Fintech", "Forex"],
    tagline: "Live currency exchange on your phone",
    summary:
      "Timiro FX is a mobile currency exchange app that surfaces live exchange rates and quick conversion tools for East African users, a fast, clean, real-time way to compare and convert currencies.",
    liveUrl: "#contact",
    image: "/images/projects/illustration-1.svg",
    color: "#A78BFA",
    metrics: [
      { value: "Live", label: "Exchange rates" },
      { value: "Mobile", label: "iOS & Android" },
    ],
    highlights: [
      "Real-time exchange rate feed with instant conversions.",
      "Simple, focused UX for quick everyday currency checks.",
      "Cross-platform Flutter build from a single codebase.",
    ],
    stack: ["Flutter", "Dart", "REST API"],
  },
  {
    slug: "konvo",
    name: "Konvo",
    type: "Mobile",
    category: "Social App",
    year: "2026",
    roles: ["Mobile", "Social", "Community"],
    tagline: "A new way for communities to talk",
    summary:
      "Konvo is a mobile social app built to bring communities together around threaded conversations, private groups, and real-time messaging, the newest project on the roster, designed with a modern, engaging mobile experience.",
    liveUrl: "#contact",
    image: "/images/projects/illustration-2.svg",
    color: "#60A5FA",
    metrics: [
      { value: "New", label: "Project 2026" },
      { value: "Social", label: "Messaging & communities" },
    ],
    highlights: [
      "Threaded conversations and community-driven spaces.",
      "Private groups and real-time messaging.",
      "Built as a modern social experience from day one.",
    ],
    stack: ["Flutter", "Dart", "Firebase"],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export { baseUrl };