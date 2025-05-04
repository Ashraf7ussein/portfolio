import ProjectCard from "./PrpjectCard";

const projectsGrid = () => {
  const projectsList = [
    {
      id: 1,
      title: "Game discovery App",
      livePreview: "https://gamehub-exc.vercel.app/",
      github_link: "https://github.com/Ashraf7ussein/game-hub",
      description:
        "This project was created as part of a course I took, it is a clone of the rawg website, and I used the rawg API to fetch the games.",
      technologies: ["React", "JavaScript", "RAWG API"],
    },
    {
      id: 2,
      title: "University website clone",
      livePreview: "https://edusitywebsite.vercel.app/",
      github_link: "https://github.com/Ashraf7ussein/edusitywebsite",
      description:
        "This project resembles a university website, providing a comprehensive view of the university's offerings and student experiences.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 3,
      title: "Food service website",
      livePreview: "https://mealfoodservice.netlify.app/",
      github_link: "https://github.com/Ashraf7ussein/meal",
      description:
        "I created this website after a course I took using only HTML5 and vanilla CSS.",
      technologies: ["HTML", "CSS"],
    },
    {
      id: 4,
      title: "Weather App",
      livePreview: "https://weather-app-exc.netlify.app/",
      github_link: "https://github.com/Ashraf7ussein/weather",
      description:
        "This app shows the weather condition for the searched city using the OpenWeather API.",
      technologies: ["JavaScript", "OpenWeather API"],
    },
    {
      id: 5,
      title: "Notes app",
      livePreview: "https://notes-app-exc.netlify.app/",
      github_link: "https://github.com/Ashraf7ussein/notes-app",
      description:
        "With this app, you can write your notes, and they will be visible after the browser is refreshed.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 6,
      title: "To-do list app",
      livePreview: "https://to-do-exc.netlify.app/",
      github_link: "https://github.com/Ashraf7ussein/todo-list",
      description:
        "With this app, you can write your to-dos, and they will be visible after the browser is refreshed.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <div className="mx-auto mt-30 px-10" id="projects">
      <h2 className="underline underline-offset-4 decoration-wavy capitalize decoration-primary text-3xl md:text-4xl font-bold text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {projectsList.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            livePreview={item.livePreview}
            github={item.github_link}
            description={item.description}
            technologies={item.technologies}
            index={0}
          />
        ))}
      </div>
    </div>
  );
};

export default projectsGrid;
