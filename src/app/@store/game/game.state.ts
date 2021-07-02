import { Question } from './game.model';

export interface GameState {
  questions: Question[];
  loading: boolean;
  loaded: boolean;
}