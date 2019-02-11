import { User } from '../../shared/types'

export enum AuthenticationActions {
  SET_CURRENT_USER = 'set_current_user',
  LOGOUT = 'logout',
  AUTH_ERRORS = 'auth_errors',
}

export const setCurrentUser = (user: User = null) => ({
  type: AuthenticationActions.SET_CURRENT_USER,
  payload: { user },
})

export const logout = () => ({
  type: AuthenticationActions.LOGOUT,
})

export const authErrors = (errors: any[]) => ({
  type: AuthenticationActions.AUTH_ERRORS,
  payload: { errors },
})
