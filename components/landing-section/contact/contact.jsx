import styles from './contact.module.scss';
import Markdown from "react-markdown";
import ContactCta from "@/components/contact-cta/contact-cta";

export default function Contact({data}){
  let contact_info = data.Contact.data[0].attributes;

  return(
    <div id="contact_section" className={styles.contact_wrapper}>


    <section className={"section--with-grid "+styles.contact_wrapper__inner_bounds}>
      <h2 className={'section-title '+styles.title}>{data.Title}</h2>
      <div className={styles.text}>

        <div className={styles.excerpts}>
          <Markdown className='markdown-wys'>{data.Excerpt}</Markdown>
        </div>

        <div className={styles.contact}>
          <label className={'form-label '+styles.label}>Email: </label>
          <a className={'decorative-link '+styles.email} href={"mailto:"+contact_info.Email}>{contact_info.Email}</a>
          <br className={styles.break} />
          <label className={'form-label '+styles.label} >Phone: </label>
          <a className={'decorative-link '+styles.phone} href={"phoneto:"+contact_info.Phone}>{contact_info.Phone}</a>
        </div>

      </div>

      <div className={styles.form}>
        <ContactCta/>
      </div>

    </section>

    </div>
  )
}