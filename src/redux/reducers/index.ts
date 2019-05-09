import { combineReducers } from 'redux'
import currentUser from './current-user'
import { emailNotifications, socialMediaNotifications, textMessageNotifications } from './notifications'
import signUpErrors from './sign-up-errors'

export default combineReducers({
  currentUser,
  signUpErrors,
  socialMediaNotifications,
  textMessageNotifications,
  emailNotifications,
})
