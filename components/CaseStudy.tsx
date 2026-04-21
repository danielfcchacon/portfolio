"use client";
import { useEffect, useRef } from "react";

const stack = [
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Vercel",
];

export default function CaseStudy() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { 
        if (e.isIntersecting) { 
          el.classList.add("visible"); 
          obs.disconnect(); 
        } 
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-label">Case Study — Live Product</div>

        <div ref={ref} className="fade-up">
          <div className="cs-header">
            <h2 className="cs-title">
              <em>Mozes</em>
            </h2>
            <div className="live-badge">
              <div className="live-badge-dot" />
              Live on Vercel
            </div>
          </div>

          <p style={{ fontSize: "0.9rem", color: "var(--text-2)", marginBottom: "1.75rem", fontWeight: 300 }}>
            A platform that helps agencies manage clients, projects, and workflows without the usual operational friction.
          </p>

          <div className="cs-frame">
            <div className="cs-frame-bar">
              <div className="cs-frame-dot" style={{ background: "#ff5f57" }} />
              <div className="cs-frame-dot" style={{ background: "#febc2e" }} />
              <div className="cs-frame-dot" style={{ background: "#28c840" }} />
            </div>
            <video
              controls
              loop
              playsInline
              poster="/mozesimage.png"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            >
              <source src="/mozes-demo.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="cs-grid">
            <div className="cs-block full">
              <span className="cs-block-label">The Problem</span>
              <p className="cs-block-text">
                Agencies were losing too much time managing clients, projects, and workflows across scattered tools. Existing solutions forced them into fragmented processes and constant context switching. There was no efficient way to unify both flows in a single system.
              </p>
            </div>

            <div className="cs-block">
              <span className="cs-block-label">Stack</span>
              <div className="tags">
                {stack.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="cs-block">
              <span className="cs-block-label">Key Decision</span>
              <p className="cs-block-text">
                I chose <strong>Next.js + Prisma + PostgreSQL</strong> over more fragmented architectures because it enables fast development with a consistent, type-safe foundation. This allowed optimizing development speed and maintainability despite reduced initial decoupling.
              </p>
            </div>

            <div className="cs-block result full">
              <span className="cs-block-label">Result</span>
              <p className="cs-block-text" style={{ marginBottom: "1.25rem" }}>
                Built solo end-to-end — <strong>full authentication, client management, project tracking, and workflow system</strong>. From zero to deployment, handling every layer of the stack independently.
              </p>
              <a
                href="https://mozes-two.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid"
                style={{ fontSize: "0.78rem", padding: "0.5rem 1rem" }}
              >
                View live product
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
