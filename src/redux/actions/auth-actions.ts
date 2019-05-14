import {History} from 'history'
import {Dispatch} from 'react'
import {db, auth} from '../../shared/firebase'
import UserCredential = firebase.auth.UserCredential
import {LoginFormData, SignUpFormData} from '../../shared/types/forms'
import {StringMap} from '../../shared/types/lang'
import {authErrors, setCurrentUser} from './action-types'

export const registerUser = (userData: SignUpFormData, history: History) => (dispatch: Dispatch<unknown>) => {
  auth
    .createUserWithEmailAndPassword(
      userData.email,
      userData.password,
    )
    .then((res: UserCredential) => {
      db.collection("users").add({
        name: userData.name,
        email: userData.email,
        dateCreated: new Date().toISOString(),
        type: "student", // TODO: CHANGE FROM userData
        progress: {},
        history: {},
      }).then((res: any) => {
        console.log(res)
        history.push('/login')
      })
    })
    .catch((err: StringMap) => dispatch(authErrors(err)))
}

export const loginUser = (userData: LoginFormData, history: History) => (dispatch: Dispatch<unknown>) => {
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
      history.push('/dashboard')
    })
    .catch((err: StringMap) => dispatch(authErrors(err)))
}

export const logoutUser = () => (dispatch: Dispatch<unknown>) => {
  dispatch(setCurrentUser())
}
