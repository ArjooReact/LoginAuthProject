import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native'
import { StackNavigatorTypes } from './StackNavigatorType'
import DashBoardScreen from '../../components/DashBoard/DashBoardScreen'
import LoginScreen from '../../components/Login/LoginScreen'
const StackNavigator:React.FC<StackNavigatorTypes>=({title})=>{
    const Stack=createNativeStackNavigator()
    return <NavigationContainer>
    <Stack.Navigator>
        
    <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'LoginScreen', headerShown:false}}
        />

      <Stack.Screen
          name="DashBoard"
          component={DashBoardScreen}
          options={{title: 'DashBoard'}}
        />

    </Stack.Navigator>

    </NavigationContainer>

}
export default StackNavigator