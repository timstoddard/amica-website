import * as React from 'react'
import { connect } from 'react-redux'
import { logout } from '../redux/actions'

const styles = require('./scss/Dashboard.scss') // tslint:disable-line no-var-requires

interface Props {
  isUserAuthenticated: boolean
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

    return (
      <div className={styles.dashboard}>
        Dashboard
        <button
          onClick={logoutUser}
          className={styles.dashboard__logoutButton}>
          Logout
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: (_: any) => void) => ({
  doLogout: () => dispatch(logout()),
})

export default connect(
  () => ({}),
  mapDispatchToProps,
)(Dashboard)
