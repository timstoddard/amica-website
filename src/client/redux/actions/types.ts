import { Action } from 'redux'
import { StringMap, User } from '../../shared/types'

interface SetCurrentUserAction {
  type: AuthenticationActions.SET_CURRENT_USER,
  payload: { user: User }
}

interface LogoutAction {
  type: AuthenticationActions.LOGOUT
}

interface AuthErrorsAction {
  type: AuthenticationActions.AUTH_ERRORS
  payload: { errors: StringMap }
}

export type AuthAction = SetCurrentUserAction | LogoutAction | AuthErrorsAction

export enum AuthenticationActions {
  SET_CURRENT_USER = 'set_current_user',
  LOGOUT = 'logout',
  AUTH_ERRORS = 'auth_errors',
}

export const setCurrentUser = (user: User = null): SetCurrentUserAction => ({
  type: AuthenticationActions.SET_CURRENT_USER,
  payload: { user },
})

export const logout = (): LogoutAction => ({
  type: AuthenticationActions.LOGOUT,
})

export const authErrors = (errors: StringMap): AuthErrorsAction => ({
  type: AuthenticationActions.AUTH_ERRORS,
  payload: { errors },
})
