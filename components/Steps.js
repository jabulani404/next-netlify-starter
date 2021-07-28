import { useState } from 'react'
import styles from './Steps.module.css'
import Step from './Step'

const steps = [
  {
    title: "Step 1",
    description: `Learning about potential energy savings is easy
    
    The first step is knowing where you are in the world.. We've curated data across the nation to find the best suitable cost of your housing energy usage, and where you can improve.`,
    src: "/single-house.svg",
  },
  {
    title: "Step 2",
    description: `What kind of building are you in, and when was it built
    
    From single family homes to studio apartments, we can service any building type. Knowing the year it was constructed will also give us a better idea of the technique and building materials used during construction so we can give you some pointers on what to focus your efforts on.`,
    src: "/single-house.svg",
  },
  {
    title: "Step 3",
    description: `Square footage. This enables us to figure ot what it takes to power your home, and where potential inefficiencies may lie.
    
    And that's it. A few simple questions and the touch of a button and we will have some initial information that will highlight likely opportunities.
    
    
    If you want to learn more, don't forget to Sign Up for our app and we can talk more closely with you in order to save you, the homeowner, some money as you journey to energy efficiency.`,
    src: "/single-house.svg",
  },
]

export default function Steps() {
  const stepsComps = steps.map(step => <Step {...step} key={step.title} />)
  return (
    <div className="contentContainer">
      <div className={styles.steps}>
        {stepsComps}
      </div>
    </div>
  )
}
