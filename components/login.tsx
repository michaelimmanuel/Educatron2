import type { NextPage } from "next";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { signIn } from "next-auth/react";
import React, { useState } from 'react';




const LoginPage: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const onClick = () => {
    try {
      signIn('credentials', {
        redirect: true,
        email,
        password,
        credentials: 'include',
        callbackUrl: '/test/loggedin',
        
      });
    } catch (error) {
      console.error('Login failed:', error);
    }

  }
  return (
    <div className="w-full h-screen bg-ColorWhite font-sans" id="LoginPage">
      <div className="flex flex-row start-0 mx-0 px-0 h-screen">
        <div className="basis-1/2 h-screen mr-5">
          <img className="h-full w-full object-cover" src="../Moon-login-cropped.png" alt="LeftImage" />
          <div className="absolute left-0 ml-20 top-1/2 transform -translate-y-1/2 text-8xl font-bold text-ColorTealish">
            <h1>Welcome</h1>
            <h1>To</h1>
            <h1>Educatron!</h1>
          </div>
        </div>
        <div className="flex flex-col basis-1/2 ml-5 z-1 items-center justify-center">
          <div className="text-4xl mb-6">
            <h2 className="font-semibold text-ColorTealish">Already have an account?</h2>
            <h2 className="text-ColorTealish">Login</h2>
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
                <button className="flex w-auto items-center bg-ColorBaseline text-ColorTealish text-sm rounded-full w-full p-2.5">
                  <img src="../image-2@2x.png" alt="Microsoft Logo" className="h-5 w-5 mr-2" />
                  Microsoft
                </button>
              </div>
              <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost rounded-full">
                <button className="flex w-auto items-center bg-ColorBaseline text-ColorTealish text-sm rounded-full w-full p-2.5">
                  <img src="../image-3@2x.png" alt="Facebook Logo" className="h-5 w-5 mr-2" />
                  Facebook
                </button>
              </div>
              <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost rounded-full">
                <button className="flex w-auto items-center bg-ColorBaseline text-ColorTealish text-sm rounded-full w-full p-2.5">
                  <img src="../image-4@2x.png" alt="Apple Logo" className="h-5 w-5 mr-2" />
                  Apple
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="w-80 mb-6 mt-10 space-y-8">
              <div className="mb-4">
                <input type="text" onChange={handleEmailChange} id="username" name="email" className="bg-ColorBaseline border border-ColorBaseline text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Email" required />
              </div>
              <div className="mb-4">
                <input type="password" onChange={handlePasswordChange} id="password" name="password" className="bg-ColorBaseline border border-ColorBaseline text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Password" required />
              </div>
            </div>
          </div>
          <div className="flex btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-link rounded-full">
            <button onClick={onClick} className="btn-lg sm:btn-sm md:btn-md lg:btn-lg text-ColorTealish text-10x2 font-bold hover:underline w-full p-2.5">
              Login
            </button>
          </div>
          <div className="flex justify-center">
            <button className="btn-lg sm:btn-sm md:btn-md lg:btn-lg text-ColorTealish text-10x2 hover:underline w-full p-2.5">
              Don't have an account? Register!
            </button>
          </div>
          <div className="flex justify-center">
            <button className="btn-lg mt-0 sm:btn-sm md:btn-md lg:btn-lg text-ColorTealish text-5x1 hover:underline w-full p-2.5">
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
</div>
  );
};

export default LoginPage;