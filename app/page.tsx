import { SiteHeader } from "../components/site-header";

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
      <SiteHeader activePath="/" />
      <div className="page-content">
        <section className="home-hero" id="top">
          <div className="home-hero-visual" aria-hidden="true">
            <div className="home-hero-photo">
              <img
                alt=""
                className="home-hero-photo-image"
                height="248"
                src="/mark-clipperton.jpg"
                width="248"
              />
            </div>

            <div className="home-hero-badge">
              <span>Currently Product</span>
              <span>Designer for CRM at</span>
              <span>iamproperty</span>
            </div>
          </div>

          <div className="home-hero-copy">
            <h1>Hi I&apos;m Mark!</h1>

            <p className="home-hero-introtext">
              A <strong>Product Designer</strong> based in the North East of
              England.
            </p>

            <p className="home-hero-lede">
              For over 6 years I&apos;ve designed digital products that help
              businesses grow and make a meaningful impact.
            </p>
          </div>
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
      </div>
    </main>
  );
}
