import { Profile } from '../profile-generator/profile-generator'
import { CharacterGenerator } from './character-generator'
import { getRandomPasswordType, PasswordType } from './password-type'
import { PasswordEntry, PasswordTypeDB } from './password-type-db'

export interface Password {
  value: string
  type: PasswordType
  rank: number
  message: string
}

export default class PasswordGenerator {
  characterGenerator: CharacterGenerator

  constructor() {
    this.characterGenerator = new CharacterGenerator()
  }

  getPasswords = (n: number, profile: Profile) => {
    const result: Password[] = []
    const usedTypes: { [key: string]: boolean } = {}
    for (let i = 0; i < n; i++) {
      // get next unique type
      let randomType = getRandomPasswordType()
      while (randomType in usedTypes) {
        randomType = getRandomPasswordType()
      }
      usedTypes[randomType] = true

      // generate new password with that type
      const passwordInfo: PasswordEntry = PasswordTypeDB[randomType]
      const password: Password = {
        value: passwordInfo.generator(this.characterGenerator, profile),
        type: randomType,
        rank: passwordInfo.rank,
        message: passwordInfo.message,
      }
      result.push(password)
    }
    return result
  }
}
