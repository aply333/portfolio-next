import styles from "./contact_pane.module.scss";

export default function ContactPane(){
	return(
		<div className={"contact_pane "+styles.contact_pane}>
			<h3>Let<span>'</span>s Talk</h3>
			<div className={styles.content}>
			
				<div>
					<p>Please reach out, I'd love to hear  what I could do for you. I've left my phone and email bellow, or if  you'd like you can messege me directly here.</p>
					<p>I'm local to the San Francisco Bay Area; open to remote work or relocating if needed.</p>
				</div>
				<address>
					<span>Email: <a href="mailto:#">andrei@aply.tech</a></span>
					<span>Phone: <a href="telto:#">415</a></span>
				</address>
			</div>
			<form>
				<div className={styles.info_section}>
					<input type="text" placeholder="Name"/>
					<input type="email" placeholder="Email"/>
					<input type="zipcode" placeholder="Phone"/>
					<button type="submit">Send</button>
				</div>
				<textarea name="" id="" ></textarea>
				<button className={styles.mobile_btn } type="submit">Send</button>
			</form>
		</div>
	);
}