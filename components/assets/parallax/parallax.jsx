"use client"

import Intro from "@/components/landing-section/intro/intro";
import About from "@/components/landing-section/about-me/about";
import Stack from "@/components/landing-section/stack/stack";
import Contact from "@/components/landing-section/contact/contact";
import Projects from "@/components/landing-section/projects/projects";
import style from "./parallax.module.scss";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Section({childElement}){
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    threshold: .85,
    margin: "0px 0px -20% 0px",
  });

  return(
    <div
      className={style.parallax_target}
      ref={ref}
      style={{
        scale: isInView ? 1 : .65,
        opacity: isInView ? 1 : 0,
        filter: isInView ? 'grayscale(0%)' : 'grayscale(100%)',
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
    >
      <div className={style.inner_div}>
        {childElement}
      </div>
    </div>
  )
}


export default function Parallax({data}) {
  return (
    <>
      <Intro data={data['Intro']}/>
      <Section childElement={<About data={data['About']}/>}/>
      <Section childElement={<Stack data={data['Stack']}/>}/>
      <Section childElement={<Projects data={data['Gallery'].Projects.data}/>}/>
      <Section childElement={<Contact data={data['Contact']}/>}/>
    </>
  );
}