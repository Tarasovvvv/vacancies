// api
export { default as VacanciesApi } from "./api/VacanciesApi";
export { useGetAllQuery, useGetVacancyByIdQuery } from "./api/VacanciesApi";

// hooks
export { default as useVacancies } from "./model/hooks/useVacancies";

// types
export type { IVacancyDetailed } from "./model/types/VacancyDetailed";
export type { IVacancyPreview } from "./model/types/VacancyPreview";

// ui
export { default as VacancyPreview } from "./ui/preview/VacancyPreview";
export { default as VacancyDetailed } from "./ui/detailed/VacancyDetailed";
