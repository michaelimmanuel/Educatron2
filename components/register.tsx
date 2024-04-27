import type { NextPage } from "next";
import styles from "../src/output.css";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const Register1: NextPage = () => {
  return (
    <div className="flex flex-row bg-White"> 

      <div className="flex flex-col mx-auto my-auto w-1/2 sticky right-0 left-0 top-0 bottom-0 items-center bg-White">

        <h1 className="text-center text-3xl text-Black">Join us in <strong>Educatron</strong></h1>

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-Black font-bold mb-2" htmlFor="grid-first-name">
        Email
      </label>
      <input className="appearance-none block w-full bg-ColorBaseline text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:text-Black" id="grid-first-name" type="text" placeholder="Please Enter Email" />
    </div>

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-Black font-bold mb-2" htmlFor="grid-first-name">
        Username
      </label>
      <input className="appearance-none block w-full bg-ColorBaseline text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:text-Black" 
      id="grid-first-name" type="text" placeholder="Please Enter Username" />
    </div>

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-Black font-bold mb-2" htmlFor="grid-first-name">
        Password
      </label>
      <input className="appearance-none block w-full bg-ColorBaseline text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:text-Black" 
      id="grid-first-name" type="text" placeholder="Please Enter Username" />
    </div>

    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-Black font-bold mb-2" htmlFor="grid-first-name">
        Confirm Password
      </label>
      <input className="appearance-none block w-full bg-ColorBaseline text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:text-Black" 
      id="grid-first-name" type="text" placeholder="Please Enter Username" />
    </div>


      <div className="flex flex-row mx-[-10] ml-[-60px]">
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

        <button className="h-10 px-6 font-semibold rounded-full text-slate-900 mr-2 text-Black " type="button" style={{textDecoration: 'underline'}}>
          Already Have An Account ?
        </button>
      </div>

      <div className="hero min-h-screen rotate-180" style={{backgroundImage: 'url("../Moon-login-cropped.png")'}}>
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
