import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, width} from '../constants';

interface Props {
  placehodler: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export const Input = (props: Props) => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder={props.placehodler}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry || false}
      />
    </View>
  );
};

export default Input;

const style = StyleSheet.create({
  container: {
    width: width / 1.1,
    alignSelf: 'center',
    backgroundColor: COLORS.gainsboro,
    marginVertical: SIZES.small,
  },
  input: {
    padding: SIZES.font,
  },
});
