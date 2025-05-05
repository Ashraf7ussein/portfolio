import gamehub1 from "../assets/gamehub1.webp";
import gamehub2 from "../assets/gamehub2.webp";
import blk1 from "../assets/blk1.webp";
import blk2 from "../assets/blk2.webp";
import blk3 from "../assets/blk3.webp";
import blk4 from "../assets/blk4.webp";
import blk5 from "../assets/blk5.webp";
import blk6 from "../assets/blk6.webp";
import edu from "../assets/edu.webp";
import pok1 from "../assets/pok1.webp";
import pok2 from "../assets/pok2.webp";
import pok3 from "../assets/pok3.webp";
import grover from "../assets/grover.webp";

export const projectsList = [
  {
    id: "gameHub",
    title: "🎮 Game Discovery App",
    liveDemo: "https://gamehub-exc.vercel.app/",
    github: "https://github.com/Ashraf7ussein/game-hub",
    description:
      "A modern game discovery web app built using the RAWG API. Features advanced filtering, platform sorting, light/dark mode toggle, and responsive design. Developed with React and TypeScript.",
    tags: [
      "React",
      "TypeScript",
      "RAWG API",
      "Zustand",
      "React Router",
      "Chakra UI",
      "React Query",
    ],
    features: [
      "Browse and search thousands of games using the RAWG API",
      "Filter games by platform and genre",
      "Sort by popularity, release date, or name",
      "Light and Dark mode support",
      "Fully responsive design for all devices",
      "Game details Page",
    ],
    technologies: [
      "React + TypeScript",
      "Vite",
      "Zustand (state management)",
      "Chakra UI (UI components)",
      "Axios (API requests)",
      "React Query (data caching)",
    ],
    images: [gamehub1, gamehub2],
  },

  {
    id: "qahwaBlk",
    title: "☕ Qahwa Blk Coffee Website",
    liveDemo: "https://qahwablk.onrender.com/",
    github: "https://github.com/Ashraf7ussein/qahwablk",
    description:
      "An online presence for Qahwa Blk coffee house, with full-stack functionality including user authentication and content (menu/products/locations) management.",
    tags: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "Firebase Auth",
      "Express.js",
      "MongoDB",
      "React Router",
      "React hook form",
    ],
    features: [
      "Browse curated coffee blends and single origins",
      "Admin panel for content management",
      "Careers form for job applications",
      "Firebase authentication for user login",
      "Backend with Express.js and MongoDB",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Express.js",
      "MongoDB",
      "React Router",
    ],
    images: [blk1, blk2, blk3, blk4, blk5, blk6],
  },

  {
    id: "pokemon",
    title: "🧬 Pokémon Explorer App",
    liveDemo: "https://pokemon-react-native.netlify.app/",
    github: "https://github.com/Ashraf7ussein/pokemon",
    description:
      "A cross-platform Pokémon explorer built with React Native and Expo using the PokéAPI. Displays types, evolutions, and generations.",
    tags: ["React Native", "Expo", "PokéAPI", "JavaScript"],
    features: [
      "View Pokémon with types, stats, and images",
      "Explore evolution chains",
      "Filter by generation or category",
      "Native mobile UI with smooth navigation",
    ],
    technologies: ["React Native", "Expo", "PokéAPI"],
    images: [pok1, pok2, pok3],
  },

  {
    id: "5",
    title: "🍔 Grover Service Website",
    liveDemo: "https://grover-three.vercel.app/",
    github: "https://github.com/Ashraf7ussein/grover",
    description:
      "A minimalistic frontend for a grocery delivery service website showcasing products, pricing, and customer engagement.",
    tags: ["HTML", "Tailwind CSS", "React"],
    features: [
      "Modern product layout with CTAs",
      "Delivery-focused homepage",
      "Responsive across devices",
      "Clean UI with Tailwind CSS",
    ],
    technologies: ["React", "Tailwind CSS"],
    images: [grover],
  },

  {
    id: "educationWebsite",
    title: "🎓 University Website Clone",
    liveDemo: "https://edusitywebsite.vercel.app/",
    github: "https://github.com/Ashraf7ussein/edusitywebsite",
    description:
      "A clean and professional university landing page clone highlighting programs, admissions, and student testimonials.",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "React"],
    features: [
      "Beautiful hero section with call-to-action",
      "Information-rich sections for programs and benefits",
      "Testimonials from students",
      "Fully responsive and mobile-friendly",
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    images: [edu],
  },
];
