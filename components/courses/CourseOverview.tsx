import type { NextPage } from "next";
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { useRef } from "react";
import Classes from "../landing/assets/Classes";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  title: string;
}

const CourseOverview: React.FC = (title) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const startDate = new Date(Classes[2].course_durationstart);
  const endDate = new Date(Classes[2].course_durationend);
  
  const startFormatted = startDate.toLocaleString('en-US', { month: 'short', day: 'numeric' });
  const endFormatted = endDate.toLocaleString('en-US', { month: 'short', day: 'numeric' });
  
  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();
  const output = `${startFormatted} - ${endFormatted}`;
  console.log(output);

  useEffect(() =>{
    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        const newPosition = (scrollPosition + 100) % carouselRef.current.scrollWidth;
        setScrollPosition(newPosition);
        carouselRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [scrollPosition]);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <div className="h-[700px] w-full relative font-sans z-[1]">
      <img src="../imageplaceholder3.jpg" alt="Image" className="w-screen h-full object-cover bg-black brightness-[0.3] absolute top-0 left-0" />
      <div className="absolute top-0 left-0 z-[1] bg-black bg-opacity-50"> 
        <div className="flex flex-row w-screen h-[700px]">
            <div id="left-info" className="basis-1/3 bg-ColorTealish bg-opacity-80 rounded-r-[50px] content-center justify-center">
                <div className="flex flex-col mx-auto my-auto gap-y-6">
                    <div className="flex flex-row ml-10">
                        <img src="../calendarico.png" alt="Image" className="w-20 h-20" />
                        <div className="flex flex-col ml-5 text-ColorWhite my-auto">
                            <a className="text-m font-thin">Course Duration</a>
                            <a className="text-3xl font-black">{output}</a>
                        </div>
                    </div>
                    <div className="flex flex-row ml-10">
                        <img src="../participantsico.png" alt="Image" className="w-20 h-20" />
                        <div className="flex flex-col ml-5 text-ColorWhite my-auto">
                            <a className="text-m font-thin">Participants</a>
                            <a className="text-3xl font-black">{Classes[2].course_studentcount}</a>
                        </div>
                    </div>
                    <div className="flex flex-row ml-10">
                        <img src="../pricetagico.png" alt="Image" className="w-20 h-20" />
                        <div className="flex flex-col ml-5 text-ColorWhite my-auto">
                            <a className="text-m font-thin">Price</a>
                            <a className="text-3xl font-black">{Classes[2].course_price} $</a>
                        </div>
                    </div>
                    <div className="flex flex-row ml-10">
                        <img src="../levelico.png" alt="Image" className="w-20 h-20" />
                        <div className="flex flex-col ml-5 text-ColorWhite my-auto">
                            <a className="text-m font-thin">Level</a>
                            <a className="text-3xl font-black">{Classes[2].course_level}</a>
                        </div>
                    </div>
                    <div className="flex flex-row ml-10">
                        <img src="../timeico.png" alt="Image" className="w-20 h-20" />
                        <div className="flex flex-col ml-5 text-ColorWhite my-auto">
                            <a className="text-m font-thin">Weekly time needed</a>
                            <a className="text-3xl font-black">{Classes[2].course_avgtime}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="right-info" className="basis-2/3 flex justify-end w-full">
                <div className="mr-20 flex flex-col">
                    <img src="universityplaceholder.png" className="w-[300px] mt-10 mx-auto right-12 absolute"/>
                    <div className="text-5xl absolute right-12 top-24">
                        <a className="text-ColorWhite">{Classes[2].course_name}</a>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;