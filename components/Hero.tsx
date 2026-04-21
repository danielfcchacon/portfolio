"use client";
import ContactForm from "@/components/ContactForm";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        {/* Status */}
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          
          Available for new roles opportunities — consulting &amp; cofounder conversations.
        </div>

        {/* Name — serif display, first name normal + last name italic gold — DOMINANT */}
        <h1 className="hero-name hero-name-large">
          
          Daniel<br />
         
          <em>Castro</em>
        </h1>

        {/* One-liner */}
        <p className="hero-sub">
          Engineer who builds <strong>SaaS products end-to-end</strong> and understands{" "}
          <strong>the business behind them</strong>.{" "}
          Helping startups and companies ship faster, scale smarter, and turn ideas into real products.
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <a href="#work" className="btn btn-solid">
            View my work
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <ContactForm />
        </div>

        {/* Subtle scroll indicator */}
        <div className="scroll-hint">
          <div className="scroll-line" />
          scroll to explore
        </div>
      </div>
    </section>
  );
}
