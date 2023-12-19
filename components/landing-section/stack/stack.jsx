import styles from "./stack.module.scss";

export default function Stack({data}){
  return(
    <section className="section--with-grid">
      <h2 className={'section-title '+styles.title}>{data.Title}</h2>
      <ul className={styles.list}>
        {data.Stacks.data.map( item => (
          <li key={Math.random()+'_item.id'} className={styles.item}>{item.attributes.Tech}</li>
        ))}
      </ul>
    </section>
  );
}