import { useState, createContext, useContext } from "react";

const ProjectContext = createContext(undefined);

const project = { id: "sdfs", name: "name", files: [] };

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([project]);

  return (
    <ProjectContext.Provider value={{ projects }}>
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
