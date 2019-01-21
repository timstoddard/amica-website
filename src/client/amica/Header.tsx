import * as React from 'react'
import { Link } from 'react-router-dom'

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
  <header className='header'>
    <Link
      to=''
      className='header__title'>
      Amica
    </Link>
    <div className='header__links'>
      {links.map(({ to, text }: HeaderLink) =>
        <Link
          key={to}
          to={to}
          className='header__link'>
          {text}
        </Link>)}
    </div>
  </header>
)

export default Header
