import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectsList } from "../data/ProjectList";
import { Project } from "../components/PrpjectCard";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const found = projectsList.find((p) => p.id === id);
    setProject(found ?? null);
  }, [id]);

  if (!project) return <div className="text-center pt-40">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 pt-40 pb-10">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{project.description}</p>

      <div className="mb-6">
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline mr-4"
        >
          🔗 Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          💻 GitHub Repository
        </a>
      </div>

      {/* Screenshot Placeholder */}
      {project?.images?.length > 0 &&
        project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${project.title} Screenshot ${index + 1}`}
            className="rounded shadow-md mb-4"
          />
        ))}

      {/* Features */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🧩 Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {project?.features?.length > 0 &&
            project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🛠️ Technologies Used</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {project?.technologies?.length > 0 &&
            project.technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
        </ul>
      </div>

      {/* Learning Outcome (Optional) */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">📚 What I Learned</h2>
        <p className="text-gray-700">
          Building this project helped me improve my skills in React and
          TypeScript, manage API integration effectively, use Chakra UI for
          styling, and handle complex UI states with Zustand and React Query. It
          also enhanced my ability to design responsive, user-friendly
          interfaces with modern tooling.
        </p>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
