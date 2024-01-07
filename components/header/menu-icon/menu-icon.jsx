"use client"
import styles from "./menu-icon.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import Additional from "@/components/header/additional/additional";

export default function MenuIcon (){
  const [ isOpen, setOpen ] = useState({isOpen:false});
  let handleClick = (e) => {
    e.preventDefault();
    isOpen.isOpen ? setOpen({
      isOpen: false,
      right: {},
      left: {}
    }) : setOpen({
      isOpen: true,
      left: {
        x: 2,
        y: -1,
        rotate: '30deg',
        backgroundColor: `var(--color-accent)`
      },
      right: {
        x: -2,
        y: -1,
        rotate: '-30deg',
        backgroundColor: `var(--color-accent)`
      }
    });
  }

  // let handleEscape = (e) => {
  //   if(e.key === "Escape" && isOpen.isOpen){ handleClick(e) }
  // }
  // document.addEventListener("keyup", handleEscape, { });


  return(
    <>
      <button onClick={handleClick} className={styles.button}>
        <motion.span
          className={styles.left}
          animate={isOpen.left}
          transition={{ duration: .1, type: "tween"}}
        ></motion.span>
        <motion.span
          className={styles.right}
          animate={isOpen.right}
          transition={{ duration: .1, type: "tween" }}
        ></motion.span>
      </button>
      <Additional isOpen={isOpen}/>
    </>
  )
}