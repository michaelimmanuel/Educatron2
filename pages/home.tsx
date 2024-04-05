import type { NextPage } from "next";
import Home1 from "../components/home";
import styles from "./home.module.css";

const Home1: NextPage = () => {
  return (
    <div className={styles.home}>
      <Home />
    </div>
  );
};

export default Home1;
