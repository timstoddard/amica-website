// TODO make this a folder

// generic stuff
export interface StringMap {
  [key: string]: string
}

// global app state
export interface AppState {
  currentUser: User
  signUpErrors: StringMap
  socialMediaNotifications: Notification[]
  textMessageNotifications: Notification[]
  emailNotifications: Notification[]
}

// user
export interface User {
  id: string
  name: string
}

// form data
export interface SignUpFormData {
  name: string
  email: string
  password: string
}

export interface LoginFormData {
  email: string
  password: string
}

// form control metadata
export interface FieldControlMeta {
  label: string
  type: string
  errorMessages?: StringMap
}

// game states
interface GameStateBase {
  id: string
  description: string
  imageSrc: string
  imageAlt: string
  isFinal: boolean // TODO change this to `type: GameStateType`
}

export interface GameStateChoice {
  text: string
  toId: string
}

export interface IntermediateGameState extends GameStateBase {
  isFinal: false
  choices: GameStateChoice[]
}

export interface FinalGameState extends GameStateBase {
  isFinal: true
  nextGameText: string
  nextGameLink: string
}

export type GameState = IntermediateGameState | FinalGameState

export interface DevGameStateChoice {
  text: string
  toState: DevIntermediateGameState
}

export interface DevIntermediateGameState extends GameStateBase {
  isFinal: false
  choices: DevGameStateChoice[]
}

export type DevGameState = DevIntermediateGameState | FinalGameState

// notifications
export enum NotificationType {
  SOCIAL_MEDIA = 'SOCIAL_MEDIA',
  TEXT_MESSAGE = 'TEXT_MESSAGE',
  EMAIL = 'EMAIL',
}

export interface Notification {
  type: NotificationType
  message: string
}
