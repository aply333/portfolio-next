"use client"

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./image_card.module.scss";
import Image from 'next/image';


export default function ImageCard({data}){

	const cardRef = useRef(null)
	const [active, setActive] = useState(false)
	const [ cardState, setCardState ] = useState({});
	const states = {
		focused: {
			height: 350
		},
	}

	const timing = {
		duration: .5,
		type: "spring"
	}

	let handleOver = () => {
		setCardState(states.focused);
		setActive(true)
	}
	let handleLeave = () => {
		setCardState({})
		setActive(false)
	}

	return(
		<div
			onMouseEnter={handleOver}
			onMouseLeave={handleLeave}
		>
		<motion.button
			ref={cardRef} 
			className={"image_card "+styles.image_card}

			animate={cardState}
			transition={timing}
			>
			<div className={styles.image_card__wrapper}>
				<Image src={data.image}
					   alt=""
					   aria-hidden={true}
					   fill
					   />
		    <span> <h3>{data.title}</h3> </span>	
 	    </div>

		</motion.button>
 	    { active 
				? <motion.div> <button> Test </button> </motion.div>
				: null
 	  	}
		</div>
	);
}