"use client";
import { useEffect, useRef } from "react";

const pillars = [
  {
    index: "01",
    title: "Systems Thinker",
    desc: "Designing systems end-to-end — from data models to deployment, with a focus on scalability and clean architecture.",
  },
  {
    index: "02",
    title: "Business-Aware",
    desc: "Building with business impact in mind — prioritizing speed, retention, and sustainable growth.",
  },
  {
    index: "03",
    title: "Full-Stack Builder",
    desc: "Owning the full product lifecycle — backend, frontend, and infrastructure without handoff friction.",
  },
];

export default function ValueProp() {
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
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-label">What I bring</div>
        <div ref={ref} className="fade-up pillars">
          {pillars.map((p) => (
            <div key={p.index} className="pillar">
              <span className="pillar-index">{p.index}</span>
              <div className="pillar-title">{p.title}</div>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
