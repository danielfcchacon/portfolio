import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ValueProp from "@/components/ValueProp";
import CaseStudy from "@/components/CaseStudy";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <ValueProp />
      <CaseStudy />
      <Projects />
      <Footer />
    </main>
  );
}
