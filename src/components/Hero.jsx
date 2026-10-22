
import {
  ArrowRight,
  Check,
  Code2,
  Layers3,
  Sparkles,
  Zap,
  ShieldCheck,
  Rocket,
} from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-layout">
        {/* LEFT: Homepage introduction */}
        <div className="hero-content">
          <div className="eyebrow hero-reveal reveal-one">
            <span className="status-dot" />
            YOUR IDEAS. OUR INNOVATION.
          </div>

          <h1 className="hero-title hero-reveal reveal-two">
            Turn ideas into
            <br />
            <span className="text-lime gradient-text">
              digital impact.
            </span>
          </h1>

          <p className="hero-description hero-reveal reveal-three">
            Welcome to Xntrova — where creative thinking meets modern
            technology. We help transform ambitious ideas into meaningful
            digital experiences built to make a difference.
          </p>

          <div className="hero-actions hero-reveal reveal-four">
            <a className="btn btn-lime" href="/work">
              Discover Our Work
              <ArrowRight size={17} />
            </a>

            <a className="btn btn-outline" href="/contact">
              Let's Talk
              <span className="btn-arrow">↗</span>
            </a>
          </div>

          <div className="hero-note hero-reveal reveal-four">
            <span className="note-line" />
            Creative ideas. Thoughtful execution. Real purpose.
          </div>

          <div className="hero-trust hero-reveal reveal-four">
            <span className="trust-spark">✳</span>
            <span>CREATIVITY</span>
            <span className="trust-divider">/</span>
            <span>TECHNOLOGY</span>
            <span className="trust-divider">/</span>
            <span>IMPACT</span>
          </div>
        </div>

        {/* RIGHT: Xntrova visual */}
        <div className="hero-art">
          <div className="art-backdrop" />

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <div className="visual-orb">
            <div className="orb-inner">
              <span>X</span>
              <i />
            </div>
          </div>

          <div className="visual-label">
            <Sparkles size={15} />
            IDEAS INTO EXPERIENCE
          </div>

          <span className="floating-spark spark-one">✳</span>
          <span className="floating-spark spark-two">✦</span>
          <span className="floating-spark spark-three">✧</span>

          <div className="dashboard-card chart-card">
            <div className="dashboard-top">
              <div>
                <span className="muted-label">OUR APPROACH</span>
                <h3>Built with purpose</h3>
              </div>

              <div className="chart-icon">
                <Layers3 size={19} />
              </div>
            </div>

            <div className="chart-visual">
              <div className="chart-y-labels">
                <span>Imagine</span>
                <span>Create</span>
                <span>Launch</span>
              </div>

              <svg
                className="growth-chart"
                viewBox="0 0 300 130"
                role="img"
                aria-label="Illustration of an idea becoming a digital experience"
              >
                <defs>
                  <linearGradient
                    id="chartFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#c4ff55"
                      stopOpacity=".3"
                    />
                    <stop
                      offset="100%"
                      stopColor="#c4ff55"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                {[20, 55, 90, 125].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="300"
                    y2={y}
                    stroke="#59627b"
                    strokeOpacity=".3"
                    strokeDasharray="4 5"
                  />
                ))}

                <path
                  d="M0 112 C28 104 35 82 65 91 S105 100 132 63 S173 80 199 46 S247 56 300 8 L300 130 L0 130 Z"
                  fill="url(#chartFill)"
                />

                <path
                  d="M0 112 C28 104 35 82 65 91 S105 100 132 63 S173 80 199 46 S247 56 300 8"
                  fill="none"
                  stroke="#c4ff55"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                <circle cx="199" cy="46" r="5" fill="#c4ff55" />
                <circle
                  cx="199"
                  cy="46"
                  r="10"
                  fill="none"
                  stroke="#c4ff55"
                  strokeOpacity=".4"
                />
              </svg>
            </div>

            <div className="chart-bottom">
              <span>From concept to creation</span>
              <span className="live-label">
                <span className="status-dot" />
                CREATE
              </span>
            </div>
          </div>

          <div className="dashboard-card mini-card mini-top">
            <div className="mini-icon purple-icon">
              <Code2 size={18} />
            </div>

            <div>
              <strong>Modern Technology</strong>
              <span>Made for what's next</span>
            </div>
          </div>

          <div className="dashboard-card mini-card mini-bottom">
            <div className="mini-icon">
              <Check size={18} />
            </div>

            <div>
              <strong>Purposeful Solutions</strong>
              <span>Designed around people</span>
            </div>
          </div>

          <div className="art-caption">
            <span className="caption-dot" />
            IMAGINE. CREATE. EVOLVE.
          </div>
        </div>
      </div>

      {/* Homepage highlights */}
      <div className="container hero-bottom">
        <span>
          <Zap size={14} />
          IDEAS THAT MOVE FORWARD
        </span>

        <span>
          <ShieldCheck size={14} />
          BUILT WITH INTENTION
        </span>

        <span>
          <Rocket size={14} />
          READY FOR WHAT'S NEXT
        </span>
      </div>

      {/* Homepage-only marquee */}
      <div className="studio-marquee" id="studio-marquee">
        <div className="marquee-track">
          {Array.from({ length: 2 }, (_, index) => (
            <div className="marquee-group" key={index}>
              <span className="marquee-item">
                <i className="marquee-star">✳</i>
                IMAGINE
              </span>

              <span className="marquee-divider">/</span>

              <span className="marquee-item">CREATE</span>

              <span className="marquee-symbol">✦</span>

              <span className="marquee-item marquee-highlight">
                INNOVATE
              </span>

              <span className="marquee-divider">/</span>

              <span className="marquee-item">
                MAKE AN IMPACT
              </span>

              <span className="marquee-symbol">✳</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
