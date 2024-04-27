import type { NextPage } from "next";
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import React, { FC, Component } from 'react';

interface TitleProps {
  title: string;
  subtitle: string;
}

const TutorsCardComponent: FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <>
            <div className="card w-80 bg-base-100 shadow-xl">
            <figure><img src="imageplaceholder2.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {title}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{subtitle}</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
                </div>
            </div>
            </div>
    </>
  );
};

export default TutorsCardComponent;