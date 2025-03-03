import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import styles from "./ErrorerProvider.module.scss";

interface IProps {
  children: JSX.Element;
  error: FetchBaseQueryError | SerializedError | undefined;
}

function ErrorerProvider({ children, error }: IProps) {
  let errorMessage: unknown;
  try {
    if (error && typeof error === "object") {
      if ("status" in error) {
        switch (error.status) {
          case 400:
          case 404:
            throw "Ничего не найдено";
            break;
          default:
            throw "Неизвестная ошибка";
        }
      } else if ("message" in error) {
        throw "Ошибка без описания";
      }
    }
  } catch (e) {
    errorMessage = e;
  }

  return error ? (
    <p className={styles.errorMessage}>
      {errorMessage as string}
      <br />
      🤔
    </p>
  ) : (
    children
  );
}

export default ErrorerProvider;
