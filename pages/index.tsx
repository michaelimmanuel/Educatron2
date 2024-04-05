import type { NextPage } from "next";
import Register1 from "../components/register";
import styles from "./index.module.css";

const Register1: NextPage = () => {
  return (
    <div className={styles.register}>
      <Register />
    </div>
  );
};

export default Register1;
