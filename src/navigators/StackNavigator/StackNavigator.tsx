import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native'
import { StackNavigatorTypes } from './StackNavigatorType'
import DashBoardScreen from '../../components/DashBoard/DashBoardScreen'
import LoginScreen from '../../components/Login/LoginScreen'
import ProfileScreen from '../../components/ProfileScreen/ProfileScreen'
const StackNavigator:React.FC<StackNavigatorTypes>=({title})=>{
    const Stack=createNativeStackNavigator()
    return <NavigationContainer>
    <Stack.Navigator>
        
    <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'Login', headerShown:false}}
        />

      <Stack.Screen
          name="DashBoard"
          component={DashBoardScreen}
          options={{title: 'DashBoard'}}
        />
         <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{title: 'ProfileScreen'}}
        />

    </Stack.Navigator>

    </NavigationContainer>

}
export default StackNavigator