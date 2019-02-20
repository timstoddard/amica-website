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
