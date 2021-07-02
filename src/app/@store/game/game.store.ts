import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { AppState } from '../app.state';

import { GameActions } from './game.actions';
import { GameSelectors } from './game.selectors';

@Injectable({ providedIn: 'root' })
export class GameStore {
  state$ = this.store$.pipe(select(GameSelectors.selectState()));

  constructor(private store$: Store<AppState>) {}

  fetchGame(): void {
    this.store$.dispatch(new GameActions.GetGame());
  }
}