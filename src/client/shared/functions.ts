import axios from 'axios'
import * as bcrypt from 'bcryptjs'
import { PASSWORD_SALT_ROUNDS } from './constants'

export const hash = (password: string, callback: (passwordHash: string) => void) => {
  bcrypt.hash(password, PASSWORD_SALT_ROUNDS, (e: Error, passwordHash: string) => {
    if (e) {
      alert(e.message)
      return
    }
    callback(passwordHash)
  })
}

export const setAuthToken = (token: string = null) => {
  if (token) {
    axios.defaults.headers.common.Authorization = token
  } else {
    delete axios.defaults.headers.common.Authorization
  }
}

export default setAuthToken
