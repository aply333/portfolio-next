"use client"
import Svg from "../assets/svg/svg";
import { useState } from "react";

export default function FilterBar({filters, parentClass, filterSetter, current}){
  const [isHovered, setIsHovered] = useState(false);

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
     { current !== null ? <button
        onClick={ e => {
           e.preventDefault();
           filterSetter('reset');
          }} >
       <Svg name={"refresh"}/>
     </button> : null }
  </div>
  )
}
