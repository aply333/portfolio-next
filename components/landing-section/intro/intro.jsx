import styles from "./intro.module.scss";
import Image from "next/image";
import selfie from '../../../public/selfie.svg';
import IntroAbstract from "@/components/assets/div-abstract/intro/intro-abstract";


function Intro(){
  return(
    <section className={'section--with-grid ' + styles.intro}>
      <div className={styles["heading-text"]}>
        <h1 className={styles['heading']}>Hi I'm Andrei.</h1>
        <p className={'title--2 '+styles['subheading']}>Full Stack Developer</p>
        <p className={styles['intro-text']}>Ready to build your ideas both front to back, mobile to desktop. </p>
      </div>
      <Image className={styles['headshot']} src={selfie} alt={'Cartoon Headshot'} width={300} height={300}/>
      <IntroAbstract parent_class={styles.intro_abstract}/>
    </section>
  );
}

export default Intro;