
import { ArrowUpRight, Code2, Layers3, Check } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "WEB EXPERIENCE",
    title: "Modern Business Website",
    description:
      "A clean, responsive digital presence designed to make a brand stand out.",
    type: "lime",
    visualLabel: "WEB",
    features: ["Responsive UI", "Clear navigation"],
  },
  {
    number: "02",
    category: "DIGITAL PRODUCT",
    title: "Analytics Dashboard",
    description:
      "A structured dashboard concept for exploring data with clarity and focus.",
    type: "purple",
    visualLabel: "DATA",
    features: ["Dashboard UI", "Data visualization"],
  },
];

function Work() {
  return (
    <section className="section work-section" id="work">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              <span /> SELECTED CONCEPTS
            </span>

            <h2>
              Ideas brought
              <br />
              <span className="text-purple">to the screen.</span>
            </h2>
          </div>

          <p>
            Explore illustrative project concepts showing how thoughtful
            design and modern frontend development can work together.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <article
              className={`work-card project-${project.type}`}
              key={project.number}
            >
              <div className="work-card-top">
                <span>
                  {project.number} / {project.category}
                </span>

                <span className="work-arrow" aria-hidden="true">
                  <ArrowUpRight size={20} />
                </span>
              </div>

              <div className="work-artwork">
                <div className="work-art-circle" />
                <div className="work-art-line" />

                <span className="work-monogram" aria-hidden="true">
                  {project.visualLabel}
                
                </span>

                <div className="work-floating-panel">
                  {project.type === "lime" ? (
                    <Code2 size={16} aria-hidden="true" />
                  ) : (
                    <Layers3 size={16} aria-hidden="true" />
                  )}

                  <span>{project.features[0]}</span>
                </div>
              </div>

              <div className="work-card-copy">
                <div className="work-card-info">
                  <span className="work-project-index">
                    CONCEPT / {project.number}
                  </span>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="work-feature-list">
                    {project.features.map((feature) => (
                      <span className="work-feature" key={feature}>
                        <Check size={13} aria-hidden="true" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  className="work-card-cta"
                  href="#contact"
                  aria-label={`Discuss a project like ${project.title}`}
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="work-footer">
          <p className="work-disclaimer">
            Independent concepts. Thoughtful design. Modern development.
          </p>

          <a className="work-footer-link" href="#contact">
            Have a project in mind?
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Work;
