import { NotificationType } from '../../shared/types/notifications'
import { NotificationAction } from '../actions/action-types'

export const socialMediaNotifications = (state: Notification[] = [], action: NotificationAction) => {
  switch (action.type) {
    case NotificationType.SOCIAL_MEDIA:
      return [...state, action]
    default:
      return state
  }
}

export const textMessageNotifications = (state: Notification[] = [], action: NotificationAction) => {
  switch (action.type) {
    case NotificationType.TEXT_MESSAGE:
      return [...state, action]
    default:
      return state
  }
}

export const emailNotifications = (state: Notification[] = [], action: NotificationAction) => {
  switch (action.type) {
    case NotificationType.EMAIL:
      return [...state, action]
    default:
      return state
  }
}
