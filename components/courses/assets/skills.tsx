import type { NextPage } from "next";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import React, { FC, Component } from 'react';

interface TitleProps {
  title: string;
  subtitle: string;
  imagesrc: string;
  level: string;
  duration: number;
  category: string;
  provider: string;
}

const CardComponent: FC<TitleProps> = ({ title, subtitle, imagesrc, level, duration, category, provider }) => {
  return (
    <div className="card w-[600px] h-96 bg-Black z-[0] rounded-[20px] font-sans relative">
      <img src={imagesrc} alt="Image" className="w-full h-full object-cover opacity-20 absolute top-0 left-0" />
      <div className="card-body z-[1] absolute top-0 left-0 p-5"> 
        <img className="h-[5%] w-[40%]" src="../universityplaceholder.png" />  
          <div className="flex flex-row h-[120px]">
            <h2 className="card-title text-ColorBaseline font-semibold">
              <a className="text-[35px] text-ColorBase leading-normal">
                {level}: {title}
              </a>
            </h2>
          </div> 
          <div className="flex flex-row gap-4">
          <a className="text-xs text-center bg-ColorPlatinum text-ColorTealish w-max p-2 rounded-xl">{duration} Months</a>
          <a className="text-xs text-center bg-ColorPlatinum text-ColorTealish w-max p-2 rounded-xl">{category}</a>
          <a className="text-xs text-center bg-ColorPlatinum text-ColorTealish w-max p-2 rounded-xl">{provider}</a>
          </div> 
        
        <p className="mt-4 text-sky-50">{subtitle}</p>
      </div>
    </div>
  );
};

export default CardComponent;