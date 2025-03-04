import { Title } from "react-head";
import { BackButton } from "shared/ui";
import { AddRepo } from "features/vacancy-response";
import { useParams } from "react-router-dom";
import styles from "./AddRepoPage.module.scss";

interface IProps {
  github?: boolean;
}

function AddRepoPage({ github }: IProps) {
  const { vacancyId } = useParams();
  const title: string = `Добавить ${github ? "GitHub" : "GitLab"}`;

  return (
    <>
      <Title>{title}</Title>
      <div className={styles.addRepoPage}>
        <div className={styles.pageTitleWrapper}>
          <BackButton to={`/${vacancyId}`} />
          <h1 className={styles.pageTitle}>{title}</h1>
        </div>
        <AddRepo github={github} />
      </div>
    </>
  );
}

export default AddRepoPage;
