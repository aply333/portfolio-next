import styles from "./about.module.scss";
import Markdown from "react-markdown";
import Image from "next/image";
import {setImageAlt, setImageUrl} from "@/lib/api/formatters";

export default function About({data}){
  let aboutImage = setImageUrl(data.Image);
  let aboutAlt = setImageAlt(data.Image);

  return(
    <section className={"section--with-grid "+ styles.about}>
      <div className={styles.image__wrapper}>
      <Image className={styles.image}
             src={aboutImage}
             alt={aboutAlt}
             fill={true}
      />
      </div>
      <div className={styles.content}>
        <h2 className={'section-title '+styles.title}>{data.Title}</h2>
        <div className={styles.text}>
          <Markdown className='markdown-wys'>{data.Content}</Markdown>
        </div>
      </div>
    </section>
  )
}