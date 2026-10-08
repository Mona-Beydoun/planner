"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/plan", label: "Plan" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="nav-links">
      {links.map((link) => {
        const active =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={active ? "nav-link active" : "nav-link"}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}