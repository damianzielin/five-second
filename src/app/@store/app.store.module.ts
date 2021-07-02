import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GameEffects } from './game/game.effects';
import { gameReducer } from './game/game.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot(
      {
        game: gameReducer,
      },
      {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
        },
      }
    ),
    EffectsModule.forRoot([
      GameEffects,
    ])
  ]
})
export class AppStoreModule {}