import * as React from 'react'

const styles = require('./scss/Email.scss') // tslint:disable-line no-var-requires

interface State {
  email: string
}

export default class Email extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
      email: '',
    }
  }

  handleChange = (field: string) => (e: any) => {
    this.setState({ [field]: e.target.value } as any)
  }

  submitForm = (e: any) => {
    e.preventDefault()
    console.log('email entered:', this.state.email)
  }

  render(): JSX.Element {
    const { handleChange, submitForm } = this

    return (
      <div className={styles.email}>
        <div className={styles.email__headline}>
          <h1 className={styles.email__headline__main}>
            Want to keep your kids safe online?
          </h1>
          <h3 className={styles.email__headline__secondary}>
            We'll teach them how.
          </h3>
          <div className={styles.email__content}>
            <div>Enter your email for early access to our beta version!</div>
            <form
            onSubmit={submitForm}
            className={styles.email__form}>
              <input
                type='email'
                onChange={handleChange('email')}
                className={styles.email__form__input} />
              <button className={styles.email__form__submitButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
