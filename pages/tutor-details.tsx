import type { NextPage } from "next";
import HeaderLoggedIn1 from "../components/header-logged-in1";
import Footer from "../components/footer";
import styles from "../src/output.css";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const TutorDetails: NextPage = () => {
  return (
    <div className="container">
      <HeaderLoggedIn1 />
      <h1>
      Tutor Details
      </h1>
      <Footer />
    </div>
  );
};

export default TutorDetails;
