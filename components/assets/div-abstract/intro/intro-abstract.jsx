"use client";

import {motion} from "framer-motion";
import styles from "./intro-abstract.module.scss";

export default function IntroAbstract({parent_class}){
  let animations = {
    one: {
      width: "100%",
    },
    two: {
      width: "80%",
    },
    three: {
      width: "60%",
    },
    four: {
      width: "40%",
    }
  }

  const setTransition = (delay) =>{
      return{
        type: "spring",
        ease:"ease",
        duration: 2,
        delay: delay,
      }
  }

  return(
    <div className={styles.abstract_wrapper + ' ' + parent_class}>
      <motion.div className={styles.line+' '+styles.line__one}
        animate={animations.one}
        transition={setTransition(0)}
      ></motion.div>
      <motion.div className={styles.line+' '+styles.line__two}
        animate={animations.two}
        transition={setTransition(.5)}
      ></motion.div>
      <motion.div className={styles.line+' '+styles.line__three}
        animate={animations.three}
        transition={setTransition(.8)}
      ></motion.div>
      <motion.div className={styles.line+' '+styles.line__four}
        animate={animations.four}
        transition={setTransition(1)}
      ></motion.div>
    </div>
  );
}