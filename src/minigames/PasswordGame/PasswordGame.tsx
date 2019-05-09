import * as Owasp from 'owasp-password-strength-test'
import { TestResult } from 'owasp-password-strength-test'
import * as React from 'react'
import { Alert, Form, FormGroup, Input, Label, Progress } from 'reactstrap'

// const styles = require('./scss/PasswordGame.scss') // tslint:disable-line no-var-requires

interface State {
  password: string,
  passed: number,
  percent: number,
  passwordResult: TestResult,
}

class PasswordGame extends React.Component<{}, State> {

  constructor(props: {} = {}) {
    super(props)
    this.state = {
      password : '',
      passed: 0,
      percent: 0,
      passwordResult: null,
    }
  }

  componentDidMount = () => {
    Owasp.
      config({
        allowPassphrases: true,
        maxLength: 128,
        minLength: 10,
        minPhraseLength: 20,
        minOptionalTestsToPass: 4,
      })
  }

  handlePasswordChange = (e: React.SyntheticEvent) => {
    const password = (e.target as HTMLInputElement).value
    const passwordResult = Owasp.test(password)
    const passed = passwordResult.passedTests.length
    const failed = passwordResult.failedTests.length
    const total = passed + failed
    const percent = passwordResult.passedTests.includes(0)
      ? passed / total * 100
      : password.length
    this.setState({
      password,
      percent,
      passwordResult,
    })
  }

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  render(): JSX.Element {
    const {
      handlePasswordChange,
      handleSubmit,
    } = this
    const {
      password,
      percent,
      passwordResult,
    } = this.state

    return (
      <div>
        <div>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for='password'>
                Password Strength Minigame
              </Label>
              <Input
                type='text'
                placeholder='Password'
                id='password'
                value={password}
                onChange={handlePasswordChange} />
            </FormGroup>
          </Form>
          <Progress
            value={percent.toFixed(2)}
            color='success'
            animated />
        </div>
        <div>
          {(passwordResult && passwordResult.errors.length > 0) && (
            <div>
              {passwordResult.errors.map((error: string, i: number) => (
                <Alert color='danger' key={i}>
                  {error}
                </Alert>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordGame
