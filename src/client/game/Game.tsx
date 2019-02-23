import * as React from 'react'
import { Link } from 'react-router-dom'
import { GameState } from '../shared/types'
import states from './game-states'

const styles = require('./scss/Game.scss') // tslint:disable-line no-var-requires

interface State {
  gameState: GameState
  descriptionToShow: string
  showButtons: boolean
}

export default class Game extends React.Component<{}, State> {
  constructor(props: {} = {}) {
    super(props)

    this.state = {
      gameState: states[0],
      descriptionToShow: '',
      showButtons: false,
    }
  }

  componentDidMount = () => {
    this.showDescription()
  }

  updateGameState = (gameStateId: number) => () => {
    this.setState({
      gameState: states.find((state: GameState) => state.id === gameStateId),
      showButtons: false,
    }, () => {
      this.showDescription()
    })
  }

  showDescription = () => {
    const {
      gameState,
    } = this.state

    const words = gameState.description.split(' ')
    let i = 0
    const descriptionInterval = setInterval(() => {
      const temp = words.slice(0, ++i).join(' ')
      this.setState({ descriptionToShow: temp })
      if (i === words.length) {
        clearInterval(descriptionInterval)
        setTimeout(() => {
          this.setState({ showButtons: true })
        }, 1000)
      }
    }, 120)
  }

  render(): JSX.Element {
    const {
      updateGameState,
    } = this
    const {
      gameState,
      descriptionToShow,
      showButtons,
    } = this.state

    return (
      <div className={styles.game}>
        <h2 className={styles.game__header}>
          prototype game
        </h2>
        <div
          className={styles.game__content}
          style={{
            background: `url(${gameState.imageSrc}) center no-repeat`,
            backgroundSize: 'cover',
          }}>
          <p className={styles.game__content__text}>
            game state id: {gameState.id}
          </p>
          <p className={styles.game__content__text}>
            {descriptionToShow}
          </p>
          {(showButtons && gameState.isFinal === false) && (
            <>
              <button
                onClick={updateGameState(gameState.choice1StateId)}
                className={`${styles.game__button} ${styles['game__button--left']}`}>
                {gameState.choice1}
              </button>
              <button
                onClick={updateGameState(gameState.choice2StateId)}
                className={`${styles.game__button} ${styles['game__button--right']}`}>
                {gameState.choice2}
              </button>
            </>
          )}
          {(showButtons && gameState.isFinal) && (
            <>
              {gameState.nextGameLink && (
                <Link
                  to='game'
                  className={styles.game__link}>
                  Go to next game
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    )
  }
}
