import * as React from 'react'

const styles = require('./scss/Pricing.scss') // tslint:disable-line no-var-requires

interface PricingOption {
  name: string
  monthlyCost: number
}

const options: PricingOption[] = [
  { name: 'Option 1', monthlyCost: 5 },
  { name: 'Option 2', monthlyCost: 8 },
  { name: 'Option 3', monthlyCost: 12 },
]

const Pricing = () => (
  <div
    className={styles.pricing}
    id='pricing'>
    <h2 className={styles.pricing__title}>
      Pricing
    </h2>
    <div className={styles.pricing__text}>
      <p>At Amica, we strive to create exciting and educational games that are well worth the price you pay. Our pricing model is detailed below.</p>
      <dl className={styles.pricing__options}>
        {options.map(({ name, monthlyCost }: PricingOption) => (
          <React.Fragment key={name}>
            <dt className={styles.pricing__optionTitle}>
              {name}
            </dt>
            <dd className={styles.pricing__optionCost}>
              ${monthlyCost}/month
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  </div>
)

export default Pricing
