import * as React from 'react'

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
    className='pricing'
    id='pricing'>
    <h2 className='pricing__title'>Pricing</h2>
    <div className='pricing__text'>
      <p>At Amica, we strive to create exciting and educational games that are well worth the price you pay. Our pricing model is detailed below.</p>
      <dl className='pricing__options'>
        {options.map(({ name, monthlyCost }: PricingOption) =>
          <>
            <dt className='pricing__optionTitle'>
              {name}
            </dt>
            <dd className='pricing__optionCost'>
              ${monthlyCost}/month
            </dd>
          </>)}
      </dl>
    </div>
  </div>
)

export default Pricing
