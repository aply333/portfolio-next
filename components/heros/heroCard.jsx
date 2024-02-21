import styles from "./heroStyles.module.scss";

export default function HeroCard({ parentClass='', title, content, children}){
  return(
    <section className={`${styles.hero_card} ${parentClass}`}>
      <div className="hero_card__content">
        <h1>{title}</h1>
        <div className={'basic'+' '+styles.hero_card__content}>{content}</div>
      </div>
      <div className="hero_card__children">
        {children}
      </div>
    </section>
  )
}
