import * as bcrypt from 'bcryptjs'
import * as React from 'react'
import { PASSWORD_SALT_ROUNDS as SALT_ROUNDS } from '../shared/constants'

const styles = require('./scss/SignUp.scss') // tslint:disable-line no-var-requires

interface State {
  firstName: string
  lastName: string
  email: string
  password: string
}

export default class SignUp extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  }

  handleChange = (field: string) => (e: any) => {
    this.setState({ [field]: e.target.value } as any)
  }

  submitForm = (e: any) => {
    e.preventDefault()
    const {
      firstName,
      lastName,
      email,
      password,
    } = this.state

    bcrypt.hash(password, SALT_ROUNDS, (err: Error, passwordHash: string) => {
      const data = {
        firstName,
        lastName,
        email,
        passwordHash,
      }
      console.log('form data:', data)
    })
  }

  render(): JSX.Element {
    const { handleChange, submitForm } = this

    return (
      <div className={styles.signUp}>
        <h1 className={styles.signUp__title}>
          Sign Up
        </h1>
        <form
        onSubmit={submitForm}
        className={styles.signUp__form}>
          <div className={styles.signUp__form__field}>
            <label className={styles.signUp__form__label}>
              First Name
            </label>
            <input
              type='text'
              onChange={handleChange('firstName')}
              className={styles.signUp__form__input} />
          </div>
          <div className={styles.signUp__form__field}>
            <label className={styles.signUp__form__label}>
              Last Name
            </label>
            <input
              type='text'
              onChange={handleChange('lastName')}
              className={styles.signUp__form__input} />
          </div>
          <div className={styles.signUp__form__field}>
            <label className={styles.signUp__form__label}>
              Email
            </label>
            <input
              type='email'
              onChange={handleChange('email')}
              className={styles.signUp__form__input} />
          </div>
          <div className={styles.signUp__form__field}>
            <label className={styles.signUp__form__label}>
              Password
            </label>
            <input
              type='password'
              onChange={handleChange('password')}
              className={styles.signUp__form__input} />
          </div>
          <button className={styles.signUp__form__submitButton}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}
