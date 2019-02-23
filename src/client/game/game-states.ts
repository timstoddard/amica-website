import { GameState } from './Game'

const states: GameState[] = [
  {
    id: 1,
    description: 'Hello Player! This is the description for `start of game`',
    imageSrc: 'media/images/game-2.jpeg',
    imageAlt: 'something',
    choice1: 'L',
    choice2: 'R',
    choice1StateId: 2,
    choice2StateId: 3,
    isFinal: false,
  },
  {
    id: 2,
    description: 'Hello Player! This is the description for `L`',
    imageSrc: 'media/images/game-2.jpeg',
    imageAlt: 'something',
    choice1: 'L',
    choice2: 'R',
    choice1StateId: 4,
    choice2StateId: 5,
    isFinal: false,
  },
  {
    id: 3,
    description: 'Hello Player! This is the description for `R`',
    imageSrc: 'media/images/game-2.jpeg',
    imageAlt: 'something',
    choice1: 'L',
    choice2: 'R',
    choice1StateId: 6,
    choice2StateId: 7,
    isFinal: false,
  },
  {
    id: 4,
    description: 'Hello Player! This is the description for `LL`',
    imageSrc: 'media/images/game-2.jpeg',
    imageAlt: 'something',
    choice1: 'L',
    choice2: 'R',
    choice1StateId: 8,
    choice2StateId: 9,
    isFinal: false,
  },
  {
    id: 5,
    description: 'Hello Player! This is the description for `LR`',
    imageSrc: 'media/images/game-2.jpeg',
    imageAlt: 'something',
    choice1: 'L',
    choice2: 'R',
    choice1StateId: 10,
    choice2StateId: 11,
    isFinal: false,
  },
  {
    id: 6,
    description: 'Hello Player! This is the description for `RL`',
    imageSrc: 'media/images/game-2.jpeg',
    imageAlt: 'something',
    choice1: 'L',
    choice2: 'R',
    choice1StateId: 12,
    choice2StateId: 13,
    isFinal: false,
  },
  {
    id: 7,
    description: 'Hello Player! This is the description for `RR`',
    imageSrc: 'media/images/game-2.jpeg',
    imageAlt: 'something',
    choice1: 'L',
    choice2: 'R',
    choice1StateId: 14,
    choice2StateId: 15,
    isFinal: false,
  },
  {
    id: 8,
    description: 'Hello Player! This is the description for `LLL (end)`',
    imageSrc: 'media/images/game-2.jpeg',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: 9,
    description: 'Hello Player! This is the description for `LLR (end)`',
    imageSrc: 'media/images/game-2.jpeg',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: 10,
    description: 'Hello Player! This is the description for `LRL (end)`',
    imageSrc: 'media/images/game-2.jpeg',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: 11,
    description: 'Hello Player! This is the description for `LRR (end)`',
    imageSrc: 'media/images/game-2.jpeg',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: 12,
    description: 'Hello Player! This is the description for `RLL (end)`',
    imageSrc: 'media/images/game-2.jpeg',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: 13,
    description: 'Hello Player! This is the description for `RLR (end)`',
    imageSrc: 'media/images/game-2.jpeg',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: 14,
    description: 'Hello Player! This is the description for `RRL (end)`',
    imageSrc: 'media/images/game-2.jpeg',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
  {
    id: 15,
    description: 'Hello Player! This is the description for `RRR (end)`',
    imageSrc: 'media/images/game-2.jpeg',
    imageAlt: 'something',
    nextGameLink: 'game', // TODO
    isFinal: true,
  },
]

export default states
