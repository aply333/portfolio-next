import styles from './header.module.scss';
import Link from "next/link";
import Svg from "@/components/assets/svg/svg";

function Header(){
  return(
    <header className={styles.header}>
      <nav className={styles.nav}>
        <button className={styles['menu-item--contact']}>Contact</button>
        <Link href={'#'} className={styles['menu-item']}><Svg name={'PDF'}/></Link>
        <Link href={'#'} className={styles['menu-item']}><Svg name={'linkedin'}/></Link>
        <Link href={'#'} className={styles['menu-item']}><Svg name={'github'}/></Link>
      </nav>
    </header>
  )
}

export default Header;