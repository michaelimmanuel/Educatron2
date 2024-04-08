import type { NextPage } from "next";
import HeaderLoggedIn1 from "../components/header-logged-in1";
import Footer from "../components/footer";
import styles from "./tutor-details.module.css";

const TutorDetails: NextPage = () => {
  return (
    <div className={styles.tutorDetails}>
      <div className={styles.tutorDetailsChild} />
      <HeaderLoggedIn1 />
      <Footer />
    </div>
  );
};

export default TutorDetails;
