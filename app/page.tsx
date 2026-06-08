import Link from "next/link";
import { posts } from "@/content/posts";
import AnimatedPage from "@/components/AnimatedPage";
import { AnimatedList, AnimatedItem } from "@/components/AnimatedList";
import ScrambleText from "@/components/ScrambleText";

const ventures = [
  { name: "OnlyBees", url: "onlybees.in", href: "https://onlybees.in/", description: "Technology, design, and growth. Built for the Northeast." },
  { name: "Lum Travels", url: "lumtravels.in", href: "https://www.lumtravels.in/", description: "Premium travel through Northeast India." },
  { name: "PRIME DSPP", url: "primedspp.com", href: "https://primedspp.com/", description: "Digital services platform, Government of Meghalaya." },
  { name: "Little Token", url: "littletoken.in", href: "https://littletoken.in/", description: "Gifting and e-commerce, built in Shillong." },
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
    description: "Curation of electronic selectors (DJ) for the 2025 dome stage at the Shillong Cherry Blossom Festival.",
  },
];


function VentureRow({ name, url, href, description }: { name: string; url: string | null; href: string | null; description: string }) {
  return (
    <div>
      <div className="venture-row-top">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700 }}>{name}</a>
        ) : (
          <span style={{ fontWeight: 700 }}>{name}</span>
        )}
        <span className="venture-row-url">{url ?? "—"}</span>
      </div>
      <p style={{ color: "var(--muted)", fontSize: "13px", marginTop: "4px", lineHeight: "1.6" }}>{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <AnimatedPage>
      {/* Photo */}
      <div className="container" style={{ paddingTop: "32px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/pfp.png" alt="Balajied Sungoh" className="pfp" />
        <p style={{ textAlign: "center", fontSize: "11px", color: "var(--muted)", marginTop: "10px", letterSpacing: "0.08em" }}>
          Shillong, Meghalaya
        </p>
      </div>

      <div className="container" style={{ paddingTop: "48px", paddingBottom: "64px" }}>

        {/* Hero */}
        <section style={{ marginBottom: "64px" }}>
          <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "12px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Shillong, Meghalaya
          </p>
          <h1 style={{ fontSize: "20px", fontWeight: 700, lineHeight: "1.4", marginBottom: "20px" }}>
            <ScrambleText text="Founder / CSO at OnlyBees." />
          </h1>
          <p style={{ fontSize: "14px", lineHeight: "1.8", color: "var(--accent)", maxWidth: "420px" }}>
            Running OnlyBees — technology, design, and growth across events, governance, hospitality, and travel in Northeast India.
          </p>
        </section>


        <hr />

        {/* Ventures */}
        <section style={{ marginTop: "48px", marginBottom: "64px" }}>
          <p className="section-label">Ventures</p>
          <AnimatedList style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {ventures.map((v) => (
              <AnimatedItem key={v.name}>
                <VentureRow {...v} />
              </AnimatedItem>
            ))}
          </AnimatedList>
        </section>

        <hr />

        {/* Creative Direction */}
        <section style={{ marginTop: "48px", marginBottom: "64px" }}>
          <p className="section-label">Creative Direction</p>
          <AnimatedList style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {creativeDirection.map((v) => (
              <AnimatedItem key={v.name}>
                <VentureRow {...v} />
              </AnimatedItem>
            ))}
          </AnimatedList>

          <div style={{ marginTop: "40px" }}>
            <p className="section-label" style={{ fontSize: "10px" }}>Curation</p>
            <AnimatedList style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {curation.map((v) => (
                <AnimatedItem key={v.name}>
                  <VentureRow {...v} />
                </AnimatedItem>
              ))}
            </AnimatedList>
          </div>
        </section>

        <hr />

        {/* Latest Writing */}
        <section style={{ marginTop: "48px" }}>
          <div className="section-header">
            <p className="section-label" style={{ marginBottom: 0 }}>Writing</p>
            <Link href="/blog" style={{ fontSize: "12px", color: "var(--muted)" }}>See all</Link>
          </div>
          <AnimatedList style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {posts.map((post) => (
              <AnimatedItem key={post.slug} className="content-row">
                <Link href={`/blog/${post.slug}`} className="content-row-title">{post.title}</Link>
                <span className="content-row-meta">{post.date}</span>
              </AnimatedItem>
            ))}
          </AnimatedList>
        </section>

      </div>
    </AnimatedPage>
  );
}
