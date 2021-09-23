import React, { useState } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import appStyle from './Style'
import Icon from 'react-native-vector-icons/Ionicons'

const CheckBox = ({ text, status, onValueChange }) => {
  const [value, onChangeValue] = useState(status)

  function _onChangeValue() {
    onChangeValue(!value)
    onValueChange(!value)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => _onChangeValue()}>
      <Icon
        name={value ? 'ios-checkbox' : 'ios-checkbox-outline'}
        size={30}
        style={[value ? '#28608F' : appStyle.gray, { marginRight: 8 }]}
      />
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '500',
  },
})

export default CheckBox
