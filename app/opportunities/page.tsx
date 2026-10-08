import Link from "next/link";
import { opportunities } from "@/data/opportunities";

export default function OpportunitiesPage() {
  return (
    <div className="opp-page">
      <h1>Opportunities</h1>
      <p className="muted">
        Compare a few options before deciding where to apply.
      </p>

      <div className="grid">
        {opportunities.map((opportunity) => (
          <div className="card card-blue" key={opportunity.id}>
            <div>
              <h2>{opportunity.title}</h2>
              <p className="opp-company">{opportunity.company}</p>
              <p className="muted">📍 {opportunity.location}</p>
            </div>
            <Link
              href={`/opportunities/${opportunity.id}`}
              className="button button-fancy"
            >
              View opportunity <span className="arrow">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}