/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState,useEffect} from 'react';
import StackNavigator from './src/navigators/StackNavigator/StackNavigator';
import UserDataContextProvider from './src/storage/ContextProviderStorage/UserContext/UserDataContextProvider';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import { getDataFromLocalStorage } from './src/storage/AsyncStorage/AsyncStorage';
import { Provider } from 'react-redux';
import StackNavigatorLoggedIn from './src/navigators/StackNavigator/StackNavigatorLoggedIn';
import StackNavigatorLoggedOut from './src/navigators/StackNavigator/StackNavigatorLoggedOut';
//import store from './src/synchRedux/store/store';
//import store from './src/redux/store/store'
import { store1 } from './src/redux/store/store';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const[loggedIn,setIsLoggedIn]=useState(false)
   //let isLogged:any
 const getAsyncStorageData= async()=>{
   let isLogged= await getDataFromLocalStorage('IS_LOGGED_IN').then((response)=>{
     if(response==''){
       setIsLoggedIn(false)
       return false
     }else{
       console.log('INSIDE TRUE CONDITION')
       setIsLoggedIn(true)
       return response
     
     }
   }).catch((error)=>{
       console.log('ERRRRR',error)
   })
   
  }
 useEffect(()=>{
   getAsyncStorageData()
  
   
 },[loggedIn])

  return (
    <Provider store={store1}>
      <UserDataContextProvider>
      {loggedIn?(<StackNavigatorLoggedIn></StackNavigatorLoggedIn>):(<StackNavigatorLoggedOut></StackNavigatorLoggedOut>)}
    {/* <StackNavigator></StackNavigator> */}
    </UserDataContextProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
