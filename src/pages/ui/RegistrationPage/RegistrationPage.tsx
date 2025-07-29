import { HeroSection } from "../../../widgets/heroSection/ui";
import { AuthSwitch } from "../../../shared/ui";
import { RegistrationForm } from "../../../features/user/ui";
import styles from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div className={styles.registrationPage}>
      <HeroSection />
      <div className={styles.rightBlock}>
        <RegistrationForm className={styles.registerForm} />
        <AuthSwitch mode={"login"} className={styles.registerLink} />
      </div>
    </div>
  );
}
