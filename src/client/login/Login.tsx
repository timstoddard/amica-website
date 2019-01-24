import * as bcrypt from 'bcryptjs'
import * as React from 'react'
import { PASSWORD_SALT_ROUNDS as SALT_ROUNDS } from '../shared/constants'

const styles = require('./scss/login.scss') // tslint:disable-line no-var-requires

interface State {
  email: string
  password: string
}

export default class Login extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
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
      email,
      password,
    } = this.state

    bcrypt.hash(password, SALT_ROUNDS, (err: Error, passwordHash: string) => {
      const data = {
        email,
        passwordHash,
      }
      console.log('form data:', data)
    })
  }

  render(): JSX.Element {
    const { handleChange, submitForm } = this

    return (
      <div className={styles.login}>
        <h1 className={styles.login__title}>
          Login
        </h1>
        <form
        onSubmit={submitForm}
        className={styles.login__form}>
          <div className={styles.login__form__field}>
            <label className={styles.login__form__label}>
              Email
            </label>
            <input
              type='email'
              onChange={handleChange('email')}
              className={styles.login__form__input} />
          </div>
          <div className={styles.login__form__field}>
            <label className={styles.login__form__label}>
              Password
            </label>
            <input
              type='password'
              onChange={handleChange('password')}
              className={styles.login__form__input} />
          </div>
          <button className={styles.login__form__submitButton}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}
