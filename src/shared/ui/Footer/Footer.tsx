import { LinkIcon, Logo } from "../";
import { youtube, github, instagram, telegram } from "../../../assets";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Logo textColor={"#FFFFFF"} textSize={"26px"} />
      <p className={styles.slogan}>
        Выбери, каким будет IT завтра, вместе с нами
      </p>
      <div className={styles.linkIconList}>
        <LinkIcon size={29} src={youtube} backgroundColor={"white"} />
        <LinkIcon size={29} src={github} backgroundColor={"white"} />
        <LinkIcon size={29} src={instagram} backgroundColor={"white"} />
        <LinkIcon size={29} src={telegram} backgroundColor={"white"} />
      </div>
      <p className={styles.description}>
        YeaHub — это полностью открытый проект, призванный объединить и улучшить
        IT-сферу. Наш исходный код доступен для просмотра на GitHub. Дизайн
        проекта также открыт для ознакомления в Figma.
      </p>
      <div className={styles.line}></div>
      <p className={styles.date}>© 2024 YeaHub</p>
    </div>
  );
}
