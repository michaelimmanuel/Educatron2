import type { NextPage } from "next";
import LandingPage from "../components/landing";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../src/output.css";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import OpeningPg from "../components/landing/opening";
import HeaderLoggedIn1 from "../components/header-logged-in";

const Landing: NextPage = () => {
  return (   
    <div className="container">
      <HeaderLoggedIn1 />
    </div> 
  );
     
 
};

export default Landing;
