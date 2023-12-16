import Image from "next/image";
import first from "../../../public/focusedKanban.jpg";
import styles from "./featured.module.scss";

export default function Featured(){
  return(
    <section className="section">
      <div className={styles.first}>

        <div className={styles['image-wrapper']}>
          <Image className={styles.image} src={first} alt={'temp'} fill={true}/>
        </div>
        <div className={styles.about}>
          <h3 className={styles.title}>Focused KanBan</h3>
          <p className={'paragraph-gap '+styles.excerpt}>
            Focused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and manage their boards. After building out the board, the user can select a “focused task” to display the user’s mobile device’s task in detail. Planning a project on its own can be a distraction; the idea is the separate the task from the plan itself.
          </p>
          <ul className={styles['stack-list']}>
            <li className={styles['stack-list__item']}>JavaScript</li>
            <li className={styles['stack-list__item']}>HTML</li>
            <li className={styles['stack-list__item']}>Canvas</li>
            <li className={styles['stack-list__item']}>CSS</li>
            <li className={styles['stack-list__item']}>React</li>
            <li className={styles['stack-list__item']}>ExpressJs</li>
            <li className={styles['stack-list__item']}>Sqlite3</li>
            <li className={styles['stack-list__item']}>Knex</li>
            <li className={styles['stack-list__item']}>Bcrypt</li>
          </ul>
        </div>

      </div>
      <div className={styles.second}>

        <div className={styles.about}>
          <h3 className={styles.title}>Focused KanBan</h3>
          <p className={'paragraph-gap '+styles.excerpt}>
            Focused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and manage
            their boards. After building out the board, the user can select a “focused task” to display the user’s
            mobile device’s task in detail. Planning a project on its own can be a distraction; the idea is the separate
            the task from the plan itself.
          </p>
          <ul className={styles['stack-list']}>
            <li className={styles['stack-list__item']}>JavaScript</li>
            <li className={styles['stack-list__item']}>HTML</li>
            <li className={styles['stack-list__item']}>Canvas</li>
            <li className={styles['stack-list__item']}>CSS</li>
            <li className={styles['stack-list__item']}>React</li>
            <li className={styles['stack-list__item']}>ExpressJs</li>
            <li className={styles['stack-list__item']}>Sqlite3</li>
            <li className={styles['stack-list__item']}>Knex</li>
            <li className={styles['stack-list__item']}>Bcrypt</li>
          </ul>
        </div>
        <div className={styles['image-wrapper']}>
          <Image className={styles.image} src={first} alt={'temp'} fill={true}/>
        </div>

      </div>
      <div className={styles.third}>

        <div className={styles['image-wrapper']}>
          <Image className={styles.image} src={first} alt={'temp'} fill={true}/>
        </div>

        <div className={styles.about}>
          <h3 className={styles.title}>Focused KanBan</h3>
          <p className={'paragraph-gap '+styles.excerpt}>
            Focused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and manage
            their boards. After building out the board, the user can select a “focused task” to display the user’s
            mobile device’s task in detail. Planning a project on its own can be a distraction; the idea is the separate
            the task from the plan itself.
          </p>
          <ul className={styles['stack-list']}>
            <li className={styles['stack-list__item']}>JavaScript</li>
            <li className={styles['stack-list__item']}>HTML</li>
            <li className={styles['stack-list__item']}>Canvas</li>
            <li className={styles['stack-list__item']}>CSS</li>
            <li className={styles['stack-list__item']}>React</li>
            <li className={styles['stack-list__item']}>ExpressJs</li>
            <li className={styles['stack-list__item']}>Sqlite3</li>
            <li className={styles['stack-list__item']}>Knex</li>
            <li className={styles['stack-list__item']}>Bcrypt</li>
          </ul>
        </div>

      </div>
    </section>
  )
}