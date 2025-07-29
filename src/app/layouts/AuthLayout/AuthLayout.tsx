import { Logo } from "../../../shared/ui";
import { Outlet } from "react-router";
import styles from "./AuthLayout.module.css";

function Layout() {
  return (
    <div className={styles.wrapper}>
      <Logo
        iconWidth={22}
        iconColor={"#FFFFFF"}
        iconBackgroundColor={"#4600E9"}
        textColor={"#141414"}
        textSize={"26px"}
        className={styles.logo}
      />
      <Outlet />
    </div>
  );
}

export default Layout;
