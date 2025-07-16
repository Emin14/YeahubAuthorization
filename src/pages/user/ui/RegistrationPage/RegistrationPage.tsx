import HeroSection from "../../../../widgets/heroSection/ui/HeroSection/HeroSection";
import Logo from "../../../../entities/ui/logo/Logo";
import Registration from "../../../../shared/ui/AuthSwitch/AuthSwitch";
import RegistrationForm from "../../../../widgets/user/ui/RegistrationForm/RegistrationForm";
import styles from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div className={styles.registrationPage}>
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
        <RegistrationForm className={styles.registerForm} />
        <Registration
          registrationOrLogin={"login"}
          className={styles.registerLink}
        />
      </div>
    </div>
  );
}
