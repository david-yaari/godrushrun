import firebase from 'firebase/compat';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Input, RectButton} from '../components';
import {COLORS, SIZES} from '../constants';

export default function AppApp(props: {navigation: any; props: any}) {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const login = async () => {
    if (email && password) {
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (user) {
          await firebase
            .firestore()
            .collection('users')
            .doc(user.user?.uid)
            .set({name, email, password});
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert(`Error`, `Missing Fields`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Input placehodler="Email" onChangeText={text => setEmail(text)} />
      <Input
        placehodler="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <RectButton
        title="Login Up"
        buttonStyle={{borderRadius: SIZES.small}}
        labelStyle={{fontSize: SIZES.font}}
        onPress={login}
      />
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Don't Have an Account?</Text>
        <TouchableOpacity
          style={styles.loginText}
          onPress={() => props.navigation.navigate('signup')}>
          <Text style={styles.loginLink}>Sign Up Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    marginVertical: SIZES.large,
  },
  loginText: {
    marginHorizontal: SIZES.extraSmall,
  },
  loginLink: {
    marginHorizontal: SIZES.extraSmall,
    color: COLORS.blue,
  },
});
