import * as React from 'react'

const styles = require('./scss/Textbox.scss') // tslint:disable-line no-var-requires

export interface Validator {
  validatorFn: (...args: any) => boolean
  errorMessage: string
}

interface Props {
  label: string
  type: string
  value: string
  onChange: (e: React.SyntheticEvent) => void
  validators?: Validator[]
}

interface State {
  showValidation: boolean
  errorMessages: string[]
}

export default class Textbox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      showValidation: false,
      errorMessages: [],
    }
  }

  enableValidation = () => {
    this.setState({ showValidation: true })
  }

  runValidators = (e: React.SyntheticEvent) => {
    const { validators, value, onChange } = this.props
    const errorMessages = []

    onChange(e)

    // TODO this doesnt update as it should
    for (const validator of validators) {
      if (!validator.validatorFn(value)) {
        errorMessages.push(validator.errorMessage)
      }
    }

    this.setState({ errorMessages })
  }

  render(): JSX.Element {
    const {
      enableValidation,
      runValidators,
    } = this
    const {
      label,
      type,
      value,
    } = this.props
    const {
      showValidation,
      errorMessages,
    } = this.state

    return (
      <div className={styles.textbox}>
        <label className={styles.textbox__label}>
          {label}
        </label>
        <input
          type={type}
          value={value}
          onChange={runValidators}
          onBlur={enableValidation}
          className={styles.textbox__input} />
        {(showValidation && !!errorMessages.length) && (
          <ul className={styles.textbox__errors}>
            {errorMessages.map((errorMessage: string) => (
              <li
                key={errorMessage}
                className={styles.textbox__error}>
                {errorMessage}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
