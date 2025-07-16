import { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { Button } from "../../../../shared";
import { useLoginMutation } from "../../api/authApi";
import {
  getApiErrorMessage,
  type ApiError,
  type LoginRequest,
} from "../../model/types";
import styles from "./Login.module.css";

type LoginProps = {
  data: LoginRequest;
  handleErrorChange: (fieldName: string, value: string) => void;
  className: string;
};

const errorMessages = {
  "auth.user.email.not_exist": "Такой адрес электронной почты не существует",
  "auth.user.password.wrong":
    "У пользователя с этим адресом электронной почты есть другой пароль",
};

export default function Login({
  data,
  handleErrorChange,
  className,
}: LoginProps) {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function isErrorMessage(key: string): key is keyof typeof errorMessages {
    return key in errorMessages;
  }

  const handleClick = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isError = false;
    handleErrorChange("username", "");
    handleErrorChange("password", "");
    console.log(emailRegex.test(data.username));
    console.log(data.username);
    if (!emailRegex.test(data.username)) {
      handleErrorChange(
        "username",
        "Введите корректный email (например: user@example.com)",
      );
      isError = true;
    }

    if (data.password.length < 8) {
      handleErrorChange("password", "Пароль должен быть минимум 8 символов");
      isError = true;
    }

    if (!isError) {
      try {
        const userData = await login(data).unwrap();
        Cookies.set("access_token", userData.access_token);
        navigate("/");
      } catch (err) {
        const message = getApiErrorMessage(err as ApiError);
        if (isErrorMessage(message)) {
          setError(errorMessages[message]);
        } else {
          setError(message);
        }
      }
    }
  };

  return (
    <>
      <Button
        type="button"
        className={`${styles.loginButton} ${className}`}
        onClick={handleClick}
      >
        Вход
      </Button>
      {error && <p className={styles.responseError}>{error}</p>}
    </>
  );
}
