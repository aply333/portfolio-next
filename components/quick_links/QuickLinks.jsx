import { contactInfoGraphFetch } from "@/lib/api/strapiGraph";
import { setImageUrl } from "@/lib/api/formatters";
import Svg from "@/elements/svg/svg";
import styles from "./quick_links.module.scss";

export default async function QuickLinks({data}){
	let contact_data = await contactInfoGraphFetch();

	return(
		<nav className={"quick_links "+styles.quick_links}>
			<a href={setImageUrl(contact_data.Resume.data.attributes.url)} target="_blank">
				<Svg name="PDF"/>
			</a>
			<a href={contact_data.Linkedin} target="_blank">
				<Svg name="linkedin"/>
			</a>
			<a href={contact_data.Github} target="_blank">
				<Svg name="github"/>
			</a>
		</nav>	
	)
}