import { useState } from "react";
import Logo from "../../../../entities/ui/logo/Logo";
import Registration from "../../../../shared/ui/AuthSwitch/AuthSwitch";
import EmailSentNotification from "../../../../shared/ui/EmailSentNotification/EmailSentNotification";
import HeroSection from "../../../../widgets/heroSection/ui/HeroSection/HeroSection";
import PasswordResetForm from "../../../../widgets/user/ui/PasswordResetForm/PasswordResetForm";
import styles from "./PasswordRecoveryPage.module.css";

export default function PasswordRecoveryPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.passwordRecoveryPage}>
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
        <PasswordResetForm
          className={styles.loginForm}
          showModal={() => setShowModal((prev) => !prev)}
        />
        <Registration
          registrationOrLogin={"registration"}
          className={styles.registerLink}
        />
        {showModal && <EmailSentNotification setShowModal={setShowModal} />}
      </div>
    </div>
  );
}
