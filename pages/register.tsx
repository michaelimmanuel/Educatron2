import type { NextPage } from "next";
import styles from "./register.module.css";

const Register: NextPage = () => {
  return (
    <div className={styles.register}>
      <img className={styles.registerIcon} alt="" src="/register.svg" />
    </div>
  );
};

export default Register;
