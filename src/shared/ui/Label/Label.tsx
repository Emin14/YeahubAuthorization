import type { UseFormRegisterReturn } from "react-hook-form";
import styles from "./Label.module.css";

type LabelProps = {
  title: string;
  inputType: string;
  id: string;
  placeholder: string;
  autoComplete: string;
  className?: string;
  error?: string;
  register?: UseFormRegisterReturn;
};

export default function Label({
  title,
  inputType,
  id,
  placeholder,
  autoComplete,
  className,
  error,
  ...rest
}: LabelProps) {
  return (
    <label className={`${styles.label} ${className}`}>
      {title}

      <input
        type={inputType}
        id={id}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...rest}
      />
      {error && <p className={styles.error}>{error}</p>}
    </label>
  );
}
