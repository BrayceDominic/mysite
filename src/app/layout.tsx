import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Loader from "./components/loader";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.braycedominic.com"),
  title: {
    default: "Brayce Dominic — Full-Stack & Mobile Software Engineer in Tanzania",
    template: "%s | Brayce Dominic",
  },
  description:
    "Full-stack & mobile engineer building web apps, mobile apps, and backend systems with real revenue impact in East Africa. From M-Pesa billing platforms to healthcare portals.",
  keywords: [
    "Brayce Dominic",
    "Full-Stack Engineer",
    "Software Developer Tanzania",
    "Mobile App Developer",
    "M-Pesa Integration",
    "Web Developer Dar es Salaam",
    "Flutter Developer",
    "Healthcare Portals",
    "E-Commerce Development",
    "React Developer",
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
    title: "Brayce Dominic — Full-Stack & Mobile Software Engineer",
    description:
      "Full-stack & mobile engineer building web apps, mobile apps, and backend systems with real revenue impact in East Africa.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Brayce Dominic — Full-Stack & Mobile Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brayce Dominic — Full-Stack & Mobile Software Engineer",
    description:
      "Full-stack & mobile engineer building web apps, mobile apps, and backend systems with real revenue impact in East Africa.",
    images: ["/og-image.svg"],
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
    jobTitle: "Full-Stack & Mobile Software Engineer",
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
      </body>
    </html>
  );
}
