import type { NextPage } from "next";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import Header from "./header";
import OpeningPg from "./landing/HeroOpening";
import CertiCourse from "./landing/CertifiedCourses";
import WhyClasses from "./landing/Classes-Why";
import Footer from "./footer";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import Carousels from "./landing/Carousels";
import CarouselCanvas from "./landing/Carousels";
import GetTutor from "./landing/Tutoring";
import TutorsList from "./landing/TutorsList";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}


const IndexPage: NextPage = () => {
  return (
    <div className="bg-ColorBaseline">
        <Header />
        <OpeningPg />
        <CertiCourse />
        <WhyClasses />
        <CarouselCanvas 
          CarouselTitle={'Short Videos'}
          CarouselButton={'Show All Short Videos'}
          />
          <CarouselCanvas 
          CarouselTitle={'Certifications'}
          CarouselButton={'Show All Ceritifications'}
          />
          <GetTutor />
          <TutorsList
          CarouselTitle={'Tutors'}
          CarouselButton={'Search your tutors'}
          />
        <Footer />
    </div>
  );
};

export default IndexPage;
