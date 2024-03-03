import BasicText from "@/elements/basic_text/BasicText";
import Projects from "./Projects";
import ContactPane from "../contact_pane/ContactPane";
import styles from "./content_pane.module.scss";
import "./content_pane.scss";

export default function ContentPane({about, projects}){

	return(
		<section className={"content_pane "+styles.content_pane}>
			<div className={styles.bound}>
				<h2>About</h2>
				<BasicText content={about}/>

				<h2>Projects</h2>
				<Projects projects={projects}/>

				<h2>Contact</h2>
			</div>
			<ContactPane/>
		</section>
	)
}