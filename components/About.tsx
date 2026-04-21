"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
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
    <section className="section about-section" id="about">
      <div className="wrap">
        <div ref={ref} className="fade-up about-content">
          <div className="about-photo">
            <Image
              src="/myface.PNG"
              alt="Daniel Castro"
              width={200}
              height={200}
              priority={false}
            />
          </div>
          <div className="about-text">
            <p>
              I'm a <strong>Software and Industrial Engineering student</strong> at Universidad de los Andes, with experience at <strong>Amazon</strong> and <strong>Capital One, </strong> where I learned how world-class organizations think about metrics, retention, and performance. I build full-stack products end-to-end. What sets me apart isn't the tech stack, it's understanding the business problem behind every system I build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
