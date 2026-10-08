import DashboardNav from "@/components/DashboardNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="dashboard-shell">
      <aside className="dash-sidebar">
        <DashboardNav />

        <svg
          className="dash-mountain"
          viewBox="0 0 240 260"
          aria-hidden="true"
        >
          <circle cx="50" cy="60" r="0" />
          <ellipse cx="40" cy="105" rx="26" ry="9" fill="#ffffff" opacity="0.7" />
          <ellipse cx="200" cy="80" rx="22" ry="8" fill="#ffffff" opacity="0.7" />
          <path d="M0 260V170L70 120l40 40 50-90 80 110v90z" fill="#93c5fd" />
          <path d="M0 260V200L90 130l50 60 100-70v140z" fill="#3b82f6" />
          <path
            d="M120 60 150 120 90 120z"
            fill="#2563eb"
            opacity="0"
          />
          <path
            d="M160 70 188 130 150 120z"
            fill="#1d4ed8"
            opacity="0.6"
          />
          <path
            d="M100 262c60-40 -20-60 40-90s10-50 30-70"
            stroke="#dbeafe"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
          />
          <line x1="160" y1="30" x2="160" y2="72" stroke="#1e3a8a" strokeWidth="3" />
          <path d="M160 30h26l-6 8 6 8h-26z" fill="#2563eb" />
        </svg>
      </aside>

      <div className="dash-main">{children}</div>
    </section>
  );
}