import type { NextPage } from "next";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const CertiCourse: NextPage = () => {
    return (
    <div className="pt-24 font-sans bg-gradient-to-r from-sky-300 to-indigo-950">   
        <div className="container mx-auto my-auto">
            <div id="texts-in-opening" className="flex flex-col text-center">
            <a className="p-3 pb-5 text-6xl text-White font-bold">
                Certified Courses
            </a>
            <a className="p-3 text-xl text-White font-bold font-normal mx-auto w-[60%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
            </a>
            <button type="button" className="btn glass w-40 mx-auto my-auto mt-20">
                <a className="text-White text-bold">See The Courses!</a>
            </button>
                <div className="flex flex-row pt-10 pb-12 justify-end place-items-end">
                    <button className="btn btn-circle btn-outline btn-end accent-ColorTealish">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <button className="btn btn-circle btn-outline btn-end">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <button className="btn btn-circle btn-outline btn-end">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
   
    );
  };
  
  export default CertiCourse;