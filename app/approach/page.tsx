import type { Metadata } from "next";
import Link from "next/link";

const principles = [
  {
    title: "Clarity first",
    copy:
      "I strip away noise early so the product tells a single story before the user has to work for it.",
  },
  {
    title: "Systems over screens",
    copy:
      "Strong design systems keep launch work quick and make future changes feel intentional, not patched on.",
  },
  {
    title: "Polish that earns trust",
    copy:
      "The final 10 percent matters: spacing, tone, states, and microcopy all shape how reliable a product feels.",
  },
];

const process = [
  {
    title: "1. Understand the problem",
    copy:
      "I start with the user need, the business goal, and the constraints so the work stays focused and useful.",
  },
  {
    title: "2. Shape the system",
    copy:
      "Once the shape is clear, I bring structure to components, states, and navigation so the experience feels consistent.",
  },
  {
    title: "3. Refine the details",
    copy:
      "I polish spacing, language, and micro-interactions to make the final product feel reliable and calm.",
  },
];

export const metadata: Metadata = {
  title: "Approach | Mark Clipperton",
  description: "Mark Clipperton's approach to product design and collaboration.",
};

export default function ApproachPage() {
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
        <span className="eyebrow">Approach</span>
        <h1 style={{ maxWidth: "12ch" }}>A calm process for complex work.</h1>
        <p className="lede">
          My approach is simple: understand the problem clearly, design the
          system carefully, and refine the final experience until it feels easy
          to use and easy to trust.
        </p>
      </section>

      <section className="detail-grid" aria-label="Working principles">
        {principles.map((principle) => (
          <article className="detail-card" key={principle.title}>
            <h3>{principle.title}</h3>
            <p>{principle.copy}</p>
          </article>
        ))}
      </section>

      <section className="section">
        <span className="eyebrow">Process</span>
        <div className="detail-grid" style={{ marginTop: "22px" }}>
          {process.map((step) => (
            <article className="detail-card" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
