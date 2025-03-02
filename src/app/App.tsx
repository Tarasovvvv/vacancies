import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddRepoPage, OverviewPage, VacancyPage } from "pages";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/:vacancyId" element={<VacancyPage />} />
          <Route path="/:vacancyId/add-github" element={<AddRepoPage github />} />
          <Route path="/:vacancyId/add-gitlab" element={<AddRepoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
