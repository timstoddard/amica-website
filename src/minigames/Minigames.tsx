import * as React from 'react'
import PasswordGame from './PasswordGame/PasswordGame'

const styles = require('./scss/Minigames.scss') // tslint:disable-line no-var-requires

interface State {
  game: string
}

export default class Minigames extends React.Component<{}, State> {
  constructor(props: {} = {}) {
    super(props)

    this.state = {
      game: '',
    }
  }

  componentDidMount = () => {
  }

  render(): JSX.Element {
    return (
      <div className={styles.minigames}>
        <PasswordGame />
      </div>
    )
  }
}
