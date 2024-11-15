import About from "./components/About";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <NavBar />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certification />
        <Contact />
        <ScrollToTopButton />
      </div>
    </div>
  );
}
