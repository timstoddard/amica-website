import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({ isUserAuthenticated, ...props }: any) => (
  isUserAuthenticated ? (
    <Route {...props} />
  ) : (
    <Redirect to='/login' />
  )
)

const mapStateToProps = ({ isUserAuthenticated }: any) => ({
  isUserAuthenticated,
})

export default connect(
  mapStateToProps,
)(ProtectedRoute)
