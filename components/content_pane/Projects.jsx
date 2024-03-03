import ImageCard from "@/elements/cards/image_card/ImageCard";
import { setImageUrl } from "@/lib/api/formatters"

export default function Projects({projects}){

	function Card({project}){
		let url = setImageUrl(project.attributes.Screenshot.data.attributes.url);
		let data = {
			image: url,
			title: project.attributes.Title
		}
		return(
			<ImageCard data={data}/>
		)
	}

	return(
		<div>
			{ projects.map( project => ( <Card project={project} /> ))}
		</div>
	)
}