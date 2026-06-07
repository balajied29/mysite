import Link from "next/link";
import { posts } from "@/content/posts";

export default function Blog() {
  return (
    <div className="container" style={{ paddingTop: "64px", paddingBottom: "96px" }}>

      <section style={{ marginBottom: "64px" }}>
        <h1 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "16px" }}>Blog</h1>
        <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.7" }}>
          Writing on building, design, Northeast India,
          and things worth thinking about.
        </p>
      </section>

      <hr />

      <section style={{ marginTop: "40px" }}>
        <p className="section-label">Archive</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {posts.map((post) => (
            <div key={post.slug} className="content-row">
              <Link href={`/blog/${post.slug}`} className="content-row-title">{post.title}</Link>
              <span className="content-row-meta">{post.date}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
