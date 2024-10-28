import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { rootReducer } from '../../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
  blacklist: ["somethingTemporary"],
};

export const persistedReducer = persistReducer(authPersistConfig, rootReducer);