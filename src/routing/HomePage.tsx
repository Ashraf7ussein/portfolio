import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import ProjectsGrid from "../components/ProjectsGrid";
import Skills from "../components/Skills";

const HomePage = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <ProjectsGrid />
      <Contact />
    </div>
  );
};

export default HomePage;
