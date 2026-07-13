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

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "mailto:mark.clipperton@outlook.com", label: "Contact" },
];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <header className="topbar">
        <Link className="brand-mark" href="/">
          Mark Clipperton
        </Link>

        <nav className="topnav" aria-label="Primary">
          {navItems.map((item) =>
            item.href.startsWith("mailto:") ? (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                aria-current={item.href === "/" ? "page" : undefined}
                href={item.href}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </header>

      <section className="home-hero" id="top">
        <div className="home-hero-intro">
          <div className="hero-avatar" aria-hidden="true">
            MC
          </div>

          <div className="home-hero-copy">
            <span className="hero-kicker">Hi I&apos;m Mark!</span>
            <h1>Product Designer at iamproperty.</h1>
          </div>
        </div>

        <p className="home-hero-lede">
          Product Designer based in the North East of England. For over 6
          years I&apos;ve designed digital products that help businesses grow.
        </p>
      </section>

      <section className="featured-section" id="featured-work">
        <div className="section-heading">
          <span className="eyebrow">Featured work</span>
          <h2>Selected projects that show how I think, collaborate, and ship.</h2>
          <p>
            My work at iamproperty sits in the middle of product thinking,
            operational complexity, and visual clarity. The goal is always the
            same:make the product easier to use, easier to trust, and easier
            to evolve.
          </p>
        </div>

        <div className="featured-grid">
          {featuredWork.map((item) => (
            <article className="featured-card" key={item.label}>
              <div className="featured-card-media" aria-hidden="true">
                <span>{item.label}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <div className="featured-card-footer">
                <span>{item.impact}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
