import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerUser } from '../redux/actions/auth-actions'
import Textbox from '../shared/components/textbox/Textbox'
import { hash } from '../shared/functions'

const styles = require('./scss/SignUp.scss') // tslint:disable-line no-var-requires

interface Props {
  registerUser: (a: any, b: any) => void // TODO more specific type
  history: any
  signUpErrors: any[]
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

  handleChange = (field: string) => (e: any) => {
    this.setState({ [field]: e.target.value } as any)
  }

  submitForm = (e: any) => {
    e.preventDefault()

    const { registerUser } = this.props // tslint:disable-line no-shadowed-variable
    const {
      name,
      email,
      password,
      password2,
    } = this.state
    const userData = {
      name,
      email,
      password,
      password2,
    }

    // TODO validate passwords match on client not backend
    // TODO hash passwords before sending to backend
    registerUser(userData, this.props.history)
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

const mapStateToProps = ({ signUpErrors }: any) => ({
  signUpErrors,
})

export default connect(
  mapStateToProps,
  { registerUser },
)(SignUp)
