import * as React from 'react'
import { AbstractControl } from 'react-reactive-form'

const styles = require('./scss/Checkbox.scss') // tslint:disable-line no-var-requires

const Checkbox = ({ handler, touched, errors, meta }: AbstractControl) => (
  <div className={styles.checkbox}>
    <label className={styles.checkbox__label}>
      {meta.label}
    </label>
    <input
      {...handler()}
      type='checkbox'
      className={styles.checkbox__input} />
    {(touched && errors) && (
      <ul className={styles.checkbox__errors}>
        {Object.keys(errors)
        .map((name: string) => meta.errorMessages[name])
        .map((errorMessage: string) => (
          <li
            key={errorMessage}
            className={styles.checkbox__error}>
            {errorMessage}
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default Checkbox
