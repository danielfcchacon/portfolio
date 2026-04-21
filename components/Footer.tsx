"use client";
import { useEffect, useRef } from "react";
import ContactForm from "@/components/ContactForm";

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
            <ContactForm />
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
            
            <span>© {new Date().getFullYear()} Daniel Castro</span>
            <span>Built with Next.js · Deployed on Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
