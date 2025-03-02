import { VacancyPreview } from "entities/vacancy";
import styles from "./OverviewPage.module.scss";
import { useVacancies } from "entities/vacancy";

function OverviewPage() {
  const { vacancies } = useVacancies();

  return (
    <>
      <h2 className={styles.pageTitle}>Наши вакансии</h2>
      <div className={styles.contentContainer}>
        {vacancies.map((vacancy) => (
          <VacancyPreview vacancy={vacancy} />
        ))}
      </div>
    </>
  );
}

export default OverviewPage;
