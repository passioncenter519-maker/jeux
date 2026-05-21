export type GameMode = 'ai' | 'multiplayer'
export type GameLevel = 'easy' | 'medium' | 'hard' | 'expert'
export type Color = 'white' | 'black'

export interface Position {
  x: number
  y: number
}

export interface Move {
  from: string
  to: string
  promotion?: string
}

export interface GameState {
  fen: string
  moves: Move[]
  isGameOver: boolean
  winner: Color | 'draw' | null
  currentPlayer: Color
}
