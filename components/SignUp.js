import classNames from 'classnames'
import { useState } from 'react'
import styles from './SignUp.module.css'

export default function SignUp() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.signUp}>
        <h6 className={styles.description}>Sign Up for our App to save more money and become more energy efficient.</h6>
        <div className={styles.button}>
          <span className="button">start assessment</span>
        </div>
      </div>
    </div>
  )
}
