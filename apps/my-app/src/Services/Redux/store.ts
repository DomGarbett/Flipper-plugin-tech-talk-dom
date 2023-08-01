import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyService } from '../APIQueries/RickMortyService';
import { rootReducer } from './slicers/rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: [rickAndMortyService.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const createDebugger = require('redux-flipper').default;


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(createDebugger()).concat(rickAndMortyService.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
