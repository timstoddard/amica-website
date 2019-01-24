import * as React from 'react'

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
    // TODO use real hashing functions
    const hash = (a: any) => a
    const salt = (a: any) => a
    const {
      email,
      password,
    } = this.state
    const data = {
      email,
      password: hash(salt(password)),
    }
    console.log('form data:', data)
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
