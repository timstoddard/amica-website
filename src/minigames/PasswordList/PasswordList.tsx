import * as React from 'react'
import PasswordGenerator, { Password } from './password-generator/password-generator'
import { Profile, ProfileGenerator } from './profile-generator/profile-generator'

const styles = require('./scss/PasswordList.scss') // tslint:disable-line no-var-requires

interface State {
  round: number
  wins: number
  maxRounds: number
  passwords: Password[]
  selectedPassword: Password
  bestPassword: Password
  profile: Profile
  selectedIndex: number
}

export default class PasswordList extends React.Component<{}, State> {
  profileGenerator: ProfileGenerator
  passwordGenerator: PasswordGenerator

  constructor(props: {} = {}) {
    super(props)

    this.profileGenerator = new ProfileGenerator()
    this.passwordGenerator = new PasswordGenerator()

    this.state = {
      round: 0,
      wins: 0,
      maxRounds: 10,
      selectedPassword: null,
      bestPassword: null,
      passwords: [],
      profile: null,
      selectedIndex: -1,
    }
  }

  componentDidMount = () => {
    this.generateNewRound()
  }

  restartGame = () => {
    this.setState({
      round: 0,
      wins: 0,
    }, () => {
      this.generateNewRound()
    })
  }

  generateNewRound = () => {
    const { round } = this.state
    const profile: Profile = {
      name: this.profileGenerator.getName(),
      birthday: this.profileGenerator.getBirthday(),
      address: this.profileGenerator.getAddress(),
    }
    const passwords = this.passwordGenerator.getPasswords(4, profile)
    const bestPassword = passwords
      .reduce((prev: Password, curr: Password) => curr.rank > prev.rank ? curr : prev, passwords[0])
    this.setState({
      profile,
      passwords,
      bestPassword,
      selectedIndex: -1,
      round: round + 1,
      selectedPassword: null,
    })
  }

  mapNumToLetter = (n: number) => String.fromCharCode(n + 65)

  selectPassword = (i: number) => () => {
    const {
      passwords,
      bestPassword,
      selectedIndex,
      wins,
    } = this.state
    if (selectedIndex === -1) {
      const selectedPassword = passwords[i]
      this.setState({
        selectedIndex: i,
        selectedPassword,
        wins: wins + (selectedPassword === bestPassword ? 1 : 0),
      })
    }
  }

  getScore = () => {
    const {
      wins,
      maxRounds,
    } = this.state
    const rawScore = wins / maxRounds * 100
    return rawScore.toFixed(2)
  }

  render(): JSX.Element {
    const {
      generateNewRound,
      restartGame,
      mapNumToLetter,
      selectPassword,
      getScore,
    } = this
    const {
      round,
      maxRounds,
      passwords,
      selectedPassword,
      bestPassword,
      profile,
      selectedIndex,
    } = this.state

    if (round > maxRounds) {
      return (
        <>
          <h2>Score</h2>
          <div>{getScore()}%</div>
          <button
            onClick={restartGame}
            className={styles.newGameButton}>
            Play Again
          </button>
        </>
      )
    }

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
                className={`
                  ${styles.infoCard__password__listItem}
                  ${selectedIndex === i ? styles['infoCard__password__listItem--selected'] : ''}
                  ${selectedIndex === -1 ? styles['infoCard__password__listItem--noSelection'] : ''}`}>
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
        {selectedPassword && (
          <div className={styles.message}>
            <div className={styles.message__result}>
              {selectedPassword === bestPassword
                ? `Correct! ${selectedPassword.value} is the most secure password in the list.`
                : `Nice try, but ${bestPassword.value} is more secure than your choice of ${selectedPassword.value}.`}
            </div>
            <div className={styles.message__explanation}>
              {selectedPassword.message}
            </div>
            <button
              className={styles.message__nextButton}
              onClick={generateNewRound}>
              {round === maxRounds ? 'See Results' : 'Next Round'}
            </button>
          </div>
        )}
      </>
    )
  }
}
