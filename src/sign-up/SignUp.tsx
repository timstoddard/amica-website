import { History } from 'history'
import * as React from 'react'
import { AbstractControl, FieldControl, FieldGroup, FormBuilder, FormGroup, Validators } from 'react-reactive-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerUser } from '../redux/actions/auth-actions'
import Textbox from '../shared/components/textbox/Textbox'
import { stringMatch } from '../shared/components/textbox/validators'
import { FieldControlMeta, SignUpFormData } from '../shared/types/forms'
import { AppState } from '../shared/types/lang'

const styles = require('./scss/SignUp.scss') // tslint:disable-line no-var-requires

interface Props {
  registerUser: (data: SignUpFormData, history: History) => void
  history: History
}

class SignUp extends React.Component<Props, {}> {
  form: FormGroup = FormBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, stringMatch('password')]],
  })

  constructor(props: Props) {
    super(props)
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
    } = this.form.value

    const data = {
      name,
      email,
      password,
    }
    console.log('register:', data)
    registerUser(data, history)
  }

  render(): JSX.Element {
    const {
      form,
      submitForm,
    } = this

    return (
      <div className={styles.signUp}>
        <h1 className={styles.signUp__title}>
          Sign Up
        </h1>
        <FieldGroup
          control={form}
          render={({ invalid }: AbstractControl) => (
            <form onSubmit={submitForm}>
              <FieldControl
                name='name'
                render={Textbox}
                meta={{
                  label: 'Name',
                  type: 'name',
                  errorMessages: {
                    required: 'Name is required',
                  },
                } as FieldControlMeta} />
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
                    minLength: 'Password must be at least 6 characters',
                  },
                } as FieldControlMeta} />
              <FieldControl
                name='password2'
                render={Textbox}
                meta={{
                  label: 'Confirm Password',
                  type: 'password',
                  errorMessages: {
                    required: 'Confirm Password is required',
                    stringMatch: 'Passwords must match',
                  },
                } as FieldControlMeta} />
              <button
                type='submit'
                disabled={invalid}
                className={styles.signUp__form__submitButton}>
                Submit
              </button>
            </form>
          )} />
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
