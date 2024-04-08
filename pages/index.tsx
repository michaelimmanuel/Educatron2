import type { NextPage } from "next";
import HeaderLoggedIn1 from "../components/header-logged-in1";
import Footer from "../components/footer";

import styles from "./index.module.css";

const TutorsList: NextPage = () => {

  return (
    <div className={styles.tutorsList}>
      <div className={styles.tutorsListChild} />
      <HeaderLoggedIn1 />
      <Footer />

    </div>
  );
};

export default TutorsList;

