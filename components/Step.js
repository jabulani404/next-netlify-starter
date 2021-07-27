import { useState } from 'react'
import styles from './Step.module.css'


export default function Step({ title, description, src }) {
  return (
    <>
      <div className={styles.step}>
        <img src={src} alt="Main image" className={styles.image} />
        <div className={styles.details}>
          <h3 className={styles.title}>{title}</h3>
          <p className={`body1 ${styles.description}`}>{description}</p>
        </div>
      </div>
    </>
  )
}
