interface GameStateBase {
  id: string
  description: string
  imageSrc: string
  imageAlt: string
  isFinal: boolean
}

export interface GameStateChoice {
  text: string
  toId: string
}

export interface IntermediateGameState extends GameStateBase {
  isFinal: false
  choices: GameStateChoice[]
}

export interface FinalGameState extends GameStateBase {
  isFinal: true
  nextGameText: string
  nextGameLink: string
}

export type GameState = IntermediateGameState | FinalGameState

export interface DevGameStateChoice {
  text: string
  toState: DevIntermediateGameState
}

export interface DevIntermediateGameState extends GameStateBase {
  isFinal: false
  choices: DevGameStateChoice[]
}

export type DevGameState = DevIntermediateGameState | FinalGameState
