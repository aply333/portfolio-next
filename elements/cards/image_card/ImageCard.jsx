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
		focused:{
			card: {height: 350},
			link: {
				height: 18,
				opacity: 1
			}
		},
		unfocused: {
			card: {},
			link: {
				height: 0,
				opacity: 0,
			}
		}
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
		setCardState(states.unfocused)
		setActive(false)
	}

	return(
		<div
			onMouseEnter={handleOver}
			onMouseLeave={handleLeave}

			onFocus={handleOver}
			onBlur={handleLeave}
		>
		<motion.div
			ref={cardRef} 
			className={"image_card "+styles.image_card}

			animate={cardState.card}
			transition={timing}
			>
			<div className={styles.image_card__wrapper}>
				<Image src={data.image}
					   alt=""
					   aria-hidden={true}
					   fill
					   />
		    <div className={styles.image_card__title}>
		    	<h3>{data.title}</h3>
			  </div>

			  <motion.span animate={cardState.link}>
			    { data.live ? <a href={data.live} target="_blank">Live Site</a> : null}
			    { data.codebase ? <a href={data.codebase} target="_blank">The Code</a> : null}
		
			  </motion.span>

 	    </div>

		</motion.div>

		</div>
	);
}

