import { configureStore } from "@reduxjs/toolkit";
import { VacanciesApi } from "entities/vacancy";
import { responseReducer } from "features/vacancy-response";

const VacanciesStore = configureStore({
  reducer: {
    vacanciesApi: VacanciesApi.reducer,
    response: responseReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(VacanciesApi.middleware),
});

export default VacanciesStore;

export type RootState = ReturnType<typeof VacanciesStore.getState>;
export type AppDispatch = typeof VacanciesStore.dispatch;
