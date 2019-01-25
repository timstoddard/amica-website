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
