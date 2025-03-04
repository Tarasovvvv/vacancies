import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddRepoPage, NotFoundPage, OverviewPage, VacancyPage } from "pages";
import Layout from "./Layout/Layout";
import { HeadProvider } from "react-head";

function App() {
  return (
    <HeadProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/:vacancyId" element={<VacancyPage />} />
            <Route path="/:vacancyId/add-github" element={<AddRepoPage github />} />
            <Route path="/:vacancyId/add-gitlab" element={<AddRepoPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </HeadProvider>
  );
}

export default App;
