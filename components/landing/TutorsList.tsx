import type { NextPage } from "next";
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { animate } from "motion"
import ScrollStarsApp from "./assets/StarScrolls";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useViewportScroll,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import CardComponent from "./assets/card";
import {Classes} from "./assets/Classes";
import TutorsCardComponent from "./assets/TutorsCard";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 10 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 10], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

function CardProps(){
    const cards = [];
  
    for(let i = 0; i < Classes.length; i++){
      cards.push(
        <div className="carousel-item mx-2 mr-4">        
        <TutorsCardComponent
          key={Classes[i].id} // Add a unique key prop for each card
          title= {Classes[i].title} // Dynamically set the title
          subtitle= {Classes[i].subtitle} // Dynamically set the subtitle
        />
    </div>

      )
    }
  
    return cards; // Return the array of CardComponent elements
  }

function TutorsList(props: { CarouselTitle: string, CarouselButton: string }){

    const [scrollPosition, setScrollPosition] = useState(0);

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

    return(
    <div className="flex flex-col z-[1] my-5">
        <div className="flex flex-row">
            <div className="divider divider-neutral w-3/4 mx-auto">
                <div className="text-bold text-3xl font-sans text-ColorTealish">
                {props.CarouselTitle}
                </div>
            </div>
            <div className="btn btn-outline flex flex-row hover:bg-ColorBaseline w-60 mx-auto object-contain">
              <img src="../search.png" alt="magnifying glass" className="w-4"/>
              <a className="text-ColorTealish text-bold">
                {props.CarouselButton}
              </a>
            </div>
        </div>
            <div className="flex justify-end p-5">
      </div>
      <div id="Carousel-Will-Change">
          <div
            ref={carouselRef}
            className="flex flex-row carousel carousel-center max-w p-4 space-x-4 bg-ColorBaseline overflow-auto transform: translate3d(-1274.67px, 0px, 0px); transition-duration: 0ms; w-[100%]" >
              {CardProps()}
          </div>
      </div>

    </div>
    )
  }
    export default TutorsList;