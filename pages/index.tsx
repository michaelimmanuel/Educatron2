import type { NextPage } from "next";
import HeaderLoggedIn1 from "../components/header-logged-in1";
import HeaderLoggedOut from "../components/header"
import HeaderLoggedIn2 from "../components/header-logged-in";
import Footer from "../components/footer";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import React from "react";

const TutorsList: NextPage = () => {

  return (
    <div className="container">
      <HeaderLoggedIn1/>
      <Footer/>
    </div>
  );
};

export default TutorsList;

