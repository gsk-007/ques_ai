import { useState } from "react";
import mainImg from "../assets/project_creation.png";
import { FiPlus } from "react-icons/fi";
import CustomModal from "../components/CustomModal";
import { useProject } from "../contexts/ProjectContext";
import ProjectsList from "../components/ProjectsList";

const ProjectCreationPage = () => {
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);

  const { projects } = useProject();

  const handleCreateNewProject = () => {
    setIsNewProjectModalOpen(true);
  };

  const handleNewProjectCancel = () => {
    setIsNewProjectModalOpen(false);
  };

  const handleNewProjectCreate = () => {
    // TODO: create a new project
    setIsNewProjectModalOpen(false);
  };

  return (
    <>
      {projects.length == 0 ? (
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-5xl text-purple-800 font-bold">
            Create a New Project
          </h1>
          <div className="mt-4">
            <img src={mainImg} alt="" />
          </div>
          <div className="w-1/2 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui
            alias dolorum, placeat rem libero cupiditate maxime obcaecati unde
            nesciunt quod mollitia minus consectetur minima reiciendis itaque
            quidem deserunt sequi quibusdam quae!
          </div>
          <button
            onClick={handleCreateNewProject}
            className="flex items-center gap-2 bg-black text-white mt-2 px-6 py-3 rounded-md hover:bg-gray-900 transition"
          >
            <div className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center">
              <FiPlus size={16} />
            </div>

            <span>Create New Project</span>
          </button>
          <CustomModal isOpen={isNewProjectModalOpen}>
            <div className="text-xl font-bold">Create Project</div>
            <div className="mt-2">
              <label className="text-gray-400 block" htmlFor="projectName">
                Enter Project Name:
              </label>
              <input
                type="text"
                placeholder="Type Here"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="flex justify-end gap-4 mt-4">
              {/* Cancel Button */}
              <button
                onClick={handleNewProjectCancel}
                className="px-6 py-2 bg-white text-red-500 border border-red-500 rounded-md hover:bg-red-50 transition"
              >
                Cancel
              </button>

              {/* Create Button */}
              <button
                onClick={handleNewProjectCreate}
                className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
              >
                Create
              </button>
            </div>
          </CustomModal>
        </div>
      ) : (
        <div>
          <div className="px-20 py-10  flex justify-between items-center">
            <h2 className="text-3xl font-bold text-purple-600">Projects</h2>
            <button
              onClick={handleCreateNewProject}
              className="flex items-center gap-2 bg-black text-white mt-2 px-6 py-3 rounded-md hover:bg-gray-900 transition"
            >
              <div className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center">
                <FiPlus size={16} />
              </div>

              <span>Create New Project</span>
            </button>
          </div>
          <div className="mx-20 mt-10">
            <ProjectsList projects={projects} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCreationPage;
