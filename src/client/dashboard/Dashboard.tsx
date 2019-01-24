import * as React from 'react'

const styles = require('./scss/Dashboard.scss') // tslint:disable-line no-var-requires

interface State {
  user: any
}

export default class Login extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
      user: null,
    }
  }

  render(): JSX.Element {
    return (
      <div className={styles.dashboard}>
        Dashboard
      </div>
    )
  }
}
