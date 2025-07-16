import { useState } from "react";
import { Button, H2Title, Label } from "../../../../shared";
import styles from "./PasswordResetForm.module.css";

type PasswordResetFormProps = {
  className: string;
  showModal: () => void;
};

export default function PasswordResetForm({
  className,
  showModal,
}: PasswordResetFormProps) {
  const [error, setError] = useState("");
  const [mail, setMail] = useState("");

  const handleClick = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError("");
    if (!emailRegex.test(mail)) {
      setError("Введите корректный email (например: user@example.com)");
    } else {
      showModal();
    }
  };

  return (
    <div className={`${styles.passwordResetForm} ${className}`}>
      <H2Title className={styles.title}>Забыли пароль?</H2Title>
      <p className={styles.info}>
        Для восстановления пароля введите адрес эл.почты, на который вы
        регистрировались. Мы отправим письмо для воссталовления пароля
      </p>
      <Label
        title={"Электронная почта"}
        inputType={"email"}
        id={"email"}
        placeholder={"Введите электронную почту"}
        autoComplete={"username"}
        className={styles.emailLabel}
        value={mail}
        onChange={setMail}
        error={error}
      />
      <Button type="submit" className={styles.button} onClick={handleClick}>
        Отправить
      </Button>
    </div>
  );
}
