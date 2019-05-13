import { User } from './user'

export interface StringMap {
  [key: string]: string
}

export interface AppState {
  currentUser: User
  signUpErrors: StringMap
  socialMediaNotifications: Notification[]
  textMessageNotifications: Notification[]
  emailNotifications: Notification[]
}
