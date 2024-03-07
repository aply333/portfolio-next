import styles from "./inline_list.module.scss";

export default function InlineList({title, list}){
	return(
		<div className={"inline_list "+styles.inline_list}>
			{title !== undefined 
				? <h2>{title}</h2>
				: null
			}
			<ul>
				{ list.map( item => (<li key={Math.random}>{item}</li>))}
			</ul>
		</div>
	);
}