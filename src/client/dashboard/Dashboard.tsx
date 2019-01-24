import * as React from 'react'
import { Redirect } from 'react-router'
import mockAuthState from '../shared/mock-auth-state'

const styles = require('./scss/Dashboard.scss') // tslint:disable-line no-var-requires

interface State {
  user: any
  isLoggedOut: boolean
}

export default class Login extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
      user: null,
      isLoggedOut: false,
    }
  }

  logout = (): void => {
    mockAuthState.logout(() => this.setState({ isLoggedOut: true }))
  }

  render(): JSX.Element {
    const { logout } = this
    const { isLoggedOut } = this.state

    if (isLoggedOut) {
      return <Redirect to='/' />
    }

    return (
      <div className={styles.dashboard}>
        Dashboard
        <button
          onClick={logout}
          className={styles.dashboard__logoutButton}>
          Logout
        </button>
      </div>
    )
  }
}
