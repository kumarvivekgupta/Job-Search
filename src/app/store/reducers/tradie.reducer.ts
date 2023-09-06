import { createReducer, on } from '@ngrx/store';
import * as TradieActions from '../actions/tradie.action';
import { TradieStateInterface } from '../types/tradie.interface';

export const initialState:TradieStateInterface = {
  isLoading: false,
  tradies: [],
  error: null,
  trades:[],
  location:"",
  selectedTrades:[]
};

export const reducers = createReducer(
  initialState,
  // on(TradieActions.getTradies, (state) => ({ ...state, isLoading: true })),
  on(TradieActions.getTradiesSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    tradies: action.tradies,
  })),
  on(TradieActions.getTradiesFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(TradieActions.getTrades,(state)=>({...state,isLoading:true})),
  on(TradieActions.getTradesSuccess,(state,action)=>({
    ...state,trades:action.trades, isLoading:false
  })),
  on(TradieActions.getLocationSuccess, (state, action) => ({
    ...state,
    location:action.location
  })),
  on(TradieActions.getTradiesSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    tradies: action.tradies,
  })),

  on(TradieActions.getTradesUpdateSuccess, (state, action) => ({
    ...state,
    trades:state.trades.map((value, index) => value._id === action.trade._id ? {...value, checked: true} : {...value,checked:false}) 
  })),
  
);