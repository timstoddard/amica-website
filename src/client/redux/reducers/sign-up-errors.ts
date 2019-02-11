import { AuthenticationActions } from '../actions/types'

const signUpErrors = (state: any[] = [], action: any) => {
  switch (action.type) {
    case AuthenticationActions.AUTH_ERRORS:
      console.log(action.payload)
      return []
    default:
      return state
  }
}

export default signUpErrors
