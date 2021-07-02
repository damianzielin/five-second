import { GameState } from './game/game.state';

export interface AppState {
  readonly game: GameState;
}