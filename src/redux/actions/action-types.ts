import { StringMap } from '../../shared/types/lang'
import { NotificationType } from '../../shared/types/notifications'
import { User } from '../../shared/types/user'

// auth stuff
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

// notification stuff
export interface NotificationAction {
  type: NotificationType
  message: string
}

export const newNotification = (type?: NotificationType, message?: string) => {
  if (!type && !message) {
    // generate randomly
    const rand = Math.random()
    if (rand < 1 / 3) {
      return {
        type: NotificationType.SOCIAL_MEDIA,
        message: 'this is a social media message',
      }
    } else if (rand < 2 / 3) {
      return {
        type: NotificationType.TEXT_MESSAGE,
        message: 'this is a text message',
      }
    } else {
      return {
        type: NotificationType.EMAIL,
        message: 'this is a email message',
      }
    }
  } else {
    return {
      type,
      message,
    }
  }
}
