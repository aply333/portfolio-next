"use client"

import { useState } from "react";
import { createContact } from "@/lib/api/strapiGraphContact";
import Markdown from "react-markdown";
import styles from "./contact_pane.module.scss";

export default function ContactPane({data}){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    let submitData = {
      sender: name,
      email : email,
      content: message
    }
    let sentData = await createContact(submitData);
	alert("Form submitted");
  };

  let my_email = data.Contact.data[0].attributes.Email;
  let my_phone = data.Contact.data[0].attributes.Phone;


	return(
		<div className={"contact_pane "+styles.contact_pane}>
			<h3>Let<span>&apos;</span>s Talk</h3>
			<div className={styles.content}>
			
				<div>
					 <Markdown className='markdown-wys'>{data.Excerpt}</Markdown>
				</div>

				<address>
					<span>Email: <a href="mailto:{my_email}}">{my_email}</a></span>
					<span>Phone: <a href="telto:{my_phone}">{my_phone}</a></span>
				</address>

			</div>
			<form onSubmit={onSubmit}>
				<div className={styles.info_section}>
					<input type="text"
	               		value={name} onChange={(e) => setName(e.target.value)}
	               		id="name"
	               		placeholder="Name"/>
					<input type="email"
		               value={email}
		               onChange={(e) => setEmail(e.target.value)}
		               id="email"
		               placeholder="john@doe.com"/>
					<button type="submit">Send</button>
				</div>
				<textarea           
					value={message}
          			onChange={(e) => setMessage(e.target.value)}
          			id="message"
          			placeholder="Enter your message..."></textarea>
				<button className={styles.mobile_btn } type="submit">Send</button>
			</form>
		</div>
	);
}