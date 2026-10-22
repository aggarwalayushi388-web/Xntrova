
import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-symbol">
            <GraduationCap size={21} />
          </span>
          <span>
            XNTROVA
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          className="nav-cta"
          to="/contact"
          onClick={closeMenu}
        >
          Let's Talk <ArrowUpRight size={16} />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
