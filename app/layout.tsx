import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import NavLinks from "@/components/NavLinks";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planner",
  description:
    "Plan your next steps, explore opportunities, and track your applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="site-header">
          <nav className="nav">
            <Link href="/" className="brand">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="#1e3a8a"
                aria-hidden="true"
              >
                <path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3z" />
                <path d="M5 13.2V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.8l-7 3.8-7-3.8z" />
              </svg>
              <span>PLANNER</span>
            </Link>
            <NavLinks />
          </nav>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}