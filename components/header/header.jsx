import styles from './header.module.scss';
import Link from "next/link";
import Svg from "@/components/assets/svg/svg";
import {contactInfoGraphFetch} from "@/lib/api/strapiGraph";

async function Header(){
  let data = await contactInfoGraphFetch();
  return(
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles['nav--wrapper']}>
          <button className={styles['menu-item--contact']}>Contact</button>
          <Link href={process.env.STRAPI_ROOT+data.Resume.data.attributes.url} target='_blank' aria-label={data.Resume.data.attributes.alternativeText} className={styles['menu-item']}><Svg name={'PDF'}/></Link>
          <Link href={data.Linkedin} aria-label={'Link to Linkedin Profile'} target='_blank' className={styles['menu-item']}><Svg name={'linkedin'}/></Link>
          <Link href={data.GitHub} aria-label={'Link to GitHub Profile'} target='_blank' className={styles['menu-item']}><Svg name={'github'}/></Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;