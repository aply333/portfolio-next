import {motion} from "framer-motion";
import styles from "@/components/landing-section/projects/projects.module.scss";
import Svg from "@/components/assets/svg/svg";
import Image from "next/image";
import {setImageUrl, setImageAlt} from "@/lib/api/formatters";
import Markdown from "react-markdown";

function Modal({projectData, handleClose}){
  let imageSource = setImageUrl(projectData.Screenshot);
  let imageAlt = setImageAlt(projectData.Screenshot);

  return (
    <>
    <div className={styles.backdrop}></div>
    <motion.div className={styles.about_project}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
    >
      <div className={styles.about_project__top_row}>
        <h2>{projectData.Title}</h2>
        <button onClick={handleClose}><Svg name={'x'}/></button>
      </div>

      <div className={styles.about_project__left_section}>

        <div className={styles.about_project__image_wrapper}>
          <Image className={styles.about_project__image}
                 src={imageSource}
                 alt={imageAlt}
                 fill={true}/>
        </div>

      </div>

      <div className={styles.about_project__content}>

        <ul className={styles.list}>
          { projectData.Stacks.data.map( tech => (
            <li key={Math.random()} className={styles.item}>{ tech.attributes.Tech }</li>
          ))}
        </ul>

        <Markdown>{projectData.About}</Markdown>

        <ul className={styles.list+' '+styles.about_project__external_links}>
          <li><a className={'decorative-link'}>The Code</a></li>
          <li><a className={'decorative-link'}>Live Site</a></li>
        </ul>

      </div>
    </motion.div>
    </>
  );
}


export default Modal;
