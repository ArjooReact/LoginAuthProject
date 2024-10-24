/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import StackNavigator from './src/navigators/StackNavigator/StackNavigator';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/synchRedux/store/store';
import { store1 } from './src/redux/store/Store';
import UserDataContextProvider from './src/storage/ContextproviderStorage/userContext/UseDataContextProvider';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store1}>
      <UserDataContextProvider>
    <StackNavigator></StackNavigator>
    </UserDataContextProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
