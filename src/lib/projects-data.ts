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
  alt: string;
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
      "BuyTena is a revenue engine for East African service businesses. It reads each customer's buying rhythm and fires automated SMS & WhatsApp nudges at the perfect moment, turning one-time buyers into loyal regulars.",
    liveUrl: "https://buytena.com/",
    image: "/images/projects/buytena-v2.png",
    alt: "BuyTena customer retention platform dashboard with SMS and WhatsApp reminders",
    color: "#9282F8",
    metrics: [
      { value: "18%", label: "Avg repeat-rate lift" },
      { value: "847+", label: "Messages sent / month" },
    ],
    highlights: [
      "Timed SMS & WhatsApp reminders tuned to each business's return cycle.",
      "Retention analytics showing customers due, overdue, and recovered.",
      "Billing wired into the mobile-money wallets East Africa already uses.",
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
    tagline: "A Tanzanian startup made for the digital age",
    summary:
      "GraphLineX is a youth-led Tanzanian startup with a sharp identity and a landing experience engineered to turn curiosity into customers: performant, SEO-ready, and relentlessly convincing.",
    liveUrl: "https://graphlinex.netlify.app/",
    image: "/images/projects/graphlinex-v2.png",
    alt: "GraphLineX youth-led digital startup landing page from Tanzania",
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
    tagline: "Invitations, RSVPs & check-in without the chaos",
    summary:
      "TuwaInvite is the command center for Tanzanian events. Every guest gets a QR-coded invitation, RSVPs land in real time, doors scan on arrival, and contributions flow in through mobile money, all from one dashboard.",
    liveUrl: "https://tuwainvite.braycedominic.com/",
    image: "/images/projects/tuwainvite.png",
    alt: "TuwaInvite digital invitations and RSVP event management platform for Tanzania",
    preview: false,
    color: "#F472B6",
    metrics: [
      { value: "2,000+", label: "Guests per event" },
      { value: "QR", label: "Invitations & check-in" },
    ],
    highlights: [
      "QR-coded invitation cards, with a unique code for every guest.",
      "Real-time RSVP, guest management, and door check-in.",
      "Automated SMS & WhatsApp reminders plus mobile-money contribution collection.",
      "Live event dashboard with attendance and contribution tracking.",
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "Mobile Money API"],
  },
  {
    slug: "nihotspot",
    name: "Nihotspot",
    type: "Web",
    category: "Telecom · WiFi",
    year: "2025",
    roles: ["Telecom", "WiFi", "Payments"],
    tagline: "Pay. Connect. Browse. Instantly.",
    summary:
      "Nihotspot turns any phone into a WiFi gateway. Customers pay from their phone and connectivity activates in seconds, making the internet as instant as a mobile-money tap.",
    liveUrl: "https://nihotspot.braycedominic.com/",
    image: "/images/projects/nihotspot-v2.png",
    alt: "Nihotspot WiFi internet landing page with mobile money billing in Tanzania",
    color: "#22D3EE",
    metrics: [
      { value: "1 tap", label: "From pay to online" },
      { value: "<30s", label: "Time-to-activation" },
    ],
    highlights: [
      "An end-to-end mobile-money billing flow.",
      "Instant connectivity activation the moment payment clears.",
      "Simple, secure onboarding for customers and resellers.",
    ],
    stack: ["Next.js", "React", "Node.js", "Mobile Money API"],
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
      "AMSO Foundation is the digital home of an Iringa-based nonprofit honoring Amani Msovela's legacy. Impact stories, program updates, and galleries turn visitors into supporters, with a giving flow stripped of every ounce of friction.",
    liveUrl: "https://amsofoundation.netlify.app/",
    image: "/images/projects/amso-foundation-v2.png",
    alt: "AMSO Foundation nonprofit charity website for Iringa Tanzania",
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
    tagline: "Verified rental homes, straight from the source",
    summary:
      "DirectRent is the verified rental marketplace Tanzania actually needed. Tenants reach landlords directly, every listing is vetted, viewings are booked in a tap, and the broker noise is gone.",
    liveUrl: "https://directrenttz.netlify.app/",
    image: "/images/projects/directrent.png",
    alt: "DirectRent verified rental marketplace for landlords and tenants in Tanzania",
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
      "UniSafari Hub is where tourism, purpose, and culture meet. From Kilimanjaro to the Serengeti, travelers design bespoke safari, cultural, and community journeys that give back, in three languages.",
    liveUrl: "https://unisafarihub.netlify.app/",
    image: "/images/projects/unisafari-hub-v2.png",
    alt: "UniSafari Hub tourism charity and cultural exchange platform for Tanzania",
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
    tagline: "Food ordering that feels effortless",
    summary:
      "Barbra's Kitchen is food ordering without the friction. A sleek, fully responsive app takes customers from craving to checkout in seconds, with live order tracking from kitchen to doorstep.",
    liveUrl: "#contact",
    image: "/images/projects/illustration-2.svg",
    alt: "Barbra's Kitchen mobile food ordering app with real-time tracking",
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
    tagline: "The counter, in your pocket",
    summary:
      "JudoPOS is retail's trusty sidekick. Businesses ring up sales, watch inventory, and read revenue at a glance: lightweight, dependable, and perfectly happy with zero signal.",
    liveUrl: "https://github.com/BrayceDominic/mysite/releases/download/judopos-v1.0/application-5c05f785-ec67-480f-a763-144906f3dccf.apk",
    image: "/images/projects/illustration-3.svg",
    alt: "JudoPOS point-of-sale app for retail businesses in Tanzania",
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
    tagline: "The market, in your pocket",
    summary:
      "Timiro FX puts live currency markets in the palm of your hand. Instant rates and conversions let East Africans compare and convert currencies in a heartbeat: clean, fast, and refreshingly simple.",
    liveUrl: "#contact",
    image: "/images/projects/illustration-1.svg",
    alt: "Timiro FX currency exchange mobile app with live rates",
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
      "Konvo is community done right. Threaded conversations, private circles, and real-time messaging give people a modern home for the talks that matter most.",
    liveUrl: "#contact",
    image: "/images/projects/illustration-2.svg",
    alt: "Konvo social messaging mobile app for community conversations",
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