import * as React from 'react'
import { connect } from 'react-redux'
import { Route, RouteProps } from 'react-router-dom'
import { AppState, User } from '../types'

interface ProtectedRouteProps extends RouteProps {
  currentUser: User
}

// TODO change this back once firebase auth works
const ProtectedRoute = ({ currentUser, ...props }: ProtectedRouteProps) => /*(
  currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect to='/login' />
  )
)*/
(<Route {...props} />)

const mapStateToProps = ({ currentUser }: AppState) => ({
  currentUser,
})

export default connect(
  mapStateToProps,
)(ProtectedRoute)
