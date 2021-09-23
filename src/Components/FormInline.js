/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Text, View } from 'react-native'

import appStyle from './Style'

const FormInline = ({ label, children, style }) => (
  <View style={[{ marginBottom: 20 }, style]}>
    {label ? <Text style={appStyle.label}>{label}</Text> : null}
    {children}
  </View>
)

export default FormInline
