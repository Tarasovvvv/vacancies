import { Title } from "react-head";
import { useVacancies } from "entities/vacancy";
import { VacanciesPreviewsList } from "widgets";
import styles from "./OverviewPage.module.scss";
import { resetState } from "features/vacancy-response";

function OverviewPage() {
  const vacanciesData = useVacancies();
  resetState();

  return (
    <>
      <Title>Вакансии</Title>
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
