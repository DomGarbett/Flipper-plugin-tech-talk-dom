import { combineReducers } from '@reduxjs/toolkit';
import { rickAndMortyService } from '../../APIQueries/RickMortyService';
import pinReducer from './pinReducer';
import tokenReducer from './tokenReducer';

export const rootReducer = combineReducers({
  token: tokenReducer,
  pin: pinReducer,
  [rickAndMortyService.reducerPath]: rickAndMortyService.reducer,
});
