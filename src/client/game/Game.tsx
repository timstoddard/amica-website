import * as React from 'react'
import { Link } from 'react-router-dom'

const styles = require('./scss/Game.scss') // tslint:disable-line no-var-requires

interface GameStateBase {
  id: number
  description: string
  imageSrc: string
  imageAlt: string
  isFinal: boolean
}

interface IntermediateGameState extends GameStateBase {
  isFinal: false
  choice1: string
  choice2: string
  choice1StateId: number
  choice2StateId: number
}

interface FinalGameState extends GameStateBase {
  isFinal: true
  nextGameLink: string
}

type GameState = FinalGameState | IntermediateGameState

const states: GameState[] = [
  {
    id: 1,
    description: 'start of game',
    imageSrc: 'media/images/game-1.jpg',
    imageAlt: 'something',
    choice1: 'L',
    choice2: 'R',
    choice1StateId: 2,
    choice2StateId: 3,
    isFinal: false,
  },
  {
    id: 2,
    description: 'L',
    imageSrc: 'media/images/game-1.jpg',
    imageAlt: 'something',
    choice1: 'L',
    choice2: 'R',
    choice1StateId: 4,
    choice2StateId: 5,
    isFinal: false,
  },
  {
    id: 3,
    description: 'R',
    imageSrc: 'media/images/game-1.jpg',
    imageAlt: 'something',
    choice1: 'L',
    choice2: 'R',
    choice1StateId: 6,
    choice2StateId: 7,
    isFinal: false,
  },
  {
    id: 4,
    description: 'LL',
    imageSrc: 'media/images/game-1.jpg',
    imageAlt: 'something',
    choice1: 'L',
    choice2: 'R',
    choice1StateId: 8,
    choice2StateId: 9,
    isFinal: false,
  },
  {
    id: 5,
    description: 'LR',
    imageSrc: 'media/images/game-1.jpg',
    imageAlt: 'something',
    choice1: 'L',
    choice2: 'R',
    choice1StateId: 10,
    choice2StateId: 11,
    isFinal: false,
  },
  {
    id: 6,
    description: 'RL',
    imageSrc: 'media/images/game-1.jpg',
    imageAlt: 'something',
    choice1: 'L',
    choice2: 'R',
    choice1StateId: 12,
    choice2StateId: 13,
    isFinal: false,
  },
  {
    id: 7,
    description: 'RR',
    imageSrc: 'media/images/game-1.jpg',
    imageAlt: 'something',
    choice1: 'L',
    choice2: 'R',
    choice1StateId: 14,
    choice2StateId: 15,
    isFinal: false,
  },
  {
    id: 8,
    description: 'LLL (end)',
    imageSrc: 'media/images/game-1.jpg',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: 9,
    description: 'LLR (end)',
    imageSrc: 'media/images/game-1.jpg',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: 10,
    description: 'LRL (end)',
    imageSrc: 'media/images/game-1.jpg',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: 11,
    description: 'LRR (end)',
    imageSrc: 'media/images/game-1.jpg',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: 12,
    description: 'RLL (end)',
    imageSrc: 'media/images/game-1.jpg',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: 13,
    description: 'RLR (end)',
    imageSrc: 'media/images/game-1.jpg',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: 14,
    description: 'RRL (end)',
    imageSrc: 'media/images/game-1.jpg',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: 15,
    description: 'RRR (end)',
    imageSrc: 'media/images/game-1.jpg',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
]

interface State {
  gameState: GameState
}

export default class Game extends React.Component<{}, State> {
  constructor(props: {} = {}) {
    super(props)

    this.state = {
      gameState: states[0],
    }
  }

  updateGameState = (gameStateId: number) => () => {
    this.setState({ gameState: states.find((state: GameState) => state.id === gameStateId) })
  }

  render(): JSX.Element {
    const {
      updateGameState,
    } = this
    const {
      gameState,
    } = this.state

    return (
      <div className={styles.game}>
        <h2>prototype game</h2>
        <p>game state id: {gameState.id}</p>
        <p>{gameState.description}</p>
        <img
          src={gameState.imageSrc}
          alt={gameState.imageSrc}
          className={styles.game__image} />
        {gameState.isFinal === false ? (
          <div className={styles.game__buttons}>
            {gameState.choice1 && (
              <button
                onClick={updateGameState(gameState.choice1StateId)}
                className={styles.game__button}>
                {gameState.choice1}
              </button>
            )}
            {gameState.choice2 && (
              <button
                onClick={updateGameState(gameState.choice2StateId)}
                className={styles.game__button}>
                {gameState.choice2}
              </button>
            )}
          </div>
        ) : (
          <>
            {gameState.nextGameLink && (
              <Link to='game'>Go to next game</Link>
            )}
          </>
        )}
      </div>
    )
  }
}
