import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <ContactCTA />
      <Footer />
    </>
  );
}