import type { NextPage } from "next";
import HeaderLoggedIn1 from "../components/header-logged-in1";
import Footer from "../components/footer";
import styles from "./why-tutor.module.css";

const WhyTutor: NextPage = () => {
  return (
    <div className={styles.whyTutor}>
      <div className={styles.whyTutorChild} />
      <HeaderLoggedIn1 />
      <Footer />
    </div>
  );
};

export default WhyTutor;
