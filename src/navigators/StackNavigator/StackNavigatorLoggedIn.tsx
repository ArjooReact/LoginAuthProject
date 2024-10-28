import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigatorTypes} from './StackNavigatorType';
import DashBoard from '../../components/DashBoard/DashBoardScreen';
import LoginScreen from '../../components/Login/LoginScreen';

const StackNavigatorLoggedIn: React.FC<StackNavigatorTypes> = ({isLoggedIn}) => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DashBoard">
      <Stack.Screen
          name="DashBoard"
          component={DashBoard}
          options={{title: 'DashBoard'}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'LoginScreen', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigatorLoggedIn;