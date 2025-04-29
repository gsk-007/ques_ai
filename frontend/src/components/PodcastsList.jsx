import React from "react";
import { usePodcast } from "../contexts/PodcastContext";
import { useNavigate } from "react-router";
import { formatDate } from "../lib/formatDate";

const PodcastsList = ({ podcasts }) => {
  const navigate = useNavigate();
  const { deletePodcast } = usePodcast();

  const handleViewPodcast = (id) => {
    navigate(`/podcast/${id}`);
  };

  const handlePodcastDelete = (id) => {
    deletePodcast(id);
  };
  return (
    <div className=" bg-white shadow-md rounded-2xl p-6 w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold text-purple-700 mb-4">Your Files</h2>

      <div className="overflow-x-auto overflow-y-scroll h-[36vh]">
        <table className="min-w-full border border-gray-200 text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase">
            <tr>
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Uploaded Date & Time</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {podcasts.map((file, index) => (
              <tr key={file._id || index} className="hover:bg-gray-50">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{file.name}</td>
                <td className="px-4 py-3">{formatDate(file.updatedAt)}</td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    onClick={() => handleViewPodcast(file._id)}
                    className="border border-gray-400 text-gray-600 bg-white px-3 py-1 rounded hover:bg-gray-100"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handlePodcastDelete(file._id)}
                    className="border border-gray-400 text-gray-600 bg-white px-3 py-1 rounded hover:bg-gray-100"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PodcastsList;
