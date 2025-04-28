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

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<ProjectCreationLayout />}>
        <Route path="/" element={<ProjectCreationPage />} />
      </Route>

      <Route path="projects" element={<UploadFlowLayout />}>
        <Route path="" element={<AddPodcastPage />} />
        <Route path="create" element={<CreateAndRepurposePage />} />
        <Route path="widget" element={<PodcastWidgetPage />} />
        <Route path="upgrade" element={<UpgradePage />} />
      </Route>

      <Route path="myaccount" element={<UploadFlowLayout />}>
        <Route path="" element={<AccountSettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
