import type { NextPage } from "next";
import styles from "../src/output.css";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import React, { useState } from 'react';

const Register1: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-row bg-White"> 
      <div className="flex flex-col mx-auto my-auto basis-1/2 sticky right-0 left-0 top-0 bottom-0 items-center bg-White">
        <h1 className="text-center text-3xl text-Black">Join us in <strong>Educatron</strong></h1>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-Black font-bold mb-2" htmlFor="grid-first-name">
        Email
      </label>
      <input className="appearance-none block w-full bg-ColorBaseline text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Please Enter Email" />
    </div>

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-Black font-bold mb-2" htmlFor="grid-first-name">
        Username
      </label>
      <input className="appearance-none block w-full bg-ColorBaseline text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
      id="grid-first-name" type="text" placeholder="Please Enter Username" />
    </div>

#
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-Black font-bold mb-2" htmlFor="grid-password">
        Password
      </label>
    <div className="input input-bordered flex items-center m-4 py-3 bg-ColorBaseline relative">
    <input
      type={showPassword ? "text" : "password"}
      className="grow bg-ColorBaseline w-60 pr-10"
      id="grid-password"
      placeholder="Please Enter Password"
    />
    <img
      src={showPassword ? "../Show-Password.png" : "../Hidden-Password.png"}
      alt={showPassword ? "Hide Password" : "Show Password"}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-70 cursor-pointer"
      onClick={() => setShowPassword(!showPassword)}
    />
  </div>
</div>

<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">

      <label className="block uppercase tracking-wide text-Black font-bold mb-2" htmlFor="grid-password">
        Confirm Password
      </label>
  <div className="bg-ColorBaseline">
    <div className="input input-ghost input-bordered flex items-center m-4 py-3 bg-White relative">
    <input
      type={showPassword ? "text" : "password"}
      className="grow w-60 pr-10"
      id="grid-password"
      placeholder="Please Confirm Password"
    />
    <img
      src={showPassword ? "../Show-Password.png" : "../Hidden-Password.png"}
      alt={showPassword ? "Hide Password" : "Show Password"}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 "
      onClick={() => setShowPassword(!showPassword)}
    />
  </div>
  </div>
</div>
        <div className="flex flex-row mx-auto ">
        <div>
            <button className="btn btn-outline bg-ColorBaseline btn-rounded flex-row mx-2">
            <img src="../image-1@2x.png" alt="Google" className="h-4 w-4" />
            <div className="text-Black">Google</div>
            </button>
          </div>

          <div>
            <button className="btn btn-outline bg-Black btn-rounded flex-row mx-2">
            <img src="../image-2@2x.png" alt="Microsoft" className="h-4 w-4" />
            <div className="text-Black">Microsoft </div>
            </button>
          </div>

          <div>
            <button className="btn btn-outline bg-ColorBaseline btn-rounded flex-row mx-2">
            <img src="../image-3@2x.png" alt="Facebook" className="h-4 w-4" />
            <div className="text-Black">Facebook</div>
            </button>
          </div>

          <div>
            <button className="btn btn-outline bg-ColorBaseline btn-rounded flex-row mx-2">
            <img src="../image-4@2x.png" alt="Apple" className="h-4 w-4" />
            <div className="text-Black">Apple</div>
            </button>
          </div>

        </div>

        <button className="btn btn-outline bg-ColorBaseline btn mx-50 mt-4">
            <div className="text-Black">Register</div>
        </button>

        <button className="h-10 px-6 font-semibold rounded-full text-slate-900 mr-2 text-Black" type="button" style={{textDecoration: 'underline'}}>
          Already Have An Account ?
        </button>
      </div>

      <div className="hero min-h-screen rotate-180 basis-1/2 overflow-hidden" style={{backgroundImage: 'url("../Moon-login-cropped.png")'}}>
        <div className="hero-overlay bg-opacity "></div>
          <div className="hero-content text-center text-neutral-content font-sans">
            <div className="max-w-1/2 rotate-180 ">
              <h1 className="mb-5 text-8xl text-justify text-ColorTealish">Be</h1>
              <h1 className="mb-5 text-8xl text-justify text-ColorTealish">Smarter,</h1>
              <h1 className="mb-5 text-8xl text-justify text-ColorTealish">Everyday</h1>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Register1;