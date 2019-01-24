import { AuthenticationActions } from '../actions'

const isUserAuthenticated = (state: boolean = false, action: any) => {
  switch (action.type) {
    case AuthenticationActions.LOGIN:
      return true
    case AuthenticationActions.LOGOUT:
      return false
    default:
      return state
  }
}

export default isUserAuthenticated
