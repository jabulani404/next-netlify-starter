import { useState } from 'react'
import styles from './Ready.module.css'
import cn from 'classnames'

export default function Ready() {
  return (
    <div className={cn('contentContainer', styles.contentContainer)}>
      <div className={styles.ready}>
        <h1 className={styles.title}>Are you ready?</h1>
        <h5 className={styles.description}>We help homeowners like you save money on their Energy
          bills and become more energy efficient. Climate Change is an issue we should all be doing our part to
          address. Start Your Assessment today, and don't forget to Sign-Up to our App so you can save even more.
        </h5>
        <div className={styles.button}>
          <span className="button">start assessment</span>
        </div>
      </div>
    </div>
  )
}
