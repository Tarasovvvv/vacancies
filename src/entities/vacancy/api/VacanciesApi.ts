import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IVacancyDetailed, IVacancyPreview } from "entities/vacancy";

const VacanciesApi = createApi({
  reducerPath: "vacanciesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://670558dd031fd46a830f9fda.mockapi.io" }),
  endpoints: (build) => ({
    getAll: build.query<IVacancyPreview[], void>({
      query: () => ({
        url: "vacancies",
        params: {
          page: 1,
          limit: 6,
        },
      }),
    }),
    getVacancyById: build.query<IVacancyDetailed, { vacancyId: number }>({
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
