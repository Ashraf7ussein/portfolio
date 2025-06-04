import { GrGithub } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export interface Project {
  title: string;
  github: string;
  liveDemo: string;
  tags: string[];
  description: string;
  id: string;
  images: string[];
  features: string[];
  technologies: string[];
  typeOfProject?: string;
}

const ProjectCard = ({
  title,
  github,
  liveDemo,
  tags,
  description,
  id,
  typeOfProject,
}: Project) => {
  return (
    <div className="rounded-2xl bg-white overflow-hidden border border-secondary flex flex-col h-full">
      {/* Header */}
      <div
        className={`${
          typeOfProject === "reactNative" ? "bg-blue-500" : "bg-primary"
        } px-6 py-4`}
      >
        <h3 className="font-bold text-2xl text-black text-center">{title}</h3>
      </div>

      {/* Body */}
      <div className="p-6 flex-grow">
        <p className="text-gray-600 text-lg mb-2">{description}</p>

        <p className="text-gray-600 text-lg my-3">tags used in the project:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tech) => (
            <span
              key={`${id}-${tech}`}
              className="bg-gray-200 text-gray-800 text-xs font-medium px-3 pt-2 pb-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="group">
          <Link
            to={`/project/${id}`}
            className="inline-flex items-center gap-2 mt-5 text-primary font-semibold text-sm hover:underline hover:text-secondary transition duration-300"
          >
            Read more
            <FaArrowRightLong
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center px-6 py-4 border-t gap-3 mt-auto">
        {liveDemo !== "" && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 pb-2 pt-3 border border-primary text-primary
          rounded-full hover:bg-secondary hover:border-secondary hover:text-white transition-colors duration-300"
          >
            Live Demo
          </a>
        )}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 pb-2 pt-3 border border-primary text-primary
          rounded-full hover:bg-secondary hover:border-secondary hover:text-white transition-colors duration-300"
        >
          GitHub <GrGithub size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
