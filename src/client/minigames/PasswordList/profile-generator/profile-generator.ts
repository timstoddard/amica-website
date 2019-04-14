import { randomInRange, randomInt } from '../password-generator/utils'

export interface Profile {
  name: string
  birthday: string
  address: string
}

export class ProfileGenerator {
  getName = () => {
    // TODO ask the user for names to use?
    const firstNames = [
      'Alexis',
      'Bailey',
      'Cameron',
      'Erin',
      'Flynn',
      'Jesse',
      'Madison',
      'Milo',
      'Quinn',
      'Reed',
      'Shelby',
      'Tyler',
      'Wyatt',
    ]
    const lastNames = [
      'Smith',
      'Johnson',
      'Williams',
      'Jones',
      'Brown',
      'Davis',
      'Miller',
      'Wilson',
      'Moore',
      'Taylor',
      'Anderson',
      'Jackson',
      'Harris',
      'Garcia',
      'Lee',
    ]
    const firstName = firstNames[randomInt(firstNames.length)]
    const lastName = lastNames[randomInt(lastNames.length)]
    return `${firstName} ${lastName}`
  }

  getBirthday = () => {
    const daysInMonths: { [key: number]: number } = {
      1: 31,
      2: 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31,
    }
    const month = randomInt(12) + 1
    const day = randomInt(daysInMonths[month])
    const year = randomInRange(2000, 2008)
    return `${this.stringPad(month, 2)}/${this.stringPad(day, 2)}/${year}`
  }

  getAddress = () => {
    // TODO add more street names
    const streetNames = [
      'Cherry',
      'Main',
      'Pine',
      'Elm',
      'Boulder',
    ]
    const suffixes = [
      'Lane',
      'Street',
      'Drive',
      'Avenue',
      'Way',
      'Court',
    ]
    const streetName = streetNames[randomInt(streetNames.length)]
    const suffix = suffixes[randomInt(suffixes.length)]
    const houseNumber = randomInRange(22, 10000)
    return `${houseNumber} ${streetName} ${suffix}`
  }

  stringPad = (n: number, length: number) => {
    let value = ''
    for (let i = 0; i < length; i++) {
      value += '0'
    }
    value += n
    return value.slice(-length)
  }
}
