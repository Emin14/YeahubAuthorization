import { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { Button } from "../../../../shared";
import { useLogoutMutation } from "../../api/logoutApi";
import exit from "../../../../assets/exit.svg";
import { getApiErrorMessage, type ApiError } from "../../model/types";
import styles from "./Logout.module.css";

type LogoutProps = {
  className?: string;
};

export default function Logout({ className }: LogoutProps) {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const [error, setError] = useState("");

  const handleClick = async () => {
    try {
      await logout().unwrap();
      navigate("/login");
    } catch (error) {
      setError(getApiErrorMessage(error as ApiError));
    } finally {
      Cookies.remove("access_token");
    }
  };

  return (
    <>
      <Button
        type="button"
        className={`${styles.logoutButton} ${className}`}
        onClick={handleClick}
      >
        <img src={exit} alt="" />
        <span>Выход</span>
      </Button>
      {error && <p className={styles.responseError}>{error}</p>}
    </>
  );
}
