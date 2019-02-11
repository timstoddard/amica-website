import { History } from 'history'
import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerUser } from '../redux/actions/auth-actions'
import Textbox from '../shared/components/textbox/Textbox'
import { AppState, SignUpFormData, StringMap } from '../shared/types'

const styles = require('./scss/SignUp.scss') // tslint:disable-line no-var-requires

interface Props {
  registerUser: (data: SignUpFormData, history: History) => void
  history: History
  signUpErrors: StringMap
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
      password2,
    } = this.state

    if (password !== password2) {
      // TODO add real validation
      alert('Passwords do not match')
      return
    }

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
    const { signUpErrors } = this.props // TODO use these for client-side validation
    console.log('sign up errors', signUpErrors)

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

const mapStateToProps = ({ signUpErrors }: AppState) => ({
  signUpErrors,
})

export default connect(
  mapStateToProps,
  { registerUser },
)(SignUp)
