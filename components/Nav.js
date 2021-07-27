import { useState } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [mobileMenuActive, setMobileMenuActive] = useState(true)
  return (
    <div className={styles.contentContainer}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src="/icon-logo-with-type.svg" alt="Netlify Logo" />
        </div>
        <div
          className={`${styles.menuToggle} 
          ${mobileMenuActive ? styles.mobileMenuActive : ''}`}
          onClick={() => setMobileMenuActive(!mobileMenuActive)}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <ul className={`${mobileMenuActive ? styles.mobileNav : ''}`}>
          <li><a href="#" className="subtitle1">Signup</a></li>
          <li><a href="#" className="subtitle1">Learn</a></li>
          <li><a href="#" className="subtitle1">FAQ</a></li>
          <li><a href="#" className="subtitle1">About</a></li>
        </ul>
      </nav>
    </div>
  )
}
