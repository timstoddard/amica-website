import * as React from 'react'

const styles = require('./scss/Footer.scss') // tslint:disable-line no-var-requires

const Footer: React.StatelessComponent<{}> = () => (
  <footer className={styles.footer}>
    &copy; Amica 2019
  </footer>
)

export default Footer
