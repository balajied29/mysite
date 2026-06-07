import Link from "next/link";
import { posts } from "@/content/posts";

const ventures = [
  { name: "OnlyBees", url: "onlybees.in", href: "https://onlybees.in/", description: "Full-stack tech, design, and events." },
  { name: "Lum Travels", url: "lumtravels.in", href: "https://www.lumtravels.in/", description: "Premium Northeast India travel." },
  { name: "PRIME DSPP", url: "primedspp.com", href: "https://primedspp.com/", description: "Government of Meghalaya digital services." },
];

const creativeDirection = [
  {
    name: "Video Portfolio",
    url: "youtube.com",
    href: "https://youtube.com/playlist?list=PLU57vdzzIkqMkXuXE1iUGoUFqkX5cIqzm",
    description: "Directed work across brand, event, and documentary.",
  },
];

const curation = [
  {
    name: "CLTR",
    url: "instagram.com/cltr.events",
    href: "https://www.instagram.com/cltr.events/",
    description: "Culture and live entertainment brand.",
  },
  {
    name: "Cherry Blossom Dome Stage 2025",
    url: "instagram.com",
    href: "https://www.instagram.com/p/DQePpY5k0Wv/",
    description: "Stage design, production, and lineup curation for the Shillong Cherry Blossom Festival.",
  },
];

function VentureRow({ name, url, href, description }: { name: string; url: string | null; href: string | null; description: string }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{ fontWeight: 700 }}>{name}</span>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)", fontSize: "12px" }}>
            {url}
          </a>
        ) : (
          <span style={{ color: "var(--muted)", fontSize: "12px" }}>—</span>
        )}
      </div>
      <p style={{ color: "var(--muted)", fontSize: "13px", marginTop: "4px" }}>{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="container" style={{ paddingTop: "64px", paddingBottom: "64px" }}>

      {/* Hero */}
      <section style={{ marginBottom: "80px" }}>
        <p style={{ fontSize: "16px", lineHeight: "1.7", whiteSpace: "pre-line" }}>
          {`I'm a founder based in Shillong, Meghalaya. I run OnlyBees — a full-stack technology and design company working across events, governance, hospitality, and travel. Built from an unlikely city. Not bothered by that.`}
        </p>
      </section>

      <hr />

      {/* Ventures */}
      <section style={{ marginTop: "64px", marginBottom: "80px" }}>
        <p className="section-label">Ventures</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {ventures.map((v) => <VentureRow key={v.name} {...v} />)}
        </div>
      </section>

      <hr />

      {/* Creative Direction */}
      <section style={{ marginTop: "64px", marginBottom: "80px" }}>
        <p className="section-label">Creative Direction</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {creativeDirection.map((v) => <VentureRow key={v.name} {...v} />)}
        </div>

        <div style={{ marginTop: "40px" }}>
          <p className="section-label" style={{ fontSize: "10px" }}>Curation</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {curation.map((v) => <VentureRow key={v.name} {...v} />)}
          </div>
        </div>
      </section>

      <hr />

      {/* Latest Writing */}
      <section style={{ marginTop: "64px", marginBottom: "80px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "24px" }}>
          <p className="section-label" style={{ marginBottom: 0 }}>Latest Writing</p>
          <Link href="/blog" style={{ fontSize: "12px", color: "var(--muted)" }}>See all</Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {posts.map((post) => (
            <div key={post.slug} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <Link href={`/blog/${post.slug}`} style={{ fontSize: "14px" }}>{post.title}</Link>
              <span style={{ color: "var(--muted)", fontSize: "12px", whiteSpace: "nowrap", marginLeft: "16px" }}>{post.date}</span>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}
