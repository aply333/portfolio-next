import styles from "./intro.module.scss";
import Image from "next/image";
import IntroAbstract from "@/components/assets/div-abstract/intro/intro-abstract";
import {setImageUrl, setImageAlt} from "@/lib/api/formatters";


function Intro({data}){
  let imageSource = setImageUrl(data.Image);
  let altText = setImageAlt(data.Image);

  return(
    <section className={'section--with-grid ' + styles.intro}>
      <div className={styles["heading-text"]}>
        <h1 className={styles['heading']}>{data.Title}</h1>
        <p className={'title--2 '+styles['subheading']}>{data.Subtitle}</p>
        <p className={styles['intro-text']}>{data.Excerpt}</p>
      </div>
      <Image
        className={styles['headshot']}
        src={imageSource} alt={altText}
        width={300}
        height={300}/>
      <IntroAbstract parent_class={styles.intro_abstract}/>
    </section>
  );
}

export default Intro;