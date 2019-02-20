import * as React from 'react'
import { AbstractControl } from 'react-reactive-form'

const styles = require('./scss/Textbox.scss') // tslint:disable-line no-var-requires

const Textbox = ({ handler, touched, errors, meta }: AbstractControl) => (
  <div className={styles.textbox}>
    <label className={styles.textbox__label}>
      {meta.label}
    </label>
    <input
      {...handler()}
      type={meta.type}
      className={styles.textbox__input} />
    {(touched && errors) && (
      <ul className={styles.textbox__errors}>
        {Object.keys(errors)
        .map((name: string) => meta.errorMessages[name])
        .map((errorMessage: string) => (
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

export default Textbox
