import * as React from 'react'
import { Person, pickRandom } from './mock-person'

const styles = require('./scss/PasswordList.scss') // tslint:disable-line no-var-requires

interface State {
  round: number
  maxRounds: number
  passwords: string[]
  mockPerson: Person
}

export default class PasswordList extends React.Component<{}, State> {
  constructor(props: {} = {}) {
    super(props)

    this.state = {
      round: 1,
      maxRounds: 10,
      passwords: [],
      mockPerson: null,
    }
  }

  componentDidMount = () => {
    this.init()
  }

  generateRandomInfo = () => {
    const newInfo: Person = {
      name: pickRandom('name'),
      birthday: pickRandom('birthday'),
      address: pickRandom('address'),
      password: pickRandom('password'),
    }
    this.setState({ mockPerson: newInfo })
  }

  generatePasswords = () => {
    const passwords: string[] = []
    for (let i = 0; i < 4; i++) {
      let nextPassword = pickRandom('password')
      while (passwords.includes(nextPassword)) {
        nextPassword = pickRandom('password')
      }
      passwords.push(nextPassword)
    }
    this.setState({ passwords })
  }

  mapNumToLetter = (n: number) => String.fromCharCode(n + 65)

  selectPassword = (i: number) => () => {
    const { passwords } = this.state
    const selectedPassword = passwords[i]
    alert(`You have selected: ${selectedPassword}`)
    this.init()
  }

  init = () => {
    this.generateRandomInfo()
    this.generatePasswords()
  }

  render(): JSX.Element {
    const {
      mapNumToLetter,
      selectPassword,
    } = this
    const {
      round,
      passwords,
      mockPerson,
    } = this.state

    return (
      <>
        <h2>Round {round}</h2>
        <div className={styles.infoCard}>
          <div className={styles.infoCard__info}>
            {mockPerson && (
              <>
                <div className={styles.infoCard__info__name}>{mockPerson.name}</div>
                <div className={styles.infoCard__info__birthday}>{mockPerson.birthday}</div>
                <div className={styles.infoCard__info__address}>{mockPerson.address}</div>
              </>
            )}
          </div>
          <ul className={styles.infoCard__password}>
            {passwords.map((password: string, i: number) => (
              <li
                key={i}
                onClick={selectPassword(i)}
                className={styles.infoCard__password__listItem}>
                <div className={styles.infoCard__password__listItem__letter}>
                  {mapNumToLetter(i)}
                </div>
                <div className={styles.infoCard__password__listItem__value}>
                  {password}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }
}
