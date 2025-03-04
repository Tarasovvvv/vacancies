import clsx from "clsx";
import { setFieldValue } from "features/vacancy-response/model/responseSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./AddRepo.module.scss";
import { useEffect, useState } from "react";
import { RootState } from "app/stores/VacanciesStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { responseFormSchema, ResponseFormSchema } from "features/vacancy-response";

interface IProps {
  github?: boolean;
}

function AddRepo({ github }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const response = useSelector((state: RootState) => state.response);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { vacancyId } = useParams();
  const platform = github ? "gitHub" : "gitLab";

  useEffect(() => {
    dispatch(setFieldValue({ field: "id", value: parseInt(vacancyId!, 10) }));
  }, []);
  const onInvalid = (errors: unknown) => console.error(errors, getValues());

  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ResponseFormSchema>({
    resolver: zodResolver(responseFormSchema),
    defaultValues: response,
    mode: "onBlur",
  });

  const onSubmit = (data: ResponseFormSchema) => {
    const updatedVcs = {
      ...response.vcss,
      [platform]: {
        nickname: data?.vcss?.[platform]?.nickname,
        subscribers: data?.vcss?.[platform]?.subscribers,
      },
    };

    dispatch(setFieldValue({ field: "vcss", value: updatedVcs as { [key: string]: { nickname: string; subscribers: string } } }));
    navigate(`/${vacancyId}`);
  };

  const handleRepoCountChange = (amount: string) => {
    setValue(`vcss.${platform}.subscribers`, amount, { shouldValidate: true });
    setIsOpen(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <label className={styles.label}>
        <p>Никнейм</p>
        <input className={styles.input} type="text" placeholder="Никнейм" {...register(`vcss.${platform}.nickname`)} />
        {errors?.vcss?.[platform]?.nickname && <span className={styles.error}>{errors?.vcss?.[platform]?.nickname.message}</span>}
      </label>

      <label className={styles.label}>
        <p>Количество репозиториев</p>
        <div className={styles.repoCountInput} onClick={() => setIsOpen(!isOpen)}>
          <input className={`${styles.input} ${styles.accordionInput}`} type="text" placeholder="Не выбрано" {...register(`vcss.${platform}.subscribers`)} />
          <button className={styles.accordionButton} type="button">
            <svg
              className={clsx(styles.accordionButtonSvg, { [styles.isClosed]: !isOpen })}
              width="25px"
              height="12.5px"
              viewBox="0 0 27 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 14L13.5 1.5L26 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </label>

      {errors?.vcss?.[platform]?.subscribers && <span className={styles.error}>{errors?.vcss?.[platform]?.subscribers.message}</span>}
      {errors?.vcss && <span className={styles.error}>{errors?.vcss?.message}</span>}

      <div className={clsx(styles.accordion, { [styles.inactive]: !isOpen })}>
        <ul className={styles.ul}>
          {["1-5", "5-10", "10+"].map((amount, i) => (
            <li
              className={styles.accordionItem}
              key={i}
              onClick={() => {
                handleRepoCountChange(amount);
              }}
            >
              {amount}
            </li>
          ))}
        </ul>
      </div>

      <button className={styles.submitButton} type="submit">
        Продолжить
      </button>
    </form>
  );
}

export default AddRepo;
