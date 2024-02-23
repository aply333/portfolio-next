"use client"

import Cards from "@/components/cards/card";
import HeroCard from "@/components/heros/heroCard";
import FilterBar from "@/components/filter-bar/filterBar";
import styles from "./gallery.module.scss";
import { projectFetch } from "@/lib/api/strapiGraph";
import { useEffect, useState } from "react";


export default function GalleryClient({filters, base}){
  const [curData, setCurData] = useState();
  const [curFilters, setCurFilters] = useState();

  const [projects, setProjects] = useState([]);

  useEffect( ()=>{
    const fetchData = async () => {
      try {
        let projectsData = await projectFetch(curFilters);
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, [curFilters])

  return(
    <div className={`section--with-grid ${styles.gallery}`}>

      <HeroCard
        parentClass={styles.hero}
        title={base.Title}
        content={base.Description}>

        <div className={styles.search_filters}>
          <input
            type="text"
            placeholder="Search Projects"/>
            <FilterBar
                filterSetter={setCurFilters}
                current={curFilters}
                filters={filters}
                parentClass={styles.filter_container}
            />
        </div>

      </HeroCard>


      { projects.map( item => (
        <Cards
          primaryClass={styles.card}
          title={item.attributes.Title}
          key={Math.random()}
        />
      ))}

    </div>
  )
}
