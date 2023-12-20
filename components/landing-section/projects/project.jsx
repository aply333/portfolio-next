import {motion} from "framer-motion";
import styles from "@/components/landing-section/projects/projects.module.scss";
import Image from "next/image";
import getStrapiImage from "@/lib/api/image";


function ProjectButton({ clickHandler, item, index}){

  function randomDelay(){
    let min = Math.ceil(1);
    let max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  return(
    <motion.button
      key={Math.random()}
      onClick={ e=>{ clickHandler(e, item.attributes)}}
      className={styles.card + " " + styles[`card__${index}`]}
      initial={{ opacity: 0, scale: .65 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition:{
          duration: .5,
          delay: randomDelay()* 0.15
        }
      }}
      exit={{ opacity: 0 }}
    >

      <div className={styles.card__image_wrapper}>
        <Image className={styles.card__image}
               src={getStrapiImage(item.attributes, false,'Screenshot')}
               alt={getStrapiImage(item.attributes, true, 'Screenshot')}
               fill={true}
        />
      </div>
    </motion.button>
  )
}

export default ProjectButton;