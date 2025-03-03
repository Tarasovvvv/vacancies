// api
export { default as VacanciesApi } from "./api/VacanciesApi";
export { useGetAllQuery, useGetVacancyByIdQuery } from "./api/VacanciesApi";

// functions
export { default as formatSalary } from "./model/functions/formatSalary";

// hooks
export { default as useVacancies } from "./model/hooks/useVacancies";
export { default as useVacancy } from "./model/hooks/useVacancy";

// types
export type { IVacancyDetailed } from "./model/types/VacancyDetailed";
export type { IVacancyPreview } from "./model/types/VacancyPreview";

// ui
export { default as VacancyPreview } from "./ui/preview/VacancyPreview";
export { default as VacancyDetailed } from "./ui/detailed/VacancyDetailed";
