import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.contentContainer}>
      <footer className={styles.footer}>
        <section>
          <img className={styles.image} src="/icon-logo-with-type.svg" />
          <p className="overline">Climate change in an issue we should all be doing our part to address. We don't sell products,
            instead we recommend what is best for you, the homeowner, and suggest the best ways for you to save money on energy
          </p>
          <div className={styles.iconRow}>
            <img className={styles.image} src="/icon-document.svg" />
            <img className={styles.image} src="/icon-information.svg" />
            <img className={styles.image} src="/icon-plus.svg" />
          </div>
        </section>
        <section>
          <div className={styles.links}>
            <span className="button">Sign up</span>
            <span className="button">Learn more</span>
            <span className="button">FAQ</span>
            <span className="button">ABOUT</span>
          </div>
          <p className="overline">Climate change in an issue we should all be doing our part to address. We don't sell products,
            instead we recommend what is best for you, the homeowner, and suggest the best ways for you to save money on energy.
          </p>
          <div className={styles.buttonContainer}>
            <div className="subtitle1">Sign Up for our App</div>
            <div className={`button ${styles.button}`}>Sign up</div>
          </div>
        </section>
      </footer>
    </div>
  )
}
