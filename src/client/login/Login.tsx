import * as React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { login } from '../redux/actions'
import { hash } from '../shared/functions'

const styles = require('./scss/Login.scss') // tslint:disable-line no-var-requires

interface Props {
  isUserAuthenticated: boolean
  doLogin: () => void
}

interface State {
  email: string
  password: string
  redirect: boolean
}

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      redirect: false,
    }
  }

  handleChange = (field: string) => (e: any) => {
    this.setState({ [field]: e.target.value } as any)
  }

  submitForm = (e: any) => {
    e.preventDefault()
    const {
      doLogin,
    } = this.props
    const {
      email,
      password,
    } = this.state

    hash(password, (passwordHash: string) => {
      const data = {
        email,
        passwordHash,
      }
      console.log('form data:', data)
      doLogin()
    })
  }

  render(): JSX.Element {
    const { handleChange, submitForm } = this
    const { isUserAuthenticated } = this.props

    if (isUserAuthenticated) {
      return <Redirect to='/dashboard' />
    }

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
        <div className={styles.login__form__signUpMessage}>
          Don't have an account yet? <Link to='/sign-up'>Click here</Link> to sign up.
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ isUserAuthenticated }: any) => ({
  isUserAuthenticated,
})

const mapDispatchToProps = (dispatch: (_: any) => void) => ({
  doLogin: () => dispatch(login()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)
