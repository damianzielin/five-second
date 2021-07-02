import { createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';

import { AppState } from '../app.state';

import { GameState } from './game.state';

export namespace GameSelectors {
  export const gameState = (state: AppState): GameState => state.game;

  export function selectState(): MemoizedSelector<
    AppState,
    GameState,
    DefaultProjectorFn<GameState>
  > {
    return createSelector(gameState, (state: GameState) => state);
  }
}