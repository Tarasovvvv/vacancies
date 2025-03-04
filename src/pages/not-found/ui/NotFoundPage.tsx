import { Title } from "react-head";
import styles from "./NotFoundPage.module.scss";

function NotFoundPage() {
  return (
    <>
      <Title>Не найдено</Title>
      <p className={styles.message}>
        Ничего не найдено
        <br />
        🤔
      </p>
    </>
  );
}

export default NotFoundPage;
