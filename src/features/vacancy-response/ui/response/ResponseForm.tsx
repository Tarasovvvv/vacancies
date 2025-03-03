import { useDispatch, useSelector } from "react-redux";
import { IFormState, setFieldValue } from "features/vacancy-response";
import styles from "./ResponseForm.module.scss";
import { RootState } from "app/stores/VacanciesStore";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ResponseForm() {
  const dispatch = useDispatch();
  const { id, jobTitle, fio, email, tel, vcss } = useSelector((state: RootState) => state.response);

  useEffect(() => {
    dispatch(setFieldValue({ field: "id", value: id }));
    dispatch(setFieldValue({ field: "jobTitle", value: jobTitle }));
  }, [id.toString(), jobTitle]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const formObject: { [key: string]: string } = {};

    formData.forEach((value, key) => {
      formObject[key] = value as string;
    });

    console.log(formObject);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof IFormState) => {
    dispatch(setFieldValue({ field: field, value: e.target.value }));
  };

  return (
    <form className={styles.responseForm} onSubmit={(e) => handleSubmit(e)}>
      <h2 className={styles.formTitle}>Откликнуться на вакансию</h2>
      <div className={styles.inputsWrapper}>
        <input className={styles.textInput} type="hidden" name="id" value={id} />
        <input className={styles.textInput} type="hidden" name="jobTitle" value={jobTitle} />
        <input className={styles.textInput} type="text" name="fio" value={fio} onChange={(e) => handleChange(e, "fio")} required placeholder="ФИО" />
        <input className={styles.textInput} type="email" name="email" value={email} onChange={(e) => handleChange(e, "email")} required placeholder="Email" />
        <input className={styles.textInput} type="tel" name="tel" value={tel} onChange={(e) => handleChange(e, "tel")} placeholder="Телефон" />
        <Link className={styles.buttonInput} to="add-github">
          Добавить GitHub
          <svg width="10" height="20" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L11 11L1 21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <Link className={styles.buttonInput} to="add-gitlab">
          Добавить GitLab
          <svg width="10" height="20" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L11 11L1 21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
      <button className={styles.submitButton} type="submit">
        Отправить
      </button>
    </form>
  );
}

export default ResponseForm;
