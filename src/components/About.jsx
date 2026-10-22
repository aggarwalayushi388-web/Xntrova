
import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const values = [
  "User-focused design decisions",
  "Clean and maintainable development",
  "Responsive layouts across devices",
  "Practical solutions to real problems",
];

function About() {
  return (
    <section className="section section-dark about-section" id="about">
      <div className="container about-layout">
        {/* LEFT: Xntrova visual */}
        <div className="about-visual">
          <div className="about-grid" aria-hidden="true" />
          <div className="about-glow" aria-hidden="true" />

          <div className="about-dot-grid" aria-hidden="true">
            {Array.from({ length: 45 }, (_, i) => (
              <span key={i} />
            ))}
          </div>

          <div className="about-orb" aria-hidden="true">
            <span className="about-x">X</span>
            
          </div>

          <svg
            className="about-orbit"
            viewBox="0 0 700 600"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 45 440 C 100 335, 250 270, 390 350 S 640 400, 650 250"
              stroke="url(#orbitGradient)"
              strokeWidth="1.3"
            />
            <defs>
              <linearGradient
                id="orbitGradient"
                x1="45"
                y1="440"
                x2="650"
                y2="250"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00EBC3" />
                <stop offset="0.65" stopColor="#00C9DB" />
                <stop offset="1" stopColor="#9274FF" />
              </linearGradient>
            </defs>
            <circle cx="178" cy="445" r="6" fill="#00EBC3" />
          </svg>

          <div className="about-sphere sphere-lime" aria-hidden="true" />
          <div className="about-sphere sphere-purple" aria-hidden="true" />

          <div className="about-idea-card">
            <span className="about-idea-icon">
              <Lightbulb size={24} />
            </span>
            <span className="about-idea-copy">
              IDEAS FIRST
              <br />
              IMPACT ALWAYS
            </span>
            <Sparkles
              className="about-idea-spark"
              size={21}
              aria-hidden="true"
            />
          </div>

          <div className="about-visual-caption">
            <span className="about-caption-dot" />
            CREATIVITY MEETS TECHNOLOGY
          </div>
        </div>

        {/* RIGHT: About content */}
        <div className="about-content">
          <span className="section-kicker about-kicker">
            <span />
            ABOUT XNTROVA
          </span>

          <h2 className="about-heading">
            We believe great
            <br />
            technology starts
            <br />
            with <span className="text-lime">people.</span>
          </h2>

          <p className="about-intro">
            Xntrova represents a thoughtful approach to digital experiences,
            where design, development and problem-solving work together.
          </p>

          <p className="about-description">
            Our goal is to turn ideas into clear, usable and modern digital
            products instead of adding technology without a purpose.
          </p>

          <div className="about-points">
            {values.map((value) => (
              <div className="about-point" key={value}>
                <CheckCircle2 size={22} aria-hidden="true" />
                <span>{value}</span>
              </div>
            ))}
          </div>

          <a className="btn btn-lime about-cta" href="#contact">
            Let's Build Something
            <ArrowRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
