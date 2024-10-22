import { combineReducers,configureStore } from "@reduxjs/toolkit";
import loginReducers from '../slices/loginSlice'
import { getLoggedInApi } from "../../rtk/api/loginApi";
import { persistedReducer } from "../reduxPersists/ReduxPersistsConfig";
import {persistStore } from 'redux-persist';

export const rootReducers=combineReducers({
    loginReducer:loginReducers,
    [getLoggedInApi.reducerPath]: getLoggedInApi.reducer,
})
export const store=configureStore({
   reducer:persistedReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false}),
})

export const persistor = persistStore(store);

export default store