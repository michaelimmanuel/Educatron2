import type { NextPage } from "next";
import LandingPage from "../components/landing";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../src/output.css";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const Landing: NextPage = () => {
  return (     
    <Header />
  );
};

export default Landing;
