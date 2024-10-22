

import { configureStore,combineReducers } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
//import { pokemonApi } from './services/pokemon'
import { getLoggedInApi } from '../../rtk/api/loginApi';
import { signInApi } from '../../rtk/api/loginApi2';
import loginReducer from '../../synchRedux/slices/loginSlice'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { persistStore } from 'redux-persist';
//import { persistStore } from 'redux-persist';
import { persistedReducer } from '../reduxPersists/authPersistsConfig';
export const rootReducer= combineReducers({
 // reducer: {
    // Add the generated reducer as a specific top-level slice
    [getLoggedInApi.reducerPath]: getLoggedInApi.reducer,
   // [testApi.reducerPath]: testApi.reducer,
    [signInApi.reducerPath]: signInApi.reducer,
    
    loginReducer:loginReducer,
})

////// PART-1 WITH PERSIST REDUCER ///////////////

export const store1 = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(getLoggedInApi.middleware).concat(signInApi.middleware),
  

})


export const persistor = persistStore(store1);
export type RootState = ReturnType<typeof store1.getState>
setupListeners(store1.dispatch)
