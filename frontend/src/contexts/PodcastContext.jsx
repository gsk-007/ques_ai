import { useState, createContext, useContext } from "react";
import { api } from "../lib/api";
import toast from "react-hot-toast";

const PodcastContext = createContext(undefined);

const PodcastProvider = ({ children }) => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(false);

  const createPodcast = async (name, transcript, projectId) => {
    try {
      setLoading(true);
      const res = await api.post("/podcasts", { name, transcript, projectId });
      toast.success("New File Created!");
      setPodcasts([...podcasts, res.data.podcast]);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const getPodcasts = async (projectId) => {
    try {
      setLoading(true);
      const res = await api.get("/podcasts/project/" + projectId);
      setPodcasts(res.data.podcasts);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const updatePodcast = async (podcastId, data) => {
    try {
      setLoading(true);
      const res = await api.put("/podcasts/" + podcastId, data);

      setPodcasts((podcasts) =>
        podcasts.map((podcast) => {
          if (podcast._id === podcastId) {
            return res.podcast;
          }
          return podcast;
        })
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  const deletePodcast = async (podcastId) => {
    try {
      setLoading(true);
      await api.delete("/podcasts/" + podcastId);
      setPodcasts((podcasts) =>
        podcasts.filter((podcast) => podcast._id !== podcastId)
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PodcastContext.Provider
      value={{
        podcasts,
        loading,
        createPodcast,
        getPodcasts,
        updatePodcast,
        deletePodcast,
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};

export const usePodcast = () => {
  const context = useContext(PodcastContext);
  if (!context) {
    throw new Error("usePodcast must be used within PodcastContext");
  }
  return context;
};

export default PodcastProvider;
