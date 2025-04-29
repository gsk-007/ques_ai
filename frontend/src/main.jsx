import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import ProjectProvider from "./contexts/ProjectContext";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./contexts/AuthContext.jsx";
import PodcastProvider from "./contexts/PodcastContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProjectProvider>
          <PodcastProvider>
            <App />
            <Toaster />
          </PodcastProvider>
        </ProjectProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
