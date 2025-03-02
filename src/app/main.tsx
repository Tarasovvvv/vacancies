import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { VacanciesStore } from "./stores";
import App from "./App.tsx";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={VacanciesStore}>
      <App />
    </Provider>
  </StrictMode>
);
