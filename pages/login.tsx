import type { NextPage } from "next";
import styles from "./login.module.css";

const Login: NextPage = () => {
  return (
    <div className={styles.login}>
      <img className={styles.loginIcon} alt="" src="/login.svg" />
    </div>
  );
};

export default Login;
