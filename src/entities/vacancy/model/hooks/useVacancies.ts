import { useGetAllQuery } from "entities/vacancy";

const useVacancies = () => {
  const { data, isLoading, error } = useGetAllQuery();

  return { vacancies: data || [], isLoading, error };
};

export default useVacancies;
