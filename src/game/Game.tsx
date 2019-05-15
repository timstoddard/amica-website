import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { GameState, GameStateChoice } from '../shared/types/game-state'
import states from './game-states'

const styles = require('./scss/Game.scss') // tslint:disable-line no-var-requires

interface State {
  gameState: GameState
  descriptionToShow: string
  showButtons: boolean
}

export default class Game extends React.Component<{}, State> {
  intervalId: number
  timeoutId: number

  constructor(props: {} = {}) {
    super(props)

    this.state = {
      gameState: states[18],
      descriptionToShow: '',
      showButtons: false,
    }
  }

  componentDidMount = () => {
    this.showDescription()
  }

  componentWillUnmount = () => {
    clearInterval(this.intervalId)
    clearTimeout(this.timeoutId)
  }

  updateGameState = (gameStateId: string) => () => {
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

    if (gameState.description) {
      const words = gameState.description.split(' ')
      let i = 0
      this.intervalId = setInterval(() => {
        const temp = words.slice(0, ++i).join(' ')
        this.setState({ descriptionToShow: temp })
        if (i === words.length) {
          clearInterval(this.intervalId)
          this.timeoutId = setTimeout(() => {
            this.setState({ showButtons: true })
          }, 1000)  as unknown as number
        }
      }, 1) as unknown as number // 120
    } else {
      this.setState({ showButtons: true })
    }
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
          Bullying Module
        </h2>
        <div
          className={styles.game__content}
          style={{ backgroundImage: `url(${gameState.imageSrc})` }}>
          <p className={styles.game__content__devId}>
            game state id: {gameState.id}
          </p>
          {gameState.description && (
            <p className={styles.game__content__text}>
              {descriptionToShow}
            </p>
          )}
          <div className={styles.game__content__buttons}>
            {(showButtons && gameState.isFinal === false) &&
              gameState.choices.map(({ text, toId }: GameStateChoice) => (
                <Button
                  key={toId}
                  onClick={updateGameState(toId)}
                  className={styles.game__button}>
                  {text}
                </Button>
              ))}
            {(showButtons && gameState.isFinal) && (
              <Link
                to={gameState.nextGameLink}
                className={styles.game__nextGameLink}>
                Go to {gameState.nextGameText}
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  }
}
