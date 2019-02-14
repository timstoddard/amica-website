import { History } from 'history'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerUser } from '../redux/actions/auth-actions'
import Textbox from '../shared/components/textbox/Textbox'
import { isEqual, isRequired, minLength } from '../shared/components/textbox/validators'
import { AppState, SignUpFormData } from '../shared/types'

const styles = require('./scss/SignUp.scss') // tslint:disable-line no-var-requires

interface Props {
  registerUser: (data: SignUpFormData, history: History) => void
  history: History
}

interface State {
  name: string
  email: string
  password: string
  password2: string
}

class SignUp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
    }
  }

  handleChange = (field: keyof State) => (e: React.SyntheticEvent) => {
    this.setState({ [field]: (e.target as HTMLInputElement).value } as any)
  }

  submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const {
      registerUser,
      history,
    } = this.props
    const {
      name,
      email,
      password,
    } = this.state

    const data = {
      name,
      email,
      password,
    }
    console.log('register:', data)
    registerUser(data, history)
  }

  render(): JSX.Element {
    const { handleChange, submitForm } = this
    const {
      name,
      email,
      password,
      password2,
    } = this.state

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
            value={name}
            onChange={handleChange('name')}
            validators={[
              {
                validatorFn: isRequired,
                errorMessage: 'Name is required',
              },
            ]} />
          <Textbox
            label='Email'
            type='email'
            value={email}
            onChange={handleChange('email')}
            validators={[
              {
                validatorFn: isRequired,
                errorMessage: 'Email is required',
              },
            ]} />
          <Textbox
            label='Password'
            type='password'
            value={password}
            onChange={handleChange('password')}
            validators={[
              {
                validatorFn: isRequired,
                errorMessage: 'Password is required',
              },
              {
                validatorFn: minLength(6),
                errorMessage: 'Password must be at least 6 characters',
              },
            ]} />
          <Textbox
            label='Confirm Password'
            type='password'
            value={password2}
            onChange={handleChange('password2')}
            validators={[
              {
                validatorFn: isRequired,
                errorMessage: 'Confirm password is required',
              },
              {
                validatorFn: isEqual(password),
                errorMessage: 'Passwords must match',
              },
            ]} />
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

const mapStateToProps = ({ signUpErrors }: AppState) => ({
  signUpErrors,
})

export default connect(
  mapStateToProps,
  { registerUser },
)(SignUp)
