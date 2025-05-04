import { GrGithub } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";

interface Props {
  title: string;
  github: string;
  livePreview: string;
  index: number;
  tags: string[];
  description: string;
}

const ProjectCard = ({
  title,
  github,
  livePreview,
  tags,
  description,
}: Props) => {
  return (
    <div className="rounded-2xl bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.30)] overflow-hidden border-1 border-secondary">
      {/* Header */}
      <div className="bg-primary px-6 py-4">
        <h3 className="font-bold text-2xl text-white text-center">{title}</h3>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-gray-600 text-lg mb-2">
          {description} {/* Project description */}
        </p>

        <p className="text-gray-600 text-lg mb-2">tags used in the project:</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 text-xs font-medium px-3 pt-2 pb-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-6 py-4 border-t gap-3">
        <a
          href={livePreview}
          target="_blank"
          className="flex items-center gap-2 px-5 pb-2 pt-3 border border-primary text-primary
              rounded-full shadow hover:bg-secondary hover:border-secondary hover:text-white transition-colors duration-300 relative"
        >
          Live Preview <FaArrowRightLong size={20} />
        </a>
        <a
          href={github}
          className="flex items-center gap-2 px-5 pb-2 pt-3 border border-primary text-primary
              rounded-full shadow hover:bg-secondary hover:border-secondary hover:text-white transition-colors duration-300 relative"
        >
          GitHub <GrGithub size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
