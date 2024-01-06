"use client"

import styles from "./shared.module.scss";
import {useMotionValueEvent} from "framer-motion";
import {useState} from "react";

export default function Backdrop({ scroll }){
  const [current, setCurrent] = useState(0);
  useMotionValueEvent(scroll, "change", (latest) => {
    setCurrent(latest)
  })

  return(
    <div className={styles.backdrop}>
      <div className={styles.backdrop__wrapper} style={{ rotate: `${30*current + 30}deg` }}>

      <div className={styles['stripe__1']} style = {{ height:  0 < current <= .2 ? '60%' : '16%', }} ></div>
      <div className={styles['stripe__2']} style = {{ height: .2 < current <= .4 ? '60%' : '16%', }} ></div>
      <div className={styles['stripe__3']} style = {{ height: .4 < current <= .6 ? '60%' : '16%', }} ></div>
      <div className={styles['stripe__4']} style = {{ height: .6 < current <= .8 ? '60%' : '16%', }} ></div>
      <div className={styles['stripe__5']} style = {{ height: .8 < current <=  1 ? '60%' : '16%', }} ></div>
      <div className={styles['stripe__6']} style = {{ height: '16%', }}></div>

      </div>
    </div>

  );
}