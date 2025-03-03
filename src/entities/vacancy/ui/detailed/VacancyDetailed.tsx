import { formatSalary, IVacancyDetailed } from "entities/vacancy";
import styles from "./VacancyDetailed.module.scss";

function VacancyDetailed({ salary, requirements, workConditions }: IVacancyDetailed) {
  return (
    <section className={styles.vacancyDetailed}>
      <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
        <p className={styles.salary}>от {formatSalary(salary)} тг</p>
        <div className={styles.ulWrapper}>
          <p className={styles.ulName}>Общие требования:</p>
          <ul className={styles.ul}>
            {requirements.map((requirement) => (
              <li key={`r${requirement}`}>{requirement}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.ulWrapper}>
        <p className={styles.ulName}>Условия работы:</p>
        <ul className={styles.ul}>
          {workConditions.map((workCondition) => (
            <li key={`wc${workCondition}`}>{workCondition}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default VacancyDetailed;
