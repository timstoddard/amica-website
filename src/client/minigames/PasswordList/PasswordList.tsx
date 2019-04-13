import * as React from 'react'
import PasswordGenerator, { Password } from './password-generator/password-generator'
import { Profile, ProfileGenerator } from './profile-generator/profile-generator'

const styles = require('./scss/PasswordList.scss') // tslint:disable-line no-var-requires

interface State {
  round: number
  maxRounds: number
  passwords: Password[]
  profile: Profile
}

export default class PasswordList extends React.Component<{}, State> {
  profileGenerator: ProfileGenerator

  constructor(props: {} = {}) {
    super(props)

    this.profileGenerator = new ProfileGenerator()

    this.state = {
      round: 1,
      maxRounds: 10,
      passwords: [],
      profile: null,
    }
  }

  componentDidMount = () => {
    this.generateNewRound()
  }

  generateNewRound = () => {
    const profile: Profile = {
      name: this.profileGenerator.getName(),
      birthday: this.profileGenerator.getBirthday(),
      address: this.profileGenerator.getAddress(),
    }
    const passwordGenerator = new PasswordGenerator(profile)
    const passwords = passwordGenerator.getPasswords(4)
    // console.log(passwords)
    this.setState({
      profile,
      passwords,
    })
  }

  mapNumToLetter = (n: number) => String.fromCharCode(n + 65)

  selectPassword = (i: number) => () => {
    const { passwords } = this.state
    const selectedPassword = passwords[i]
    const bestPassword = passwords
      .reduce((prev: Password, curr: Password) => curr.rank > prev.rank ? curr : prev, passwords[0])
    // TODO better win/lose workflow
    if (selectedPassword.rank !== bestPassword.rank) {
      alert('You lost, best password was ' + bestPassword.value)
    } else {
      alert(selectedPassword.value + ' is correct!')
    }
    this.generateNewRound()
  }

  render(): JSX.Element {
    const {
      mapNumToLetter,
      selectPassword,
    } = this
    const {
      round,
      passwords,
      profile,
    } = this.state

    return (
      <>
        <h2>Round {round}</h2>
        <div className={styles.infoCard}>
          <div className={styles.infoCard__info}>
            {profile && (
              <>
                <div className={styles.infoCard__info__name}>{profile.name}</div>
                <div className={styles.infoCard__info__birthday}>{profile.birthday}</div>
                <div className={styles.infoCard__info__address}>{profile.address}</div>
              </>
            )}
          </div>
          <ul className={styles.infoCard__password}>
            {passwords.map((password: Password, i: number) => (
              <li
                key={i}
                onClick={selectPassword(i)}
                className={styles.infoCard__password__listItem}>
                <div className={styles.infoCard__password__listItem__letter}>
                  {mapNumToLetter(i)}
                </div>
                <div className={styles.infoCard__password__listItem__value}>
                  {password.value}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  }
}
