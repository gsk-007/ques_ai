import { FaTrash } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { Link } from "react-router";
import { useProject } from "../contexts/ProjectContext";
const ProjectsList = ({ projects }) => {
  const { deleteProject } = useProject();
  const handleDelete = (id) => {
    deleteProject(id);
  };
  return (
    <div className="flex gap-2">
      {projects.map((project) => (
        <div
          key={project._id}
          className=" p-4 relative bg-white rounded-lg shadow-md border border-gray-200 w-1/4"
        >
          <div className="absolute right-3 cursor-pointer text-red-600">
            <FaTrash onClick={() => handleDelete(project._id)} />
          </div>
          <div className="flex items-center">
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
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
