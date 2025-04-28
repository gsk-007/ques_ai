import { GoProjectRoadmap } from "react-icons/go";
const ProjectsList = ({ projects }) => {
  return (
    <div>
      <div className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-200 w-1/4">
        {/* Left Image */}
        <GoProjectRoadmap className="w-16 h-16 object-cover rounded-md mr-4" />

        {/* Right Content */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-gray-800">
            Sample Project
          </h2>
          <p className="text-sm text-gray-600 mt-1">4 files</p>
          <p className="text-xs text-gray-400 mt-2">
            Last updated: lastUpdated
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
