import * as React from 'react'
import { Link } from 'react-router-dom'

const styles = require('./scss/Header.scss') // tslint:disable-line no-var-requires

interface HeaderLink {
  to: string
  text: string
}

interface HeaderButton {
  toId: string
  text: string
}

const buttons: HeaderButton[] = [
  { toId: 'about', text: 'About' },
  { toId: 'games', text: 'Games' },
  { toId: 'pricing', text: 'Pricing' },
]

const links: HeaderLink[] = [
  { to: 'sign-up', text: 'Sign Up' },
  { to: 'login', text: 'Login' },
]

const scrollToId = (toId: string) => () => {
  const element = document.getElementById(toId)
  if (element) {
    element.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' })
  }
}

const Header = () => (
  <header className={styles.header}>
    <Link
      to='/'
      className={styles.header__title}>
      Amica
    </Link>
    <div className={styles.header__links}>
      {buttons.map(({ toId, text }: HeaderButton) => (
        <button
          key={toId}
          onClick={scrollToId(toId)}
          className={styles.header__link}>
          {text}
        </button>
      ))}
      {links.map(({ to, text }: HeaderLink) => (
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
