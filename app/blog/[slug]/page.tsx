import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/content/posts";
import { siteConfig } from "@/lib/config";
import AnimatedPage from "@/components/AnimatedPage";
import { AnimatedList, AnimatedItem } from "@/components/AnimatedList";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.sections[0]?.body ?? siteConfig.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: `${post.title} | Balajied Sungoh`,
      description: post.sections[0]?.body ?? siteConfig.description,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.name],
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.sections[0]?.body ?? siteConfig.description,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    datePublished: post.date,
    url: `${siteConfig.url}/blog/${slug}`,
  };

  return (
    <AnimatedPage>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="container" style={{ paddingTop: "64px", paddingBottom: "96px" }}>

        <header style={{ marginBottom: "64px" }}>
          <h1 style={{ fontSize: "17px", fontWeight: 700, lineHeight: "1.5", marginBottom: "12px" }}>
            {post.title}
          </h1>
          <time dateTime={post.date} style={{ color: "var(--muted)", fontSize: "12px" }}>{post.date}</time>
        </header>

        <AnimatedList style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
          {post.sections.map((section, i) => (
            <AnimatedItem key={i}>
              <section>
                {section.heading && (
                  <h2 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "16px", lineHeight: "1.5" }}>
                    {section.heading}
                  </h2>
                )}

                {section.body && (
                  <p style={{ color: "var(--accent)", fontSize: "14px", lineHeight: "1.8", whiteSpace: "pre-line", marginBottom: section.stat || section.table || section.list ? "24px" : 0 }}>
                    {section.body}
                  </p>
                )}

                {section.stat && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: section.note ? "20px" : 0 }}>
                    {section.stat.map((s, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "baseline", gap: "16px", flexWrap: "wrap" }}>
                        <span style={{ fontWeight: 700, fontSize: "16px", minWidth: "56px", flexShrink: 0 }}>{s.value}</span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", alignItems: "baseline" }}>
                          <span style={{ fontSize: "13px" }}>{s.label}</span>
                          {s.note && <span style={{ color: "var(--muted)", fontSize: "12px" }}>({s.note})</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.table && (
                  <div style={{ marginBottom: section.note ? "20px" : 0 }}>
                    <div className="version-table-header">
                      {section.table.cols.map((col) => (
                        <span key={col} style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted)" }}>{col}</span>
                      ))}
                    </div>
                    <hr style={{ marginBottom: "12px" }} />
                    {section.table.rows.map((row, ri) => (
                      <div key={ri} className="version-table-row">
                        {row.map((cell, ci) => {
                          const isObj = typeof cell === "object";
                          return (
                            <span key={ci} style={{
                              fontSize: "13px",
                              fontWeight: isObj && cell.highlight ? 700 : 400,
                              color: isObj && cell.highlight ? "var(--text)" : "var(--accent)",
                            }}>
                              {isObj ? cell.text : cell}
                            </span>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                )}

                {section.list && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    {section.list.map((item) => (
                      <div key={item.num} style={{ display: "flex", gap: "20px" }}>
                        <span style={{ color: "var(--muted)", fontSize: "12px", minWidth: "20px", paddingTop: "2px", flexShrink: 0 }}>{item.num}</span>
                        <div>
                          <p style={{ fontWeight: 700, fontSize: "14px", marginBottom: "4px" }}>{item.heading}</p>
                          <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: "1.6" }}>{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.note && (
                  <p style={{ color: "var(--muted)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "16px", whiteSpace: "pre-line", lineHeight: "1.8" }}>
                    {section.note}
                  </p>
                )}
              </section>
            </AnimatedItem>
          ))}
        </AnimatedList>

      </div>
    </AnimatedPage>
  );
}
