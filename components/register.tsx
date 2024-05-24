import type { NextPage } from "next";
import styles from "../src/output.css";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import React, { useState } from 'react';

const Register1: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-row bg-ColorWhite"> 

      <div className="flex flex-col mx-auto my-auto w-1/2 items-center bg-ColorWhite">

        <h1 className="text-center mt-12 text-4xl text-ColorTealish">Join us in <strong>Educatron</strong></h1>
      
            <div className="w-80 mb-6 mt-10 space-y-8">
              <div className="mb-4">
                <input type="text" id="username" className="bg-ColorBaseline border border-ColorBaseline text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Username" required />
              </div>
              <div className="mb-4">
                <input type="password" id="password" className="bg-ColorBaseline border border-ColorBaseline text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Password" required />
              </div>
            </div>

            <div>
            <div className="flex">
              <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost rounded-full w-auto h-auto">
                <button className="flex w-30 items-center bg-ColorBaseline text-ColorTealish text-sm rounded-full w-full p-2.5 ">
                  <img src="../image-1@2x.png" alt="Google Logo" className="h-5 w-5 mr-2" />
                  Google
                </button>
              </div>
              <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost rounded-full">
                <button className="flex w-auto items-center bg-ColorBaseline text-ColorTealish text-sm rounded-full p-2.5">
                  <img src="../image-2@2x.png" alt="Microsoft Logo" className="h-5 w-5 mr-2" />
                  Microsoft
                </button>
              </div>
              <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost rounded-full">
                <button className="flex w-auto items-center bg-ColorBaseline text-ColorTealish text-sm rounded-full p-2.5">
                  <img src="../image-3@2x.png" alt="Facebook Logo" className="h-5 w-5 mr-2" />
                  Facebook
                </button>
              </div>
              <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost rounded-full">
                <button className="flex w-auto items-center bg-ColorBaseline text-ColorTealish text-sm rounded-full p-2.5">
                  <img src="../image-4@2x.png" alt="Apple Logo" className="h-5 w-5 mr-2" />
                  Apple
                </button>
              </div>
            </div>
          </div>

          <div className="flex btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-link rounded-full">
            <button className="btn-lg sm:btn-sm md:btn-md lg:btn-lg text-ColorTealish text-10x2 font-bold hover:underline w-full p-2.5">
              Register
            </button>
          </div>

        <button className="btn-lg sm:btn-sm md:btn-md lg:btn-lg text-ColorTealish text-10x2 hover:underline w-full p-2.5">
          Already Have An Account ?
        </button>
      </div>

        <div className="basis-1/2 h-screen relative z-auto">
          <img className="h-screen w-screen rotate-180" src="../Moon-login-cropped.png" alt="LeftImage"/>
          <div className="absolute right-20 ml-20 top-1/2 transform -translate-y-1/2 text-8xl font-bold text-ColorTealish">
            <h1>     Be</h1>
            <h1>Smarter</h1>
            <h1>Everyday!</h1>
          </div>
        </div>            
            
    </div>
  );
};

export default Register1;