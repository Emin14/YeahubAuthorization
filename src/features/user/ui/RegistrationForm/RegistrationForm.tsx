import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import Cookies from "js-cookie";
import { useRegistrationMutation } from "../../api";
import {
  getApiErrorMessage,
  type ApiError,
  type UserResponse,
} from "../../model";
import {
  emailValidation,
  fitstNameValidation,
  lastNameValidation,
  passwordValidation,
  telValidation,
  getPasswordStrength,
  getStrengthColor,
} from "../../lib";
import { Button, H2Title, Label, PasswordLabel } from "../../../../shared/ui";
import { authErrorMessages } from "../../../../shared/consts";
import styles from "./RegistrationForm.module.css";

type RegistrationFormProps = {
  className: string;
};

type FormValue = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export default function RegistrationForm({ className }: RegistrationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValue>();

  const navigate = useNavigate();
  const [registration] = useRegistrationMutation();
  const [error, setError] = useState("");
  const password = watch("password", "");
  const strength = getPasswordStrength(password);
  const strengthColor = getStrengthColor(strength);

  function isErrorMessage(key: string): key is keyof typeof authErrorMessages {
    return key in authErrorMessages;
  }

  function isUserData(data: unknown): data is UserResponse {
    if (typeof data !== "object" || data === null) {
      return false;
    }
    return "access_token" in data;
  }

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    const { confirmPassword, ...dataWithoutConfirmPassword } = data;
    try {
      const res = await registration(dataWithoutConfirmPassword).unwrap();
      if (isUserData(res)) {
        Cookies.set("access_token", res.access_token);
        navigate("/");
      }
    } catch (err) {
      const message = getApiErrorMessage(err as ApiError);
      if (isErrorMessage(message)) {
        setError(authErrorMessages[message]);
      } else {
        setError(message);
      }
    }
  };

  const [confirmationForm, setConfirmationForm] = useState({
    consentToDataProcessing: false,
    agreedToTerms: false,
    consentToMarketing: false,
  });

  const confirmChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setConfirmationForm((prev) => ({
      ...prev,
      [event.target.id]: event.target.checked,
    }));
  };

  const btnIsDisabled = Object.values(confirmationForm).every(Boolean);

  return (
    <div className={className}>
      <H2Title className={styles.sectionTitle}>Регистрация</H2Title>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Label
          title={"Имя"}
          inputType={"firstName"}
          id={"firstName"}
          placeholder={"Введите имя"}
          autoComplete={"firstName"}
          className={styles.label}
          {...register("firstName", fitstNameValidation)}
          error={errors.firstName?.message?.toString()}
        />

        <Label
          title={"Фамилия"}
          inputType={"lastName"}
          id={"lastName"}
          placeholder={"Введите фамилию"}
          autoComplete={"lastName"}
          className={styles.label}
          {...register("lastName", lastNameValidation)}
          error={errors.lastName?.message?.toString()}
        />

        <Label
          title={"Номер телефона"}
          inputType={"tel"}
          id={"phone"}
          placeholder={"+7 000 000–00–00"}
          autoComplete={"phone"}
          className={styles.label}
          {...register("phone", telValidation)}
          error={errors.phone?.message?.toString()}
        />

        <Label
          title={"Электронная почта"}
          inputType={"email"}
          id={"email"}
          placeholder={"Введите электронную почту"}
          autoComplete={"username"}
          className={styles.label}
          {...register("email", emailValidation)}
          error={errors.email?.message?.toString()}
        />

        <PasswordLabel
          title={"Пароль"}
          id={"password"}
          placeholder={"Введите пароль"}
          autoComplete={"current-password"}
          className={styles.label}
          passwordWatch={{ strength, strengthColor }}
          error={errors.password?.message?.toString()}
          {...register("password", passwordValidation)}
        />

        <PasswordLabel
          title={"Подтвердить пароль"}
          id={"confirmPassword"}
          placeholder={"Введите пароль"}
          autoComplete={"confirm-password"}
          {...register("confirmPassword", {
            required: "Подтвердите пароль",
            validate: (value) => value === password || "Пароли не совпадают",
          })}
          error={errors.confirmPassword?.message?.toString()}
        />

        <Button
          type="submit"
          className={styles.registrationButton}
          disabled={!btnIsDisabled}
        >
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles.registrationConsent}>
        <p className={styles.consentInfo}>
          Проставив галочку («✔») и нажимая «Зарегистрироваться»:
        </p>
        <div className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            id={"consentToDataProcessing"}
            checked={confirmationForm.consentToDataProcessing}
            onChange={confirmChange}
          />
          <span>
            Даю согласие на обработку ПД, в соответствии с Политикой в отношении
            ПД
          </span>
        </div>
        <div className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            id={"agreedToTerms"}
            checked={confirmationForm.agreedToTerms}
            onChange={confirmChange}
          />
          <span>Я подтверждаю что ознакомился(-ась) с Договором-офертой</span>
        </div>
        <div className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            id={"consentToMarketing"}
            checked={confirmationForm.consentToMarketing}
            onChange={confirmChange}
          />
          <span>
            Даю согласие на получение рекламных и информационных рассылок
          </span>
        </div>
      </div>
      {error && <p className={styles.responseError}>{error}</p>}
    </div>
  );
}
