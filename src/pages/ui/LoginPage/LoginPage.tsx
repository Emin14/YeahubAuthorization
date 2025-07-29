import { HeroSection } from "../../../widgets/heroSection/ui";
import { AuthenticationForm } from "../../../features/user/ui";
import { AuthSwitch } from "../../../shared/ui";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <HeroSection />
      <div className={styles.rightBlock}>
        <AuthenticationForm className={styles.loginForm} />
        <AuthSwitch mode={"register"} className={styles.registerLink} />
      </div>
    </div>
  );
}
