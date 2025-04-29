import { GoProjectRoadmap } from "react-icons/go";
import { Link } from "react-router";
const ProjectsList = ({ projects }) => {
  return (
    <div className="flex gap-2">
      {projects.map((project) => (
        <div
          key={project._id}
          className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-200 w-1/4"
        >
          {/* Left Image */}
          <GoProjectRoadmap className="w-16 h-16 object-cover rounded-md mr-4" />

          {/* Right Content */}
          <div className="flex flex-col">
            <Link to={`/projects/${project._id}`}>
              <h2 className="text-lg font-semibold text-gray-800 cursor-pointer">
                {project.name}
              </h2>
            </Link>
            <p className="text-sm text-gray-600 mt-1">4 files</p>
            <p className="text-xs text-gray-400 mt-2">
              Last edited: {new Date(project.updatedAt).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
