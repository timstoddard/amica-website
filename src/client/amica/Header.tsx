import * as React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const styles = require('./scss/Header.scss') // tslint:disable-line no-var-requires

interface HeaderLink {
  to: string
  text: string
}

const links: HeaderLink[] = [
  { to: '#about', text: 'About' },
  { to: '#games', text: 'Games' },
  { to: '#pricing', text: 'Pricing' },
  { to: 'signup', text: 'Sign Up' },
  { to: 'login', text: 'Log In' },
]

const Header = () => (
  <header className={styles.header}>
    <Link
      to=''
      className={styles.header__title}>
      Amica
    </Link>
    <div className={styles.header__links}>
      {links.map(({ to, text }: HeaderLink) =>
        to[0] === '#' ? (
          <HashLink
            key={to}
            to={to}
            className={styles.header__link}>
            {text}
          </HashLink>
        ) : (
          <Link
            key={to}
            to={to}
            className={styles.header__link}>
            {text}
          </Link>
        ))}
    </div>
  </header>
)

export default Header
