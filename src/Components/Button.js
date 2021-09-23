import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = ({
  type,
  text,
  onPress,
  textStyle,
  size,
  buttonStyle,
  disabled,
}) => (
  <TouchableOpacity
    activeOpacity={disabled ? 1 : 0.7}
    style={[styles.button, styles[type], styles[size], buttonStyle]}
    onPress={disabled ? function () {} : onPress}
  >
    <Text style={[styles.text, textStyle]}>{text}</Text>
  </TouchableOpacity>
)

export default Button

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 3,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  primary: {
    backgroundColor: '#2b66aa',
  },
  primaryV2: {
    backgroundColor: '#337ab7',
    borderColor: '#2e6da4',
  },
  danger: {
    backgroundColor: '#c93b3e',
  },
  dangerV2: {
    backgroundColor: '#ac2925',
    borderColor: '#761c19',
  },
  warning: {
    backgroundColor: '#e89c38',
  },
  info: {
    backgroundColor: '#52b4d7',
  },
  sml: {
    width: 80,
    fontSize: 15,
  },
  mid: {
    width: 150,
    height: 50,
  },
  lg: {
    width: 200,
    height: 60,
  },
})
