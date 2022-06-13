import React, {FC, useEffect, useState} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AppStack from './appstack';
import AuthStack from './authstack';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroud: 'transparent',
  },
};

export default function MainNav() {
  const [user, setUser] = useState<any>(null);

  const bootstrap = () => {
    firebase.auth().onAuthStateChanged(_user => {
      if (_user) {
        setUser(_user);
      }
    });
  };

  useEffect(() => {
    bootstrap();
  }, []);

  return (
    <NavigationContainer theme={theme}>
      {user == null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
