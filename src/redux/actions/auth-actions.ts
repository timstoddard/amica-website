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
      const user = auth.currentUser
      db.collection("users")
        .doc(user.uid)
        .set({
          name: userData.name,
          email: user.email,
          dateCreated: new Date().toISOString(),
          type: "student", // TODO: CHANGE FROM userData
          progress: {},
          hist: {},
        }).then((res: any) => {
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
      const userId = auth.currentUser.uid
      const docRef = db.collection("users").doc(userId)
      docRef.get().then(function(doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data())
          const loggedUser = {
            name: doc.data().name,
            email: doc.data().email,
            dateCreated: doc.data().dataCreated,
            type: doc.data().type,
            progress: doc.data().progress,
            hist: doc.data().hist,
          }
          dispatch(setCurrentUser(loggedUser))
          history.push('/dashboard')
        } else {
          console.log("No such document")
        }
      })
    })
    .catch((err: StringMap) => dispatch(authErrors(err)))
}

export const logoutUser = () => (dispatch: Dispatch<unknown>) => {
  dispatch(setCurrentUser())
}
