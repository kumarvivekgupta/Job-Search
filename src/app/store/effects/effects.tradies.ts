import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as TradieActions from '../actions/tradie.action';
import { TradiesService } from 'src/app/service/tradies.service';
import { Tradie } from 'src/app/models/tradie';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';

@Injectable()
export class TradieEffects {
  getTradies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TradieActions.getTradies),
      mergeMap((action) => {
        return this.tradieService.searchTradie(action.location,action.trades).pipe(
          map((tradies:any[]) => TradieActions.getTradiesSuccess({ tradies })),
          catchError((error) =>
            of(TradieActions.getTradiesFailure({ error: error.message }))
          )
        );
      })
    )
  );

  getTrades$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TradieActions.getTrades),
      mergeMap(() => {
        return this.tradieService.getTrades().pipe(
          map((trades:Tradie[]) => TradieActions.getTradesSuccess({ trades })),
          catchError((error) =>
            of(TradieActions.getTradesFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private tradieService: TradiesService,private store:Store<AppStateInterface>) {}
}