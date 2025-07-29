import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Cookies from "js-cookie";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "../../api";
import {
  getApiErrorMessage,
  type ApiError,
  type LoginRequest,
} from "../../model";
import { emailValidation, passwordValidation } from "../../lib";
import { Button, H2Title, Label, PasswordLabel } from "../../../../shared/ui";
import { authErrorMessages } from "../../../../shared/consts";
import styles from "./AuthenticationForm.module.css";

type AuthenticationFormProps = {
  className: string;
};

export default function AuthenticationForm({
  className,
}: AuthenticationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();

  const [error, setError] = useState("");

  const [login] = useLoginMutation();
  const navigate = useNavigate();

  function isErrorMessage(key: string): key is keyof typeof authErrorMessages {
    return key in authErrorMessages;
  }

  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    try {
      const userData = await login(data).unwrap();
      Cookies.set("access_token", userData.access_token);
      navigate("/");
    } catch (err) {
      const message = getApiErrorMessage(err as ApiError);
      if (isErrorMessage(message)) {
        setError(authErrorMessages[message]);
      } else {
        setError(message);
      }
    }
  };

  return (
    <div className={className}>
      <H2Title className={styles.sectionTitle}>Вход в личный кабинет</H2Title>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Label
          title={"Электронная почта"}
          inputType={"email"}
          id={"email"}
          placeholder={"Введите электронную почту"}
          autoComplete={"username"}
          className={styles.emailLabel}
          error={errors.username?.message?.toString()}
          {...register("username", emailValidation)}
        />
        <PasswordLabel
          title={"Пароль"}
          id={"password"}
          placeholder={"Введите пароль"}
          autoComplete={"current-password"}
          error={errors.password?.message?.toString()}
          {...register("password", passwordValidation)}
        />

        <Link to={"/password-recovery"} className={styles.forgotPassword}>
          Забыли пароль?
        </Link>

        <Button type="submit" className={styles.loginButton}>
          Вход
        </Button>
        {error && <p className={styles.responseError}>{error}</p>}
        <div className="password-strength"></div>
      </form>
    </div>
  );
}
