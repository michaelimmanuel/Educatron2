import type { NextPage } from "next";
import styles from "./home.module.css";

const Home1: NextPage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.wrapperFrame5}>
        <img className={styles.wrapperFrame5Child} alt="" src="/frame-5.svg" />
      </div>
    </div>
  );
};

export default Home1;
