import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Loader from "./components/loader";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.braycedominic.com"),
  title: {
    default: "Brayce Dominic, Web & Mobile App Developer in Dar es Salaam, Tanzania",
    template: "%s | Brayce Dominic",
  },
  description:
    "Web & mobile engineer in Dar es Salaam crafting revenue-grade SaaS, mobile-money payment systems, event-tech, food-ordering, and POS experiences for East Africa. Flutter, Next.js, React, and Node.js.",
  keywords: [
    "Brayce Dominic",
    "Web Developer Dar es Salaam",
    "Mobile App Developer Tanzania",
    "Flutter Developer",
    "Next.js Developer",
    "React Developer",
    "Mobile Money Integration",
    "Payment Integration Tanzania",
    "SaaS Development Tanzania",
    "Event Management Platform",
    "POS App Development",
    "Food Ordering App",
    "Loyalty Software",
    "PropTech Marketplace",
  ],
  authors: [{ name: "Brayce Dominic", url: "https://www.braycedominic.com" }],
  creator: "Brayce Dominic",
  publisher: "Brayce Dominic",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.braycedominic.com/",
    siteName: "Brayce Dominic",
    title: "Brayce Dominic, Web & Mobile App Developer in Tanzania",
description:
      "Web & mobile engineer in Dar es Salaam crafting revenue-grade SaaS, mobile-money payment systems, event-tech, and POS experiences for East Africa. Flutter, Next.js, React, and Node.js.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brayce Dominic, Web & Mobile App Developer in Tanzania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brayce Dominic, Web & Mobile App Developer in Tanzania",
    description:
      "Web & mobile engineer in Dar es Salaam crafting revenue-grade SaaS, mobile-money payment systems, event-tech, and POS experiences for East Africa. Flutter, Next.js, React, and Node.js.",
    images: ["/og-image.png"],
    creator: "@novyrab",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Brayce Dominic",
    url: "https://www.braycedominic.com/",
    email: "mailto:braycedominic@gmail.com",
    jobTitle: "Fullstack Software Developer",
    description:
      "Web & mobile engineer in Dar es Salaam, Tanzania crafting SaaS platforms, mobile-money payment systems, event-tech, food-ordering, and POS experiences for East Africa.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dar es Salaam",
      addressCountry: "TZ",
    },
    sameAs: [
      "https://github.com/BrayceDominic",
      "https://twitter.com/novyrab",
      "https://linkedin.com/in/brayce-dominic-9652a8263",
    ],
    knowsAbout: [
      "Flutter",
      "Dart",
      "Next.js",
      "React",
      "Node.js",
      "Mobile Money Integration",
      "SaaS Development",
      "Mobile App Development",
      "Point of Sale Systems",
      "Event Management Software",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className={inter.className}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Loader/>
        <Header/>
        <main id="main">{children}</main>
        <Footer/>
        <WhatsAppButton/>
        <BackToTop/>
      </body>
    </html>
  );
}
