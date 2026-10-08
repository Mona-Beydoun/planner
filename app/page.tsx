import Link from "next/link";

function Icon({ name }: { name: "compass" | "briefcase" | "trend" | "star" | "arrow" }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "compass":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common}>
          <rect width="20" height="14" x="2" y="7" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "trend":
      return (
        <svg {...common}>
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );
  }
}

const features = [
  {
    icon: "compass" as const,
    title: "Plan Your Journey",
    text: "Set your goals and track your progress.",
  },
  {
    icon: "briefcase" as const,
    title: "Find Opportunities",
    text: "Discover jobs and internships that fit your skills.",
  },
  {
    icon: "trend" as const,
    title: "Build Your Future",
    text: "Gain experience and grow your career.",
  },
  {
    icon: "star" as const,
    title: "You Can Do It",
    text: "Small steps lead to big dreams.",
  },
];

export default function HomePage() {
  return (
    <section className="home">
      <div className="hero-content">
       

        <h1 className="hero-title">
   
          <span>Welcome to PLANNER</span>
        </h1>

        <p className="hero-text">
         Explore
          your plan, find jobs, and build your future.
        </p>

        <div className="hero-buttons">
          <Link href="/opportunities" className="hero-btn">
            <Icon name="compass" /> Explore Opportunities{" "}
            <span className="arrow">
              <Icon name="arrow" />
            </span>
          </Link>
          <Link href="/plan" className="hero-btn hero-btn-outline">
            See the plan
          </Link>
        </div>
      </div>

      <div className="features">
        {features.map((feature) => (
          <div className="feature" key={feature.title}>
            <span className="feature-icon">
              <Icon name={feature.icon} />
            </span>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}