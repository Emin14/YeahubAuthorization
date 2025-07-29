import styles from "./H2Title.module.css";

type H2TitleProps = {
  children: string;
  className?: string;
};

export default function H2Title({ children, className }: H2TitleProps) {
  return <h2 className={`${styles.H2Title} ${className}`}>{children}</h2>;
}
