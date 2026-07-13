import type { Metadata } from "next";
import { SiteHeader } from "../../components/site-header";

const principles = [
  {
    title: "Clarity first",
    copy:
      "I strip away noise early so the product tells a single story before the user has to work for it. That is especially important in complex property journeys where confidence matters.",
  },
  {
    title: "Systems over screens",
    copy:
      "Strong design systems keep launch work quick and make future changes feel intentional, not patched on. They also make it easier for teams to stay aligned as the product grows.",
  },
  {
    title: "Polish that earns trust",
    copy:
      "The final 10 percent matters: spacing, tone, states, and microcopy all shape how reliable a product feels. At senior level, that detail is part of the product strategy.",
  },
];

const process = [
  {
    title: "1. Understand the problem",
    copy:
      "I start with the user need, the business goal, and the constraints so the work stays focused and useful. That usually means asking what is actually slowing people down.",
  },
  {
    title: "2. Shape the system",
    copy:
      "Once the shape is clear, I bring structure to components, states, and navigation so the experience feels consistent across the product and easy for the team to maintain.",
  },
  {
    title: "3. Refine the details",
    copy:
      "I polish spacing, language, and micro-interactions to make the final product feel reliable and calm. This is where senior craft turns good work into work that earns trust.",
  },
];

export const metadata: Metadata = {
  title: "Approach | Mark Clipperton",
  description:
    "Mark Clipperton's approach to senior product design, collaboration, and systems thinking.",
};

export default function ApproachPage() {
  return (
    <main className="portfolio-shell">
      <SiteHeader activePath="/approach" />
      <div className="page-content">
        <section className="page-hero">
          <span className="eyebrow">Approach</span>
          <h1 style={{ maxWidth: "12ch" }}>A calm process for complex work.</h1>
          <p className="lede">
            My approach is simple: understand the problem clearly, design the
            system carefully, and refine the final experience until it feels easy
            to use and easy to trust. At iamproperty, that means balancing user
            needs, commercial goals, and operational realities without losing the
            human side of the product.
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

        <section className="page-note">
          <strong>What senior level looks like to me</strong>
          <p className="lede">
            It is not just about better screens. It is about clearer direction,
            better collaboration, and a product culture where design helps the
            whole team move with confidence.
          </p>
        </section>
      </div>
    </main>
  );
}
