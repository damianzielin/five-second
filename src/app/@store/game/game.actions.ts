import { createAction, props } from '@ngrx/store';

import { Question } from './game.model';

export namespace GameActions {
  export const GetGame = createAction('[Counter Component] Get Game');
  
  export const GetGameSuccess = createAction(
    '[Counter Component] Get Game Success',
      props<{
        questions: Question[];
      }>()
    );
  
  export const GetGameError = createAction('[Counter Component] Get Game Error');
}
