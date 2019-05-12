import * as React from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { Action } from 'redux'
import { logout } from '../redux/actions/types'
import { createLoadable } from '../routes'
import { AppState, User } from '../shared/types'

const styles = require('./scss/Dashboard.scss') // tslint:disable-line no-var-requires

interface Props {
  currentUser: User
  doLogout: () => void
}

class Dashboard extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props)
  }

  logoutUser = (): void => {
    const {doLogout} = this.props
    doLogout()
  }

  render(): JSX.Element {
    const {
      logoutUser,
    } = this
    //const {
    //  currentUser,
    //} = this.props

    return (
      <div className={styles.dashboard}>
        <h1>Dashboard</h1>
        {/* <div>Hello, {currentUser.name}!</div> */}
        <Link to='game'>Open game</Link>
        <button
          onClick={logoutUser}
          className={styles.dashboard__logoutButton}>
          Logout
        </button>
        {/* TODO make the buttons setup less ratchet? */}
        <Route
            exact={true}
            path=''
            component={createLoadable((): Promise<unknown> => import('../notification-buttons/NotificationButtons'))} />
      </div>
    )
  }
}

const mapStateToProps = ({currentUser}: AppState) => ({
  currentUser,
})

const mapDispatchToProps = (dispatch: (a: Action) => void) => ({
  doLogout: () => dispatch(logout()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)
