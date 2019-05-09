import * as React from 'react'
import { DevGameState, DevIntermediateGameState } from '../../shared/types'

const styles = require('./scss/GameStateCard.scss') // tslint:disable-line no-var-requires

enum GameStateCardType {
  ROOT = 'root',
  LEFT_CHILD = 'left child',
  RIGHT_CHILD = 'right child',
}

const getGameStateCardTypeName = (type: GameStateCardType) => {
  switch (type) {
    case GameStateCardType.ROOT:
      return 'Root'
    case GameStateCardType.LEFT_CHILD:
      return 'Choice 1'
    case GameStateCardType.RIGHT_CHILD:
      return 'Choice 2'
    default:
      return ''
  }
}

const GameStateCard = ({
  gameState,
  selectGameState,
  type = GameStateCardType.ROOT,
}: {
  gameState: DevGameState,
  selectGameState: (id: string) => () => void,
  type?: GameStateCardType,
}) => {
  if (!gameState) {
    return null
  }

  const cardClasses = [
    styles.card,
    type === GameStateCardType.ROOT ? styles['card--root'] : '',
  ].join(' ')

  if (gameState.isFinal) {
    return (
      <div className={cardClasses}>
        {/* TODO make shared component for info display */}
        <div
          onClick={selectGameState(gameState.id)}
          className={styles.card__info}>
          <div className={styles.card__info__type}>
          {getGameStateCardTypeName(type)}
          </div>
          <div className={styles.card__info__id}>
            id: {gameState.id}
          </div>
          <img
            src={gameState.imageSrc}
            alt={gameState.imageAlt}
            className={styles.card__info__image} />
          <div className={styles.card__info__description}>
            {gameState.description}
          </div>
          <div className={styles.card__info__isFinal}>
            isFinal: {gameState.isFinal.toString()}
          </div>
          <div>nextGameLink: {gameState.nextGameLink}</div>
        </div>
      </div>
    )
  }

  const intermediateGameState = gameState as DevIntermediateGameState
  const hasChild = intermediateGameState.choice1State || intermediateGameState.choice2State
  return (
    <div className={cardClasses}>
      <div
        onClick={selectGameState(gameState.id)}
        className={styles.card__info}>
        <div className={styles.card__info__type}>
          {getGameStateCardTypeName(type)}
        </div>
        <div className={styles.card__info__id}>
          id: {intermediateGameState.id}
        </div>
        <img
          src={intermediateGameState.imageSrc}
          alt={intermediateGameState.imageAlt}
          className={styles.card__info__image} />
        <div className={styles.card__info__description}>
          {intermediateGameState.description}
        </div>
        <div className={styles.card__info__isFinal}>
          isFinal: {intermediateGameState.isFinal.toString()}
        </div>
      </div>
      {hasChild && (
        <div className={styles.card__children}>
          <GameStateCard
            gameState={intermediateGameState.choice1State}
            selectGameState={selectGameState}
            type={GameStateCardType.LEFT_CHILD} />
          <GameStateCard
            gameState={intermediateGameState.choice2State}
            selectGameState={selectGameState}
            type={GameStateCardType.RIGHT_CHILD} />
        </div>
      )}
    </div>
  )
}

export default GameStateCard
