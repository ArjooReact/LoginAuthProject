import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
//import { authReducer } from './reducers/authReducer';
//import rootReducer from './reducer'
import { rootReducer } from '../store/Store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
  blacklist: ["somethingTemporary"],
};

export const persistedReducer = persistReducer(authPersistConfig, rootReducer);