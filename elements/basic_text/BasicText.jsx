import Markdown from "react-markdown";
import styles from "./basic_text.module.scss";

export default function BasicText({content}){
	return(
		<div className={"basic_text "+styles.basic_text}>
			 <Markdown className='markdown-wys'>{content}</Markdown>
		</div>
	)
}