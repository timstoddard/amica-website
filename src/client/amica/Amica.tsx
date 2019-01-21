import * as React from 'react'

import About from './About'
import Footer from './Footer'
import Games from './Games'
import Header from './Header'
import Pricing from './Pricing'

const Amica: React.StatelessComponent<{}> = () => (
  <>
    <Header />
    <div className='content'>
      <div className='headline'>
        <h1 className='headline__main'>Want to keep your kids safe online?</h1>
        <h3 className='headline__secondary'>We'll teach them how.</h3>
      </div>
      {/* TODO add CTA to collect their email */}
      <About />
      <Games />
      <Pricing />
    </div>
    <Footer />
  </>
)

export default Amica
