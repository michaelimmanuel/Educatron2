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
const WhyClasses: React.FC = () => {
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

  return (
    <div className="pb-24 font-sans">   
      <div className="flex flex-col">
        <div id="Carousel-Will-Change">
            <div
              ref={carouselRef}
              className="flex flex-row carousel carousel-center max-w p-4 space-x-4 bg-ColorBaseline overflow-auto transform: translate3d(-1274.67px, 0px, 0px); transition-duration: 0ms;" >
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                  className="rounded-box"
                />
              </div> 
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                  className="rounded-box"
                />
              </div> 
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                  className="rounded-box"
                />
              </div> 
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                  className="rounded-box"
                />
              </div> 
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                  className="rounded-box"
                />
              </div> 
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                  className="rounded-box"
                />
              </div> 
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                  className="rounded-box"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                  className="rounded-box"
                />
              </div> 
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                  className="rounded-box"
                />
              </div> 
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                  className="rounded-box"
                />
              </div> 
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                  className="rounded-box"
                />
              </div> 
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                  className="rounded-box"
                />
              </div> 
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                  className="rounded-box"
                />
              </div> 
              <div className="carousel-item">
                <img
                  src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                  className="rounded-box"
                />
              </div>
            </div>
        </div>
        <div className="flex justify-end p-5">
          <button type="button" className="btn w-40">
                <a className="text-White text-bold">Show All Courses</a>
          </button>
        </div>
        <div className="flex flex-row">
            <div className="basis-1/2 h-[400px] overflow-hidden object-cover">
              <img className="w-[90%] h-[400px] object-cover mx-auto mt-10" src="../imageplaceholder.jpg"></img>
            </div>
            <div id="texts-in-opening" className="flex flex-col basis-1/2 content-end mt-10 mr-20 my-auto text-end">
              <a className="p-3 text-5xl text-Black font-bold">
                Get smarter every day
              </a>
              <a className="p-3 text-ellipsis overflow-hidden text-xl text-Black font-extralight overflow-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Mattis aliquam faucibus purus in massa tempor nec 
              feugiat. Nisi vitae suscipit tellus mauris a diam maecenas sed. 
              Blandit cursus risus at ultrices mi tempus imperdiet nulla. 
              Dolor sit amet consectetur adipiscing elit duis. Sit amet 
              venenatis urna cursus eget. Egestas integer eget aliquet nibh 
              praesent tristique magna sit. Urna molestie at elementum eu 
              facilisis sed odio morbi quis. Duis ut diam quam nulla porttitor. 
              Habitant morbi tristique senectus et netus et. In eu mi bibendum neque.
              In hac habitasse platea dictumst quisque sagittis purus.
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhyClasses;