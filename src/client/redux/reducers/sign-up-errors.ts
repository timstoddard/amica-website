import { StringMap } from '../../shared/types'
import { AuthAction, AuthenticationActions } from '../actions/types'

const signUpErrors = (state: StringMap = {}, action: AuthAction) => {
  switch (action.type) {
    case AuthenticationActions.AUTH_ERRORS:
      console.log(action.payload)
      return {}
    default:
      return state
  }
}

export default signUpErrors
