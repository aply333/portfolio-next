import styles from "./stack.module.scss";
import Logo from "@/components/landing-section/stack/logo";

export default function Stack({data}){
  return(
    <section id="my_stack_section" className={"section--with-grid " + styles.stack_section}>
      <div className={styles.content}>
        <h2 className={'section-title ' + styles.title}>{data.Title}</h2>
        <ul className={styles.list}>
          {data.Stacks.data.map(item => (
            <li key={Math.random() + '_item.id'} className={styles.item}>{item.attributes.Tech}</li>
          ))}
        </ul>
      </div>

      <div className={styles.stack_wrapper}>
        {data.Stacks.data.map(item => ( <Logo key={Math.random()} image={item}/> ))}
      </div>
    </section>
  );
}