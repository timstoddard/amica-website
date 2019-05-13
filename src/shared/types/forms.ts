import { StringMap } from './lang'

export interface SignUpFormData {
  name: string
  email: string
  password: string
}

export interface LoginFormData {
  email: string
  password: string
}

export interface FieldControlMeta {
  label: string
  type: string
  errorMessages?: StringMap
}
