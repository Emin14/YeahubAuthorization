import HeroSection from "../../../../widgets/heroSection/ui/HeroSection/HeroSection";
import Logo from "../../../../entities/ui/logo/Logo";
import AuthenticationForm from "../../../../widgets/user/ui/AuthenticationForm/AuthenticationForm";
import Registration from "../../../../shared/ui/AuthSwitch/AuthSwitch";
import styles from "./LoginPage.module.css";

export function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <HeroSection />
      <div className={styles.rightBlock}>
        <Logo
          iconWidth={22}
          iconColor={"#FFFFFF"}
          iconBackgroundColor={"#4600E9"}
          textColor={"#141414"}
          textSize={"26px"}
          className={styles.loginTableAndMobile}
        />
        <AuthenticationForm className={styles.loginForm} />
        <Registration
          registrationOrLogin={"registration"}
          className={styles.registerLink}
        />
      </div>
    </div>
  );
}
