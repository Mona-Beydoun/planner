import { applications } from "@/data/applications";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="dash-title">Dashboard</h1>
      <p className="dash-sub">
        Welcome to your dashboard! Track your progress and stay on top of your
        goals.
      </p>

      <div className="dash-summary">
   <span className="dash-summary-icon">
  <svg
    width="38"
    height="38"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="14" x="2" y="7" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="m8.5 14 2.5 2.5 4.5-5" />
  </svg>
</span>

        <div className="dash-summary-text">
          <p className="dash-label">Total applications</p>
          <p className="dash-count">{applications.length}</p>
          <p className="dash-message">
            Great progress! Every application is a step closer. Keep going and
            follow up on each one.
          </p>
        </div>

        <svg
          className="dash-target"
          viewBox="0 0 200 140"
          aria-hidden="true"
        >
          <path d="M20 140c0-50 30-80 60-90-10 30-5 60 20 90z" fill="#93c5fd" />
          <path d="M180 140c0-50-30-80-60-90 10 30 5 60-20 90z" fill="#bfdbfe" />
          <circle cx="100" cy="85" r="50" fill="#ffffff" />
          <circle cx="100" cy="85" r="50" fill="none" stroke="#3b82f6" strokeWidth="10" />
          <circle cx="100" cy="85" r="30" fill="none" stroke="#60a5fa" strokeWidth="9" />
          <circle cx="100" cy="85" r="11" fill="#1d4ed8" />
          <line x1="100" y1="85" x2="150" y2="35" stroke="#1e3a8a" strokeWidth="4" strokeLinecap="round" />
          <path d="M150 35l4-18 12 10 14-4-8 14 6 12-18-4z" fill="#2563eb" />
        </svg>
      </div>
    </div>
  );
}