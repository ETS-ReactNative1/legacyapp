import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select'

const PickList = ({
  placeholder,
  containerStyle,
  onValueChange,
  value,
  items,
}) => (
  <View style={[styles.container, containerStyle]}>
    <RNPickerSelect
      placeholder={placeholder}
      items={items}
      onValueChange={onValueChange}
      value={value}
      inputAndroid={{
        fontSize: 13,
      }}
      style={pickerSelectStyles}
      useNativeAndroidPickerStyle={false}
    />
  </View>
)

export default PickList

const styles = StyleSheet.create({
  container: {
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    borderRadius: 4,
  },
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
})
