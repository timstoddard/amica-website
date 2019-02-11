import * as React from 'react'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/types'
import { User } from '../shared/types'

const styles = require('./scss/Dashboard.scss') // tslint:disable-line no-var-requires

interface Props {
  currentUser: User
  doLogout: () => void
}

interface State {
  user: any
}

class Dashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      user: null,
    }
  }

  logoutUser = (): void => {
    const { doLogout } = this.props
    doLogout()
  }

  render(): JSX.Element {
    const { logoutUser } = this
    const { currentUser } = this.props

    return (
      <div className={styles.dashboard}>
        <h1>Dashboard</h1>
        <div>Hello, {currentUser.name}!</div>
        <button
          onClick={logoutUser}
          className={styles.dashboard__logoutButton}>
          Logout
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }: any) => ({
  currentUser,
})

const mapDispatchToProps = (dispatch: (_: any) => void) => ({
  doLogout: () => dispatch(logout()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)
