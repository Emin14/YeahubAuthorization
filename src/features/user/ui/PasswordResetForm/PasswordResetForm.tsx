import { useForm, type SubmitHandler } from "react-hook-form";
import { Button, H2Title, Label } from "../../../../shared/ui";
import { emailValidation } from "../../lib";
import styles from "./PasswordResetForm.module.css";

type PasswordResetFormProps = {
  className: string;
  showModal: () => void;
};

type FormValue = {
  email: string;
};

export default function PasswordResetForm({
  className,
  showModal,
}: PasswordResetFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    console.log(data);
    showModal();
  };

  return (
    <form
      className={`${styles.passwordResetForm} ${className}`}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
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
        // value={mail}
        // onChange={setMail}
        error={errors.email?.message?.toString()}
        {...register("email", emailValidation)}
      />
      <Button type="submit" className={styles.button}>
        Отправить
      </Button>
    </form>
  );
}
