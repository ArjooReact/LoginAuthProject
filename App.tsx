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


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
   
    <StackNavigator></StackNavigator>
   
  );
}

const styles = StyleSheet.create({
 
});

export default App;
