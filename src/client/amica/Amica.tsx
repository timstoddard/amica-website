// import * as PropTypes from 'prop-types'
import * as React from 'react'
// import { Link } from 'react-router-dom'

const Amica: React.StatelessComponent<{}> = (): JSX.Element => {
  document.title = 'Amica'
  return (
    <div className='homepage'>
      <header className='homepage__header'>
        <div className='homepage__header__title'>Amica</div>
        <div className='homepage__header__links'>
          <div className='homepage__header__link'>Games</div>
          <div className='homepage__header__link'>About</div>
          <div className='homepage__header__link'>Pricing</div>
          <div className='homepage__header__link'>Sign up</div>
          <div className='homepage__header__link'>Log in</div>
        </div>
      </header>
      <h1 className='homepage__title'>
        Welcome to Amica's homepage!
      </h1>
    </div>
  )
}

export default Amica
