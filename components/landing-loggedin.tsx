import type { NextPage } from "next";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import Header from "./header";
import OpeningPg from "./landing/HeroOpening";
import CertiCourse from "./landing/CertifiedCourses";
import WhyClasses from "./landing/Classes-Why";
import Footer from "./footer";
import { useRef } from "react";
import {Classes} from "./landing/assets/Classes";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import CardComponent from "./landing/assets/card";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface TitleProps {
  title: string;
  subtitle: string;
}

function CardProps(){
  const cards = [];

  for(let i = 0; i < Classes.length; i++){
    cards.push(
      <CardComponent
        key={Classes[i].id} // Add a unique key prop for each card
        title= {Classes[i].title} // Dynamically set the title
        subtitle= {Classes[i].subtitle} // Dynamically set the subtitle
      />
    )
  }

  return cards; // Return the array of CardComponent elements
}

  const LandingLoggedIn: NextPage = () => {
    return (
      <div className="bg-ColorBaseline">
          <Header />
          <div className="pt-40">
            {...CardProps()}
          </div>
      </div>
    );
  };
  
  export default LandingLoggedIn;
