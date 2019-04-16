import * as React from 'react'

const styles = require('./scss/Pricing.scss') // tslint:disable-line no-var-requires

const Pricing = () => (
  <div
    className={styles.pricing}
    id='pricing'>
    <h2 className={styles.pricing__title}>
      Pricing
    </h2>
    <div className={styles.pricing__text}>
      {/* tslint:disable-next-line:max-line-length */}
      <p>At Amica, we strive to create exciting and educational games at a fair price. We charge $3 per student per year for access to our continually updated online curriculum.</p>
    </div>
  </div>
)

export default Pricing
