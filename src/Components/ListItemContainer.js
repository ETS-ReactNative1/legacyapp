/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, StyleSheet } from 'react-native'

const ListItemContainer = ({ color, plainBackground, children, isBorder }) => (
  <View
    style={[
      styles.container,
      { borderColor: color, backgroundColor: 'transparent' },
      !isBorder ? styles.haveLeftBorder : styles.noLeftBorder,
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
    <View style={{ padding: 10, width: '100%' }}>{children}</View>
  </View>
)

export default ListItemContainer

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopColor: '#eee',
    borderBottomColor: '#eee',
    borderRightColor: '#eee',
    marginBottom: 10,
  },
  haveLeftBorder: {
    borderLeftWidth: 5,
  },
  noLeftBorder: {
    borderLeftWidth: 0.5,
  },
})

// borderLeftWidth: 5,
