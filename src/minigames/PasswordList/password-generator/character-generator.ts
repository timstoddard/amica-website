import { randomInRange, randomInt } from './utils'

interface RandomCharacterOptions {
  lower?: boolean
  upper?: boolean
  numbers?: boolean
  symbols?: boolean
}

export class CharacterGenerator {
  getLower = () => {
    return this.randomCharacterInRange(97, 122)
  }

  getUpper = () => {
    return this.randomCharacterInRange(65, 90)
  }

  getNumber = () => {
    return this.randomCharacterInRange(48, 57)
  }

  getSymbol = () => {
    return this.randomCharacterInRange(33, 47)
  }

  getRandomCharacter = ({ lower, upper, numbers, symbols }: RandomCharacterOptions) => {
    const selectedOptions = []
    // letters
    if (lower) {
      selectedOptions.push(this.getLower)
    }
    if (upper) {
      selectedOptions.push(this.getUpper)
    }
    // numbers
    if (numbers) {
      selectedOptions.push(this.getNumber)
    }
    // symbols
    if (symbols) {
      selectedOptions.push(this.getSymbol)
    }

    // if no options set, return emtpy character
    if (selectedOptions.length === 0) {
      return ''
    }

    // pick a random generator and run it
    return selectedOptions[randomInt(selectedOptions.length)]()
  }

  randomCharacterInRange = (min: number, max: number) => {
    const charCode = randomInRange(min, max)
    return String.fromCharCode(charCode)
  }
}
