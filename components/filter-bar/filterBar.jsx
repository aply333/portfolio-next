"use client"
import Svg from "../assets/svg/svg";
import { useState } from "react";

export default function FilterBar({filters, parentClass, filterSetter, current}){
  const [isHovered, setIsHovered] = useState(false);

  function handleReset(e){
    e.preventDefault();
    filterSetter(null)
  }

  return(
    <div className={parentClass}>
     <span className="title--4">Filters</span>
     <ul>
       { filters.map( type => (
          <li key={Math.random()}>
            <button
              aria-label={`Show ${type.attributes.Type}`}
              onClick = { e => {
                e.preventDefault();
                filterSetter(type.attributes.Type_ID)

              }}
            >
              <Svg name={type.attributes.Icon}/>
            </button>
          </li>
       ))}
     </ul>
     { current !== null ? <button onClick={handleReset} ><Svg name={"refresh"}/></button> : null }
  </div>
  )
}
