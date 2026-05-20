"use client";
import { useEffect, useRef } from "react";

const projects: {
  status: "live" | "building" | "idea";
  color: string;
  name: string;
  desc: string;
  badge: string;
  stack: string[];
  url: string | null;
}[] = [
  {
    status: "building",
    color: "#fbbf24",
    name: "AffordFit — Nutritional Optimization Platform",
    desc: "Not a calorie tracker. A multi-objective optimization engine that decides the most efficient, affordable way to hit your nutritional goals — minimizing cost, time, and restrictions. Built for the Colombian/LATAM context with real local food prices.",
    badge: "Coming Soon",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "PuLP", "NumPy"],
    url: null,
  },
  {
    status: "building",
    color: "#fbbf24",
    name: "Route Optimization Platform",
    desc: "Web tool for solving real-world routing and scheduling problems — combining mathematical optimization models with interactive visualization.",
    badge: "Coming Soon",
    stack: ["Next.js", "Python", "FastAPI", "OR-Tools"],
    url: null,
  },
  {
    status: "idea",
    color: "#6ee7b7",
    name: "Full-Stack E-commerce Platform",
    desc: "Complete e-commerce system with authentication, Stripe payment integration, purchase history, and full deployment — built end-to-end.",
    badge: "Academic Project",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Stripe"],
    url: null,
  },
];

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

export default function Projects() {
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
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-label">What I build</div>
        <div ref={ref} className="fade-up">
          {projects.map((p) => (
            <div key={p.name} className="project-card">
              <div className="project-card-header">
                <div className="project-meta">
                  <div className="project-status-dot" style={{ background: p.color }} />
                  <span className="project-name">{p.name}</span>
                </div>
                <span className="project-badge">{p.badge}</span>
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="tags">
                {p.stack.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
