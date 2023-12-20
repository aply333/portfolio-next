"use client"
import {useState} from "react";
import styles from "./contactcta.module.scss";

export default function ContactCta(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');


  function onSubmit(e){
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/IngzXayL48", {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
      .then(response => response.json())
      .then(response => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");
        }
        else if(response.code === 422){
          // Field validation failed
          setError(response.message)
        }
        else {
          // other error from formcarry
          setError(response.message)
        }
      })
      .catch(error => {
        // request related error.
        setError(error.message ? error.message : error);
      });
  }

  return (
    <form className={styles.form} onSubmit={(e) => onSubmit(e)}>

      <div className={styles['form--block']}>
        <label className='form-label' htmlFor="name">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name"
               placeholder="Your first and last name"/>
      </div>

      <div className={styles['form--block']}>
        <label className='form-label' htmlFor="email">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email"
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
        <button type="submit">Send</button>
      </div>
    </form>
  )
}