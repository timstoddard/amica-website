import * as React from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { Action } from 'redux'
import NotificationButtons from '../notification-buttons/NotificationButtons'
import { logout } from '../redux/actions/action-types'
import { AppState } from '../shared/types/lang'
import { User } from '../shared/types/user'

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
    const { doLogout } = this.props
    doLogout()
  }

  render(): JSX.Element {
    const {
      logoutUser,
    } = this
    const {
     currentUser,
    } = this.props
    //const currentUser = { name: 'Test Name' }

    return (
      <div className={styles.dashboard}>
        <h1>Dashboard</h1>
        <div>Hello, {currentUser.name}!</div>
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
          component={NotificationButtons} />
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }: AppState) => ({
  currentUser,
})

const mapDispatchToProps = (dispatch: (a: Action) => void) => ({
  doLogout: () => dispatch(logout()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)
