import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  ViewStyle,
  TextStyle,
  StyleSheet,
  StyleProp,
} from 'react-native';
import React, {FC} from 'react';
import {COLORS, FONTS, SHADOWS, SIZES} from '../constants';

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{width: 24, height: 24}}
      />
    </TouchableOpacity>
  );
};

interface Props {
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}

interface Styles {
  button: ViewStyle;
  label: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  button: {
    backgroundColor: COLORS.primary,
    padding: SIZES.small,
    marginVertical: SIZES.small,
    paddingHorizontal: SIZES.extraLarge,
  },
  label: {
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    textAlign: 'center',
  },
});
export const RectButton: FC<Props> = ({title, onPress, ...props}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.buttonStyle]}
      onPress={onPress}>
      <Text style={[styles.label, props.labelStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
