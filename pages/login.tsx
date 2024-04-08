import type { NextPage } from "next";
import LoginIcon from "../components/login1";
import styles from "./login.module.css";

const Login: NextPage = () => {
  return (
    <div className={styles.login}>
      <LoginIcon />
    </div>
  );
};

export default Login;
