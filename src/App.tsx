import "./App.scss";
import AboutMe from "./components/aboutMe/AboutMe";
import ArrowDown from "./components/arrowDown/ArrowDown";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import ProgressBar from "./components/progressBar/ProgressBar";
import Projects from "./components/projects/Projects";
import Sidebar from "./components/sidebar/Sidebar";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div>
      <ProgressBar />
      <Navbar />
      <Sidebar />
      <section id="aboutMe">
        <AboutMe />
        <ArrowDown />
      </section>
      <Projects />
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
