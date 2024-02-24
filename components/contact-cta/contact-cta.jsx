"use client"
import { useState } from "react";
import styles from "./contactcta.module.scss";
import { createContact } from "@/lib/api/strapiGraphContact";

// TODO: REVIEW THIS AS TO FORM SPARK MAKE CHOICE AND PRUNE.

function ContactCta() {
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

  return (
    <form onSubmit={onSubmit}>
      <time dateTime="2016-10-25" suppressHydrationWarning/>
      <div className={styles['form--block']}>
        <label className='form-label' htmlFor="name">Name</label>
        <input type="text"
               value={name} onChange={(e) => setName(e.target.value)}
               id="name"
               placeholder="Your first and last name"/>
      </div>

      <div className={styles['form--block']}>
        <label className='form-label' htmlFor="email">Email</label>
        <input type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               id="email"
               placeholder="john@doe.com"/>
      </div>

      <div className={styles['form--block']}>
        <label className='form-label' htmlFor="message">Your message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          placeholder="Enter your message...">
        </textarea>
      </div>


      <div className={styles['form--block']}>
        <button type="submit">
          Send
        </button>
      </div>

    </form>
  );
}

export default ContactCta;
