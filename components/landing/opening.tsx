import type { NextPage } from "next";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const OpeningPg: NextPage = () => {
    return (
    <div className="">   
        <img src="../imageplaceholder.jpg" alt="image" className="absolute z-[-1]" />
        <button type="button" className="btn mx-auto mt-40 bg-gradient-to-r ease-linear from-[#365314] to-[#1d4ed8] hover:from-[#e0e7ff] hover:to-[#881337] duration-1000">
          My name is Button
        </button>
    </div>
   
    );
  };
  
  export default OpeningPg;