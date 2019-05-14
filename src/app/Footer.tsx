import * as React from 'react'

const styles = require('./scss/Footer.scss') // tslint:disable-line no-var-requires

// TODO: user testimonial

interface Props {
  isOnLandingPage: boolean
}

const Footer: React.StatelessComponent<Props> = ({ isOnLandingPage }: Props) => (
  <footer className={styles.footer}>
    &copy; Amica 2019
  </footer>
)

export default Footer
