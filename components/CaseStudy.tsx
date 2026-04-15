"use client";
import { useEffect, useRef } from "react";
// Descomenta la línea de abajo cuando añadas tu imagen en la carpeta /public
// import Image from "next/image";

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
          {/* Encabezado */}
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

          {/* Marco de Navegador (Mockup) */}
          <div className="cs-frame">
            <div className="cs-frame-bar">
              <div className="cs-frame-dot" style={{ background: "#ff5f57" }} />
              <div className="cs-frame-dot" style={{ background: "#febc2e" }} />
              <div className="cs-frame-dot" style={{ background: "#28c840" }} />
            </div>
            <div className="cs-frame-content">
              {/* Cuando tengas la imagen, usa el componente <Image /> aquí */}
              <span>mozes-two.vercel.app</span>
              <p style={{ color: "var(--text-3)", fontSize: "0.7rem", fontFamily: "var(--mono)" }}>
                // Agrega /public/saas-screenshot.png y descomenta el import de Image
              </p>
            </div>
          </div>

          {/* Rejilla de detalles técnicos */}
          <div className="cs-grid">
            {/* El Problema */}
            <div className="cs-block full">
              <span className="cs-block-label">The Problem</span>
              <p className="cs-block-text">
                Agencies were losing too much time managing clients, projects, and workflows across scattered tools. Existing solutions forced them into fragmented processes and constant context switching. There was no efficient way to unify both flows in a single system.
              </p>
            </div>

            {/* Stack Tecnológico */}
            <div className="cs-block">
              <span className="cs-block-label">Stack</span>
              <div className="tags">
                {stack.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Decisión Técnica Clave */}
            <div className="cs-block">
              <span className="cs-block-label">Key Decision</span>
              <p className="cs-block-text">
                I chose <strong>Next.js + Prisma + PostgreSQL</strong> over more fragmented architectures because it enables fast development with a consistent, type-safe foundation. This allowed optimizing development speed and maintainability despite reduced initial decoupling.
              </p>
            </div>

            {/* Resultado Final */}
            <div className="cs-block result full">
              <span className="cs-block-label">Result</span>
              <p className="cs-block-text" style={{ marginBottom: "1.25rem" }}>
                Deployed and in production. <strong>Core SaaS platform fully functional</strong> — foundational features live with positive feedback on performance and architecture.
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