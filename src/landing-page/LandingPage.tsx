import * as React from 'react'

const styles = require('./scss/LandingPage.scss') // tslint:disable-line no-var-requires

const LandingPage = () => (
  <div className={styles.landingPage}>
    <div className={styles.landingPage__info}>
      <h1 className={styles.landingPage__info__header}>
        Are your kids being safe online?
      </h1>
      <p className={styles.landingPage__info__text}>
        {/* tslint:disable-next-line:max-line-length */}
        We will educate, engage, and prevent dangerous online situations for your children through our interactive programs on cybersecurity.
      </p>
      <button className={styles.landingPage__info__button} />
    </div>
  </div>
)

export default LandingPage
