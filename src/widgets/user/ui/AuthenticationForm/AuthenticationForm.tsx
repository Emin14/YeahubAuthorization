import { useState } from "react";
import { H2Title, Label } from "../../../../shared";
import { PasswordLabel } from "../../../../features/user/ui/PasswordLabel/PasswordLabel";
import { Link } from "react-router";
import Login from "../../../../features/user/ui/Login/Login";
import styles from "./AuthenticationForm.module.css";

type AuthenticationFormProps = {
  className: string;
};

export default function AuthenticationForm({
  className,
}: AuthenticationFormProps) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (fieldName: string) => {
    return (value: string) => {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: value,
      }));
    };
  };

  const handleErrorChange = (fieldName: string, value: string) => {
    setError((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className={className}>
      <H2Title className={styles.sectionTitle}>Вход в личный кабинет</H2Title>
      <form className={styles.form}>
        <Label
          title={"Электронная почта"}
          inputType={"email"}
          id={"email"}
          placeholder={"Введите электронную почту"}
          autoComplete={"username"}
          className={styles.emailLabel}
          value={formData.username}
          onChange={handleInputChange("username")}
          error={error.username}
        />
        <PasswordLabel
          title={"Пароль"}
          id={"password"}
          placeholder={"Введите пароль"}
          autoComplete={"current-password"}
          value={formData.password}
          onChange={handleInputChange("password")}
          error={error.password}
        />

        <Link to={"/password-recovery"} className={styles.forgotPassword}>
          Забыли пароль?
        </Link>
        <Login
          data={formData}
          handleErrorChange={handleErrorChange}
          className={styles.submitButton}
        />
      </form>
    </div>
  );
}
