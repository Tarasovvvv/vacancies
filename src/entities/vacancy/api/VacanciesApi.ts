import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IVacancy } from "entities/vacancy/model/types/Vacancy";

const VacanciesApi = createApi({
  reducerPath: "vacanciesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://670558dd031fd46a830f9fda.mockapi.io" }),
  endpoints: (build) => ({
    getAll: build.query<IVacancy[], void>({
      query: () => ({
        url: "vacancies",
      }),
    }),
    getVacancyById: build.query<IVacancy, { vacancyId: number }>({
      query: ({ vacancyId }) => ({
        url: "vacancies",
        params: {
          id: vacancyId,
        },
      }),
    }),
  }),
});

export default VacanciesApi;
export const { useGetAllQuery, useGetVacancyByIdQuery } = VacanciesApi;
