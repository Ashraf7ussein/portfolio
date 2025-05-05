import { useLocation } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import ProjectsGrid from "../components/ProjectsGrid";
import Skills from "../components/Skills";
import { useEffect } from "react";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
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
