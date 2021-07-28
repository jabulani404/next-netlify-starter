import { useState } from 'react'
import styles from './Step.module.css'


export default function Step({ title, description, src }) {
  // replace line feeds with double line breaks for the paragraph tag
  const stepComps = description.split('\n').map(text => text.trim() || <><br /><br /></>)
  return (
    <>
      <div className={styles.step}>
        <img src={src} alt="Main image" className={styles.image} />
        <div className={styles.details}>
          <h3 className={styles.title}>{title}</h3>
          <p className={`body1 ${styles.description}`}>{stepComps}</p>
        </div>
      </div>
    </>
  )
}
