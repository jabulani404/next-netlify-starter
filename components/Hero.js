import { useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.hero}>
        <div className={styles.details}>
          <h2 className={styles.title}>Energy auditing tool</h2>
          <p className={`body1 ${styles.description}`}>
            Climate change in an issue we should all be doing our part to address. We don't sell products,
            instead we recommend what is best for you, the homeowner, and suggest the best ways for you to save money on energy.
            <br />
            <br />
            Inviting, Homely, allowing for a target font family to make better use of the material design aesthetic.
          </p>
          <div className={styles.button}>start assessment</div>
        </div>
        <img src="/header-illustration.svg" alt="Main image" className={styles.image} />
      </div>
    </div>
  )
}
