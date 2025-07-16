import { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { Button } from "../../../../shared";
import { useRegistrationMutation } from "../../api/registrationApi";
import {
  getApiErrorMessage,
  type ApiError,
  type RegistrationRequest,
  type UserResponse,
} from "../../model/types";
import styles from "./Registration.module.css";

type RegistrationProps = {
  data: RegistrationRequest;
  handleErrorChange: (fieldName: string, value: string) => void;
  confirmationData: {
    consentToDataProcessing: boolean;
    agreedToTerms: boolean;
    consentToMarketing: boolean;
  };
  className?: string;
};

const errorMessages = {
  "user.user.conflict": "Такой пользователь уже существует",
};

export default function Registration({
  data,
  handleErrorChange,
  confirmationData,
  className,
}: RegistrationProps) {
  const btnIsDisabled = Object.values(confirmationData).every(Boolean);
  const navigate = useNavigate();
  const [registration] = useRegistrationMutation();
  const [error, setError] = useState("");

  function isErrorMessage(key: string): key is keyof typeof errorMessages {
    return key in errorMessages;
  }

  function isUserData(data: unknown): data is UserResponse {
    if (typeof data !== "object" || data === null) {
      return false;
    }
    return "access_token" in data;
  }

  const handleClick = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    let isValid = true;

    handleErrorChange("firstName", "");
    handleErrorChange("email", "");
    handleErrorChange("password", "");
    handleErrorChange("confirmPassword", "");
    handleErrorChange("response", "");

    if (data.firstName.length < 3 || !nameRegex.test(data.firstName)) {
      handleErrorChange(
        "firstName",
        "Имя пользователя может состоять только из букв и цифр и не быть меньше 3 символов",
      );
      isValid = false;
    }

    if (!emailRegex.test(data.email)) {
      handleErrorChange(
        "email",
        "Введите корректный email (например: user@example.com)",
      );
      isValid = false;
    }

    if (data.password.length < 8 || !passwordRegex.test(data.password)) {
      handleErrorChange(
        "password",
        "Пароль должен состоять минимум из 8 символов, хотя бы одна заглавная буква, одна цифра и один спецсимвол",
      );
      isValid = false;
    }

    if (data.password !== data.confirmPassword) {
      handleErrorChange("confirmPassword", "Пароли не совпадают");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    try {
      const res = await registration(data).unwrap();
      if (isUserData(res)) {
        Cookies.set("access_token", res.access_token);
        navigate("/");
      }
    } catch (err) {
      const message = getApiErrorMessage(err as ApiError);
      if (isErrorMessage(message)) {
        setError(errorMessages[message]);
      } else {
        setError(message);
      }
    }
  };

  return (
    <>
      <Button
        type="button"
        className={`${styles.registrationButton} ${className}`}
        onClick={handleClick}
        disabled={!btnIsDisabled}
      >
        Регистрация
      </Button>
      {error && <p className={styles.responseError}>{error}</p>}
    </>
  );
}
