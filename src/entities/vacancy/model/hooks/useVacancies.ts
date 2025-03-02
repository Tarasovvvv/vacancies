import { useGetAllQuery } from "entities/vacancy";

const useCountry = () => {
  const { data, isLoading, error } = useGetAllQuery();

  return { vacancies: data || [], isLoading, error };
};
export default useCountry;
