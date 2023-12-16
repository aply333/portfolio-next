import styles from './contact.module.scss';

export default function Contact(){
  return(
    <section className={"section--with-grid"}>
      <h2 className={'section-title '+styles.title}>Let's Talk</h2>
      <div className={styles.text}>

        <div className={styles.excerpts}>
          <p className={'paragraph-gap '+styles.line}>
            Please reach out, I'd love to hear what I could do for you. I've left my phone and email bellow, or if you'd like you can messege me directly with the form to the right.
          </p>
          <p className={'paragraph-gap '+styles.line}>
            I'm local to the San Francisco Bay Area; open to remote work or relocating if needed.
          </p>
        </div>

        <div className={styles.contact}>
          <label className={styles.label}>Email: </label>
          <a className={styles.email} href="mailto:andrei@aply.tech">andrei@aply.tech</a>
          <br />
          <label>Phone: </label>
          <a className={styles.phone} href="phoneto:415-846-5062">415-846-5062</a>
        </div>

      </div>

      <div className={styles.form}></div>

    </section>
  )
}