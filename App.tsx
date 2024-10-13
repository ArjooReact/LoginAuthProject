/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
     <Text>Welcome to App.tsx hh2 testing 3</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
