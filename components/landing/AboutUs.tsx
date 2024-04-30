import type { NextPage } from "next";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const GetTutor: NextPage = () => {
    return (
    <div className="mt-20 font-sans rounded-[50px]  object-fill">   
                <div className="diff h-dvh rounded-[50px]">
                <div className="diff-item-1">
                    <div className="flex flex-row object-cover bg-gradient-to-r from-ColorTealish to-ColorBlueish text-ColorBlueGrayish mx-auto">
                        <div className="flex flex-col basis-3/4 ml-16"> 
                            <a className="pt-20 text-7xl font-extrabold text-start">
                                Want someone to tutor you instead?
                            </a>
                            <a className="text-l font-normal text-start w-[80%] my-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                culpa qui officia deserunt mollit anim id est laborum.
                            </a>
                            <a className="text-2xl font-extrabold text-start">
                                Why a one-on-one session?
                            </a>
                            <div className="flex flex-col mt-10">
                                <div className="flex flex-row text-ColorBaseline my-2">
                                    <div className="flex flex-row object-contain basis-1/2 h-12">
                                        <img src="../tick-baseline.png" className="h-12 w-12"></img>
                                        <a className="my-auto ml-5 text-2xl">Private</a>
                                    </div>
                                    <div className="flex flex-row object-contain basis-1/2 h-12">
                                        <img src="../tick-baseline.png" className="h-12 w-12"></img>
                                        <a className="my-auto ml-5 text-2xl">Choose your own level</a>
                                    </div>
                                </div>
                                <div className="flex flex-row text-ColorBaseline my-2">
                                    <div className="flex flex-row object-contain basis-1/2 h-12">
                                        <img src="../tick-baseline.png" className="h-12 w-12"></img>
                                        <a className="my-auto ml-5 text-2xl">Beginner-Friendly</a>
                                    </div>
                                    <div className="flex flex-row object-contain basis-1/2 h-12">
                                        <img src="../tick-baseline.png" className="h-12 w-12"></img>
                                        <a className="my-auto ml-5 text-2xl">More Independence</a>
                                    </div>
                                </div>
                                <div className="flex flex-row text-ColorBaseline my-2 h-12">
                                    <div className="flex flex-row object-contain basis-1/2">
                                        <img src="../tick-baseline.png" className="h-12 w-12"></img>
                                        <a className="my-auto ml-5 text-2xl">Conversations</a>
                                    </div>
                                    <div className="flex flex-row object-contain basis-1/2 h-12">
                                        <img src="../tick-baseline.png" className="h-12 w-12"></img>
                                        <a className="my-auto ml-5 text-2xl">Choose your own time</a>
                                    </div>
                                </div>
                                <div className="flex flex-row text-ColorBaseline my-2">
                                    <div className="flex flex-row object-contain basis-1/2 h-12">
                                        <img src="../tick-baseline.png" className="h-12 w-12"></img>
                                        <a className="my-auto ml-5 text-2xl">Assignments</a>
                                    </div>
                                    <div className="flex flex-row object-contain basis-1/2 h-12">
                                        <img src="../tick-baseline.png" className="h-12 w-12"></img>
                                        <a className="my-auto ml-5 text-2xl">Fewer Distractions</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="picture-of-tutor" className="basis-1/2 h-screen object-cover my-auto">
                            <img src="../imageplaceholder2.jpg" className="static rounded-[40px] m-10 h-[90%]" alt="tutorimg"></img>
                        </div>
                    </div>
                </div>
                <div className="diff-item-2">
                <div className="flex flex-row object-cover bg-gradient-to-r from-ColorPlatinum to-ColorCultured text-ColorTealish font-sa">
                        <div id="picture-of-tutor" className="basis-1/2 h-screen object-cover my-auto">
                            <img src="../imageplaceholder3.jpg" className="static rounded-[40px] m-10 h-[90%]" alt="tutorimg"></img>
                        </div>
                        <div className="flex flex-col basis-3/4"> 
                            <a className="pt-20 text-7xl font-extrabold text-start">
                                Or join us to be a tutor.
                            </a>
                            <a className="text-xl font-normal text-start w-[80%] my-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                culpa qui officia deserunt mollit anim id est laborum.
                            </a>
                            <div className="bg-primary w-60 h-1"></div>
                            <div className="btn w-60 mt-5 onclick:bg-secondary">
                                Button
                            </div>
                        </div>
                    </div>
                </div>
                <div className="diff-resizer"></div>
                </div>
    </div>
   
    );
  };
  
  export default GetTutor;