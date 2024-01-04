import {motion} from "framer-motion";
import styles from "@/components/landing-section/projects/projects.module.scss";
import Svg from "@/components/assets/svg/svg";
import Image from "next/image";
import {setImageUrl, setImageAlt} from "@/lib/api/formatters";
// import getStrapiImage from "@/lib/api/image";

function Modal({projectData, handleClose}){
  let imageSource = setImageUrl(projectData.Screenshot);
  let imageAlt = setImageAlt(projectData.Screenshot);

  return (
    <motion.div className={styles.about_project}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
    >
      <div className={styles.about_project__top_row}>
        <h2>{projectData.Title}</h2>
        <button onClick={handleClose}><Svg name={'x'}/></button>
      </div>


      <div className={styles.about_project__image_wrapper}>
        <Image className={styles.about_project__image}
               src={imageSource}
               alt={imageAlt}
               fill={true}/>
      </div>

      <div className={styles.about_project__content}>
        <ul className={styles.list}>
          { projectData.Stacks.data.map( tech => (
            <li key={Math.random()} className={styles.item}>{ tech.attributes.Tech }</li>
          ))}
        </ul>
        <p>{projectData.About}</p>
      </div>
    </motion.div>
  );
}


export default Modal;