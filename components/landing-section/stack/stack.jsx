import styles from "./stack.module.scss";

export default function Stack(){
  return(
    <section className="section--with-grid">
      <h2 className={'section-title '+styles.title}>My Stack</h2>
      <ul className={styles.list}>
        <li className={styles.item}>HTML</li>
        <li className={styles.item}>CSS</li>
        <li className={styles.item}>SCSS</li>
        <li className={styles.item}>LESS</li>
        <li className={styles.item}>JavaScript</li>
        <li className={styles.item}>React</li>
        <li className={styles.item}>Next.js</li>
        <li className={styles.item}>Node.js</li>
        <li className={styles.item}>Redux</li>
        <li className={styles.item}>Python</li>
        <li className={styles.item}>Express</li>
        <li className={styles.item}>SQL</li>
        <li className={styles.item}>Knex</li>
        <li className={styles.item}>PHP</li>
        <li className={styles.item}>WordPress</li>
        <li className={styles.item}>Twig</li>
        <li className={styles.item}>Timber</li>
      </ul>
    </section>
  );
}