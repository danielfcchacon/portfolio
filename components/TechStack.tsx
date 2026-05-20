"use client";
import { useEffect, useRef } from "react";

const techStack = [
  {
    category: "Frontend",
    tags: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    tags: ["Node.js", "Express", "FastAPI (Python)", "REST APIs"],
  },
  {
    category: "Databases",
    tags: ["PostgreSQL", "MySQL", "Prisma ORM"],
  },
  {
    category: "Data & ML",
    tags: ["Python", "NumPy", "PuLP", "Pandas", "Scikit-learn"],
  },
  {
    category: "DevOps & Cloud",
    tags: ["Docker", "CI/CD", "Git", "Linux", "AWS (EC2, S3)", "Kubernetes", "Ansible"],
  },
  {
    category: "Currently Learning",
    tags: ["AWS Solutions Architect Associate"],
  },
];

export default function TechStack() {
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
    <section className="section" id="stack">
      <div className="wrap">
        <div className="section-label">Tech Stack</div>
        <div ref={ref} className="fade-up tech-stack-grid">
          {techStack.map((category) => (
            <div key={category.category} className="tech-stack-category">
              <span className="tech-stack-category-label">{category.category}</span>
              <div className="tags">
                {category.tags.map((tag) => (
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
