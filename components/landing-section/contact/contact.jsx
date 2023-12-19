import styles from './contact.module.scss';
import Markdown from "react-markdown";

export default function Contact({data}){
  let contact_info = data.Contact.data[0].attributes;

  return(
    <section className={"section--with-grid"}>
      <h2 className={'section-title '+styles.title}>{data.Title}</h2>
      <div className={styles.text}>

        <div className={styles.excerpts}>
          <Markdown className='markdown-wys'>{data.Excerpt}</Markdown>
        </div>

        <div className={styles.contact}>
          <label className={styles.label}>Email: </label>
          <a className={styles.email} href={"mailto:"+contact_info.Email}>{contact_info.Email}</a>
          <br />
          <label>Phone: </label>
          <a className={styles.phone} href={"phoneto:"+contact_info.Phone}>{contact_info.Phone}</a>
        </div>

      </div>

      <div className={styles.form}></div>

    </section>
  )
}