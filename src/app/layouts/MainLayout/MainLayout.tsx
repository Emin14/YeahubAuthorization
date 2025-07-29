import { Outlet } from "react-router";
import { Header, Footer } from "../../../shared/ui";
import styles from "./MainLayout.module.css";

export default function MainLayout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
