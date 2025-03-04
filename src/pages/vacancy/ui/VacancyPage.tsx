import { Title } from "react-head";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useVacancy, VacancyDetailed } from "entities/vacancy";
import { LoaderProvider, ErrorerProvider, BackButton } from "shared/ui";
import { IFormState, resetState, ResponseForm, setFieldValue } from "features/vacancy-response";
import { RootState } from "app/stores/VacanciesStore";
import styles from "./VacancyPage.module.scss";
import { useDispatch } from "react-redux";

function VacancyPage() {
  const { vacancyId } = useParams();
  const dispatch = useDispatch();
  const { id } = useSelector((state: RootState) => state.response);
  const { vacancy, isLoading, error } = useVacancy(vacancyId!);
  const jobTitle = vacancy.jobTitle;

  if (id > -1 && id.toString() !== vacancyId) {
    resetState();
    dispatch(setFieldValue({ field: "id", value: vacancyId?.toString() as keyof IFormState }));
  }

  return (
    <>
      <Title>{`Вакансия ${jobTitle}`}</Title>
      <LoaderProvider isLoading={isLoading}>
        <ErrorerProvider error={error}>
          <div className={styles.vacancyPage}>
            <div className={styles.pageTitleWrapper}>
              <BackButton to={"/"} />
              <h1 className={styles.pageTitle}>{vacancy.jobTitle}</h1>
            </div>
            <div className={styles.contentWrapper}>
              <VacancyDetailed {...vacancy} />
              <ResponseForm {...vacancy} />
            </div>
          </div>
        </ErrorerProvider>
      </LoaderProvider>
    </>
  );
}

export default VacancyPage;
