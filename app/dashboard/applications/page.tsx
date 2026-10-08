import { applications } from "@/data/applications";

function statusClass(status: string) {
  return status === "Under review"
    ? "status status-review"
    : "status status-applied";
}

export default function ApplicationsPage() {
  return (
    <div>
      <h1 className="dash-title">Applications</h1>
      <p className="dash-sub">Everything you have already applied to.</p>

      <div className="dash-table">
        <div className="dash-row dash-head">
          <span>Job Title</span>
          <span>Company</span>
          <span>Status</span>
        </div>

        {applications.map((application) => (
          <div className="dash-row" key={application.id}>
            <span className="dash-job">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              {application.title}
            </span>
            <span>{application.company}</span>
            <span>
              <span className={statusClass(application.status)}>
                {application.status}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}