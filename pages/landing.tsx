import type { NextPage } from "next";
import LandingPage from "../components/landing";
import styles from "./landing.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Landing: NextPage = () => {
  return (
    
   <div className={styles.home}>   
    <Header />
    </div>
  );
};

export default Landing;
