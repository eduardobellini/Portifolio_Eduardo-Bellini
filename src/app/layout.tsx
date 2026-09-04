import type { Metadata, Viewport } from "next";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Eduardo Bellini | Desenvolvedor Full Stack",
  description: "Portfólio de Eduardo Bellini — desenvolvimento frontend, backend e cloud com React, Next.js, Node.js e AWS.",
  keywords: ["Eduardo Bellini", "desenvolvedor full stack", "React", "Next.js", "Node.js", "AWS"],
  authors: [{ name: "Eduardo Bellini" }],
  openGraph: {
    title: "Eduardo Bellini | Desenvolvedor Full Stack",
    description: "Da interface à API: produtos web funcionais, responsivos e bem construídos.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Eduardo Bellini — Desenvolvedor Full Stack" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Bellini | Desenvolvedor Full Stack",
    description: "Da interface à API: produtos web funcionais, responsivos e bem construídos.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#0a0d0b", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><SiteChrome>{children}</SiteChrome></body></html>;
}
