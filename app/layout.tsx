import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import "./globals.css";
import "./styles/site.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_BO",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  other: {
    "site-kind": "other",
    "page-type": "service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={hanken.variable}
      data-type="service"
      data-radius="soft"
      data-buttons="arrow"
      data-motion="live"
    >
      <body>
        <a className="skip-link" href="#main">Saltar al contenido</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Script src="/assets/system.js" strategy="afterInteractive" type="module" />
        <Script src="/assets/motion/motion.js" strategy="afterInteractive" type="module" />
      </body>
    </html>
  );
}
