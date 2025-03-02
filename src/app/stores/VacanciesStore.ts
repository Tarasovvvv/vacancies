import { configureStore } from "@reduxjs/toolkit";
import { VacanciesApi } from "entities/vacancy";

const VacanciesStore = configureStore({
  reducer: {
    ["vacanciesApi"]: VacanciesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(VacanciesApi.middleware),
});

export default VacanciesStore;

export type RootState = ReturnType<typeof VacanciesStore.getState>;
export type AppDispatch = typeof VacanciesStore.dispatch;
