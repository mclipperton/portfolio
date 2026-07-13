import type { Metadata } from "next";
import Link from "next/link";

const projects = [
  {
    label: "FinTech onboarding",
    title: "Turned a long account setup into a clear, reassuring flow.",
    summary:
      "Reduced friction with progressive disclosure, sharper copy, and tighter guidance through the final verification step.",
    impact: "22% lift in completion",
  },
  {
    label: "AI workspace",
    title: "Shaped a dashboard that helps teams spot signal fast.",
    summary:
      "Reworked the hierarchy, simplified navigation, and introduced a calmer canvas for high-density product work.",
    impact: "31% faster discovery",
  },
  {
    label: "Health app",
    title: "Made a clinically dense journey feel calm and predictable.",
    summary:
      "Balanced motion, progress cues, and accessible UI patterns so people always know what happens next.",
    impact: "4.8/5 usability score",
  },
  {
    label: "Operations platform",
    title: "Converted a busy admin tool into a more legible system.",
    summary:
      "Simplified table density, reworked filters, and created a reusable pattern library for recurring actions.",
    impact: "Fewer support tickets",
  },
  {
    label: "Consumer app refresh",
    title: "Gave a mature product a clearer visual hierarchy.",
    summary:
      "Aligned the UI system, tightened spacing, and improved the product story through the homepage and settings flow.",
    impact: "Higher feature adoption",
  },
  {
    label: "Internal design system",
    title: "Built a shared language for teams shipping quickly.",
    summary:
      "Defined the base components, content patterns, and state logic so future work felt consistent from day one.",
    impact: "Faster delivery",
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
        <h1 style={{ maxWidth: "11ch" }}>A wider look at selected projects.</h1>
        <p className="lede">
          This page collects more of the product thinking behind the portfolio:
          simplifying the problem, shaping the system, and making the final
          experience feel calm and easy to trust.
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
          move toward the system and polish. That helps the team make faster
          decisions and keeps the product story consistent.
        </p>
      </section>
    </main>
  );
}
