import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shoperstopReducer from './shoperstopSlice';
const persistConfig ={
  key:"root",
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig,shoperstopReducer);

export const store = configureStore({
  reducer: {shoperstop: persistedReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
},
);

export let persistor = persistStore(store);
