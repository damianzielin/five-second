import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, delay, map, switchMap } from 'rxjs/operators';

import { GameActions } from './game.actions';
import { Question } from './game.model';

@Injectable()
export class GameEffects {
  getGame$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActions.GetGame),
      switchMap(action => {
        return this.http.get<Question[]>('./assets/game/game.json').pipe(
          delay(200),
          map(questions => GameActions.GetGameSuccess({ questions })),
          catchError(() => of(GameActions.GetGameError()))
        )
      })
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}