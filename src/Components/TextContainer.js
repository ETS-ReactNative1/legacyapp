import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextContainer = ({ children, containerStyle }) => (
  <View style={[styles.container, containerStyle]}>{children}</View>
)

export default TextContainer

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingVertical: 5,
  },
})
