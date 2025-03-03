import styles from "./LoaderProvider.module.scss";

interface IProps {
  children: JSX.Element[] | JSX.Element;
  isLoading: boolean;
}

function LoaderProvider({ children, isLoading }: IProps) {
  return isLoading ? (
    <div className={styles.loader}>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  ) : (
    children
  );
}

export default LoaderProvider;
