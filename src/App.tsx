import "./App.scss";
import ProgressBar from "./components/progressBar/ProgressBar";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import ArrowUp from "./components/arrowUp/ArrowUp";
import AboutMe from "./components/aboutMe/AboutMe";
import ArrowDown from "./components/arrowDown/ArrowDown";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import { Separator } from "./components/ui/separator";
import { Vault } from "./components/vault/Vault";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) history.replaceState(null, "", window.location.pathname);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProgressBar />
      <Navbar />
      <Sidebar />
      <ArrowUp />
      <section id="aboutMe" className="section">
        <AboutMe />
        <ArrowDown />
      </section>
      <div className="container mx-auto">
        <Separator className="bg-[#333]" />
      </div>
      <Vault />
      <section id="projects" className="projects">
        <Projects />
      </section>
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
