"use client";
import styles from "./projects.module.scss";
import tempImage from "../../../public/focusedKanban.jpg";
import Image from "next/image";
import { useState } from "react";
import Svg from "@/components/assets/svg/svg";
import {AnimatePresence, motion} from "framer-motion";

export default function Projects(){

  console.log(tempImage);

  const [modalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState({})
  const openModal = (e, projectData) =>{
    e.preventDefault();
    setModalOpen(true);
    setContent(projectData);
  }
  const closeModal = (e) => {
    e.preventDefault();
    setModalOpen(false);
  }

  let project_content = [
    {
      name : "Focused KanBan",
      image: "Temp",
      about: "Focused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and manage their boards. After building out the board, the user can select a “focused task” to display the user’s mobile device’s task in detail.",
      stack:["HTML", "CSS", "SCSS", "LESS", "JavaScript", "React", "Next.JS", "Redux", "Python", "Express", "SQL"],
      position: "one"
    },
    {
      name : "Linea Creative",
      image: "Temp",
      about: "Focused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and manage their boards. After building out the board, the user can select a “focused task” to display the user’s mobile device’s task in detail.",
      stack:["HTML", "CSS", "SCSS", "LESS", "JavaScript", "React", "Next.JS", "Redux", "Python", "Express", "SQL"],
      position: "two"
    },
    {
      name : "Merchant MarketPlace",
      image: "Temp",
      about: "Focused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and manage their boards. After building out the board, the user can select a “focused task” to display the user’s mobile device’s task in detail.",
      stack:["HTML", "CSS", "SCSS", "LESS", "JavaScript", "React", "Next.JS", "Redux", "Python", "Express", "SQL"],
      position: 'three'
    },
    {
      name : "Haas Pitch",
      image: "Temp",
      about: "Focused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and manage their boards. After building out the board, the user can select a “focused task” to display the user’s mobile device’s task in detail.",
      stack:["HTML", "CSS", "SCSS", "LESS", "JavaScript", "React", "Next.JS", "Redux", "Python", "Express", "SQL"],
      position: "four"
    },
    {
      name : "Snippet Tool",
      image: "Temp",
      about: "Focused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and manage their boards. After building out the board, the user can select a “focused task” to display the user’s mobile device’s task in detail.",
      stack:["HTML", "CSS", "SCSS", "LESS", "JavaScript", "React", "Next.JS", "Redux", "Python", "Express", "SQL"],
      position: "five"
    },
    {
      name : "Hauskin Impact Learning",
      image: "Temp",
      about: "Focused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and manage their boards. After building out the board, the user can select a “focused task” to display the user’s mobile device’s task in detail.",
      stack:["HTML", "CSS", "SCSS", "LESS", "JavaScript", "React", "Next.JS", "Redux", "Python", "Express", "SQL"],
      position: "six"
    },
    {
      name : "Conways Game",
      image: "Temp",
      about: "Focused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and manage their boards. After building out the board, the user can select a “focused task” to display the user’s mobile device’s task in detail.",
      stack:["HTML", "CSS", "SCSS", "LESS", "JavaScript", "React", "Next.JS", "Redux", "Python", "Express", "SQL"],
      position: "seven"
    },
    {
      name : "Task to Date",
      image: "Temp",
      about: "Focused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and manage their boards. After building out the board, the user can select a “focused task” to display the user’s mobile device’s task in detail.",
      stack:["HTML", "CSS", "SCSS", "LESS", "JavaScript", "React", "Next.JS", "Redux", "Python", "Express", "SQL"],
      position: "eight"
    },
    {
      name : "Canvas Effect",
      image: "Temp",
      about: "Focused Kanban, as the name suggests, is an online Kanban board. On the desktop, users can build and manage their boards. After building out the board, the user can select a “focused task” to display the user’s mobile device’s task in detail.",
      stack:["HTML", "CSS", "SCSS", "LESS", "JavaScript", "React", "Next.JS", "Redux", "Python", "Express", "SQL"],
      position: "nine"
    },
  ];
  function randomDelay(){
    let min = Math.ceil(1);
    let max = Math.floor(project_content.length);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function Modal({projectData}){
    return (
      <motion.div className={styles.about_project}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.about_project__top_row}>
          <h2>{projectData.name}</h2>
          <button onClick={closeModal}><Svg name={'x'}/></button>
        </div>
        <Image className={styles.about_project__image} src={tempImage} alt={'temp'}/>
        <div className={styles.about_project__content}>
          <ul className={styles.list}>
            { projectData.stack.map( tech => (
              <li key={Math.random()} className={styles.item}>{tech}</li>
            ))}
          </ul>
          <p>{projectData.about}</p>
        </div>
      </motion.div>
    );
  }


  function ProjectButtons(){
    return (
      <>
        {project_content.map( (item, index) => {
          return(
            <motion.button
              key={Math.random()}
              onClick={ e=>{ openModal(e, item)}}
              className={styles.card + " " + styles[`card__${item.position}`]}

              initial={{
                opacity: 0,
                scale: .65
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition:{
                  duration: .5,
                  delay: randomDelay()* 0.15
                }
              }}
              exit={{ opacity: 0 }}

            >
              <div className={styles.card__image_wrapper}>
                <Image className={styles.card__image} src={tempImage} alt={""}/>
              </div>

              {/*<h3>{item.name}</h3>*/}
            </motion.button>
          )
        })}
      </>
    )
  }

  return (
    <section className={"section--with-grid " + styles.projects}>
      <AnimatePresence>
        { modalOpen ? <Modal projectData={content}/> : <ProjectButtons/> }
      </AnimatePresence>
    </section>
  )
}