import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';

export const selectFeature = (state: AppStateInterface) => state.tradies;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const tradieSelector = createSelector(
  selectFeature,
  (state) => state.tradies
);

export const tradeSelector = createSelector(
    selectFeature,
    (state) => state.trades
  );

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);

export const locationSelector = createSelector(
  selectFeature,
  (state) => state.location
);