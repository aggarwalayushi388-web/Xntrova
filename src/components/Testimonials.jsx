
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Quote,
} from "lucide-react";

const reviews = [
  {
    quote:
      "A great digital experience begins with understanding the problem and keeping the solution simple.",
    name: "Sample Feedback",
    role: "Illustrative testimonial",
  },
  {
    quote:
      "Thoughtful design and clear development goals help make digital products easier to use.",
    name: "Sample Feedback",
    role: "Illustrative testimonial",
  },
  {
    quote:
      "The best technology is useful, accessible and designed with real people in mind.",
    name: "Sample Feedback",
    role: "Illustrative testimonial",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  const review = reviews[active];

  const previous = () => {
    setActive((current) =>
      (current - 1 + reviews.length) % reviews.length
    );
  };

  const next = () => {
    setActive((current) =>
      (current + 1) % reviews.length
    );
  };

  return (
    <section
      className="section testimonial-section"
      id="testimonials"
    >
      <div className="container testimonial-layout">
        <div className="testimonial-heading">
          <span className="section-kicker">
            <span />
            OUR PHILOSOPHY
          </span>

          <h2>
            Good work starts
            <br />
            with <span className="text-purple">good thinking.</span>
          </h2>

          <p>
            Clear communication, useful design and attention
            to detail guide the way we approach digital work.
          </p>

          <div className="slider-controls">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>

        <div className="testimonial-content">
          <article
            className="testimonial-card"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="testimonial-card-top">
              <span className="testimonial-quote-icon">
                <Quote size={27} aria-hidden="true" />
              </span>

              <span className="testimonial-category">
                OUR APPROACH
              </span>
            </div>

            <p className="testimonial-quote" key={active}>
              “{review.quote}”
            </p>

            <div className="review-person">
              <div className="review-avatar">
                <MessageCircle
                  size={21}
                  aria-hidden="true"
                />
              </div>

              <div className="review-person-info">
                <strong>{review.name}</strong>
                <span>{review.role}</span>
              </div>

              <span className="review-index">
                <span>0{active + 1}</span>
                {" / "}
                0{reviews.length}
              </span>
            </div>
          </article>

          <div
            className="review-progress"
            role="group"
            aria-label="Select testimonial"
          >
            {reviews.map((item, index) => (
              <button
                type="button"
                key={index}
                className={
                  active === index ? "progress-active" : ""
                }
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-pressed={active === index}
              />
            ))}
          </div>

          <p className="review-disclaimer">
            Illustrative sample content. Replace with genuine,
            approved customer feedback before publishing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
