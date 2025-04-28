import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import ProjectCreationLayout from "./layouts/ProjectCreationLayout";
import ProjectCreationPage from "./pages/ProjectCreationPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProjectCreationLayout />}>
        <Route path="/" element={<ProjectCreationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
