import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/lib/config";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | Balajied Sungoh`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: "/pfp.png", width: 1200, height: 630, alt: "Balajied Sungoh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.handle,
    images: ["/pfp.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: siteConfig.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Balajied Sungoh",
  url: siteConfig.url,
  image: `${siteConfig.url}/pfp.png`,
  jobTitle: "Founder & Creative Director",
  worksFor: { "@type": "Organization", name: "OnlyBees", url: "https://onlybees.in" },
  address: { "@type": "PostalAddress", addressLocality: "Shillong", addressRegion: "Meghalaya", addressCountry: "IN" },
  sameAs: [
    "https://github.com/balajied29",
    "https://x.com/itsbalajied",
    "https://www.linkedin.com/in/balajied/",
  ],
};

function Nav() {
  return (
    <nav style={{ borderBottom: "1px solid var(--divider)" }}>
      <div className="container">
        <div className="nav-inner">
          <Link href="/" style={{ fontWeight: 700, fontSize: "14px" }}>
            Balajied Sungoh
          </Link>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/work">Work</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--divider)", marginTop: "96px" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "20px", paddingBottom: "32px", fontSize: "12px", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <a href="https://github.com/balajied29" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://x.com/itsbalajied" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.linkedin.com/in/balajied/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:business@onlybees.in">Contact</a>
        </div>
        <span style={{ color: "var(--muted)" }}>© 2026</span>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
