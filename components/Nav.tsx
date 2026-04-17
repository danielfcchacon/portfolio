"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
