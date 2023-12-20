"use client";

import styles from "./projects.module.scss";
import { useState } from "react";
import {AnimatePresence} from "framer-motion";
import Modal from "@/components/landing-section/projects/modal";
import ProjectButton from "@/components/landing-section/projects/project";

export default function Projects({data}){
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

  function randomDelay(){
    let min = Math.ceil(1);
    let max = Math.floor(data.length);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function ProjectButtons(){
    return (
      <>
        {data.map( (item, index) => {
          return(
            <ProjectButton
              key={Math.random()+`_${index}`}
              clickHandler={openModal}
              item={item}
              index={index}/>
          )
        })}
      </>
    )
  }

  return (
    <section className={"section--with-grid " + styles.projects}>
      <AnimatePresence>
        { modalOpen ? <Modal projectData={content} handleClose={closeModal}/> : <ProjectButtons/> }
      </AnimatePresence>
    </section>
  )
}