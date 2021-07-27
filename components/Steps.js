import { useState } from 'react'
import styles from './Steps.module.css'
import Step from './Step'

export default function Steps() {
  return (
    <div className="contentContainer">
      <div className={styles.steps}>
        <Step title="Step 1" description="Learning about potential energy savings is easy\n The first step is knowing" src="/single-house.svg" />
        <Step title="Step 2" description="Learning about potential energy savings is easy\n\n\n" src="/single-house.svg" />
        <Step title="Step 3" description="Learning about potential energy savings is easy\n\n\n" src="/single-house.svg" />
      </div>
    </div>
  )
}
