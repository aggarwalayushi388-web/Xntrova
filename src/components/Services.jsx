
import {
  ArrowUpRight,
  Code2,
  Layers3,
  Smartphone,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Layers3,
    title: "UI/UX Design",
    description:
      "Clean, intuitive interfaces designed around user needs and business goals.",
    tags: ["Wireframes", "Prototyping"],
  },
  {
    number: "02",
    icon: Code2,
    title: "Web Development",
    description:
      "Responsive websites built with modern tools and maintainable code.",
    tags: ["React", "Frontend"],
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Responsive Experiences",
    description:
      "Consistent digital experiences across mobile, tablet and desktop screens.",
    tags: ["Mobile-first", "Accessibility"],
  },
  {
    number: "04",
    icon: Workflow,
    title: "Digital Solutions",
    description:
      "Practical technology solutions that help simplify everyday workflows.",
    tags: ["Strategy", "Automation"],
  },
];

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              <span /> WHAT WE DO
            </span>
            <h2>
              Technology with
              <br />
              <span className="text-purple">a clear purpose.</span>
            </h2>
          </div>

          <p>
            From the first idea to the final interface, we focus on creating
            useful, accessible and reliable digital experiences.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <div className="service-icon">
                    <Icon size={23} />
                  </div>
                  <span className="service-number">{service.number}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  className="service-link"
                  href="#contact"
                  aria-label={`Enquire about ${service.title}`}
                >
                  <ArrowUpRight size={20} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
