import { combineReducers } from 'redux'
import { StringMap, User } from '../../shared/types'
import currentUser from './current-user'
import signUpErrors from './sign-up-errors'

export default combineReducers({
  currentUser,
  signUpErrors,
})
