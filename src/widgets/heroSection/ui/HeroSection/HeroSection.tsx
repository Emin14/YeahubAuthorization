import { Logo } from "../../../../shared/ui";
import { benefits } from "../../model";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.logoWrapper}>
        <Logo
          iconWidth={22}
          iconColor={"#4600E9"}
          iconBackgroundColor={"#FFFFFF"}
          textColor={"#FFFFFF"}
          textSize={"38px"}
        />
        <p>YeaHub объединяет IT-специалистов</p>
      </div>
      <div className={styles.benefits}>
        <h3 className={styles.benefitsTitle}>
          Стань частью сообщества YeaHub и получи:
        </h3>
        <ul className={styles.benefitsList}>
          {benefits.map((item) => (
            <li key={item} className={styles.benefitItem}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_17861_14136)">
                  <path
                    d="M16.5 8.3099V8.9999C16.4991 10.6172 15.9754 12.1909 15.007 13.4863C14.0386 14.7816 12.6775 15.7293 11.1265 16.1878C9.57557 16.6464 7.91794 16.5913 6.40085 16.0308C4.88376 15.4703 3.58849 14.4345 2.70822 13.0777C1.82795 11.7209 1.40984 10.1159 1.51626 8.50213C1.62267 6.88832 2.24791 5.35214 3.29871 4.1227C4.34951 2.89326 5.76959 2.03644 7.34714 1.68001C8.92469 1.32358 10.5752 1.48665 12.0525 2.1449"
                    stroke="#E1CEFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 3L9 10.5075L6.75 8.2575"
                    stroke="#E1CEFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17861_14136">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
