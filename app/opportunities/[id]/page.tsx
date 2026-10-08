import Link from "next/link";
import { opportunities } from "@/data/opportunities";

export default async function OpportunityDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const selectedOpportunity = opportunities.find(
    (opportunity) => opportunity.id === id
  );

  if (!selectedOpportunity) {
    return (
      <div className="card card-blue detail-card">
        <h1>Opportunity not found</h1>
        <p>Sorry, we couldn&apos;t find an opportunity with that ID.</p>
        <Link href="/opportunities" className="button button-fancy">
          <span className="arrow">←</span> Back to opportunities
        </Link>
      </div>
    );
  }

  return (
    <div className="card card-blue detail-card">
      <div className="detail-top">
        <div>
          <h1>{selectedOpportunity.title}</h1>
          <p className="detail-company">{selectedOpportunity.company}</p>
          <div className="detail-meta">
            <span className="meta-pill">📍 {selectedOpportunity.location}</span>
            <span className="meta-pill">💼 {selectedOpportunity.type}</span>
          </div>
        </div>

        <Link href="/opportunities" className="button button-fancy secondary">
          <span className="arrow">←</span> Back to opportunities
        </Link>
      </div>

      <div className="detail-grid">
        <div className="detail-block">
          <h2>Overview</h2>
          <p>{selectedOpportunity.description}</p>
          <p>{selectedOpportunity.about}</p>
        </div>

        <div className="detail-block">
          <h2>Responsibilities</h2>
          <ul className="detail-list">
            {selectedOpportunity.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="detail-block">
          <h2>Requirements</h2>
          <ul className="detail-list">
            {selectedOpportunity.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="detail-block">
          <h2>What you get</h2>
          <ul className="detail-list">
            {selectedOpportunity.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}