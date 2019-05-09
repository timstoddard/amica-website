import { randomInt } from './utils'

export enum PasswordType {
  SHORT = 'SHORT',
  COMMON = 'COMMON',
  RELATED = 'RELATED',
  ONLY_ALPHA = 'ONLY_ALPHA',
  ONLY_LOWER = 'ONLY_LOWER',
  ONLY_ALPHANUMERIC = 'ONLY_ALPHANUMERIC',
  ALPHANUMERIC_WITH_SYMBOLS = 'ALPHANUMERIC_WITH_SYMBOLS',
}

export const getRandomPasswordType = (): PasswordType => {
  const types = Object.values(PasswordType)
  const type = types[randomInt(types.length)]
  return type
}
