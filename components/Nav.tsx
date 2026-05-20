"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className="nav"
      style={{ boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.04)" : "none" }}
    >
      <div className="nav-logo">
        
        D<span>.</span>C
      </div>
      <button
        className="nav-mobile-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {mobileMenuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>
      <div className={`nav-links ${mobileMenuOpen ? "nav-links-open" : ""}`}>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#stack" onClick={() => setMobileMenuOpen(false)}>Stack</a>
        <a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
        <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}
