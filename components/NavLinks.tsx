"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/work", label: "Work" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="nav-links">
      {links.map(({ href, label }) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            style={{ fontWeight: active ? 700 : 400, color: active ? "var(--text)" : "var(--muted)" }}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
