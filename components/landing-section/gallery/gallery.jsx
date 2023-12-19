"use client";
import styles from "./gallery.module.scss";

export default function Gallery({data}){

  return(
    <section className={"section "}>
      <div className={styles.gallery}>

        <div className={"just-grid "+styles.wrapper}>

          <div className={styles.lead_in}></div>

          <div className={styles.card}>
            <h3>Title 1 Card</h3>
            <p className="">Image Placeholder</p>
            <p> ocused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and
              manage their boards. After building out the board, the user can select a “focused task” to display the
              user’s mobile device’s task in detail. </p>
          </div>

          <div className={styles.card}>
            <h3>Title 1 Card</h3>
            <p className="">Image Placeholder</p>
            <p> ocused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and
              manage their boards. After building out the board, the user can select a “focused task” to display the
              user’s mobile device’s task in detail. </p>
          </div>

          <div className={styles.card}>
            <h3>Title 1 Card</h3>
            <p className="">Image Placeholder</p>
            <p> ocused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and
              manage their boards. After building out the board, the user can select a “focused task” to display the
              user’s mobile device’s task in detail. </p>
          </div>

          <div className={styles.card}>
            <h3>Title 1 Card</h3>
            <p className="">Image Placeholder</p>
            <p> ocused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and
              manage their boards. After building out the board, the user can select a “focused task” to display the
              user’s mobile device’s task in detail. </p>
          </div>

          <div className={styles.card}>
            <h3>Title 1 Card</h3>
            <p className="">Image Placeholder</p>
            <p> ocused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and
              manage their boards. After building out the board, the user can select a “focused task” to display the
              user’s mobile device’s task in detail. </p>
          </div>

          <div className={styles.card}>
            <h3>Title 1 Card</h3>
            <p className="">Image Placeholder</p>
            <p> ocused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and
              manage their boards. After building out the board, the user can select a “focused task” to display the
              user’s mobile device’s task in detail. </p>
          </div>

        </div>
      </div>

    </section>
  )
}


