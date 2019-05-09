import { Profile } from '../profile-generator/profile-generator'
import { CharacterGenerator } from './character-generator'
import { PasswordType } from './password-type'
import { insertChar, randomInRange, randomInt } from './utils'

export interface PasswordEntry {
  rank: number
  message: string
  generator: (generator: CharacterGenerator, profile: Profile) => string
}

export const PasswordTypeDB: { [K in PasswordType]: PasswordEntry } = {
  COMMON: {
    rank: 1,
    message: 'This password is common, so it would be easily guessable by an adversary.',
    generator: (generator: CharacterGenerator, profile: Profile) => {
      const common = [
        'password',
        'password1',
        'letmein',
        '12345',
        '123456',
        '1234567',
        'qwerty',
        'asdfgh',
        'zcvbnm',
        '111111',
        'iloveyou',
        'welcome',
        'abc123',
        'passw0rd',
      ]
      return common[randomInt(common.length)]
    },
  },
  SHORT: {
    rank: 2,
    message: 'This password is short, so it would be very easily guessable by an adversary.',
    generator: (generator: CharacterGenerator, profile: Profile) => {
      let value = ''
      const limit = randomInRange(4, 6)
      for (let i = 0; i < limit; i++) {
        value += generator.getRandomCharacter({ lower: true, numbers: true })
      }
      return value
    },
  },
  RELATED: {
    rank: 3,
    // tslint:disable-next-line:max-line-length
    message: 'This password is related to the user\'s personal information, so it would be one of the first things an adversary might guess.',
    generator: (generator: CharacterGenerator, profile: Profile) => {
      const names = profile.name.toLowerCase().split(' ')
      const numbers = [
        profile.birthday.match(/\d+\/\d+\/(\d+)/)[1],
        parseInt(profile.address, 10),
      ]
      return names[randomInt(names.length)]
        + numbers[randomInt(numbers.length)]
        + generator.getRandomCharacter({ symbols: true })
    },
  },
  ONLY_LOWER: {
    rank: 4,
    // tslint:disable-next-line:max-line-length
    message: 'This password contains only lowercase letters, so it is much easier for an adversary to guess than one with uppercase letters too.',
    generator: (generator: CharacterGenerator, profile: Profile) => {
      let value = ''
      const limit = randomInRange(10, 12)
      for (let i = 0; i < limit; i++) {
        value += generator.getRandomCharacter({ lower: true })
      }
      return value
    },
  },
  ONLY_ALPHA: {
    rank: 5,
    // tslint:disable-next-line:max-line-length
    message: 'This password contains only letters, so it is somewhat secure but also much easier for an adversary to guess than one with numbers or symbols too.',
    generator: (generator: CharacterGenerator, profile: Profile) => {
      let value = ''
      const limit = randomInRange(8, 10)
      for (let i = 0; i < limit; i++) {
        value += generator.getRandomCharacter({ lower: true, upper: true })
      }

      // ensure value will have all needed type of chars
      const lower = generator.getRandomCharacter({ lower: true })
      value = insertChar(value, lower)
      const upper = generator.getRandomCharacter({ upper: true })
      value = insertChar(value, upper)

      return value
    },
  },
  ONLY_ALPHANUMERIC: {
    rank: 6,
    // tslint:disable-next-line:max-line-length
    message: 'This password contains only letters and numbers, so it is pretty secure but also easier for an adversary to guess than one with symbols too.',
    generator: (generator: CharacterGenerator, profile: Profile) => {
      let value = ''
      const limit = randomInRange(7, 9)
      for (let i = 0; i < limit; i++) {
        value += generator.getRandomCharacter({ lower: true, upper: true, numbers: true })
      }

      // ensure value will have all needed type of chars
      const lower = generator.getRandomCharacter({ lower: true })
      value = insertChar(value, lower)
      const upper = generator.getRandomCharacter({ upper: true })
      value = insertChar(value, upper)
      const num = generator.getRandomCharacter({ numbers: true })
      value = insertChar(value, num)

      return value
    },
  },
  ALPHANUMERIC_WITH_SYMBOLS: {
    rank: 7,
    message: 'This password contains letters, numbers, and symbols. It is a strong password.',
    generator: (generator: CharacterGenerator, profile: Profile) => {
      let value = ''
      const limit = randomInRange(6, 8)
      for (let i = 0; i < limit; i++) {
        value += generator.getRandomCharacter({ lower: true, upper: true, numbers: true, symbols: true })
      }

      // ensure value will have all needed type of chars
      const lower = generator.getRandomCharacter({ lower: true })
      value = insertChar(value, lower)
      const upper = generator.getRandomCharacter({ upper: true })
      value = insertChar(value, upper)
      const num = generator.getRandomCharacter({ numbers: true })
      value = insertChar(value, num)
      const symbol = generator.getRandomCharacter({ symbols: true })
      value = insertChar(value, symbol)

      return value
    },
  },
}
