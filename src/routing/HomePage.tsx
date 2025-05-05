import { useLocation } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import ProjectsGrid from "../components/ProjectsGrid";
import Skills from "../components/Skills";
import { useEffect, useState } from "react";
import SplashScreen from "../components/SplashScree";

const HomePage = () => {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Duration matches the animation delay (2s) + animation duration (1s)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div>
          <Header />
          <About />
          <Skills />
          <ProjectsGrid />
          <Contact />
        </div>
      )}
    </>
  );
};

export default HomePage;
