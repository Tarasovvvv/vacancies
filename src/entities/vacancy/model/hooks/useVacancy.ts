import { IVacancyDetailed, useGetVacancyByIdQuery } from "entities/vacancy";

const useVacancy = (vacancyId: number | string) => {
  const { data, isLoading, error } = useGetVacancyByIdQuery({ vacancyId: vacancyId });

  // По известной лишь богу причине, запрос на одну вакансию возвращает МАССИВ,
  // а если запросить id=1, то результатом будет массив с двумя обьектами с id 1 и 10 :)
  // Поэтому извлекаю нулевой элемент из этого массива как ожидаемый результат
  return { vacancy: data?.[0] || ({} as IVacancyDetailed), isLoading, error };
};

export default useVacancy;
