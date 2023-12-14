import styles from "./about.module.scss";

export default function About(){
  return(
    <section className="section--with-grid">
      <div className={styles.content}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.paragraph}>
          I'm a new FullStack developer, ready to hit the ground running. I've taught myself the basics of web development, then completed the program at Lambda School; now I'm ready to apply my skills in the real world.
        </p>
        <p className={styles.paragraph}>
          At Lambda School, I studied web development and computer science. In the program, we worked with Javascript, React, SQL and Python. We built smaller projects daily and, worked as a team to create complete products. Along with the technical work, their program gave me the opportunity to be challenged, making me quick to learn and adapt.
        </p>
        <p className={styles.paragraph}>
          New to the field, looking to start my career. I will work hard to meet and exceed your goals.
        </p>
      </div>
    </section>
  )
}