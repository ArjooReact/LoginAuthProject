import { combineReducers,configureStore } from "@reduxjs/toolkit";
import loginReducers from '../slices/loginSlice'
import { persistedReducer } from "../reduxPersists/ReduxPersistsConfig";
import {persistStore } from 'redux-persist';
import { getAllTypeMasterProduct } from "../../api/GetAllApi";
export const rootReducers=combineReducers({
    loginReducer:loginReducers,
    [getAllTypeMasterProduct.reducerPath]: getAllTypeMasterProduct.reducer,
})
// export const store=configureStore({
//    reducer:persistedReducer,
//    middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false
//     }).concat(getAllTypeMasterProduct.middleware),
  
//   // middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false}).concat(getAllTypeMasterProduct),
// })

// export const persistor = persistStore(store);





export const store = configureStore({
    reducer: {
        [getAllTypeMasterProduct.reducerPath]: getAllTypeMasterProduct.reducer,
    },
   // middleware: getDefaultMiddleware({}).concat(getAllTypeMasterProduct.middleware)

    middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
              serializableCheck: false
            }).concat(getAllTypeMasterProduct.middleware),
  });

  export default store