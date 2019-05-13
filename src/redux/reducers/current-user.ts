import { User } from '../../shared/types/user'
import { AuthAction, AuthenticationActions } from '../actions/action-types'

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
