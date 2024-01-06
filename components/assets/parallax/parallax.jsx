"use client"

import Intro from "@/components/landing-section/intro/intro";
import About from "@/components/landing-section/about-me/about";
import Stack from "@/components/landing-section/stack/stack";
import Contact from "@/components/landing-section/contact/contact";
import Projects from "@/components/landing-section/projects/projects";


import style from "./parallax.module.scss";
import { useInView, useScroll, useMotionValueEvent } from "framer-motion";
import {createContext, useContext, useEffect, useRef, useState} from "react";
import Backdrop from "@/components/assets/abstract-backdrops/backdrops";

const ViewContext = createContext();

function Section({childElement}){
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: .80, once : true, });
  return(
    <div
      className={style.parallax_target}
      ref={ref}
      style={{
        scale: isInView ? 1 : .65,
        opacity: isInView ? 1 : 0,
        filter: isInView ? 'grayscale(0%)' : 'grayscale(100%)',
        transform: `translateY(${isInView? "-10%" : "0"})`,
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
      }}
    >
      <div className={style.inner_div}>
        {childElement}
      </div>
    </div>
  )
}


export default function Parallax({data}) {

  const { scrollYProgress } = useScroll();


  return (
    <>
      <Backdrop scroll={ scrollYProgress }/>
      <Intro data={data['Intro']}/>
      <Section childElement={<About data={data['About']}/>} />
      <Section childElement={<Stack data={data['Stack']}/>} />
      <Projects data={data['Gallery'].Projects.data} />
      <Contact data={data['Contact']}/>
    </>
  );
}