import { useState } from "react";
import Icon from "./Icon.jsx";

const links = [
  ["About", "about"],
  ["Dashboard", "dashboard"],
  ["Story", "story"],
  ["Analysis", "analysis"],
];

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell page-shell" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="EV Insights home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><Icon name="bolt" size={18} strokeWidth={2.3} /></span>
          <span>EV<span className="brand__muted">INSIGHTS</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
        <div id="primary-links" className={"nav-links" + (menuOpen ? " nav-links--open" : "")}>
          {links.map(([label, id]) => (
            <a
              key={id}
              className={activeSection === id ? "is-active" : ""}
              href={"#" + id}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#dashboard" onClick={() => setMenuOpen(false)}>
            Explore the data <Icon name="arrow" size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}
