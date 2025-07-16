import { useRef, useState } from "react";
import envelope from "../../../assets/envelope.svg";
import styles from "./EmailSentNotification.module.css";

type EmailSentNotificationProps = {
  setShowModal: (value: boolean) => void;
};

export default function EmailSentNotification({
  setShowModal,
}: EmailSentNotificationProps) {
  const [timer, setTimer] = useState<number>(0);
  const ref = useRef<undefined | number>(undefined);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === "wrapper") {
      setShowModal(false);
    }
  };

  const resend = () => {
    clearInterval(ref.current);
    setTimer(10);
    ref.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(ref.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className={styles.wrapper} id="wrapper" onClick={handleClick}>
      <div className={styles.emailSentNotification}>
        <img src={envelope} alt="" className={styles.img} />
        <h4 className={styles.title}>Мы отправили письмо с инструкциями</h4>
        <p className={styles.info}>
          Если вы не получили письмо с инструкциями, проверьте, пожалуйста,
          папку «Спам» или попробуйте отправить запрос ещё раз
        </p>
        {!!timer && <p>{timer}</p>}
        <button className={styles.btn} onClick={resend}>
          Отправить повторно
        </button>
      </div>
    </div>
  );
}
