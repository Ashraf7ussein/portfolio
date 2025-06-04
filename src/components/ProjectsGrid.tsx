import { useEffect } from "react";
import ProjectCard from "./PrpjectCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { projectsList } from "../data/ProjectList";

const projectsGrid = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });

    //  destroy AOS on component unmount
    return () => AOS.refresh();
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="rippedPaper py-20 mx-auto mt-15 px-10"
      id="projects"
    >
      <h2 className="customFont underline underline-offset-4 decoration-wavy capitalize decoration-primary text-3xl md:text-4xl font-bold text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {projectsList.map((item) => (
          <ProjectCard
            title={item.title}
            liveDemo={item.liveDemo}
            github={item.github}
            description={item.description}
            tags={item.tags}
            id={item.id}
            images={item.images}
            features={item.features}
            technologies={item.technologies}
            typeOfProject={item.typeOfProject}
          />
        ))}
      </div>
    </div>
  );
};

export default projectsGrid;
