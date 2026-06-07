import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Balajied Sungoh",
  description: "Founder building technology infrastructure for Northeast India.",
};

function Nav() {
  return (
    <nav style={{ borderBottom: "1px solid var(--divider)", marginBottom: "0" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "20px", paddingBottom: "20px" }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: "14px" }}>
          Balajied Sungoh
        </Link>
        <div style={{ display: "flex", gap: "24px", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/work">Work</Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--divider)", marginTop: "96px" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "20px", paddingBottom: "32px", fontSize: "12px" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="https://github.com/balajied29" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://x.com/itsbalajied" target="_blank" rel="noopener noreferrer">X</a>
          <a href="#">LinkedIn</a>
          <a href="#">Contact</a>
        </div>
        <span style={{ color: "var(--muted)" }}>© 2026</span>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
