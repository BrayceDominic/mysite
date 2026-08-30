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
  metadataBase: new URL("https://braycedominic.com/"),
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
  authors: [{ name: "Brayce Dominic", url: "https://braycedominic.com/" }],
  creator: "Brayce Dominic",
  publisher: "Brayce Dominic",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://braycedominic.com/",
    siteName: "Brayce Dominic",
    title: "Brayce Dominic — Full-Stack & Mobile Software Engineer",
    description:
      "Full-stack & mobile engineer building web apps, mobile apps, and backend systems with real revenue impact in East Africa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brayce Dominic — Full-Stack & Mobile Software Engineer",
    description:
      "Full-stack & mobile engineer building web apps, mobile apps, and backend systems with real revenue impact in East Africa.",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Loader/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
