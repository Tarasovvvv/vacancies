import { HeadProvider } from "react-head";
import { useVacancies } from "entities/vacancy";
import styles from "./OverviewPage.module.scss";
import VacanciesPreviewsList from "widgets/vacancies-previews-list/VacanciesPreviewsList";

function OverviewPage() {
  const vacanciesData = useVacancies();

  return (
    <>
      <HeadProvider>
        <title>Вакансии</title>
      </HeadProvider>

      <div className={styles.overviewPage}>
        <h2 className={styles.pageTitle}>Наши вакансии</h2>
        <div className={styles.contentWrapper}>
          <VacanciesPreviewsList {...vacanciesData} />
        </div>
      </div>
    </>
  );
}

export default OverviewPage;
