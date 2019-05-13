export enum NotificationType {
  SOCIAL_MEDIA = 'SOCIAL_MEDIA',
  TEXT_MESSAGE = 'TEXT_MESSAGE',
  EMAIL = 'EMAIL',
}

export interface Notification {
  type: NotificationType
  message: string
}
