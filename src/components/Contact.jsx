
import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";

function Contact() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const service = data.get("service");
    const message = data.get("message");

    const subject = encodeURIComponent(
      `Project enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject details:\n${message}`
    );

    setNotice(
      "Your email app should open. Review your enquiry and send it from there."
    );

    window.location.href =
      `mailto:hello@xntrova.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      className="section section-dark contact-section"
      id="contact"
    >
      <div className="container">
        <div className="contact-layout">
          {/* Left: Contact introduction */}
          <div className="contact-copy">
            <span className="section-kicker">
              <span />
              LET'S CONNECT
            </span>

            <h2>
              Have an idea?
              <br />
              <span className="text-lime">Let's talk.</span>
            </h2>

            <p className="contact-description">
              Have a vision for your next project? Tell us what
              you're planning, what you want to achieve, and how
              we can help bring your idea to life.
            </p>

            <a
              className="contact-email"
              href="mailto:hello@xntrova.com"
            >
              <span className="contact-email-icon">
                <Mail size={21} aria-hidden="true" />
              </span>

              <span className="contact-email-copy">
                <small>DROP US AN EMAIL</small>
                <strong>hello@xntrova.com</strong>
              </span>

              <ArrowUpRight
                className="contact-email-arrow"
                size={20}
                aria-hidden="true"
              />
            </a>

            <div className="contact-decoration">
              <span className="contact-star">
                <Sparkles size={17} aria-hidden="true" />
              </span>
              <span>EVERY GREAT IDEA STARTS SOMEWHERE</span>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="contact-form-wrap">
            <div className="contact-form-top">
              <span className="contact-form-index">
                PROJECT ENQUIRY / 01
              </span>
              <span className="contact-status">
                <span />
                LET'S BUILD
              </span>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-heading">
                <h3>Tell us about your project<span>.</span></h3>
                <p>
                  A few details will help us understand your idea.
                </p>
              </div>

              <div className="form-row">
                <label>
                  <span>Your name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Alex Johnson"
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                </label>

                <label>
                  <span>Email address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                </label>
              </div>

              <label>
                <span>What do you need?</span>
                <select
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Web Development">
                    Web Development
                  </option>
                  <option value="Responsive Website">
                    Responsive Website
                  </option>
                  <option value="Digital Solutions">
                    Digital Solutions
                  </option>
                  <option value="Other">Something else</option>
                </select>
              </label>

              <label>
                <span>Tell us about your idea</span>
                <textarea
                  name="message"
                  placeholder="What are you looking to build? What goals do you have?"
                  minLength={10}
                  maxLength={3000}
                  rows={5}
                  required
                />
              </label>

              <button
                className="btn btn-lime form-submit"
                type="submit"
              >
                <span>Prepare your enquiry</span>
                <Send size={17} aria-hidden="true" />
              </button>

              {notice && (
                <p className="form-notice" role="status">
                  {notice}
                </p>
              )}

              <p className="form-footnote">
                Your default email app will open with your
                enquiry prepared. Nothing is stored by this demo form.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
