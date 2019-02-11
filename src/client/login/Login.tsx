import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../redux/actions/auth-actions'
import Textbox from '../shared/components/textbox/Textbox'
import { User } from '../shared/types'

const styles = require('./scss/Login.scss') // tslint:disable-line no-var-requires

interface Props {
  currentUser: User
  loginUser: (data: any) => void
  history: any
}

interface State {
  email: string
  password: string
}

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  componentWillReceiveProps({ currentUser }: Props): void {
    const { history } = this.props

    if (currentUser) {
      history.push('/dashboard')
    }
  }

  handleChange = (field: string) => (e: any) => {
    this.setState({ [field]: e.target.value } as any)
  }

  submitForm = (e: any) => {
    e.preventDefault()

    const { loginUser } = this.props
    const {
      email,
      password,
    } = this.state

    const data = {
      email,
      password,
    }
    console.log('form data:', data)
    loginUser(data)
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
          <Textbox
            label='Email'
            type='email'
            onChange={handleChange('email')} />
          <Textbox
            label='Password'
            type='password'
            onChange={handleChange('password')} />
          <button className={styles.login__form__submitButton}>
            Submit
          </button>
        </form>
        <div className={styles.login__form__signUpMessage}>
          Don't have an account yet? <Link to='/sign-up'>Click here</Link> to sign up.
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }: any) => ({
  currentUser,
})

export default connect(
  mapStateToProps,
  { loginUser },
)(Login)
