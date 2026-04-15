import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import CaseStudy from "@/components/CaseStudy";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ValueProp />
      <CaseStudy />
      <Projects />
      <Footer />
    </main>
  );
}
