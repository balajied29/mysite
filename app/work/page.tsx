import type { Metadata } from "next";
import AnimatedPage from "@/components/AnimatedPage";
import { AnimatedList, AnimatedItem } from "@/components/AnimatedList";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects by Balajied Sungoh in technology, design, events, and infrastructure across Northeast India.",
  alternates: { canonical: "/work" },
  openGraph: { title: "Work — Balajied Sungoh", url: "/work" },
};

const projects = [
  {
    name: "OnlyBees",
    year: "2021—",
    description: "Full-stack technology, design, and growth company. Events, governance, hospitality, travel.",
    tags: ["technology", "design", "growth", "performance marketing"],
    href: "https://onlybees.in/",
  },
  {
    name: "PRIME DSPP",
    year: "2023—",
    description: "Digital services platform for the Government of Meghalaya.",
    tags: ["gov-tech", "product"],
    href: "https://primedspp.com/",
  },
  {
    name: "Lum Travels",
    year: "2023—",
    description: "Premium travel experiences across Northeast India.",
    tags: ["hospitality", "travel"],
    href: "https://www.lumtravels.in/",
  },
  {
    name: "Little Token",
    year: "2023—",
    description: "Gifting and e-commerce platform.",
    tags: ["e-commerce", "product"],
    href: "https://littletoken.in/",
  },
  {
    name: "CLTR",
    year: "2022—",
    description: "Culture and live entertainment brand based in Shillong.",
    tags: ["events", "curation"],
    href: "https://www.instagram.com/cltr.events/",
  },
  {
    name: "Cherry Blossom Dome Stage",
    year: "2025",
    description: "Curation of electronic selectors (DJ) for the 2025 dome stage at the Shillong Cherry Blossom Festival.",
    tags: ["events", "creative direction"],
    href: "https://www.instagram.com/p/DQePpY5k0Wv/",
  },
  {
    name: "Teer Quant",
    year: "2024—",
    description: "Quantitative model for Meghalaya's archery lottery. 18 months, five rebuilds, one breakthrough.",
    tags: ["research", "quant"],
    href: "/blog/teer-project",
  },
];

export default function Work() {
  return (
    <AnimatedPage>
      <div className="container" style={{ paddingTop: "64px", paddingBottom: "96px" }}>

        <section style={{ marginBottom: "64px" }}>
          <h1 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "16px" }}>Work</h1>
          <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.7" }}>
            Selected projects in technology, design,<br />
            and infrastructure.
          </p>
        </section>

        <hr />

        <section style={{ marginTop: "40px" }}>
          <AnimatedList style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {projects.map((p) => (
              <AnimatedItem key={p.name}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                  <a
                    href={p.href}
                    target={p.href.startsWith("http") ? "_blank" : undefined}
                    rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ fontWeight: 700, fontSize: "14px" }}
                  >
                    {p.name}
                  </a>
                  <span style={{ color: "var(--muted)", fontSize: "12px" }}>{p.year}</span>
                </div>
                <p style={{ color: "var(--muted)", fontSize: "13px", marginBottom: "10px", lineHeight: "1.6" }}>{p.description}</p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {p.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: "11px", color: "var(--muted)", border: "1px solid var(--divider)", padding: "2px 8px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </AnimatedItem>
            ))}
          </AnimatedList>
        </section>

      </div>
    </AnimatedPage>
  );
}
