import { Action } from 'redux'
import { User } from '../../shared/types'
import { AuthAction, AuthenticationActions } from '../actions/types'

const currentUser = (state: User = null, action: AuthAction) => {
  switch (action.type) {
    case AuthenticationActions.SET_CURRENT_USER:
      return action.payload.user
    case AuthenticationActions.LOGOUT:
      return null
    default:
      return state
  }
}

export default currentUser
