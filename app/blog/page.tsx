import Link from "next/link";
import { posts } from "@/content/posts";
import AnimatedPage from "@/components/AnimatedPage";
import { AnimatedList, AnimatedItem } from "@/components/AnimatedList";

export default function Blog() {
  return (
    <AnimatedPage>
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
