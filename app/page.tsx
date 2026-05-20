import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ValueProp from "@/components/ValueProp";
import TechStack from "@/components/TechStack";
import CaseStudy from "@/components/CaseStudy";
import IndustrysoftCaseStudy from "@/components/IndustrysoftCaseStudy";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <ValueProp />
      <TechStack />
      <CaseStudy />
      <IndustrysoftCaseStudy />
      <Projects />
      <Footer />
    </main>
  );
}
