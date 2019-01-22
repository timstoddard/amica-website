import * as React from 'react'

import About from './About'
import Competitors from './Competitors'
import Email from './Email'
import Footer from './Footer'
import Games from './Games'
import Header from './Header'
import Pricing from './Pricing'

const styles = require('./scss/Amica.scss') // tslint:disable-line no-var-requires

const Amica: React.StatelessComponent<{}> = () => (
  <>
    <Header />
    <div className={styles.content}>
      <Email />
      <About />
      <Games />
      <Pricing />
      <Competitors />
    </div>
    <Footer />
  </>
)

export default Amica
