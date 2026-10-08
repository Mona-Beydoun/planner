"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/dashboard", label: "Overview", icon: "home" },
  { href: "/dashboard/applications", label: "Applications", icon: "doc" },
];

function Icon({ name }: { name: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "home" ? (
        <>
          <path d="M3 11 12 3l9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-6h4v6" />
        </>
      ) : (
        <>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6M9 17h6" />
        </>
      )}
    </svg>
  );
}

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="dash-menu">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={
            pathname === item.href ? "dash-link dash-link-active" : "dash-link"
          }
        >
          <Icon name={item.icon} />
          {item.label}
        </Link>
      ))}
    </nav>
  );
}