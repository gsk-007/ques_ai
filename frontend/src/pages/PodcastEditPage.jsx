import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "../lib/api";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import { usePodcast } from "../contexts/PodcastContext";

const PodcastEditPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("");
  const [draftText, setDraftText] = useState(text);
  const [loading, setLoading] = useState(false);

  const { podcastId } = useParams();
  const { updatePodcast } = usePodcast();

  useEffect(() => {
    const getPodcastById = async (id) => {
      try {
        setLoading(true);
        const res = await api.get("/podcasts/" + id);
        setText(res.data.podcast.transcript);
      } catch (error) {
        console.log(error);
        toast.error("Error getting podcast");
      } finally {
        setLoading(false);
      }
    };
    getPodcastById(podcastId);
  }, [podcastId]);

  const handleEdit = () => {
    setIsEditing(true);
    setDraftText(text);
  };

  const handleDiscard = () => {
    setIsEditing(false);
    setDraftText(text);
  };

  const handleSave = () => {
    setText(draftText);
    setIsEditing(false);
    updatePodcast(podcastId, { transcript: draftText });
  };

  return (
    <div className="w-full mx-auto p-4">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl font-semibold">Edit Transcript</h2>
        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800"
          >
            Edit
          </button>
        ) : (
          <div className="space-x-2">
            <button
              onClick={handleDiscard}
              className="border border-gray-400 text-gray-700 px-3 py-1 rounded hover:bg-gray-100"
            >
              Discard
            </button>
            <button
              onClick={handleSave}
              className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800"
            >
              Save
            </button>
          </div>
        )}
      </div>

      {/* Card */}
      <div className="bg-white border mt-6 border-gray-200 rounded-xl p-4 shadow-sm min-h-[320px]">
        {loading && <Loader />}
        {isEditing ? (
          <textarea
            className="w-full min-h-[320px] border border-gray-300 rounded p-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-300"
            value={draftText}
            onChange={(e) => setDraftText(e.target.value)}
          />
        ) : (
          <p className="text-gray-700 whitespace-pre-line">{text}</p>
        )}
      </div>
    </div>
  );
};

export default PodcastEditPage;
