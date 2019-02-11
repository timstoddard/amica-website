import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { AppState, User } from '../types'

interface ProtectedRouteProps extends RouteProps {
  currentUser: User
}

const ProtectedRoute = ({ currentUser, ...props }: ProtectedRouteProps) => (
  currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect to='/login' />
  )
)

const mapStateToProps = ({ currentUser }: AppState) => ({
  currentUser,
})

export default connect(
  mapStateToProps,
)(ProtectedRoute)
