"use client"

import Link from "next/link";
import styles from "./additional.module.scss";
import {AnimatePresence, motion} from "framer-motion";

export default function Additional({isOpen}){

  let InnerMenu = () =>{
    return (
      <motion.div
        className={styles.additional}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto'}}
        exit={{ opacity: 0, height: 0}}

        transition={{ type: "tween", duration: .5  }}
      >
        <ul>
          <li><Link className='decorative-link' href={"#"}>Test</Link></li>
          <li><Link className='decorative-link' href={"#"}>Test</Link></li>
          <li><Link className='decorative-link' href={"#"}>Test</Link></li>
        </ul>
      </motion.div>
    )
  }

  return (
    <AnimatePresence>
      {isOpen.isOpen ? <InnerMenu/> : null}
    </AnimatePresence>

  )
}