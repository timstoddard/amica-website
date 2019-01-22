import * as React from 'react'

const styles = require('./scss/Games.scss') // tslint:disable-line no-var-requires

interface GameInfo {
  imageSrc: string
  title: string
  description: string
}

const games: GameInfo[] = [
  {
    imageSrc: 'media/images/game-1.jpg',
    title: 'Game 1',
    description: 'This is a short blurb about game 1.',
  },
  {
    imageSrc: 'media/images/game-2.jpeg',
    title: 'Game 2',
    description: 'This is a short blurb about game 2.',
  },
  {
    imageSrc: 'media/images/game-3.jpg',
    title: 'Game 3',
    description: 'This is a short blurb about game 3.',
  },
  {
    imageSrc: 'media/images/game-4.jpg',
    title: 'Game 4',
    description: 'This is a short blurb about game 4.',
  },
]

const Games = () => (
  <div
    className={styles.games}
    id='games'>
    <h2 className={styles.games__title}>
      Games
    </h2>
    <div className={styles.games__text}>
      <p>We've worked tirelessly to bring your children games they will enjoy, that teach them all about how to behave online.</p>
      <ul className={styles.games__list}>
        {games.map(({ imageSrc, title, description }: GameInfo) =>
          <li
            key={title}
            className={styles.game}>
            <img
              src={imageSrc}
              alt={title}
              className={styles.game__image}/>
            <div className={styles.game__title}>
              {title}
            </div>
            <div className={styles.game__description}>
              {description}
            </div>
          </li>)}
      </ul>
    </div>
  </div>
)

export default Games
