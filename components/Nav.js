import { useState } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [mobileMenuActive, setMobileMenuActive] = useState(true)
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src="/netliheart.svg" alt="Netlify Logo" />
          <span className="button">LOGOTYPE</span>
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
          <li><a href="#">Signup</a></li>
          <li><a href="#">Learn</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </div>
  )
}
