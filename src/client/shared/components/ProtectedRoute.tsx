import * as React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import mockAuthState from '../mock-auth-state'

const ProtectedRoute = ({ ...props }: RouteProps) => (
  mockAuthState.isAuthenticated ? (
    <Route {...props} />
  ) : (
    <Redirect to='/login' />
  )
)

export default ProtectedRoute
