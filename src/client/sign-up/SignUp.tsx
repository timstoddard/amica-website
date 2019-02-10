import * as React from 'react'
import { Link } from 'react-router-dom'
import Textbox from '../shared/components/textbox/Textbox'
import { hash } from '../shared/functions'

const styles = require('./scss/SignUp.scss') // tslint:disable-line no-var-requires

interface State {
  name: string
  email: string
  password: string
  password2: string
}

export default class SignUp extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
    }
  }

  handleChange = (field: string) => (e: any) => {
    this.setState({ [field]: e.target.value } as any)
  }

  submitForm = (e: any) => {
    e.preventDefault()
    const {
      name,
      email,
      password,
      password2,
    } = this.state
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
            label='Name'
            type='text'
            onChange={handleChange('name')} />
          <Textbox
            label='Email'
            type='email'
            onChange={handleChange('email')} />
          <Textbox
            label='Password'
            type='password'
            onChange={handleChange('password')} />
          <Textbox
            label='Confirm Password'
            type='password'
            onChange={handleChange('password2')} />
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
