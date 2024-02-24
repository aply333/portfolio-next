"use client"

import styles from "./shared.module.scss";
import {useMotionValueEvent, useScroll} from "framer-motion";
import {useState} from "react";

export default function Backdrop(){

  // TODO: Create logic to adjust timing, idealy shorter the site the slower the animations should be.

  const { scrollYProgress } = useScroll();
  const [current, setCurrent] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setCurrent(latest)
  })

  return(
    <div aria-hidden="true" className={styles.backdrop}>
      <div className={styles.backdrop__wrapper} style={{ rotate: `${30*current + 30}deg` }}>

      <div className={styles['stripe__1']} style = {{ transform:  0 < current <= .2 ? `scale(6)` : 'scale(1)', }} ></div>
      <div className={styles['stripe__2']} style = {{ transform: .2 < current <= .4 ? 'scale(6)' : 'scale(1)', }} ></div>
      <div className={styles['stripe__3']} style = {{ transform: .4 < current <= .6 ? 'scale(6)' : 'scale(1)', }} ></div>
      <div className={styles['stripe__4']} style = {{ transform: .6 < current <= .8 ? 'scale(6)' : 'scale(1)', }} ></div>
      <div className={styles['stripe__5']} style = {{ transform: .8 < current <=  1 ? 'scale(6)' : 'scale(1)', }} ></div>
      <div className={styles['stripe__6']} ></div>

      </div>
    </div>

  );
}
