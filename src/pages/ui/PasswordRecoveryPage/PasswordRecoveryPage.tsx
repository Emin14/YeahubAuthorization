import { useState } from "react";
import { AuthSwitch, EmailSentNotification } from "../../../shared/ui";
import { HeroSection } from "../../../widgets/heroSection/ui";
import { PasswordResetForm } from "../../../features/user/ui";
import styles from "./PasswordRecoveryPage.module.css";

export default function PasswordRecoveryPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.passwordRecoveryPage}>
      <HeroSection />
      <div className={styles.rightBlock}>
        <PasswordResetForm
          className={styles.loginForm}
          showModal={() => setShowModal((prev) => !prev)}
        />
        <AuthSwitch mode={"register"} className={styles.registerLink} />
        {showModal && <EmailSentNotification setShowModal={setShowModal} />}
      </div>
    </div>
  );
}
