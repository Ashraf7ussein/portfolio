import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiAngularjsFill } from "react-icons/ri";
import {
  SiTypescript,
  SiTailwindcss,
  SiChakraui,
  SiMongodb,
  SiExpress,
  SiMeteor,
} from "react-icons/si";

const Skills = () => {
  const list = [
    { id: "html", name: "HTML5", image: FaHtml5 },
    { id: "css", name: "CSS3", image: FaCss3Alt },
    { id: "javascript", name: "JavaScript", image: IoLogoJavascript },
    { id: "react", name: "React", image: FaReact },
    { id: "tailwind", name: "Tailwind", image: SiTailwindcss },
    { id: "chakraui", name: "Chakra Ui", image: SiChakraui },
    { id: "mongoDb", name: "MongoDB", image: SiMongodb },
    { id: "typescript", name: "Typescript", image: SiTypescript },
    { id: "nodeJs", name: "Node Js", image: FaNodeJs },
    { id: "express", name: "Express Js", image: SiExpress },
    { id: "angularjs", name: "Angular Js", image: RiAngularjsFill },
    { id: "meteorjs", name: "Meteor Js", image: SiMeteor },
  ];

  // Duplicate list for seamless looping
  const infiniteList = [...list, ...list];

  return (
    <div className="overflow-hidden">
      <h2
        className="mb-10 underline underline-offset-4 decoration-wavy capitalize decoration-primary 
        text-3xl md:text-4xl font-bold text-center"
      >
        Skills
      </h2>
      <div className="whitespace-nowrap animate-scroll flex">
        {infiniteList.map((item, index) => (
          <div
            className="flex flex-col items-center min-w-[100px]"
            key={`${item.id}-${index}`}
          >
            <item.image size={40} className="text-gray-800" />
            <p className="text-gray-800 font-medium text-lg mt-2">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
