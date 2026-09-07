import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

export default function App() {
  const isResume =
    new URLSearchParams(window.location.search).get("view") === "resume";

  if (isResume) return <Resume />;

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-5xl mx-auto px-4">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
