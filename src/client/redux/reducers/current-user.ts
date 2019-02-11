import { User } from '../../shared/types'
import { AuthenticationActions } from '../actions/types'

const currentUser = (state: User = null, action: any) => {
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
