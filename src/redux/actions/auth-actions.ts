import { History } from 'history'
import { Dispatch } from 'react'
import { auth } from '../../shared/firebase'
import UserCredential = firebase.auth.UserCredential
import { LoginFormData, SignUpFormData } from '../../shared/types/forms'
import { StringMap } from '../../shared/types/lang'
import { authErrors, setCurrentUser } from './action-types'

export const registerUser = (userData: SignUpFormData, history: History) => (dispatch: Dispatch<unknown>) => {
  auth
    .createUserWithEmailAndPassword(
      userData.email,
      userData.password,
    )
    .then((res: UserCredential) => history.push('/login'))
    .catch((err: StringMap) => dispatch(authErrors(err)))
}

export const loginUser = (userData: LoginFormData) => (dispatch: Dispatch<unknown>) => {
  auth
    .signInWithEmailAndPassword(
      userData.email,
      userData.password,
    )
    .then((res: UserCredential) => {
      const loggedUser = {
        id: res.additionalUserInfo.providerId,
        name: userData.email,
      }
      dispatch(setCurrentUser(loggedUser))
    })
    .catch((err: StringMap) => dispatch(authErrors(err)))
}

export const logoutUser = () => (dispatch: Dispatch<unknown>) => {
  dispatch(setCurrentUser())
}
