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
