import InlineList from "@/elements/inline_list/InlineList"
import styles from "./key_values.module.scss"

export default function KeyValues({data}){
	let stack = []
	let frameworks = []
	let tools = []

	data.map( item => {
		if(item.attributes.Type === "Tech"){
			stack.push(item.attributes.Tech)
		}
		if(item.attributes.Type === "Framework"){
			frameworks.push(item.attributes.Tech)
		}
		if(item.attributes.Type === "Tool"){
			tools.push(item.attributes.Tech)
		}
	})
	// console.log(tools)
	// console.log(frameworks)
	// console.log(stack)

	// console.log(data)

	return(
		<section className={"key_values "+styles.key_values}>
			<InlineList title="Stack" list={stack}/>
			<InlineList title="Frameworks" list={frameworks}/>
			<InlineList title="Tools" list={tools}/>
		</section>
	)
}