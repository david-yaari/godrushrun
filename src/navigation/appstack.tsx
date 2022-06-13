import React from 'react';
//import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Details,
  Dashboard,
  Notifications,
  Profile,
  Settings,
} from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="dashboard" component={Dashboard} />
      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="notifications" component={Notifications} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default App;
