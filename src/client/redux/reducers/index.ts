import { combineReducers } from 'redux'
import currentUser from './current-user'
import signUpErrors from './sign-up-errors'

export default combineReducers({
  currentUser,
  signUpErrors,
})
