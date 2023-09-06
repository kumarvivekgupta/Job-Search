import { createAction, props } from '@ngrx/store';
import { Tradie } from 'src/app/models/tradie';

export const getTradies = createAction(
  '[Tradie] Get Tradies',
  props<{location:string,trades:string[]}>());
export const getTradiesSuccess = createAction(
  '[Tradie] Get Tradies success',
  props<{ tradies: any[] }>()
);
export const getTradiesFailure = createAction(
  '[Tradie] Get Tradies failure',
  props<{ error: string }>()
);

export const getTrades = createAction('[Trade] Get Trades');
export const getTradesSuccess = createAction(
  '[Trade] Get Trades success',
  props<{ trades: Tradie[] }>()
);
export const getTradesFailure = createAction(
  '[Trade] Get Trades failure',
  props<{ error: string }>()
);

export const getLocationSuccess=createAction(
  '[Trade] Get Location success',
  props<{location:string}>()
);
export const getTradesUpdateSuccess = createAction(
  '[Trade] Get Trades Update success',
  props<{ trade: Tradie }>()
);