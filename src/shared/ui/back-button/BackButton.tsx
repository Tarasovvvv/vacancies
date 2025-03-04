import { Link } from "react-router-dom";
import styles from "./BackButton.module.scss";

interface IProps {
  to: string;
}

function BackButton({ to }: IProps) {
  return (
    <Link className={styles.backButton} to={to}>
      <svg width="10" height="20" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 21L1 11L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

export default BackButton;
