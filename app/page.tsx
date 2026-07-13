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

const stats = [
  { value: "9", label: "years designing products" },
  { value: "28", label: "shipping cycles led" },
  { value: "11", label: "cross-functional launches" },
];

const capabilities = [
  "Product strategy",
  "Design systems",
  "Interaction design",
  "Prototyping",
  "Accessibility",
  "Content design",
];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <header className="topbar">
        <a className="brand-mark" href="#top">
          <span className="brand-dot" aria-hidden="true" />
          Mark Clipperton
        </a>

        <nav className="topnav" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Product designer • systems thinker • calm strategist</span>
          <h1>Designing products that feel clear, confident, and easy to trust.</h1>
          <p className="lede">
            I’m Mark Clipperton, a product designer who helps teams turn
            complicated ideas into calm, polished experiences. I work across
            strategy, interface design, and prototyping to move products from
            concept to launch without losing the details that matter.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View selected work
            </a>
            <a className="button button-secondary" href="#contact">
              Start a conversation
            </a>
          </div>
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
              <strong>Startup products, systems thinking, and launch-ready UX</strong>
            </div>
            <div className="panel-card">
              <span className="panel-label">Style</span>
              <strong>Editorial layouts, quiet confidence, and crisp hierarchy</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="stats-row" aria-label="Experience summary">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section className="capabilities-section" aria-label="Capabilities">
        {capabilities.map((capability) => (
          <span className="chip" key={capability}>
            {capability}
          </span>
        ))}
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <span className="eyebrow">Selected work</span>
          <h2>Focused on products where clarity changes the result.</h2>
          <p>
            A few projects that show how I think: structure first, polish second,
            then iterate until the experience feels obvious.
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

      <section className="principles-section" id="approach">
        <div className="section-heading">
          <span className="eyebrow">Working style</span>
          <h2>Steady process, high standards, no drama.</h2>
        </div>

        <div className="principles-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <span className="eyebrow">Let’s build something worth shipping</span>
          <h2>Available for product design leadership, concept work, and redesigns.</h2>
        </div>

        <p>
          If your team needs a designer who can simplify the complicated, protect
          the details, and keep momentum moving, I’d love to hear what you’re
          building.
        </p>

        <div className="contact-actions">
          <a className="button button-primary" href="mailto:mark@markclipperton.design">
            mark@markclipperton.design
          </a>
          <a className="button button-secondary" href="https://uk.linkedin.com/in/markclipperton">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
