import {combineReducers, configureStore} from '@reduxjs/toolkit';
//import loginReducers from '../slices/loginSlice'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import loginReducers from '../synchRedux/slices/loginSlice';
import {persistedReducer} from '../synchRedux/reduxPersists/ReduxPersistsConfig';
import {persistStore} from 'redux-persist';
import {signInApi} from '../../rtk/api/LoginApi';
import { setupListeners } from '@reduxjs/toolkit/query'
import { productLisrApi } from '../../rtk/api/ProductApi';
export const rootReducer = combineReducers({
  [signInApi.reducerPath]: signInApi.reducer,
  [productLisrApi.reducerPath]: productLisrApi.reducer,
  loginReducer: loginReducers,
});

export const store1 = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(signInApi.middleware).concat(productLisrApi.middleware),
    
  
  })

  export const persistor = persistStore(store1);
  export type RootState = ReturnType<typeof store1.getState>
  setupListeners(store1.dispatch)
