import { useState, createContext, useContext } from "react";
import { api } from "../lib/api";
import toast from "react-hot-toast";

const ProjectContext = createContext(undefined);

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const createProject = async (name) => {
    try {
      setLoading(true);
      const res = await api.post("/projects", { name });
      toast.success("New Project Created!");
      setProjects([...projects, res.data.project]);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const getProjects = async () => {
    try {
      setLoading(true);
      const res = await api.get("/projects");
      setProjects(res.data.projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProjectContext.Provider
      value={{ projects, loading, createProject, getProjects }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useEditor must be used within EditorProvider");
  }
  return context;
};

export default ProjectProvider;
