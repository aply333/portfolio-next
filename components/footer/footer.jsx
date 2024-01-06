import styles from "./footer.module.scss";
import Link from "next/link";

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content+' just-grid'}>
          <nav className={styles.footer__nav}>
            <h4 className={styles.footer__nav__title}>About</h4>
            <ul>
              <li><Link className='decorative-link' href="">Link 1</Link></li>
              <li><Link className='decorative-link' href="">Link 2</Link></li>
              <li><Link className='decorative-link' href="">Link 3</Link></li>
            </ul>
          </nav>
          <div className={styles.footer__references}>
            <h4 className={styles.footer__nav__title}>Resources</h4>
          </div>
        </div>
      </div>
    </footer>
  )
}