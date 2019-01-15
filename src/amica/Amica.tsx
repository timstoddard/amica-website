// import * as PropTypes from 'prop-types'
import * as React from 'react'
// import { Link } from 'react-router-dom'

const Amica: React.StatelessComponent<{}> = (): JSX.Element => {
  document.title = 'Amica'
  return (
    <div className='homepage'>
      <h1 className='homepage__title'>
        Welcome to Amica's homepage!
      </h1>
    </div>
  )
}

export default Amica
