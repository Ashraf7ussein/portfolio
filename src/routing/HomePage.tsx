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
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Only show splash screen once per session
    const splashShown = sessionStorage.getItem("splashShown");
    if (!splashShown) {
      setShowSplash(true);
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("splashShown", "true");
      }, 3000); // splash duration

      return () => clearTimeout(timer);
    }
  }, []);

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
