import Link from "next/link";

const featuredWork = [
  {
    label: "iamproperty platform",
    title: "Shaped complex property workflows into clearer, faster journeys.",
    summary:
      "Focused on the moments that slowed teams down, then brought structure to the journey with cleaner hierarchy, clearer states, and more confident decision-making.",
    impact: "Senior product impact",
  },
  {
    label: "Design leadership",
    title: "Raised the quality bar across product, engineering, and design.",
    summary:
      "Built alignment across disciplines, kept the system coherent, and helped teams move from ideas to shippable UI with less back-and-forth.",
    impact: "Cross-functional",
  },
  {
    label: "Design systems",
    title: "Created patterns that let the product scale without losing clarity.",
    summary:
      "Turned repeated UI decisions into reusable standards for components, content, and states so future work stayed consistent and efficient.",
    impact: "System thinking",
  },
];

export default function Home() {
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

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Introduction</span>
          <h1>Product design that feels calm, confident, and clear.</h1>
          <p className="lede">
            I&apos;m Mark Clipperton, a senior product designer at iamproperty.
            I work on complex property products, turning messy workflows into
            clear, usable experiences that help teams move faster and make
            better decisions.
          </p>
        </div>

        <aside className="hero-panel" aria-label="Designer snapshot">
          <div className="hero-orb hero-orb-top" aria-hidden="true" />
          <div className="hero-orb hero-orb-bottom" aria-hidden="true" />

          <figure className="portrait-card">
            <div className="portrait-fallback" aria-hidden="true">
              <span>MC</span>
            </div>
            <figcaption>
              <strong>Mark Clipperton</strong>
              <span>Senior product designer at iamproperty</span>
            </figcaption>
          </figure>

          <div className="panel-grid">
            <div className="panel-card">
              <span className="panel-label">Focus</span>
              <strong>Property-tech journeys, product strategy, and systems</strong>
            </div>
            <div className="panel-card">
              <span className="panel-label">Style</span>
              <strong>Clear hierarchy, thoughtful detail, and senior-level execution</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="work-section" id="featured-work">
        <div className="section-heading">
          <span className="eyebrow">Featured work</span>
          <h2>Selected work that shows the scale, judgment, and craft behind the role.</h2>
          <p>
            My work at iamproperty sits in the middle of product thinking,
            operational complexity, and visual clarity. The goal is always the
            same: make the product easier to use, easier to trust, and easier
            to evolve.
          </p>
        </div>

        <div className="work-grid">
          {featuredWork.map((item) => (
            <article className="work-card" key={item.label}>
              <div className="work-card-header">
                <span>{item.label}</span>
                <span>{item.impact}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
