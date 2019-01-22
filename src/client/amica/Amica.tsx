import * as React from 'react'

import About from './About'
import Footer from './Footer'
import Games from './Games'
import Header from './Header'
import Pricing from './Pricing'

const styles = require('./scss/Amica.scss') // tslint:disable-line no-var-requires

const Amica: React.StatelessComponent<{}> = () => (
  <>
    <Header />
    <div className={styles.content}>
      <div className={styles.headline}>
        <h1 className={styles.headline__main}>
          Want to keep your kids safe online?
        </h1>
        <h3 className={styles.headline__secondary}>
          We'll teach them how.
        </h3>
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
