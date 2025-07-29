import { Logout } from "../../../features/user/ui";
import { Logo, Button } from "../../../shared/ui";
import {
  home,
  blog,
  lessons,
  mentors,
  profile,
  support,
} from "../../../assets";
import { useGetProfileQuery } from "../../../entities/user/api";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const { data } = useGetProfileQuery();

  return (
    <div className={styles.homePage}>
      <div className={styles.leftBlock}>
        <Logo
          iconWidth={22}
          iconColor={"#FFFFFF"}
          iconBackgroundColor={"#4600E9"}
          textColor={"#141414"}
          textSize={"26px"}
          className={styles.logo}
        />
        <ul>
          <li className={styles.menuItem}>
            <img src={home} alt="" />
            <span>Главная</span>
          </li>
          <li className={styles.menuItem}>
            <img src={profile} alt="" />
            <span>Мой профиль</span>
          </li>
          <li className={styles.menuItem}>
            <img src={lessons} alt="" />
            <span>Обучение</span>
          </li>
          <li className={styles.menuItem}>
            <img src={blog} alt="" />
            <span>Блог</span>
          </li>
          <li className={styles.menuItem}>
            <img src={mentors} alt="" />
            <span>Менторы</span>
          </li>
        </ul>
        <Button type="button" className={styles.supportBtn}>
          <img src={support} alt="" />
          <span>Поддержка</span>
        </Button>
        <Logout />
      </div>

      <div className={styles.rightBlock}>
        <p className={styles.user}>
          <span>Привет, </span>
          <span>{data?.username}!</span>
        </p>
      </div>
    </div>
  );
}
