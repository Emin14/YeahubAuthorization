import styles from "./H2Title.module.css";

type Props = {
  children: string;
  className?: string;
};

export function H2Title({ children, className }: Props) {
  return <h2 className={`${styles.H2Title} ${className}`}>{children}</h2>;
}
