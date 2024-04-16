import type { NextPage } from "next";
import LoginPage from "../components/login1";
import styles from "./login.module.css";

const Login: NextPage = () => {
  return (
    <div className={styles.login}>
      <LoginPage />
    </div>
  );
};

export default Login;
