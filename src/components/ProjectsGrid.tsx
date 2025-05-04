import ProjectCard from "./PrpjectCard";

const projectsGrid = () => {
  const projectsList = [
    {
      id: 1,
      title: "Game discovery App",
      liveDemo: "https://gamehub-exc.vercel.app/",
      github_link: "https://github.com/Ashraf7ussein/game-hub",
      description:
        "This project was created as part of a course I took, it is a clone of the rawg website, and I used the rawg API to fetch the games.",
      tags: [
        "React",
        "JavaScript",
        "RAWG API",
        "Zustand",
        "React Router",
        " Chakra UI",
        "React Query",
      ],
    },
    {
      id: 2,
      title: "University website clone",
      liveDemo: "https://edusitywebsite.vercel.app/",
      github_link: "https://github.com/Ashraf7ussein/edusitywebsite",
      description:
        "This project resembles a university website, providing a comprehensive view of the university's offerings and student experiences.",
      tags: ["HTML", "tailwindCss", "JavaScript", "React"],
    },
    {
      id: 3,
      title: "Qahwa Blk",
      liveDemo: "https://qahwablk.onrender.com/",
      github_link: "https://github.com/Ashraf7ussein/qahwablk",
      description:
        "This project is an online coffee retailer offering a curated selection of freshly roasted coffee with unique blends and flavors.",
      tags: [
        "HTML",
        "tailwindCss",
        "JavaScript",
        "React",
        "firebase auth",
        "express js",
        "mongodb",
        "React Router",
      ],
    },
    {
      id: 4,
      title: "Pokemon - React Native app",
      liveDemo: "https://pokemon-react-native.netlify.app/",
      github_link: "https://github.com/Ashraf7ussein/pokemon",
      description:
        "This React Native project displays a list of Pokémon with their images, types, generations and evelutions, using the PokéAPI.",
      tags: ["React Native", "Expo", "PokéAPI", "JavaScript"],
    },
    {
      id: 5,
      title: "Grover service website",
      liveDemo: "https://grover-three.vercel.app/",
      github_link: "https://github.com/Ashraf7ussein/grover",
      description: "I created this website to practice my react skills",
      tags: ["HTML", "TailwindCss", "React"],
    },
  ];

  return (
    <div className="rippedPaper py-20 mx-auto mt-30 px-10" id="projects">
      <h2 className="underline underline-offset-4 decoration-wavy capitalize decoration-primary text-3xl md:text-4xl font-bold text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {projectsList.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            liveDemo={item.liveDemo}
            github={item.github_link}
            description={item.description}
            tags={item.tags}
            index={0}
          />
        ))}
      </div>
    </div>
  );
};

export default projectsGrid;
