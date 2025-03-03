import { IVacancyPreview, VacancyPreview } from "entities/vacancy";
import styles from "./VacanciesPreviewsList.module.scss";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { ErrorerProvider, LoaderProvider } from "shared/ui";

interface IProps {
  vacancies: IVacancyPreview[];
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
}

function VacanciesPreviewsList({ vacancies, isLoading, error }: IProps) {
  return (
    <LoaderProvider isLoading={isLoading}>
      <ErrorerProvider error={error}>
        <ul className={styles.vacanciesPreviewsList}>
          {vacancies.map((vacancy) => (
            <li key={vacancy.id}>
              <VacancyPreview {...vacancy} />
            </li>
          ))}
        </ul>
      </ErrorerProvider>
    </LoaderProvider>
  );
}

export default VacanciesPreviewsList;
