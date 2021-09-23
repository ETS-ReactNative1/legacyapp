/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

const AccordionContainer = ({ color, plainBackground, children }) => (
  <View
    style={[
      styles.container,
      { borderColor: color, backgroundColor: 'transparent' },
    ]}
  >
    <View
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: plainBackground ? 'white' : color,
        opacity: plainBackground ? 1 : 0.1,
      }}
    />
    <View style={{ padding: 0, width: '100%' }}>{children}</View>
  </View>
)

export default AccordionContainer

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderLeftWidth: 0.5,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    marginBottom: 10,
    borderRadius: 4,
  },
})
