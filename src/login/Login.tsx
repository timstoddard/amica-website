import { History } from 'history'
import * as React from 'react'
import { AbstractControl, FieldControl, FieldGroup, FormBuilder, FormGroup, Validators } from 'react-reactive-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../redux/actions/auth-actions'
import Textbox from '../shared/components/textbox/Textbox'
import { FieldControlMeta, LoginFormData } from '../shared/types/forms'
import { AppState } from '../shared/types/lang'
import { User } from '../shared/types/user'

const styles = require('./scss/Login.scss') // tslint:disable-line no-var-requires

interface Props {
  currentUser: User
  loginUser: (data: LoginFormData, history: History) => void
  history: History
}

class Login extends React.Component<Props, {}> {
  form: FormGroup = FormBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(props: Props) {
    super(props)
  }

  componentDidMount= (): void => {
    console.log(this.props)
  }

  submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const { loginUser, history} = this.props
    const {
      email,
      password,
    } = this.form.value

    const data = {
      email,
      password,
    }
    console.log('form data:', data)
    console.log(this.props)
    loginUser(data, history)
  }

  render(): JSX.Element {
    const {
      form,
      submitForm,
    } = this

    return (
      <div className={styles.login}>
        <h1 className={styles.login__title}>
          Login
        </h1>
        <FieldGroup
          control={form}
          render={({ invalid }: AbstractControl) => (
            <form onSubmit={submitForm}>
              <FieldControl
                name='email'
                render={Textbox}
                meta={{
                  label: 'Email',
                  type: 'email',
                  errorMessages: {
                    required: 'Email is required',
                  },
                } as FieldControlMeta} />
              <FieldControl
                name='password'
                render={Textbox}
                meta={{
                  label: 'Password',
                  type: 'password',
                  errorMessages: {
                    required: 'Password is required',
                  },
                } as FieldControlMeta} />
              <button
                type='submit'
                disabled={invalid}
                className={styles.login__form__submitButton}>
                Submit
              </button>
            </form>
          )} />
        <div className={styles.login__form__signUpMessage}>
          Don't have an account yet? <Link to='/sign-up'>Click here</Link> to sign up.
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }: AppState) => ({
  currentUser,
})

export default connect(
  mapStateToProps,
  { loginUser },
)(Login)
