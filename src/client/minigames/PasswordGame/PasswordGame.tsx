import * as Owasp from 'owasp-password-strength-test'
import * as React from 'react'
import { Alert, Form, FormGroup, Input, Label, Progress } from 'reactstrap'

const styles = require('./scss/PasswordGame.scss') // tslint:disable-line no-var-requires

interface State {
  first: string,
  passed: number,
  percent: number,
}

class PasswordGame extends React.Component<{}, State> {

  constructor(props: {} = {}) {
    super(props)
    this.state = {
      first : '',
      passed: 0,
      percent: 0,
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

  firstChange = (e: React.SyntheticEvent) => {
    const first = (e.target as HTMLInputElement).value
    console.log(first)
    const passed = Owasp.test(first).passedTests.length
    const failed = Owasp.test(first).failedTests.length
    const total = passed + failed

    const percent = Owasp.test(first).passedTests.includes(0)
      ? passed / total * 100
      : first.length
    this.setState({
      first,
      percent,
    })
  }

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  render(): JSX.Element {
    const {
      firstChange,
      handleSubmit,
    } = this
    const {
      first,
      percent,
    } = this.state

    var text = Owasp.test(first).errors.join('\n')

    return (
        <div>
          <div>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for='first'>
                  Enter Password
                </Label>
                <Input
                    type='text'
                    placeholder='Password'
                    id='first'
                    value={first}
                    onChange={firstChange} />
              </FormGroup>
            </Form>
            <Progress
                value={percent.toFixed(2)}
                color='success'
                animated />
          </div>
          <div>
            {(Owasp.test(first).errors.length > 0) && (
                <div>
                  {text.split('\n').map((i, key) => {
                    return <Alert color='danger' key={key}>{i}</Alert>;
                  })}
                </div>
            )}
          </div>
        </div>
    )
  }
}

export default PasswordGame
