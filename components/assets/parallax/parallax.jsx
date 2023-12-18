"use client";

import Intro from "@/components/landing-section/intro/intro";
import About from "@/components/landing-section/about-me/about";
import Stack from "@/components/landing-section/stack/stack";
import Contact from "@/components/landing-section/contact/contact";
import style from "./parallax.module.scss";
import Projects from "@/components/landing-section/projects/projects";


function Section({childElement}){

  return(
    <div className={style.parallax_target}>
      <div className={style.inner_div}>
        {childElement}
      </div>
    </div>
  )
}

export default function Parallax({intro}) {
  console.log(intro)
  return (
    <>
      <Section childElement={<Intro/>}/>
      <Section childElement={<About/>}/>
      <Section childElement={<Stack/>}/>
      {/*<Section childElement={<Featured/>}/>*/}
      {/*<Section childElement={<Gallery/>}/>*/}
      <Section childElement={<Projects/>}/>
      <Section childElement={<Contact/>}/>
    </>
  );
}