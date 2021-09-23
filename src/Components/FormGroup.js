import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'

const FormGroup = ({
  textLabel,
  labelStyle,
  placeholder,
  inputStyle,
  inputContainerStyle,
  onChangeText,
  value,
  isPassword,
  keyboardType,
  onFocus,
  multiline,
  editable,
  onPress,
  children,
}) => (
  <View style={[styles.inputContainer, inputContainerStyle]}>
    <Text style={[styles.label, labelStyle]}>{textLabel}</Text>
    {children ? (
      children
    ) : !editable ? (
      <TouchableOpacity style={styles.textContainer} onPress={onPress}>
        <Text style={styles.inputStyle}>{value}</Text>
      </TouchableOpacity>
    ) : (
      <TextInput
        placeholder={placeholder}
        style={[styles.inputStyle, styles.textContainer, inputStyle]}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={isPassword || false}
        keyboardType={keyboardType}
        autoCapitalize="none"
        onFocus={onFocus}
        multiline={multiline}
      />
    )}
  </View>
)

export default FormGroup

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginBottom: 10,
  },
  label: {
    marginBottom: 6,
    fontSize: 15,
    fontWeight: 'bold',
  },
  inputStyle: {
    fontSize: 16,
  },
  textContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    borderRadius: 5,
  },
})
