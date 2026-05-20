"use client";
import { useEffect, useRef } from "react";

const projects: {
  status: "live" | "building" | "idea";
  color: string;
  name: string;
  desc: string;
  url: string | null;
}[] = [
  {
    status: "live",
    color: "#6ee7b7",
    name: "Mozes",
    desc: "SaaS for agencies to manage clients, projects, and workflows — built end-to-end with authentication, payments, and scalable architecture.",
    url: "https://mozes-two.vercel.app/",
  },
  {
    status: "building",
    color: "#fbbf24",
    name: "NutriOpt",
    desc: "Multi-objective optimization engine that decides the most efficient, affordable, and realistic way to hit nutritional goals — minimizing cost, time, and restrictions.",
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
            <div key={p.name} className="project-row">
              <div className="project-meta">
                <div className="project-status-dot" style={{ background: p.color }} />
                <span className="project-name">{p.name}</span>
              </div>
              <span className="project-desc">{p.desc}</span>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalIcon />
                </a>
              ) : (
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontFamily: "var(--mono)",
                    color: "var(--text-3)",
                    letterSpacing: "0.06em",
                  }}
                >
                  soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
