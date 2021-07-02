import { createReducer, on } from '@ngrx/store';

import { GameActions } from './game.actions';
import { GameState } from './game.state';
 
export const initGameState: GameState = {
  questions: [],
  loading: false,
  loaded: false,
};
 
export const gameReducer = createReducer(
  initGameState,

  on(GameActions.GetGame, (state) => ({
    ...state,
    loading: true,
  })),

  on(GameActions.GetGameSuccess, (state, pyload) => ({
    ...state,
    questions: pyload.questions,
    loading: false,
    loaded: true,
  })),

  on(GameActions.GetGameError, (state) => ({
    ...state,
    loading: false,
    loaded: true,
  })),
);
 