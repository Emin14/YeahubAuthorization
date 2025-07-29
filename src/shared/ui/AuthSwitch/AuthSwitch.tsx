import { Link } from "react-router";
import styles from "./AuthSwitch.module.css";

type AuthSwitchProps = {
  mode: "register" | "login";
  className?: string;
};

export default function AuthSwitch({ mode, className }: AuthSwitchProps) {
  if (mode === "register") {
    return (
      <div className={`${styles.registerLink} ${className}`}>
        <span>Нет аккаунта?</span>
        <Link to={"/registration"} className={styles.link}>
          Зарегистрироваться
        </Link>
      </div>
    );
  }

  return (
    <div className={`${styles.registerLink} ${className}`}>
      <span>Уже есть аккаунт?</span>
      <Link to={"/login"} className={styles.link}>
        Войти
      </Link>
    </div>
  );
}
