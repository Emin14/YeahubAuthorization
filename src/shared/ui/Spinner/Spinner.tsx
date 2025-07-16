import styles from "./Spinner.module.css";

export default function Spinner({ className = "" }) {
  return (
    <div className={`${styles.spinnerContainer} ${className}`}>
      <div className={styles.fancySpinner} aria-label="Loading"></div>
    </div>
  );
}
