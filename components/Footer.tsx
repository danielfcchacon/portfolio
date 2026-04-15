"use client";
import { useEffect, useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div ref={ref} className="fade-up">
          <h2 className="footer-heading">
            If you're building something serious,
            <br />
            <em>let's talk.</em>
          </h2>

          <p className="footer-sub">
            Open to full-time roles, consulting or cofounder conversations.
            <span className="footer-response">I respond within 24 hours.</span>
          </p>

          <div className="footer-links">
            <a
              href="mailto:danielfcchacon@gmail.com"
              className="btn btn-solid"
            >
              Email me
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/danielfcchacon"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/danielfcchacon"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>
          </div>

          <div className="footer-bottom">
            {/* EDIT THIS LATER — your full name */}
            <span>© {new Date().getFullYear()} Daniel Castro</span>
            <span>Built with Next.js · Deployed on Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
