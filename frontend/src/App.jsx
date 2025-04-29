import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import ProjectCreationLayout from "./layouts/ProjectCreationLayout";
import ProjectCreationPage from "./pages/ProjectCreationPage";
import UploadFlowLayout from "./layouts/UploadFlowLayout";
import AddPodcastPage from "./pages/AddPodcastPage";
import AccountSettingsPage from "./pages/AccountSettingsPage";
import CreateAndRepurposePage from "./pages/CreateAndRepurposePage";
import UpgradePage from "./pages/UpgradePage";
import PodcastWidgetPage from "./pages/PodcastWidgetPage";
import PrivateRoute from "./components/PrivateRoute";
import PodcastEditPage from "./pages/PodcastEditPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        element={
          <PrivateRoute>
            <ProjectCreationLayout />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<ProjectCreationPage />} />
      </Route>

      <Route
        path="projects"
        element={
          <PrivateRoute>
            <UploadFlowLayout />
          </PrivateRoute>
        }
      >
        <Route path=":projectId" element={<AddPodcastPage />} />
        <Route path=":projectId/create" element={<CreateAndRepurposePage />} />
        <Route path=":projectId/widget" element={<PodcastWidgetPage />} />
      </Route>

      <Route
        path=""
        element={
          <PrivateRoute>
            <UploadFlowLayout />
          </PrivateRoute>
        }
      >
        <Route path="myaccount" element={<AccountSettingsPage />} />
        <Route path="upgrade" element={<UpgradePage />} />
        <Route path="podcast/:podcastId" element={<PodcastEditPage />} />
      </Route>
    </Routes>
  );
}

export default App;
