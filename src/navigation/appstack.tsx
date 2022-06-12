import React from 'react';
//import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Dashboard} from '../screens';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName="Home">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

export default AppStack
