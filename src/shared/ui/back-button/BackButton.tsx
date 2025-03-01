import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.scss";

function BackButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <button className={styles.backButton} onClick={handleClick}>
      <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 21L1 11L11 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default BackButton;
