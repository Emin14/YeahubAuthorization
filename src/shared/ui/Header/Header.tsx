import { UserAvatar } from "../";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <UserAvatar />
    </div>
  );
}
