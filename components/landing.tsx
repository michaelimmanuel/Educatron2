import type { NextPage } from "next";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import Header from "./header";
import OpeningPg from "./landing/opening";

const Landing: NextPage = () => {
  return (
    <div className="">
      <div className="position sticky">
        <Header />
      </div>
        <OpeningPg />
        
    </div>
  );
};

export default Landing;
