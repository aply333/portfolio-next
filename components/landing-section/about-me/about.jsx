import styles from "./about.module.scss";
import Markdown from "react-markdown";
import Image from "next/image";
import getStrapiImage from "@/lib/api/image";

export default function About({data}){

  return(
    <section className={"section--with-grid "+ styles.about}>
      <div className={styles.image__wrapper}>
      <Image className={styles.image}
             src={getStrapiImage(data)}
             alt={getStrapiImage(data, true)}
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