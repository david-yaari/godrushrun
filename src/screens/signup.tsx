import firebase from 'firebase/compat';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Input, RectButton} from '../components';
import {COLORS, SIZES} from '../constants';

export default function App(props: {navigation: any; props: any}) {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const signup = async () => {
    if (name && email && password) {
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
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
      <Text>Signup Screen</Text>
      <Input placehodler="Name" onChangeText={text => setName(text)} />
      <Input placehodler="Email" onChangeText={text => setEmail(text)} />
      <Input
        placehodler="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <RectButton
        title="Sign Up"
        buttonStyle={{borderRadius: SIZES.small}}
        labelStyle={{fontSize: SIZES.font}}
        onPress={signup}
      />
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already Have an Account?</Text>
        <TouchableOpacity
          style={styles.loginText}
          onPress={() => props.navigation.navigate('login')}>
          <Text style={styles.loginLink}>Login Here</Text>
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
