import * as React from 'react'
import { Link } from 'react-router-dom'
import Textbox from '../shared/components/textbox/Textbox'
import { hash } from '../shared/functions'

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

    hash(password, (passwordHash: string) => {
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
          <Textbox
            label='First Name'
            type='text'
            onChange={handleChange('firstName')} />
          <Textbox
            label='Last Name'
            type='text'
            onChange={handleChange('lastName')} />
          <Textbox
            label='Email'
            type='email'
            onChange={handleChange('email')} />
          <Textbox
            label='Password'
            type='password'
            onChange={handleChange('password')} />
          <button className={styles.signUp__form__submitButton}>
            Submit
          </button>
        </form>
        <div className={styles.signUp__form__loginMessage}>
          Already have an account? <Link to='/login'>Click here</Link> to login.
        </div>
      </div>
    )
  }
}
