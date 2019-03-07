// TODO make this a folder

// generic stuff
export interface StringMap {
  [key: string]: string
}

// global app state
export interface AppState {
  currentUser: User
  signUpErrors: StringMap
}

// user
export interface User {
  id: string
  name: string
  exp: number
  iat: number
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

export interface IntermediateGameState extends GameStateBase {
  isFinal: false
  choice1: string
  choice2: string
  choice1StateId: string
  choice2StateId: string
}

export interface FinalGameState extends GameStateBase {
  isFinal: true
  nextGameLink: string
}

export type GameState = IntermediateGameState | FinalGameState

export interface DevIntermediateGameState extends GameStateBase {
  isFinal: false
  choice1: string
  choice2: string
  choice1State: DevGameState
  choice2State: DevGameState
}

export type DevGameState = DevIntermediateGameState | FinalGameState
