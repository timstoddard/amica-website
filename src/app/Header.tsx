import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppState } from '../shared/types/lang'
import { User } from '../shared/types/user'

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
  { toId: 'pricing', text: 'Pricing' },
]

const loggedOutLinks: HeaderLink[] = [
  { to: 'sign-up', text: 'Sign Up' },
  { to: 'login', text: 'Login' },
]

const loggedInLinks: HeaderLink[] = [
  { to: 'dashboard', text: 'Dashboard' },
]

const scrollToId = (toId: string) => () => {
  const element = document.getElementById(toId)
  if (element) {
    element.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' })
  }
}

interface HeaderProps {
  currentUser: User
}

const Header = ({ currentUser }: HeaderProps) => {
  const links = currentUser ? loggedInLinks : loggedOutLinks
  return (
    <header className={styles.header}>
      <Link
        to=''
        className={styles.header__logo}>
        <img
          src='/media/images/amica_logo.png'
          alt='amica'
          className={styles.header__logo__img} />
      </Link>
      <div className={styles.header__links}>
        {buttons.map(({ toId, text }: HeaderButton) => (
          <Link
            key={toId}
            to=''
            onClick={scrollToId(toId)}
            className={styles.header__link}>
            {text}
          </Link>
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
}

const mapStateToProps = ({ currentUser }: AppState) => ({
  currentUser,
})

export default connect(
  mapStateToProps,
)(Header)
