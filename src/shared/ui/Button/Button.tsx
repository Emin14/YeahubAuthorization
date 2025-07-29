import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  type: "submit" | "reset" | "button" | undefined;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  type,
  children,
  className,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.submitButton} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
