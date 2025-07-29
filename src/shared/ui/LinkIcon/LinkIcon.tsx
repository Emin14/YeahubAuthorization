import { Link } from "react-router";
import styles from "./LinkIcon.module.css";

type LinkIconProps = {
  size: number;
  backgroundColor?: string;
  src: string;
};

export default function LinkIcon({
  size,
  backgroundColor = "#DADADA",
  src,
}: LinkIconProps) {
  return (
    <Link
      to={"#"}
      className={styles.linkIcon}
      style={{ width: size, height: size, backgroundColor }}
    >
      <img src={src} alt="" />
    </Link>
  );
}
