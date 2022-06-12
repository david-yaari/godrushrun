//import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SignUp, Login} from '../screens';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
}

export default AuthStack;
