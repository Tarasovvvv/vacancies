import { Title } from "react-head";
import { useVacancies } from "entities/vacancy";
import { VacanciesPreviewsList } from "widgets";
import styles from "./OverviewPage.module.scss";
import { resetState } from "features/vacancy-response";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function OverviewPage() {
  const vacanciesData = useVacancies();
  const dispatch = useDispatch();

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
