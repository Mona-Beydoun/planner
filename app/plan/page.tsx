const milestones = [
  {
    step: "1",
    title: "Prepare",
    timeline: "Week 1-2",
    description: "Get the basics ready before applying anywhere.",
    actions: [
      "Improve and proofread the CV",
      "Organize the portfolio with 2-3 best projects",
      "Choose a target role, such as front-end developer",
    ],
  },
  {
    step: "2",
    title: "Practice",
    timeline: "Week 3-5",
    description: "Sharpen the skills employers look for.",
    actions: [
      "Build a small React or Next.js project",
      "Practice common JavaScript interview questions",
      "Do a mock interview with a friend",
    ],
  },
  {
    step: "3",
    title: "Apply",
    timeline: "Week 6-8",
    description: "Turn the preparation into real applications.",
    actions: [
      "Explore suitable opportunities",
      "Submit applications each week",
      "Follow up after one week",
    ],
  },
];

export default function PlanPage() {
  return (
    <div className="plan-page">
      <h1>Your Plan</h1>
      <p className="muted">
        You don&apos;t need to do everything today, just the next step.
      </p>

      <div className="plan-grid">
        {milestones.map((milestone) => (
          <div className="card card-blue" key={milestone.title}>
            <div className="step-header">
              <span className="step-number">{milestone.step}</span>
              <h2>{milestone.title}</h2>
            </div>
            <span className="plan-tag">{milestone.timeline}</span>
            <p className="plan-description">{milestone.description}</p>
            <ul className="action-list">
              {milestone.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}