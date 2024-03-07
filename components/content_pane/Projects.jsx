import ImageCard from "@/elements/cards/image_card/ImageCard";
import { setImageUrl } from "@/lib/api/formatters"

export default function Projects({projects}){

	// console.log(projects)

	function Card({project}){
		let url = setImageUrl(project.attributes.Screenshot.data.attributes.url);
		let data = {
			image: url,
			title: project.attributes.Title,
			live: project.attributes.Live,
			code: project.attributes.Codebase
		}
		return(
			<ImageCard data={data}/>
		)
	}

	return(
		<div>
			{ projects.map( project => ( <Card key={Math.random()} project={project} /> ))}
		</div>
	)
}