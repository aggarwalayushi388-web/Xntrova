
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  Mail,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        {/* Brand */}
        <div className="footer-brand-block">
          <Link className="brand footer-brand" to="/">
            <span className="brand-symbol">X</span>
            <span>
              XNTROVA<span className="brand-dot">.</span>
            </span>
          </Link>

          <p>
            Thoughtful design. Modern development.
            <br />
            Digital experiences built with purpose.
          </p>

          {/* Social Links */}
          <div className="social-links">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <span className="social-text">in</span>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <span className="social-text">IG</span>
            </a>

            <a
              href="mailto:hello@xntrova.com"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Explore Pages */}
        <div className="footer-column">
          <h4>EXPLORE</h4>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Our Work</Link>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>WHAT WE DO</h4>

          <Link to="/services">
            <Code2 size={14} /> Web Development
          </Link>

          <Link to="/services">UI/UX Design</Link>
          <Link to="/services">Responsive Websites</Link>
          <Link to="/services">Digital Solutions</Link>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>LET'S CONNECT</h4>

          <Link to="/contact">
            Start a Project <ArrowUpRight size={14} />
          </Link>

          <a href="mailto:hello@xntrova.com">
            hello@xntrova.com
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Xntrova. All rights reserved.
        </span>

        <Link to="/">Back to Home ↑</Link>
      </div>
    </footer>
  );
}

export default Footer;
