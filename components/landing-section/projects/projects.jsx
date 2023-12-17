"use client";

import styles from "./projects.module.scss";

export default function Projects(){

  let project_content = {

  }


  return(
    <section className={"section--with-grid "+ styles.projects}>

      <button className={styles.card+" "+styles.card__one}>
        <h3>Focused KanBan</h3>
      </button>
      <button className={styles.card+" "+styles.card__two}>
        <h3>Linea Creative</h3>
      </button>
      <button className={styles.card+" "+styles.card__three}>
        <h3>Merchang Marketplace</h3>
      </button>
      <button className={styles.card+" "+styles.card__four}>
        <h3>Haas Pitch Site</h3>
      </button>
      <button className={styles.card+" "+styles.card__five}>
        <h3>Snippet Tool</h3>
      </button>
      <button className={styles.card+" "+styles.card__six}>
        <h3>Hauskin Impact Learning</h3>
      </button>
      <button className={styles.card+" "+styles.card__seven}>
        <h3>Conways Game</h3>
      </button>
      <button className={styles.card+" "+styles.card__eight}>
        <h3>Task To Date</h3>
      </button>
      <button className={styles.card+" "+styles.card__nine}>
        <h3>Canvas Effect</h3>
      </button>

      <div className={styles.about_project}>
        <h2>The Projects </h2>
        <h3>The Stack Used:</h3>
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
      </div>

    </section>
  )
}