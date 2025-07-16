import { useState } from "react";
import { H2Title, Label } from "../../../../shared";
import { PasswordLabel } from "../../../../features/user/ui/PasswordLabel/PasswordLabel";
import Registration from "../../../../features/user/ui/Registration/Registration";
import styles from "./RegistrationForm.module.css";

type RegistrationFormProps = {
  className: string;
};

export default function RegistrationForm({ className }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+7",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    response: "",
  });

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
      <H2Title className={styles.sectionTitle}>Регистрация</H2Title>
      <form className={styles.form}>
        <Label
          title={"Имя"}
          inputType={"firstName"}
          id={"firstName"}
          placeholder={"Введите имя"}
          autoComplete={"firstName"}
          className={styles.label}
          value={formData.firstName}
          onChange={handleInputChange("firstName")}
          error={error.firstName}
        />

        <Label
          title={"Фамилия"}
          inputType={"lastName"}
          id={"lastName"}
          placeholder={"Введите фамилию"}
          autoComplete={"lastName"}
          className={styles.label}
          value={formData.lastName}
          onChange={handleInputChange("lastName")}
          error={error.lastName}
        />

        <Label
          title={"Номер телефона"}
          inputType={"tel"}
          id={"phone"}
          placeholder={"+7 000 000–00–00"}
          autoComplete={"phone"}
          className={styles.label}
          value={formData.phone}
          onChange={handleInputChange("phone")}
          error={error.phone}
        />

        <Label
          title={"Электронная почта"}
          inputType={"email"}
          id={"email"}
          placeholder={"Введите электронную почту"}
          autoComplete={"username"}
          className={styles.label}
          value={formData.email}
          onChange={handleInputChange("email")}
          error={error.email}
        />

        <PasswordLabel
          title={"Пароль"}
          id={"password"}
          placeholder={"Введите пароль"}
          autoComplete={"current-password"}
          className={styles.label}
          value={formData.password}
          onChange={handleInputChange("password")}
          error={error.password}
        />

        <PasswordLabel
          title={"Подтвердить пароль"}
          id={"confirmPassword"}
          placeholder={"Введите пароль"}
          autoComplete={"confirm-password"}
          value={formData.confirmPassword}
          onChange={handleInputChange("confirmPassword")}
          error={error.confirmPassword}
        />

        <Registration
          data={formData}
          handleErrorChange={handleErrorChange}
          confirmationData={confirmationForm}
        />
      </form>
      <form className={styles.registrationConsent}>
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
      </form>
      {error.response && (
        <p className={styles.responseError}>{error.response}</p>
      )}
    </div>
  );
}
