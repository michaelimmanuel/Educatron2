import type { NextPage } from "next";
import Home11 from "../components/home";
import styles from "./home.module.css";

const Home1: NextPage = () => {
  return (
    <div className={styles.home}>
      <Home11 />
    </div>
  );
};

export default Home1;
