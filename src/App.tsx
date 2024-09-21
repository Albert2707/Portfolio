import "./App.scss";
import {lazy} from "react";
const ArrowUp = lazy(() => import("./components/arrowUp/ArrowUp"));
const AboutMe = lazy(() => import("./components/aboutMe/AboutMe"));
const ArrowDown = lazy(() => import("./components/arrowDown/ArrowDown"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const ProgressBar = lazy(() => import("./components/progressBar/ProgressBar"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Sidebar = lazy(() => import("./components/sidebar/Sidebar"));
const Skills = lazy(() => import("./components/skills/Skills"));

function App() {
  return (
    <div>
      <ProgressBar />
      <Navbar />
      <Sidebar />
      <ArrowUp/>
      <section id="aboutMe" className="section">
        <AboutMe />
        <ArrowDown />
      </section>
      <section id="projects" className="projects">
        <Projects />
      </section>
      <Skills />
      <section id="contact" className="section">
        <Contact />
      </section>
    </div>
  );
}

export default App;
