import React from 'react';
import {BottomNavigatorTypes} from './BottomNavigatorTypes';
import {SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomNavigator: React.FC<BottomNavigatorTypes> = ({title}) => {
  const Tab = createBottomTabNavigator();

  return <SafeAreaView></SafeAreaView>;
};

export default BottomNavigator;
