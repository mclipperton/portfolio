import Link from "next/link";

const featuredWork = [
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
            I&apos;m Mark Clipperton, a product designer focused on making
            complicated products easier to understand and easier to trust.
            I work across strategy, systems, and interface design to help teams
            ship with more clarity and less friction.
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
              <span>Product designer based in the UK</span>
            </figcaption>
          </figure>

          <div className="panel-grid">
            <div className="panel-card">
              <span className="panel-label">Focus</span>
              <strong>Product strategy, systems thinking, and launch-ready UX</strong>
            </div>
            <div className="panel-card">
              <span className="panel-label">Style</span>
              <strong>Editorial layouts, quiet confidence, and crisp hierarchy</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="work-section" id="featured-work">
        <div className="section-heading">
          <span className="eyebrow">Featured work</span>
          <h2>A few projects that show how I think: structure first, polish second.</h2>
          <p>
            These examples reflect a practical approach to product design:
            simplify the problem, make the system consistent, then refine the
            experience until it feels obvious.
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
