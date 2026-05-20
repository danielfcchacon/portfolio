"use client";
import { useEffect, useRef } from "react";

const stack = [
  "Next.js 14",
  "TypeScript",
  "FastAPI",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "NumPy",
  "PuLP",
  "Vercel",
  "Render",
  "Railway",
];

export default function IndustrysoftCaseStudy() {
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
    <section className="section" id="industrysoft">
      <div className="wrap">
        <div className="section-label">Case Study — Live Product</div>

        <div ref={ref} className="fade-up">
          <div className="cs-header">
            <h2 className="cs-title">
              <em>Industrysoft</em>
            </h2>
            <div className="live-badge">
              <div className="live-badge-dot" />
              Live in Production
            </div>
          </div>

          <p style={{ fontSize: "0.9rem", color: "var(--text-2)", marginBottom: "1.75rem", fontWeight: 300 }}>
            A platform that helps startups and agencies identify which processes are destroying their revenue — and exactly what fixing them is worth.
          </p>

          <div className="cs-grid">
            <div className="cs-block full">
              <span className="cs-block-label">The Problem</span>
              <p className="cs-block-text">
                Startups and agencies had no clear way to identify which processes were killing their revenue. Existing tools showed data but gave no actionable prioritization. There was no system that could detect bottlenecks, quantify their real monetary impact, and simulate the result of fixing them.
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
                Built a custom optimization engine combining <strong>Theory of Constraints + Pareto 20% + statistical outlier detection</strong> with NumPy/PuLP. Chose FastAPI as a separate Python backend to keep the algorithm layer independent from the Next.js frontend, then containerized everything with Docker.
              </p>
            </div>

            <div className="cs-block result full">
              <span className="cs-block-label">Result</span>
              <p className="cs-block-text" style={{ marginBottom: "1.25rem" }}>
                Built solo end-to-end — <strong>full authentication, 5-step onboarding wizard, process builder with React Flow, real-time analysis engine, revenue impact calculator with real monetary values, simulation sliders, analysis history, and full Docker deployment</strong> across three services.
              </p>
              <a
                href="https://industrysoft.vercel.app"
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
