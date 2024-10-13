import { combineReducers,configureStore } from "@reduxjs/toolkit";
import loginReducers from '../slices/loginSlice'
import { persistedReducer } from "../reduxPersists/ReduxPersistsConfig";
import {persistStore } from 'redux-persist';

export const rootReducers=combineReducers({
    loginReducer:loginReducers
})
export const store=configureStore({
   reducer:persistedReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false}),
})

export const persistor = persistStore(store);

export default store