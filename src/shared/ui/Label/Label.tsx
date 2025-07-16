import { type ReactElement, type SVGProps } from "react";
import styles from "./Label.module.css";

type Props = {
  title: string;
  inputType: string;
  id: string;
  placeholder: string;
  autoComplete: string;
  className?: string;
  children?: ReactElement<SVGProps<SVGSVGElement>>;
  value: string;
  onChange: (value: string) => void;
  error: string;
};

export function Label({
  title,
  inputType,
  id,
  placeholder,
  autoComplete,
  className,
  children,
  value,
  onChange,
  error,
}: Props) {
  return (
    <label className={`${styles.label} ${className}`}>
      {title}

      <input
        type={inputType}
        id={id}
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {children}
      {error && <p className={styles.error}>{error}</p>}
    </label>
  );
}
