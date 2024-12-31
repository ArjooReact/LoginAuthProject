import { combineReducers,configureStore } from "@reduxjs/toolkit";
import loginReducers from '../slices/loginSlice'
import { persistedReducer } from "../reduxPersists/ReduxPersistsConfig";
import {persistStore } from 'redux-persist';
import { getAllTypeMasterProduct } from "../../api/GetAllApi";
import testSlice1Reducers from '../slices/testSlice1'
import testSlice2Reducer from '../slices/testSlice2'
import testSlice3Reducer from '../slices/testSlice3'
export const rootReducers=combineReducers({
  testSlice1Reducers:testSlice1Reducers,
  testSlice2Reducer:testSlice2Reducer,
  testSlice3Reducer:testSlice3Reducer,
    loginReducer:loginReducers,
    [getAllTypeMasterProduct.reducerPath]: getAllTypeMasterProduct.reducer,
})

export const store = configureStore({
    reducer:rootReducers,
   // middleware: getDefaultMiddleware({}).concat(getAllTypeMasterProduct.middleware)

    middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
              serializableCheck: false
            }).concat(getAllTypeMasterProduct.middleware),
  });

  export default store