import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { IFormState, setFieldValue } from "features/vacancy-response";
import styles from "./ResponseForm.module.scss";
import { RootState } from "app/stores/VacanciesStore";
import { Link } from "react-router-dom";
import { responseFormSchema, ResponseFormSchema } from "features/vacancy-response";
import { IVacancyDetailed } from "entities/vacancy";

function ResponseForm({ id, jobTitle }: IVacancyDetailed) {
  const dispatch = useDispatch();
  const storedFormData = useSelector((state: RootState) => state.response);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResponseFormSchema>({
    resolver: zodResolver(responseFormSchema),
    defaultValues: storedFormData,
    mode: "onBlur",
  });

  useEffect(() => {
    dispatch(setFieldValue({ field: "id", value: id }));
    dispatch(setFieldValue({ field: "jobTitle", value: jobTitle }));
  }, []);

  const onSubmit = (data: ResponseFormSchema) => {
    console.log(data);
  };

  const onInvalid = (errors: unknown) => console.error(errors);

  return (
    <form className={styles.responseForm} onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <h2 className={styles.formTitle}>Откликнуться на вакансию</h2>
      <div className={styles.inputsWrapper}>
        <input type="hidden" {...register("id", { valueAsNumber: true })} />
        <input type="hidden" {...register("jobTitle")} />

        <input
          className={styles.textInput}
          type="text"
          {...register("fio")}
          placeholder="ФИО"
          onChange={(e) => dispatch(setFieldValue({ field: "fio", value: e.target.value }))}
        />
        {errors.fio && <span className={styles.error}>{errors.fio.message}</span>}

        <input
          className={styles.textInput}
          type="email"
          {...register("email")}
          placeholder="Email"
          onChange={(e) => dispatch(setFieldValue({ field: "email", value: e.target.value }))}
        />
        {errors.email && <span className={styles.error}>{errors.email.message}</span>}

        <input
          className={styles.textInput}
          type="tel"
          {...register("tel")}
          placeholder="Телефон"
          onChange={(e) => dispatch(setFieldValue({ field: "tel", value: e.target.value }))}
        />
        {errors.tel && <span className={styles.error}>{errors.tel.message}</span>}

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
