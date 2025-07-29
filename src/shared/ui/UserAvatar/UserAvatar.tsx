import { user } from "../../../assets";
import styles from "./UserAvatar.module.css";

type UserAvatarProps = {
  url?: string;
};

export default function UserAvatar({ url }: UserAvatarProps) {
  return (
    <div className={styles.userAvatar}>
      <img className={styles.userLogo} src={url ?? user} alt="" />
    </div>
  );
}
