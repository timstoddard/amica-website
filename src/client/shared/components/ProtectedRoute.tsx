import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({ currentUser, ...props }: any) => (
  currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect to='/login' />
  )
)

const mapStateToProps = ({ currentUser }: any) => ({
  currentUser,
})

export default connect(
  mapStateToProps,
)(ProtectedRoute)
