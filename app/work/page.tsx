import type { Metadata } from "next";
import Link from "next/link";

const projects = [
  {
    label: "iamproperty platform",
    title: "Simplified complex agent workflows across a high-volume product.",
    summary:
      "Focused on the points where people lost time or confidence, then reshaped the journey so it felt clearer for everyday use and easier to scale.",
    impact: "Senior impact",
  },
  {
    label: "Product leadership",
    title: "Aligned product, engineering, and stakeholders around a shared outcome.",
    summary:
      "Used discovery, conversation, and strong design rationale to move teams from broad ideas to confident decisions with less rework.",
    impact: "Cross-functional",
  },
  {
    label: "Design system",
    title: "Built reusable patterns that improved consistency across features.",
    summary:
      "Defined components, content patterns, and states that helped the product stay coherent as new functionality was added.",
    impact: "System thinking",
  },
  {
    label: "Operational tooling",
    title: "Made a dense internal interface easier to scan and act on.",
    summary:
      "Reduced friction in routine workflows by improving hierarchy, patterns, and the feedback users get while moving through tasks.",
    impact: "Efficiency",
  },
  {
    label: "Discovery and research",
    title: "Used evidence to keep design decisions grounded in real needs.",
    summary:
      "Paired product thinking with user insight so the output balanced business goals, operational needs, and user confidence.",
    impact: "Evidence-led",
  },
  {
    label: "Senior craft",
    title: "Raised the bar on detail, accessibility, and final execution.",
    summary:
      "Used the final layer of polish to make products feel stable, intentional, and worthy of the team behind them.",
    impact: "High craft",
  },
];

export const metadata: Metadata = {
  title: "Work | Mark Clipperton",
  description: "Selected product design work by Mark Clipperton.",
};

export default function WorkPage() {
  return (
    <main className="portfolio-shell">
      <header className="topbar">
        <Link className="brand-mark" href="/">
          <span className="brand-dot" aria-hidden="true" />
          Mark Clipperton
        </Link>

        <nav className="topnav" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
          <Link href="/approach">Approach</Link>
          <a href="mailto:mark.clipperton@outlook.com">Contact</a>
        </nav>
      </header>

      <section className="page-hero">
        <span className="eyebrow">Work</span>
        <h1 style={{ maxWidth: "11ch" }}>A wider look at the work behind the role.</h1>
        <p className="lede">
          This page gives a fuller view of how I work at senior level: spotting
          complexity early, bringing clarity to the system, and making sure the
          final product feels dependable for the people using it every day.
        </p>
      </section>

      <section className="work-section">
        <div className="work-grid">
          {projects.map((project) => (
            <article className="work-card" key={project.label}>
              <div className="work-card-header">
                <span>{project.label}</span>
                <span>{project.impact}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-note">
        <strong>How I like to work</strong>
        <p className="lede">
          I usually start with the parts that create the most confusion, then
          move toward the system and polish. At senior level, that means helping
          teams make sharper trade-offs, keeping momentum high, and leaving the
          product in a stronger place than where it started.
        </p>
      </section>
    </main>
  );
}
