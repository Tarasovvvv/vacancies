import { IVacancyPreview } from "entities/vacancy";
import styles from "./VacancyPreview.module.scss";
import { Link } from "react-router-dom";

function VacancyPreview({ id, location, jobTitle, salary }: IVacancyPreview) {
  const formatSalary = (salary: string) => {
    const formattedSalary: number = parseInt(salary, 10);

    return isNaN(formattedSalary) ? salary : formattedSalary.toLocaleString("ru-RU");
  };

  return (
    <article className={styles.vacancyPreview}>
      <div className={styles.data}>
        <p className={styles.secondaryText}>{location}</p>
        <h3 className={styles.primaryText}>{jobTitle}</h3>
        <p className={styles.secondaryText}>от {formatSalary(salary)} тг</p>
      </div>
      <Link className={styles.detailsLink} to={`${id}`}>
        Подробнее
        <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.41669 12.5L20.9167 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.1667 5.75L20.9167 12.5L14.1667 19.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </article>
  );
}

export default VacancyPreview;
