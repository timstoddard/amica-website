import * as React from 'react'

const styles = require('./scss/Textbox.scss') // tslint:disable-line no-var-requires

interface Props {
  label: string
  type: string
  onChange: (e: React.SyntheticEvent) => void
}

const Textbox = ({ label, type, onChange }: Props) => (
  <div className={styles.textbox}>
    <label className={styles.textbox__label}>
      {label}
    </label>
    <input
      type={type}
      onChange={onChange}
      className={styles.textbox__input} />
  </div>
)

export default Textbox
